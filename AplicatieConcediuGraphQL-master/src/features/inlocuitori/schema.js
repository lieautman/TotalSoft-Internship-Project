const { gql } = require('apollo-server-koa')

const inlocuitoriDefs = gql`
  type Inlocuitor {
    id: Int
    nume: String
    prenume: String
    inlocuitor: String
    idEchipa: Int
  }

  extend type Query {
    inlocuitoriData(dataInceput: String, dataSfarsit: String, idAngajat: Int): [Inlocuitor]
  }
`
module.exports = inlocuitoriDefs
