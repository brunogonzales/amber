import gql from "graphql-tag";

export const GET_MISSING_BY_ID = gql`
  query MyQuery($id: Int!) {
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
      }
    }
  }
`;
