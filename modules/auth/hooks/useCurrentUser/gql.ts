import { gql } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query currentUser_ {
    currentUser {
      __typename
      ... on CurrentUser {
        id
        fullName
        username
        primaryEmailAddress
        avatarImage {
          url
        }
        socialAccounts {
          instagram
          twitter
          tiktok
        }
      }
    }
  }
`;
