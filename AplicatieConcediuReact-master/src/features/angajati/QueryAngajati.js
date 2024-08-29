import { gql } from '@apollo/client'

const ANGAJATI_DATA_QUERY = gql`
  query AngajatiData {
    angajatiData {
      id
      nume
      prenume
      email
      echipa
    }
  }
`
const ANGAJATI_DE_FORMAT_ECHIPA = gql`
  query AngajatiDeFormatEchipaData($id: Int) {
    angajatiDeFormatEchipaData(id: $id) {
      id
      nume
      prenume
      email
      echipa
    }
  }
`
export { ANGAJATI_DATA_QUERY }
export { ANGAJATI_DE_FORMAT_ECHIPA }
