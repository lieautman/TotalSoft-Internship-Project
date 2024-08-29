const { gql } = require('apollo-server-koa')

const userDefs = gql`
  type UserInfo {
    id: Int!
    isAdmin: Boolean
    isManager: Boolean
    email: String
  }

  extend type Query {
    userData: UserInfo!
  }

  extend type Mutation {
    authenticateUser(userName: String!, password: String!): Boolean!
  }
  # Not working! Only for demonstration
  extend type Subscription {
    userChanged: String
  }
`

module.exports = userDefs
