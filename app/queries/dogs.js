import { gql } from "@apollo/client";

export const GET_DOGS = gql`
  query GetDogs($email: String) {
    Dogs(where: { Users: { email: { _eq: $email } } }) {
      name
      weight
      sex
      reactive_rating
      img_url
      id
      friendly_rating
      fixed
      breed
      birthdate
      user_id
    }
  }
`;
