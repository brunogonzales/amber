import gql from "graphql-tag";

export const SUBSCRIBE_TO_MISSING = gql`
  subscription commentAdded($id: Int!) {
    missings(where: { id: { _eq: $id } }) {
      id
      name
      description
      location
      image_url
      comments {
        id
        author
        message
        timestamp
      }
    }
  }
`;
