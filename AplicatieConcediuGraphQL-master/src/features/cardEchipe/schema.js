const { gql } = require('apollo-server-koa')

const cardDefs = gql`
  type AngajatCard {
    id: Int
    nume: String
    prenume: String
    email: String
    echipa: String
  }

  extend type Query {
    cardData(echipa: String): [AngajatCard]
  }
`
module.exports = cardDefs
