import gql from "graphql-tag";

export const GET_MISSINGS_BY_AUTHOR = gql`
  query MyQuery($author: String!) {
    missings(
      where: { author: { _eq: $author } }
      order_by: { timestamp: desc }
    ) {
      id
      name
      last_seen
      description
      location
      image_url
      timestamp
    }
  }
`;
