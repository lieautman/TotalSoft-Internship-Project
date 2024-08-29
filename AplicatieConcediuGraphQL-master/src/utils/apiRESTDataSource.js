const CacheRESTDataSource = require('./cacheRESTDataSource')

class ApiRESTDataSource extends CacheRESTDataSource {
  constructor() {
    super()
    this.baseURL = `${process.env.API_URL}`
  }

  willSendRequest(request) {
    if (!this.context) {
      return
    }
    if (this.context.request.req.headers['accept-language']) {
      request.headers.set('accept-language', this.context.request.req.headers['accept-language'])
    }
    if (this.context.request.req.headers['x-tenantid']) {
      request.headers.set('x-tenantid', this.context.request.req.headers['x-tenantid'])
    }
  }
}

module.exports = ApiRESTDataSource
