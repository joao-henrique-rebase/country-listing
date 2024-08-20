import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query {
    countries {
      emoji
      name
      capital
      languages {
        name
      }
    }
  }
`
