import { gql } from '@apollo/client';

export const REQUEST_SIGNUP_TOKEN_MUTATION = gql`
  mutation requestSignUpToken_(
    $email: EmailSignUpProvider
    $affiliateId: String
  ) {
    requestSignUpToken(email: $email, affiliateId: $affiliateId) {
      __typename
      ... on RequestSignUpTokenMutationSuccess {
        tokenUuid
      }
    }
  }
`;
