import { gql } from '@apollo/client'

export const AUTHENTICATE_USER = gql`
  mutation authenticateUser($userName: String!, $password: String!) {
    authenticateUser(userName: $userName, password: $password)
  }
`
