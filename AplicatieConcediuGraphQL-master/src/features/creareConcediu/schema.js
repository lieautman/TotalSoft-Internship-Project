const { gql } = require('apollo-server-koa')

const creareConcediuDefs = gql`
  type Concediu {
    tipCncediuId: Int
    dataInceput: String
    dataSfarsit: String
    inlocuitorId: Int
    comentarii: String
  }

  input ConcediuInput {
    tipCncediuId: Int
    dataInceput: String
    dataSfarsit: String
    inlocuitorId: Int
    comentarii: String
  }
  extend type Mutation {
    creareConcediu(input: [ConcediuInput]): String
  }
`
module.exports = creareConcediuDefs
