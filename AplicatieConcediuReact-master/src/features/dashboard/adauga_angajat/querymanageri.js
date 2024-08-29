import { gql } from '@apollo/client'

const MANAGERI_QUERY = gql`
  query manageriData {
    manageriData {
      id
      nume
      prenume
      manageri
    }
  }
`
export default MANAGERI_QUERY
