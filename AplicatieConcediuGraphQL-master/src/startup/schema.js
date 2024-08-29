const { makeExecutableSchema } = require('@graphql-tools/schema')
const merge = require('lodash.merge')

const { loadTypedefsSync } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { join } = require('path')

const userResolvers = require('../features/user/resolvers')
const userRegisterResolvers = require('../features/userRegister/resolvers')
const profilePageResolvers = require('../features/profilePage/resolvers')
const profilePageTableResolvers = require('../features/profilePageTable/resolvers')
const userDefs = require('../features/user/schema')
const userRegisterDefs = require('../features/userRegister/schema')
const profilePageDefs = require('../features/profilePage/schema')
const profilePageTableDefs = require('../features/profilePageTable/schema')
const concediiResolvers = require('../features/concedii/resolvers')
const angajatiResolvers = require('../features/angajati/resolvers')
const angajatiDefs = require('../features/angajati/schema')
const concediiSpreAprobareResolvers = require('../features/concediiSpreAprobare/resolvers')
const concediiSpreAprobareDefs = require('../features/concediiSpreAprobare/schema')
const concediiDefs = require('../features/concedii/schema')
const concediuAprobatDefs = require('../features/aprobaConcedii/schema')
const concediuAprobatResolvers = require('../features/aprobaConcedii/resolvers')
const adaugaAngajatResolvers = require('../features/AdaugaAngajat/resolvers')
const adaugaAngajatDefs = require('../features/AdaugaAngajat/schema')
const concediuRespinsDefs = require('../features/respingeConcedii/schema')
const concediuRespinsResolvers = require('../features/respingeConcedii/resolvers')
const cardDefs = require('../features/cardEchipe/schema')
const cardResolvers = require('../features/cardEchipe/resolvers')
const echipaDefs = require('../features/echipe/schema')
const echipaResolvers = require('../features/echipe/resolvers')
const adaugaConcediuResolvers = require('../features/adaugaConcediu/resolvers')
const adaugaConcediuDefs = require('../features/adaugaConcediu/schema')
const angajatApiDefs = require('../features/angajatiById/schema')
const angajatIdResolvers = require('../features/angajatiById/resolvers')
const manageriDefs = require('../features/manageri/schema')
const manageriResolvers = require('../features/manageri/resolvers')
const tipConcediuDefs = require('../features/tipConcediu/schema')
const tipConcediuResolvers = require('../features/tipConcediu/resolvers')
const zileConcediuDefs = require('../features/nrZileDispConcedii/schema')
const zileConcediuResolvers = require('../features/nrZileDispConcedii/resolvers')
const inlocuitoriDefs = require('../features/inlocuitori/schema')
const inlocuitorResolvers = require('../features/inlocuitori/resolvers')
const updateManagerIdEchipaIdResolvers = require('../features/promovare/resolvers')
const updateManagerIdEchipaIdDefs = require('../features/promovare/schema')
const creareConcediuResolvers = require('../features/creareConcediu/resolvers')
const creareConcediuDefs = require('../features/creareConcediu/schema')

const oldTypeDefs = []
const sources = loadTypedefsSync(join(__dirname, '../**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const resolvers = merge(
  userResolvers,
  userRegisterResolvers,
  profilePageResolvers,
  profilePageTableResolvers,
  concediiResolvers,
  angajatIdResolvers,
  concediiSpreAprobareResolvers,
  concediuAprobatResolvers,
  angajatiResolvers,
  adaugaAngajatResolvers,
  concediuRespinsResolvers,
  cardResolvers,
  echipaResolvers,
  adaugaConcediuResolvers,
  manageriResolvers,
  tipConcediuResolvers,
  inlocuitorResolvers,
  zileConcediuResolvers,
  updateManagerIdEchipaIdResolvers,
  creareConcediuResolvers
)

const typeDefs = [
  ...sources.map(source => source.document),
  ...oldTypeDefs,
  userDefs,
  userRegisterDefs,
  profilePageDefs,
  profilePageTableDefs,
  concediiDefs,
  concediiSpreAprobareDefs,
  concediuAprobatDefs,
  angajatiDefs,
  adaugaAngajatDefs,
  concediuRespinsDefs,
  cardDefs,
  echipaDefs,
  adaugaConcediuDefs,
  angajatApiDefs,
  manageriDefs,
  tipConcediuDefs,
  zileConcediuDefs,
  inlocuitoriDefs,
  updateManagerIdEchipaIdDefs,
  creareConcediuDefs
]

module.exports = makeExecutableSchema({ typeDefs, resolvers })
module.exports.tests = { typeDefs, resolvers }
