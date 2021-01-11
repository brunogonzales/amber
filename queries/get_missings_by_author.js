import gql from "graphql-tag";

export const GET_MISSINGS_BY_AUTHOR = gql`
  query MyQuery($author: String!) {
    missings(where: { author: { _eq: $author } }) {
      id
      name
      description
      location
    }
  }
`;
