import { gql } from '@apollo/client'

const ECHIPE_DATA_QUERY = gql`
  query Query {
    echipaData {
      id
      nume
      descriere
      poza
    }
  }
`
export default ECHIPE_DATA_QUERY
