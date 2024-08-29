import { gql } from '@apollo/client'

const CONCEDIU_APROBAT_MUTATION = gql`
  mutation UpdateConcediu($updateConcediuId: Int!) {
    updateConcediu(id: $updateConcediuId)
  }
`
export default CONCEDIU_APROBAT_MUTATION
