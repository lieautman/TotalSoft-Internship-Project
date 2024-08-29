import { gql } from '@apollo/client'

const ANGAJATI_PER_ECHIPA_DATA_QUERY = gql`
  query CardData($echipa: String) {
    cardData(echipa: $echipa) {
      id
      nume
      prenume
      email
      echipa
    }
  }
`
export default ANGAJATI_PER_ECHIPA_DATA_QUERY
