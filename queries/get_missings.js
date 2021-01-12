import gql from "graphql-tag";

export const GET_MISSINGS = gql`
  query MyQuery {
    missings {
      id
      description
      timestamp
      location
      name
      type
      last_seen
      image_url
      comments {
        id
      }
    }
  }
`;
