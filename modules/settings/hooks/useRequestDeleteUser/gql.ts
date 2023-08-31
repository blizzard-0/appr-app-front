import { gql } from '@apollo/client';

export const REQUEST_DELETE_TOKEN_MUTATION = gql`
  mutation requestDeleteUserToken {
    requestDeleteAccountToken {
      ... on RequestDeleteAccountTokenMutationSuccess {
        tokenUuid
        __typename
      }
    }
  }
`;
