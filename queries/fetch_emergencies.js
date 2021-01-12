import gql from "graphql-tag";

export const FETCH_EMERGENCIES = gql`
  query MyQuery {
    emergencies(order_by: { timestamp: desc }) {
      timestamp
      id
      description
      emergency_accounts {
        name
        cc
        id
        bank
        cci
      }
    }
  }
`;
