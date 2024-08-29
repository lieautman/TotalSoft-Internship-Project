import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { gql } from '@apollo/client'

const USER_DATA_QUERY = gql`
  query userData {
    userData {
      id
      isAdmin
      isManager
      email
    }
  }
`

const UserDataProvider = () => {
  const client = useApolloClient()
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    onCompleted: data => {
      client.writeQuery({
        query: USER_DATA_QUERY,
        data: { userData: data.userData }
      })
    }
  })
  return <></>
}

export default UserDataProvider
