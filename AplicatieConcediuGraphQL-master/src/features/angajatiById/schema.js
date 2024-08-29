const { gql } = require('apollo-server-koa')

const angajatApiDefs = gql`
  type AngajatId {
    id: Int
    nume: String
    prenume: String
    email: String
    echipa: String
    poza: String
  }

  extend type Query {
    angajatIdData(idAngajatSelectat: Int): AngajatId
  }
`
module.exports = angajatApiDefs
