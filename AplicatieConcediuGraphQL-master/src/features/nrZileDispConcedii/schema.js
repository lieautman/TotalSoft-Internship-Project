const { gql } = require('apollo-server-koa')

const zileConcediuDefs = gql`
  type ZileConcediu {
    id: Int
    zile: Int
  }

  extend type Query {
    zileConcediuData(idAngajat: Int): [ZileConcediu]
  }
`
module.exports = zileConcediuDefs
