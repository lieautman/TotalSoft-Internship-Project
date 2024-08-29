import { gql } from '@apollo/client'

export const UPDATE_MANAGER_ECHIPA = gql`
  mutation UpdateManagerIdEchipaId($input: [AngajatInput]) {
    updateManagerIdEchipaId(input: $input)
  }
`
