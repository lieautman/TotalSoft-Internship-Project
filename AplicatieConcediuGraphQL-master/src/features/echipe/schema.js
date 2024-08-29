const { gql } = require('apollo-server-koa')

const echipaDefs = gql`
  type Echipa {
    id: Int
    nume: String
    descriere: String
    poza: String
  }

  extend type Query {
    echipaData: [Echipa]
  }
`
module.exports = echipaDefs
