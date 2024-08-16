import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      emoji
      capital
      languages {
        name
      }
    }
  }
`
