import { gql } from '@apollo/client'

const CONCEDII_DATA_QUERY = gql`
  query concediiData($index1: Int, $index2: Int, $nrElemPePagina: Int) {
    concediiData(index1: $index1, index2: $index2, nrElemPePagina: $nrElemPePagina) {
      listaConcedii {
        id
        name
        dataInceput
        dataSfarsit
        inlocuitor
        comentarii
        angajat
      }
      numarPagini
    }
  }
`
export default CONCEDII_DATA_QUERY
