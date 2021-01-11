import gql from "graphql-tag";

export const GET_MISSINGS = gql`
  query MyQuery {
    missings {
      id
      description
      last_seen
      location
      name
      type
    }
  }
`;
