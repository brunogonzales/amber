import gql from "graphql-tag";

export const ADD_MISSING = gql`
  mutation insert_missings(
    $type: String!
    $name: String!
    $description: String!
    $last_seen: String!
    $location: String!
  ) {
    insert_missings(
      objects: {
        type: $type
        name: $name
        description: $description
        last_seen: $last_seen
        location: $location
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
