const { gql } = require('apollo-server-koa')

const manageriDefs = gql`
  type Manageri {
    id: Int
    nume: String
    prenume: String
    manageri: String
  }

  extend type Query {
    manageriData: [Manageri]
  }
`
module.exports = manageriDefs
