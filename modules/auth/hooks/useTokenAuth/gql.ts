import { gql } from '@apollo/client';

export const SIGN_OUT_MUTATION = gql`
  mutation signOut_ {
    signOut {
      __typename
    }
  }
`;
export const SIGN_IN_MUTATION = gql`
  mutation signIn_($token: String!) {
    signIn(token: $token) {
      __typename
      ... on SignInMutationSuccess {
        currentUser {
          id
          primaryEmailAddress
          preferredName
          fullName
        }
        redirectUrl
      }
      ... on AlreadySignedInError {
        currentUser {
          id
          primaryEmailAddress
          preferredName
          fullName
        }
        redirectUrl
      }
      ... on SignedInAsSameUserError {
        currentUser {
          id
          primaryEmailAddress
          preferredName
          fullName
        }
        redirectUrl
      }
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation signUp_($token: String!) {
    signUp(token: $token) {
      __typename
      ... on SignUpMutationSuccess {
        currentUser {
          id
          primaryEmailAddress
          preferredName
          fullName
        }
      }
      ... on AlreadySignedInError {
        currentUser {
          id
          primaryEmailAddress
          preferredName
          fullName
        }
      }
    }
  }
`;
