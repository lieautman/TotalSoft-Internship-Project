const { gql } = require('apollo-server-koa')

const profilePageTableDefs = gql`
  type ConcediuPersonal {
    id: Int
    tipConcediu: String
    dataInceput: String
    dataSfarsit: String
    numeInlocuitor: String
    comment: String
    stareConcediu: String
  }
  type DateIntoarse {
    listaConcedii: [ConcediuPersonal]
    numarPagini: Int
  }

  extend type Query {
    preluareProfilePageTable(userEmail: String, indexStart: Int, indexEnd: Int, numarElemPePagina: Int): DateIntoarse
  }
`

module.exports = profilePageTableDefs
