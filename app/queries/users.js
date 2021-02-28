import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    Users(limit: 1) {
      id
      email
      first_name
      last_name
      age
      city
      state
      about
      join_date
    }
  }
`;

export const GET_USER = gql`
  query GetUser($email: String) {
    Users(where: { email: { _eq: $email } }) {
      id
      email
      first_name
      last_name
      age
      city
      state
      about
      join_date
    }
  }
`;
