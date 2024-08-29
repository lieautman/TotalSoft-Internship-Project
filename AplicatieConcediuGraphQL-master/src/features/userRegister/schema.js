const { gql } = require('apollo-server-koa')

const userRegisterDefs = gql`
  extend type Mutation {
    registerUser(
      userNume: String
      userPrenume: String
      userEmail: String
      userNumartelefon: String
      userDataNasterii: String
      userCnp: String
      userSeriaNumarBuletin: String
      userParola: String
      userParola2: String
    ): String
  }
`

module.exports = userRegisterDefs
