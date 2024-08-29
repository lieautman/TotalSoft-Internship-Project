const { gql } = require('apollo-server-koa')

const concediiSpreAprobareDefs = gql`
  type ConcediiSpreAprobare {
    id: Int
    name: String
    dataInceput: String
    dataSfarsit: String
    inlocuitor: String
    comentarii: String
    angajat: String
  }

  extend type Query {
    concediiSpreAprobareData: [ConcediiSpreAprobare]!
  }
`

module.exports = concediiSpreAprobareDefs
