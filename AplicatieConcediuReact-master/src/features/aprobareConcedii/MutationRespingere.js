import { gql } from '@apollo/client'

const CONCEDIU_RESPINS_MUTATION = gql`
  mutation UpdateConcediu($updateStareConcediuId: Int!) {
    updateStareConcediu(id: $updateStareConcediuId)
  }
`
export default CONCEDIU_RESPINS_MUTATION
