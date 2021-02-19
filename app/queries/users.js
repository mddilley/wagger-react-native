import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    Users(limit: 1) {
      id
      join_date
    }
  }
`;
