const { gql } = require('apollo-server-koa')

const tipConcediuDefs = gql`
  type TipConcediu {
    id: Int
    nume: String
  }

  extend type Query {
    tipConcediuData: [TipConcediu]
  }
`
module.exports = tipConcediuDefs
