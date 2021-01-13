import gql from "graphql-tag";

export const SUBSCRIBE_TO_EMERGENCIES = gql`
  subscription emergencyAdded {
    emergencies(order_by: { timestamp: desc }) {
      timestamp
      id
      description
      phone
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
