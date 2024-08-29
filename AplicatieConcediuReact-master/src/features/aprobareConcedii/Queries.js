import { gql } from '@apollo/client'

const CONCEDII_SPRE_APROBARE_DATA_QUERY = gql`
  query concediiSpreAprobareData {
    concediiSpreAprobareData {
      id
      name
      dataInceput
      dataSfarsit
      inlocuitor
      comentarii
      angajat
    }
  }
`
export default CONCEDII_SPRE_APROBARE_DATA_QUERY
