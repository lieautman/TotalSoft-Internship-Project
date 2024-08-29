const { gql } = require('apollo-server-koa')

const concediiDefs = gql`
  type Concedii {
    id: Int
    name: String
    dataInceput: String
    dataSfarsit: String
    inlocuitor: String
    comentarii: String
    angajat: String
  }
  type ReturnDataConcedii {
    listaConcedii: [Concedii]
    numarPagini: Int
  }

  extend type Query {
    concediiData(index1: Int, index2: Int, nrElemPePagina: Int): ReturnDataConcedii
  }
`

module.exports = concediiDefs
