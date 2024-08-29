import { gql } from '@apollo/client'

const ECHIPA_DATA_QUERY = gql`
  query echipaData {
    echipaData {
      id
      nume
    }
  }
`
export default ECHIPA_DATA_QUERY
