import { gql } from '@apollo/client'

const ID_ANGAJATI_DATA_QUERY = gql`
  query AngajatiIdData($idAngajatSelectat: Int) {
    angajatIdData(idAngajatSelectat: $idAngajatSelectat) {
      id
      nume
      prenume
      email
      echipa
      poza
    }
  }
`
export default ID_ANGAJATI_DATA_QUERY
