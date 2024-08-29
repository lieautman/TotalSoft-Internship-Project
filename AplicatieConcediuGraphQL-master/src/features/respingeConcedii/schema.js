const { gql } = require('apollo-server-koa')

const concediuRespinsDefs = gql`
  type ConcediuRespins {
    id: Int!
    name: String
    dataInceput: String
    dataSfarsit: String
    inlocuitor: String
    comentarii: String
    angajat: String
  }

  extend type Mutation {
    updateStareConcediu(id: Int!): Int!
  }
`

module.exports = concediuRespinsDefs
