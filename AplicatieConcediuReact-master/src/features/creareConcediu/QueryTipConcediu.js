import { gql } from '@apollo/client'

const TIP_CONCEDIU_DATA_QUERY = gql`
  query TipConcediuData {
    tipConcediuData {
      id
      nume
    }
  }
`
export default TIP_CONCEDIU_DATA_QUERY
