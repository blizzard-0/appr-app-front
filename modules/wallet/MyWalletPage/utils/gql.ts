import { gql } from '@apollo/client';

export const MY_WALLET_PAGE_QUERY = gql`
  query myWalletPage(
    $imageAdjustments: ImageAdjustmentsInput!
    $limit: Int
    $offset: Int
    $sort: WalletItemsSortTypeInput
  ) {
    currentUser {
      ... on CurrentUser {
        id
        primaryEmailAddress
        createdAt
        preferredName
        fullName
        userSettings {
          welcomeExperienceShown
        }
        avatarImage {
          url
        }
        oAuthTokens {
          __typename
          accessToken
        }
        defaultWallet {
          __typename
          name
          id
          numWalletItems
          numVerifiedWalletItems
          items(limit: $limit, offset: $offset, sort: $sort) {
            totalCount
            paginated {
              __typename
              id
              createdAt
              visibility
              protectionState
              moderationFlag
              hasReceiptUpload
              pricingKey
              receiptImage(adjustments: $imageAdjustments) {
                url
                width
                height
                lqip(strategy: pixelate) {
                  url
                  width
                  height
                  strategy
                }
              }
              image(adjustments: $imageAdjustments) {
                url
                width
                height
                lqip(strategy: pixelate) {
                  url
                  width
                  height
                  strategy
                }
              }
              ... on IdentifiedWalletItem {
                product {
                  id
                  name
                  badges
                  currentRetailPrice {
                    amount
                    currency
                  }
                  currentResalePrice {
                    amount
                    currency
                  }
                  brand {
                    name
                  }
                }
              }
              ... on UnidentifiedWalletItem {
                id
                unidentifiedBrandName
                unidentifiedProductName
              }
            }
            hasNext
          }
          total
        }
      }
    }
  }
`;

export const ADD_WALLET_ITEM_MUTATION = gql`
  mutation addWalletItem_(
    $item: AddWalletItemInput!
    $imageAdjustments: ImageAdjustmentsInput!
  ) {
    addWalletItem(walletItem: $item) {
      __typename
      ... on AddWalletItemMutationSuccess {
        addedWalletItems {
          __typename
          id
          createdAt
          moderationFlag
          hasReceiptUpload
          receiptImage {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
          image(adjustments: $imageAdjustments) {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
          ... on IdentifiedWalletItem {
            protectionState
            product {
              id
              name
              currentRetailPrice {
                amount
                currency
              }
              currentResalePrice {
                amount
                currency
              }
              brand {
                name
              }
            }
          }
          ... on UnidentifiedWalletItem {
            id
            unidentifiedBrandName
            unidentifiedProductName
            visibility
          }
        }
      }
    }
  }
`;

export const DELETE_WALLET_ITEMS_MUTATION = gql`
  mutation deleteWalletItems_($items: [DeleteWalletItemInput!]!) {
    deleteWalletItems(items: $items) {
      __typename
    }
  }
`;

export const INGEST_WALLET_ITEMS_GMAIL_MUTATION = gql`
  mutation ingestGmailInboxMailIds_ {
    ingestGmailInboxMailIds {
      __typename
      ... on IngestGmailInboxMailIdsMutationSuccess {
        mailIds
      }
    }
  }
`;

export const UPDATE_USER_AVATAR_MUTATION = gql`
  mutation updateUserAvatar(
    $crop: ImageCropInput
    $input: RegisterSingleImageUploadInput!
  ) {
    updateAvatar(crop: $crop, input: $input) {
      ... on UpdateAvatarMutationSuccess {
        __typename
        currentUser {
          id
          avatarImage {
            url
          }
        }
      }
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation updateItem_($input: UpdateItemInput!) {
    updateItem(input: $input) {
      __typename
      ... on UpdateItemMutationSuccess {
        updatedWalletItem {
          id
          moderationFlag
          hasReceiptUpload
          receiptImage {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
          ... on UnidentifiedWalletItem {
            unidentifiedBrandName
            unidentifiedProductName
          }
          createdAt
          visibility
          protectionState
          moderationFlag
          image(adjustments: { height: 215, width: 246 }) {
            url
            width
            height
            lqip {
              height
              strategy
              url
              width
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_USER_SETTINGS_MUTATION = gql`
  mutation updateSettings($settings: UserSettingsInput!) {
    updateUserSettings(settings: $settings) {
      ... on UpdateUserSettingsMutationSuccess {
        __typename
        currentUser {
          userSettings {
            welcomeExperienceShown
          }
        }
      }
    }
  }
`;

export const UPDATE_WALLET_ITEMS_VISIBILITY_MUTATION = gql`
  mutation updateWalletItemsVisibility($input: SetWalletItemsVisibilityInput!) {
    setWalletItemsVisibility(input: $input) {
      ... on SetWalletItemsVisibilityMutationSuccess {
        __typename
        updatedWalletItems {
          id
          visibility
          __typename
        }
      }
    }
  }
`;

export const ADD_WALLET_ITEMS_VISIBILITY_MUTATION = gql`
  mutation addWalletItemWithImageUrl_($input: AddWalletItemWithImageUrlInput!) {
    addWalletItemWithImageUrl(walletItem: $input) {
      ... on AddWalletItemWithImageUrlMutationSuccess {
        walletItemId
      }
    }
  }
`;

export const WalletItemComponentFieldsHelperFragment = gql`
  fragment walletItemComponentFieldsHelper on IMyWalletItem {
    __typename
    id
    createdAt
    visibility
    protectionState
    moderationFlag
    hasReceiptUpload
    receiptImage {
      url
      width
      height
      lqip(strategy: pixelate) {
        url
        width
        height
        strategy
      }
    }
    image {
      url
      width
      height
      lqip(strategy: pixelate) {
        url
        width
        height
        strategy
      }
    }
    ... on IdentifiedWalletItem {
      product {
        id
        name
        badges
        currentRetailPrice {
          amount
          currency
        }
        currentResalePrice {
          amount
          currency
        }
        brand {
          name
        }
      }
    }
    ... on UnidentifiedWalletItem {
      unidentifiedBrandName
      unidentifiedProductName
    }
  }
`;

export const GET_BRANDS_QUERY = gql`
  query getBrands($search: String) {
    brands(search: $search) {
      ... on BrandsQuerySuccess {
        brands {
          id
          name
        }
      }
    }
  }
`;

export const GET_BRAND_PRODUCTS_QUERY = gql`
  query getBrandProducts($id: ID, $productSearch: String) {
    brand(id: $id) {
      ... on BrandQuerySuccess {
        brand {
          products(search: $productSearch) {
            paginated {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export const ADD_RECEIPT_MUTATION = gql`
  mutation addReceipt_($input: AddReceiptForWalletItemInput!) {
    addReceiptForWalletItem(input: $input) {
      __typename
      ... on AddReceiptForWalletItemMutationSuccess {
        updatedWalletItem {
          id
          ... on UnidentifiedWalletItem {
            unidentifiedBrandName
            unidentifiedProductName
          }
          hasReceiptUpload
          receiptImage {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
        }
      }
    }
  }
`;

export const DELETE_RECEIPT_MUTATION = gql`
  mutation deleteReceipt_($walletItemId: String!) {
    deleteReceiptForWalletItem(walletItemId: $walletItemId) {
      __typename
      ... on DeleteReceiptForWalletItemMutationSuccess {
        updatedWalletItem {
          id
          moderationFlag
          ... on UnidentifiedWalletItem {
            unidentifiedBrandName
            unidentifiedProductName
          }
          hasReceiptUpload
          receiptImage {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
        }
      }
    }
  }
`;

export const REQUEST_PROTECTION_MUTATION = gql`
  mutation requestProtection_($input: RequestProtectionForWalletItemInput!) {
    requestProtectionForWalletItem(input: $input) {
      __typename
      ... on RequestProtectionForWalletItemMutationSuccess {
        walletItemId
      }
    }
  }
`;

export const ADD_WALLET_ITEM_FROM_RECEIPT = gql`
  mutation addWalletItemFromReceipt_($receiptRawString: String!) {
    addWalletItemFromReceipt(receiptRawString: $receiptRawString) {
      __typename
      ... on AddWalletItemFromReceiptMutationSuccess {
        addedWalletItem {
          __typename
          id
          createdAt
          moderationFlag
          hasReceiptUpload
          receiptImage {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
          image {
            url
            width
            height
            lqip(strategy: pixelate) {
              url
              width
              height
              strategy
            }
          }
          ... on IdentifiedWalletItem {
            protectionState
            product {
              id
              name
              currentRetailPrice {
                amount
                currency
              }
              currentResalePrice {
                amount
                currency
              }
              brand {
                name
              }
            }
          }
          ... on UnidentifiedWalletItem {
            id
            unidentifiedBrandName
            unidentifiedProductName
            visibility
          }
        }
      }
    }
  }
`;
