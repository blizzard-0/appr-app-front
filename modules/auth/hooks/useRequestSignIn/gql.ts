import { gql } from '@apollo/client';

export const REQUEST_SIGN_IN_TOKEN_MUTATION = gql`
  mutation requestSignInToken_($email: String, $redirectUrl: String) {
    requestSignInToken(email: $email, redirectUrl: $redirectUrl) {
      __typename
      ... on OptionalInputUnionError {
        keys
      }
      ... on AlreadySignedInError {
        currentUser {
          id
          fullName
          preferredName
          primaryEmailAddress
        }
      }
      ... on NoSuchUserWithEmailError {
        id
      }
    }
  }
`;
