import { gql } from '@apollo/client';

export const QUERY_UNBOXING_EXPERIENCE_FOR_RECEIPT = gql`
  query unboxingExperienceForReceipt_($receiptId: ID!) {
    unboxingExperienceForReceipt(receiptId: $receiptId) {
      __typename
      ... on UnboxingExperienceForReceiptQuerySuccess {
        items {
          id
          image {
            url
          }
          __typename
          ... on IdentifiedWalletItem {
            product {
              brand {
                name
              }
              name
              currentResalePrice {
                amount
              }
            }
          }
          ... on UnidentifiedWalletItem {
            unidentifiedBrandName
            unidentifiedProductName
          }
        }
      }
    }
  }
`;
