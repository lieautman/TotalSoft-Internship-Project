const { gql } = require('apollo-server-koa')
const adaugaConcediuDefs = gql`
  input ConcediuInput {
    tipConcediuId: Int
    dataInceput: String
    dataSfarsit: String
    inlocuitorId: Int
    comentarii: String
    stareConcediuId: Int
    angajatId: Int
  }
  extend type Mutation {
    adaugaConcediu(input: ConcediuInput): String
  }
`
module.exports = adaugaConcediuDefs
