import { gql } from '@apollo/client'

export const POST_ADAUGACONCEDIU = gql`
  mutation adaugaConcediu($input: ConcediuInput) {
    adaugaConcediu(input: $input)
  }
`
