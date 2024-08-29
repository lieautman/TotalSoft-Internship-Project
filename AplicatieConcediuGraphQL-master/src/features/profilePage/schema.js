const { gql } = require('apollo-server-koa')

const profilePageDefs = gql`
  type ProfileInfo {
    Id: Int!
    Nume: String!
    Prenume: String!
    Email: String!
    Parola: String
    DataAngajarii: String
    DataNasterii: String!
    Cnp: String!
    SeriaNumarBuletin: String
    Numartelefon: String
    Poza: String
    Functia: String
    ManagerId: Int
    Salariu: String
    EsteAngajatCuActeInRegula: Boolean
    IdEchipa: Int
  }

  extend type Query {
    getProfileData(userEmail: String!): ProfileInfo!
  }

  extend type Mutation {
    modificareDateProfil(
      userId: Int!
      userNumeUpdated: String
      userPrenumeUpdated: String
      userEmailUpdated: String
      userDataAngajariiUpdated: String
      userNumartelefonUpdated: String
      userDataNasteriiUpdated: String
      userCnpUpdated: String
      seriaNumarBuletinUpdated: String
      salariuUpdated: String
      pozaUpdated: String
    ): String
  }
`

module.exports = profilePageDefs
