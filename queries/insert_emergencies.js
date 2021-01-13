import gql from "graphql-tag";

export const INSERT_EMERGENCIES = gql`
  mutation MyMutation(
    $description: String!
    $phone: String!
    $emergency_accounts: [donation_accounts_insert_input!]!
  ) {
    insert_emergencies(
      objects: {
        description: $description
        phone: $phone
        emergency_accounts: { data: $emergency_accounts }
      }
    ) {
      returning {
        id
      }
    }
  }
`;
