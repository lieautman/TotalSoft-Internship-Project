import { gql } from '@apollo/client'

const ZILE_DISP_DATA_QUERY = gql`
  query Query($idAngajat: Int) {
    zileConcediuData(idAngajat: $idAngajat) {
      id
      zile
    }
  }
`

export default ZILE_DISP_DATA_QUERY
