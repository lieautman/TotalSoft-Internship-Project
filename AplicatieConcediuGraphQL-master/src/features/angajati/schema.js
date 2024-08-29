const { gql } = require('apollo-server-koa')

const angajatiDefs = gql`
  type Angajati {
    id: Int
    nume: String
    prenume: String
    email: String
    echipa: String
  }

  extend type Query {
    angajatiData: [Angajati]!
    angajatiDeFormatEchipaData(id: Int): [Angajati]!
  }
`

module.exports = angajatiDefs
