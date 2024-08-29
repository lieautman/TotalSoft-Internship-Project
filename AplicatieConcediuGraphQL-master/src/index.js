//env
const dotenv = require('dotenv')
const result = dotenv.config()
if (result.error) {
  const path = `.env`
  dotenv.config({ path })
}

if (process.env.NODE_ENV) {
  dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })
}

const keyPerFileEnv = require('@totalsoft/key-per-file-configuration')
const configMonitor = keyPerFileEnv.load()

const { graphqlUploadKoa } = require('graphql-upload')
require('console-stamp')(global.console, {
  format: ':date(yyyy/mm/dd HH:MM:ss.l)'
})

const { ApolloServer, ForbiddenError } = require('apollo-server-koa'),
  Koa = require('koa'),
  { ApolloServerPluginDrainHttpServer } = require('apollo-server-core'),
  { createServer } = require('http')

// Auth
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

// Messaging
const { msgHandlers, middleware } = require('./messaging'),
  { messagingHost, exceptionHandling, correlation, dispatcher } = require('@totalsoft/messaging-host')

// Logging
const { ApolloLoggerPlugin, initializeLogger } = require('@totalsoft/apollo-logger')

// Tracing
const tracingPlugin = require('./plugins/tracing/tracingPlugin'),
  { initGqlTracer, getApolloTracerPluginConfig } = require('./tracing/gqlTracer'),
  opentracing = require('opentracing'),
  defaultTracer = initGqlTracer(),
  { JAEGER_DISABLED } = process.env,
  tracingEnabled = !JSON.parse(JAEGER_DISABLED)

opentracing.initGlobalTracer(defaultTracer)

const jsonwebtoken = require('jsonwebtoken'),
  { WebSocketServer } = require('ws'),
  { useServer } = require('graphql-ws/lib/use/ws')

const { dbInstanceFactory } = require('./db')
const {
    jwtTokenValidation,
    jwtTokenUserIdentification,
    contextDbInstance,
    validateWsToken,
    correlationMiddleware,
    tracingMiddleware,
    errorHandlingMiddleware
  } = require('./middleware'),
  { schema, initializedDataSources, getDataSources, getDataLoaders } = require('./startup/index')

async function startServer(httpServer) {
  const app = new Koa()

  app.use(errorHandlingMiddleware())
  app.use(bodyParser())
  app.use(graphqlUploadKoa({ maxFieldSize: 10000000, maxFiles: 2 }))
  app.use(correlationMiddleware())
  tracingEnabled && app.use(tracingMiddleware())
  app.use(cors())
  // app.use(jwtTokenValidation)
  // app.use(jwtTokenUserIdentification)
  app.use(contextDbInstance())

  const plugins = [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    new ApolloLoggerPlugin({ persistLogs: false, securedMessages: false }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await subscriptionServer.dispose()
          }
        }
      }
    },
    tracingEnabled ? tracingPlugin(getApolloTracerPluginConfig(defaultTracer)) : {}
  ]

  console.info('Creating Subscription Server...')
  const subscriptionServer = useServer(
    {
      schema,
      onConnect: async ctx => {
        const connectionParams = ctx?.connectionParams
        const token = connectionParams.authorization.replace('Bearer ', '')
        if (!token) {
          throw new ForbiddenError('401 Unauthorized')
        }
        ctx.token = token

        await validateWsToken(token, ctx?.extra?.socket)

        const decoded = jsonwebtoken.decode(token)
        ctx.externalUser = {
          id: decoded?.sub,
          role: decoded?.role
        }
      },
      onSubscribe: async ctx => await validateWsToken(ctx?.token, ctx?.extra?.socket),
      onDisconnect: (_ctx, code, reason) =>
        code != 1000 && console.info(`Subscription server disconnected! Code: ${code} Reason: ${reason}`),
      onError: (ctx, msg, errors) => console.error('Subscription error!', { ctx, msg, errors }),
      context: async (ctx, msg, _args) => {
        const dbInstance = await dbInstanceFactory()

        if (!dbInstance) {
          throw new TypeError('Could not create dbInstance. Check the database configuration info and restart the server.')
        }
        const dataSources = getDataSources()
        const { logInfo, logDebug, logError } = initializeLogger(ctx, msg?.payload?.operationName, true)

        return {
          ...ctx,
          dbInstance,
          dataSources: initializedDataSources(ctx, dbInstance, dataSources),
          dataLoaders: getDataLoaders(dbInstance),
          logger: { logInfo, logDebug, logError }
        }
      }
    },
    new WebSocketServer({
      server: httpServer,
      path: '/graphql'
    })
  )

  console.info('Creating Apollo Server...')
  const server = new ApolloServer({
    schema,
    uploads: false,
    plugins,
    dataSources: getDataSources,
    context: async ({ ctx }) => {
      const { token, dbInstance, externalUser, correlationId, request, requestSpan } = ctx
      return {
        token,
        dbInstance,
        dbInstanceFactory,
        dataLoaders: getDataLoaders(dbInstance),
        externalUser,
        correlationId,
        request,
        requestSpan
      }
    }
  })

  await server.start()
  server.getMiddleware({ cors: {} })
  server.applyMiddleware({ app })
  httpServer.on('request', app.callback())

  process.on('uncaughtException', function (error) {
    throw new Error(`Error occurred while processing the request: ${error.stack}`)
  })
}

const httpServer = createServer()
startServer(httpServer)
const port = process.env.PORT || 4000
httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}/graphql`)
})

const skipMiddleware = (_ctx, next) => next()
const msgHost = messagingHost()
msgHost
  .subscribe([
    /*topics*/
  ])
  .use(exceptionHandling())
  .use(correlation())
  .use(tracingEnabled ? middleware.tracing() : skipMiddleware)
  .use(middleware.dbInstance())
  .use(dispatcher(msgHandlers))
  .start()
  .catch(err => {
    console.error(err)
    setImmediate(() => {
      throw err
    })
  })

process.on('SIGINT', () => {
  configMonitor.close()
  msgHost.stopImmediate()
})
process.on('SIGTERM', () => {
  configMonitor.close()
  msgHost.stopImmediate()
})

process.on('uncaughtException', function (error) {
  configMonitor.close()
  msgHost.stopImmediate()
  throw new Error(`Error occurred while processing the request: ${error.stack}`)
})
