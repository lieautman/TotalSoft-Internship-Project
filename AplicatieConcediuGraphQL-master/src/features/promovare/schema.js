const { gql } = require('apollo-server-koa')

const updateManagerIdEchipaIdDefs = gql`
  type Angajat {
    nume: String
    prenume: String
    email: String
    cnp: String
    idEchipa: Int
  }

  input AngajatInput {
    nume: String
    prenume: String
    email: String
    cnp: String
    IdEchipa: Int
    ManagerId: Int
  }
  extend type Mutation {
    updateManagerIdEchipaId(input: [AngajatInput]): String
  }
`
module.exports = updateManagerIdEchipaIdDefs
