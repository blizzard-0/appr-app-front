import { gql } from '@apollo/client';

export const UPDATE_USER_MUTATION = gql`
  mutation updateUserProfileSettings($input: UpdateUserInput!) {
    updateUser(input: $input) {
      ... on UpdateUserMutationSuccess {
        __typename
        currentUser {
          id
          fullName
          preferredName
          username
          socialAccounts {
            tiktok
            twitter
            instagram
          }
        }
      }
    }
  }
`;
