import gql from "graphql-tag";

export const ADD_COMMENT = gql`
  mutation insert_missings(
    $message: String!
    $author: String!
    $missing_id: Int!
  ) {
    insert_comments(
      objects: { message: $message, author: $author, missing_id: $missing_id }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
