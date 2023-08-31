import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: any;
  URL: any;
};

export type AddBadgesMutationResult = AddBadgesMutationSuccess | AuthorizationError | ThrottlingError | UnknownError;

export type AddBadgesMutationSuccess = {
  __typename?: 'AddBadgesMutationSuccess';
  product: Product;
};

export type AddReceiptForWalletItemInput = {
  receiptRawString: Scalars['String'];
  walletItemId: Scalars['String'];
};

export type AddReceiptForWalletItemMutationResult = AddReceiptForWalletItemMutationSuccess | AuthorizationError | NonExistingWalletItemError | ReceiptRawFileError | ThrottlingError | UnknownError | VerifiedItemCannotUpdateError;

export type AddReceiptForWalletItemMutationSuccess = {
  __typename?: 'AddReceiptForWalletItemMutationSuccess';
  updatedWalletItem: IMyWalletItem;
};

export type AddWalletItemForUserError = IError & {
  __typename?: 'AddWalletItemForUserError';
  id: Scalars['ID'];
};

export type AddWalletItemForUserInput = {
  crop?: Maybe<ImageCropInput>;
  productId: Scalars['String'];
  productInstanceId?: Maybe<Scalars['String']>;
  walletId: Scalars['String'];
};

export type AddWalletItemForUserMutationResult = AddWalletItemForUserMutationSuccess | AuthorizationError | InvalidImageUploadAddWalletItemInputError | ThrottlingError | UnknownError;

export type AddWalletItemForUserMutationSuccess = {
  __typename?: 'AddWalletItemForUserMutationSuccess';
  walletItemId: Scalars['String'];
};

export type AddWalletItemFromReceiptMutationResult = AddWalletItemFromReceiptMutationSuccess | AuthorizationError | ReceiptRawFileError | ThrottlingError | UnknownError;

export type AddWalletItemFromReceiptMutationSuccess = {
  __typename?: 'AddWalletItemFromReceiptMutationSuccess';
  addedWalletItem: IMyWalletItem;
};

export type AddWalletItemInput = {
  crop: ImageCropInput;
  imageUploadId: Scalars['String'];
  pricingKey?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  unidentifiedBrandName?: Maybe<Scalars['String']>;
  unidentifiedProductName?: Maybe<Scalars['String']>;
};

export type AddWalletItemMutationResult = AddWalletItemMutationSuccess | AuthorizationError | InvalidImageUploadAddWalletItemInputError | ThrottlingError | UnknownError;

export type AddWalletItemMutationSuccess = {
  __typename?: 'AddWalletItemMutationSuccess';
  addedWalletItems: Array<IMyWalletItem>;
};

export type AddWalletItemWithImageUrlInput = {
  imageUrl: Scalars['String'];
  pricingKey?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  unidentifiedBrandName?: Maybe<Scalars['String']>;
  unidentifiedProductName?: Maybe<Scalars['String']>;
};

export type AddWalletItemWithImageUrlMutationResult = AddWalletItemWithImageUrlMutationSuccess | AuthorizationError | InvalidImageUploadAddWalletItemInputError | ThrottlingError | UnknownError;

export type AddWalletItemWithImageUrlMutationSuccess = {
  __typename?: 'AddWalletItemWithImageUrlMutationSuccess';
  walletItemId: Scalars['String'];
};

export type AddWalletItemsMutationResult = AddWalletItemsMutationSuccess | AuthorizationError | InvalidImageUploadAddWalletItemInputError | ThrottlingError | UnknownError;

export type AddWalletItemsMutationSuccess = {
  __typename?: 'AddWalletItemsMutationSuccess';
  walletItems: Array<IMyWalletItem>;
};

export type AffiliateUser = IUser & {
  __typename?: 'AffiliateUser';
  avatarImage: Image;
  createdAt: Scalars['Date'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  preferredName: Scalars['String'];
  primaryEmailAddress: Scalars['String'];
  wallets: Array<AffiliateWallet>;
};


export type AffiliateUserAvatarImageArgs = {
  adjustments: ImageAdjustmentsInput;
};

export type AffiliateWallet = {
  __typename?: 'AffiliateWallet';
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  items: PaginatedAffiliateWalletItem;
  name: Scalars['String'];
  numVerifiedWalletItems: Scalars['Int'];
  numWalletItems: Scalars['Int'];
  total: Scalars['Float'];
};


export type AffiliateWalletItemsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AffiliateWalletItem = {
  __typename?: 'AffiliateWalletItem';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
};

export type AlreadySignedInError = IError & {
  __typename?: 'AlreadySignedInError';
  currentUser: CurrentUser;
  id: Scalars['ID'];
  redirectUrl?: Maybe<Scalars['String']>;
};

export type AlreadySignedOutError = IError & {
  __typename?: 'AlreadySignedOutError';
  id: Scalars['ID'];
};

export type AuthorizationError = IError & {
  __typename?: 'AuthorizationError';
  currentUser?: Maybe<CurrentUser>;
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type BadgesOnProductInput = {
  badges: Array<ProductBadgeEnumType>;
  productId: Scalars['String'];
};

/** Returned when the requested brand could not be found */
export type BrandNotFoundError = IError & {
  __typename?: 'BrandNotFoundError';
  id: Scalars['ID'];
};

export type BrandQueryResult = AuthorizationError | BrandNotFoundError | BrandQuerySuccess | OptionalInputUnionError | ThrottlingError | UnknownError;

export type BrandQuerySuccess = {
  __typename?: 'BrandQuerySuccess';
  brand: IBrand;
};

export type BrandsQueryResult = AuthorizationError | BrandsQuerySuccess | ThrottlingError | UnknownError;

export type BrandsQuerySuccess = {
  __typename?: 'BrandsQuerySuccess';
  brands: Array<IBrand>;
};

/** When try to request protection for not consent wallet item */
export type ConsentError = IError & {
  __typename?: 'ConsentError';
  id: Scalars['ID'];
};

export type CoverageRequest = {
  __typename?: 'CoverageRequest';
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  city: Scalars['String'];
  coverageValue: Scalars['String'];
  dateOfBirth: Scalars['Date'];
  id: Scalars['ID'];
  isConsent: Scalars['Boolean'];
  legalName: Scalars['String'];
  state: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CoverageRequestsQueryResult = AuthorizationError | CoverageRequestsQuerySuccess | ThrottlingError | UnknownError;

export type CoverageRequestsQuerySuccess = {
  __typename?: 'CoverageRequestsQuerySuccess';
  coverageRequests: Array<CoverageRequest>;
};

export type CreateAuthUrlMutationResult = AuthorizationError | CreateAuthUrlMutationSuccess | ThrottlingError | UnknownError;

export type CreateAuthUrlMutationSuccess = {
  __typename?: 'CreateAuthUrlMutationSuccess';
  url: Scalars['String'];
};

export type CreateBrandMutationResult = AuthorizationError | CreateBrandMutationSuccess | ThrottlingError | UnknownError;

export type CreateBrandMutationSuccess = {
  __typename?: 'CreateBrandMutationSuccess';
  brand: IBrand;
};

export type CreateOrGetDemoWalletItemInput = {
  fingerprintId: Scalars['String'];
};

export type CreateOrGetDemoWalletItemMutationResult = AuthorizationError | CreateOrGetDemoWalletItemMutationSuccess | ThrottlingError | UnknownError;

export type CreateOrGetDemoWalletItemMutationSuccess = {
  __typename?: 'CreateOrGetDemoWalletItemMutationSuccess';
  walletItemId: Scalars['String'];
};

export type CreateProductInput = {
  brandId: Scalars['String'];
  categoryId: Scalars['String'];
  collectionVariant?: Maybe<Scalars['String']>;
  colorVariant?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  materialVariant?: Maybe<Scalars['String']>;
  productName: Scalars['String'];
  productVariant?: Maybe<Scalars['String']>;
  resalePrice: Scalars['String'];
  retailPrice: Scalars['String'];
  sku: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
};

export type CreateProductMutationResult = AuthorizationError | CreateProductMutationSuccess | PriceInputError | ProductAlreadyExistError | ProductNotFoundError | ThrottlingError | UnknownError | ValueNotExistError;

export type CreateProductMutationSuccess = {
  __typename?: 'CreateProductMutationSuccess';
  product: Product;
};

export enum Currency {
  Usd = 'USD'
}

export type CurrentUser = IUser & {
  __typename?: 'CurrentUser';
  avatarImage?: Maybe<Image>;
  createdAt: Scalars['Date'];
  defaultWallet: MyWallet;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  imageUploads: Array<ImageUpload>;
  oAuthTokens: Array<IOauthToken>;
  preferredName: Scalars['String'];
  primaryEmailAddress: Scalars['String'];
  socialAccounts: SocialAccounts;
  userSettings: UserSettings;
  username: Scalars['String'];
  wallets: Array<MyWallet>;
};


export type CurrentUserAvatarImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type CurrentUserQueryResult = AuthorizationError | CurrentUser | ThrottlingError | UnknownError | UserNotFoundError;

export type Customer = {
  __typename?: 'Customer';
  createdAt: Scalars['Date'];
  details: CustomerDetails;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  preferredName: Scalars['String'];
  username: Scalars['String'];
};

export type CustomerDetails = {
  __typename?: 'CustomerDetails';
  lastAddedWalletItem: IMyWalletItem;
  profileImage: Scalars['String'];
};

export type DeleteAccountMutationResult = AuthorizationError | DeleteAccountMutationSuccess | ThrottlingError | UnknownError;

export type DeleteAccountMutationSuccess = {
  __typename?: 'DeleteAccountMutationSuccess';
  success: Scalars['Boolean'];
};

export type DeleteAvatarMutationResult = AuthorizationError | DeleteAvatarMutationSuccess | ThrottlingError | UnknownError;

export type DeleteAvatarMutationSuccess = {
  __typename?: 'DeleteAvatarMutationSuccess';
  currentUser: CurrentUser;
};

export type DeleteEmailTemplateMutationResult = AuthorizationError | DeleteEmailTemplateMutationSuccess | EmailTemplateNotFoundError | ThrottlingError | UnknownError;

export type DeleteEmailTemplateMutationSuccess = {
  __typename?: 'DeleteEmailTemplateMutationSuccess';
  status: Scalars['Boolean'];
};

export type DeleteProductMutationResult = AuthorizationError | DeleteProductMutationSuccess | ProductNotFoundError | ThrottlingError | UnknownError;

export type DeleteProductMutationSuccess = {
  __typename?: 'DeleteProductMutationSuccess';
  status: Scalars['Boolean'];
};

export type DeleteReceiptForWalletItemMutationResult = AuthorizationError | DeleteReceiptForWalletItemMutationSuccess | NonExistingWalletItemError | ThrottlingError | UnknownError | VerifiedItemCannotUpdateError;

export type DeleteReceiptForWalletItemMutationSuccess = {
  __typename?: 'DeleteReceiptForWalletItemMutationSuccess';
  updatedWalletItem: IMyWalletItem;
};

export type DeleteWalletItemError = IError & {
  __typename?: 'DeleteWalletItemError';
  id: Scalars['ID'];
};

export type DeleteWalletItemInput = {
  walletItemId: Scalars['String'];
};

export type DeleteWalletItemsMutationResult = AuthorizationError | DeleteWalletItemError | DeleteWalletItemsMutationSuccess | ThrottlingError | UnknownError;

export type DeleteWalletItemsMutationSuccess = {
  __typename?: 'DeleteWalletItemsMutationSuccess';
  numDeleted: Scalars['Int'];
};

export type EmailAlreadyTakenError = {
  __typename?: 'EmailAlreadyTakenError';
  value: Scalars['String'];
};

export type EmailSignUpProvider = {
  emailAddress: Scalars['String'];
  fullName: Scalars['String'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  fromAddress: Scalars['String'];
  fromName: Scalars['String'];
  html: Scalars['String'];
  id: Scalars['ID'];
  subject: Scalars['String'];
};

/** Returned when the email template could not be foud */
export type EmailTemplateNotFoundError = IError & {
  __typename?: 'EmailTemplateNotFoundError';
  id: Scalars['ID'];
};

export type EmailTemplateQueryResult = AuthorizationError | EmailTemplateQuerySuccess | ThrottlingError | UnknownError;

export type EmailTemplateQuerySuccess = {
  __typename?: 'EmailTemplateQuerySuccess';
  emailTemplate?: Maybe<EmailTemplate>;
};

export type EmailTemplatesQueryResult = AuthorizationError | EmailTemplatesQuerySuccess | ThrottlingError | UnknownError;

export type EmailTemplatesQuerySuccess = {
  __typename?: 'EmailTemplatesQuerySuccess';
  emailTemplates: Array<EmailTemplate>;
};

/** Returned when a list type input argument requires at least one element but intstead has none. */
export type EmptyArrayInputError = IError & {
  __typename?: 'EmptyArrayInputError';
  id: Scalars['ID'];
};

export type FeaturedPublicWalletItem = IFeedItem & {
  __typename?: 'FeaturedPublicWalletItem';
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  showIcons: Array<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: FeedItemTypeEnumType;
};

export enum FeedItemTypeEnumType {
  Article = 'article',
  Photo = 'photo',
  WalletItem = 'walletItem'
}

export type FinalizeReceiptIdentificationMutationResult = AuthorizationError | FinalizeReceiptIdentificationMutationSuccess | ThrottlingError | UnknownError;

export type FinalizeReceiptIdentificationMutationSuccess = {
  __typename?: 'FinalizeReceiptIdentificationMutationSuccess';
  done: Scalars['Boolean'];
};

export type FingerPrintMapping = {
  __typename?: 'FingerPrintMapping';
  fingerPrintId: Scalars['String'];
  userId: Scalars['String'];
  walletItemId: Scalars['String'];
};

export type GetFingerPrintMappingQueryResult = AuthorizationError | GetFingerPrintMappingQuerySuccess | ThrottlingError | UnknownError;

export type GetFingerPrintMappingQuerySuccess = {
  __typename?: 'GetFingerPrintMappingQuerySuccess';
  FingerPrintMapping: Array<FingerPrintMapping>;
};

export type GetGmailInboxMailContentQueryResult = AuthorizationError | GetGmailInboxMailContentQuerySuccess | GmailOAuthApiError | ThrottlingError | UnknownError;

export type GetGmailInboxMailContentQuerySuccess = {
  __typename?: 'GetGmailInboxMailContentQuerySuccess';
  content: Scalars['String'];
};

export type GetGmailInboxMailIdsQueryResult = AuthorizationError | GetGmailInboxMailIdsQuerySuccess | GmailOAuthApiError | ThrottlingError | UnknownError;

export type GetGmailInboxMailIdsQuerySuccess = {
  __typename?: 'GetGmailInboxMailIdsQuerySuccess';
  ids: Array<Scalars['String']>;
};

export type GetGmailInboxQueryResult = AuthorizationError | GetGmailInboxQuerySuccess | GmailOAuthApiError | ThrottlingError | UnknownError;

export type GetGmailInboxQuerySuccess = {
  __typename?: 'GetGmailInboxQuerySuccess';
  inbox: Array<Scalars['String']>;
};

export type GmailOAuthApiError = IError & {
  __typename?: 'GmailOAuthApiError';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type IBaseWalletItem = {
  createdAt: Scalars['Date'];
  hasReceiptUpload: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Image;
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
  pricingKey?: Maybe<Scalars['String']>;
  productInstance?: Maybe<ProductInstance>;
  receiptImage: Image;
};


export type IBaseWalletItemImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};


export type IBaseWalletItemReceiptImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type IBrand = {
  id: Scalars['ID'];
  name: Scalars['String'];
  products: PaginatedProducts;
};


export type IBrandProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type IError = {
  id: Scalars['ID'];
};

export type IFeedItem = {
  id: Scalars['ID'];
  type: FeedItemTypeEnumType;
};

export type IMyWalletItem = {
  createdAt: Scalars['Date'];
  hasReceiptUpload: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Image;
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
  pricingKey?: Maybe<Scalars['String']>;
  productInstance?: Maybe<ProductInstance>;
  protectionState: WalletItemProtectionStateEnumType;
  receiptImage: Image;
  visibility: WalletItemVisibilityEnumType;
};


export type IMyWalletItemImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};


export type IMyWalletItemReceiptImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type IOauthToken = {
  accessToken: Scalars['String'];
  id: Scalars['ID'];
  isExpired: Scalars['Boolean'];
};

export type ISharedWalletItem = {
  createdAt: Scalars['Date'];
  hasReceiptUpload: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Image;
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
  pricingKey?: Maybe<Scalars['String']>;
  productInstance?: Maybe<ProductInstance>;
  receiptImage: Image;
};


export type ISharedWalletItemImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};


export type ISharedWalletItemReceiptImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type IUser = {
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
};

export type IWallet = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IdentifiedWalletItem = IBaseWalletItem & IMyWalletItem & {
  __typename?: 'IdentifiedWalletItem';
  createdAt: Scalars['Date'];
  hasReceiptUpload: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Image;
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
  pricingKey?: Maybe<Scalars['String']>;
  product: Product;
  productInstance?: Maybe<ProductInstance>;
  protectionState: WalletItemProtectionStateEnumType;
  receiptImage: Image;
  visibility: WalletItemVisibilityEnumType;
};


export type IdentifiedWalletItemImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};


export type IdentifiedWalletItemReceiptImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type Image = {
  __typename?: 'Image';
  height: Scalars['Int'];
  lqip: LqipImage;
  url: Scalars['String'];
  width: Scalars['Int'];
};


export type ImageLqipArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
  strategy?: Maybe<LqipStrategy>;
};

export type ImageAdjustmentsInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type ImageCropInput = {
  cropHeight: Scalars['Float'];
  cropWidth: Scalars['Float'];
  height: Scalars['Float'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type ImageUpload = {
  __typename?: 'ImageUpload';
  id: Scalars['ID'];
  image: Image;
};


export type ImageUploadImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

/** Purpose of upload */
export enum ImageUploadPurpose {
  AvatarPhoto = 'avatarPhoto',
  ProductPhoto = 'productPhoto',
  ReceiptUpload = 'receiptUpload',
  WalletItemUpload = 'walletItemUpload'
}

export type IngestGmailInboxMailIdsMutationResult = AuthorizationError | GmailOAuthApiError | IngestGmailInboxMailIdsMutationSuccess | ThrottlingError | UnknownError;

export type IngestGmailInboxMailIdsMutationSuccess = {
  __typename?: 'IngestGmailInboxMailIdsMutationSuccess';
  mailIds: Array<Scalars['String']>;
};

export type InstagramApiError = IError & {
  __typename?: 'InstagramApiError';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type InstagramOAuthToken = IOauthToken & {
  __typename?: 'InstagramOAuthToken';
  accessToken: Scalars['String'];
  id: Scalars['ID'];
  instagramUserId: Scalars['String'];
  isExpired: Scalars['Boolean'];
};

export type InvalidDateOfBirthError = IError & {
  __typename?: 'InvalidDateOfBirthError';
  id: Scalars['ID'];
};

export type InvalidEmailAddressError = IError & {
  __typename?: 'InvalidEmailAddressError';
  id: Scalars['ID'];
};

export type InvalidFullNameError = IError & {
  __typename?: 'InvalidFullNameError';
  id: Scalars['ID'];
};

export type InvalidImageUploadAddWalletItemInputError = IError & {
  __typename?: 'InvalidImageUploadAddWalletItemInputError';
  id: Scalars['ID'];
};

export type InvalidImageUploadArgsError = IError & {
  __typename?: 'InvalidImageUploadArgsError';
  fields: Array<Scalars['String']>;
  id: Scalars['ID'];
};

export type InvalidLegalNameError = IError & {
  __typename?: 'InvalidLegalNameError';
  id: Scalars['ID'];
};

export type InvalidLengthUsernameError = IError & {
  __typename?: 'InvalidLengthUsernameError';
  id: Scalars['ID'];
};

export type InvalidPreferredNameError = IError & {
  __typename?: 'InvalidPreferredNameError';
  id: Scalars['ID'];
};

export type InvalidTokenError = IError & {
  __typename?: 'InvalidTokenError';
  id: Scalars['ID'];
};

export type InvalidUserSocialAccountUrlError = IError & {
  __typename?: 'InvalidUserSocialAccountUrlError';
  id: Scalars['ID'];
  type: SocialAccountsEnumType;
};

export type InvalidUsernameCharacterError = IError & {
  __typename?: 'InvalidUsernameCharacterError';
  id: Scalars['ID'];
};

export type JwtMalformedError = IError & {
  __typename?: 'JwtMalformedError';
  id: Scalars['ID'];
};

export type LqipImage = {
  __typename?: 'LQIPImage';
  height: Scalars['Int'];
  strategy: LqipStrategy;
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** The low quality image placeholder strategy */
export enum LqipStrategy {
  Blackwhite = 'blackwhite',
  Blur = 'blur',
  Grayscale = 'grayscale',
  Pixelate = 'pixelate',
  Vectorize = 'vectorize'
}

/** This is a brand under management of the currently authenticated entity. */
export type ManagedBrand = IBrand & {
  __typename?: 'ManagedBrand';
  customers: PaginatedCustomers;
  id: Scalars['ID'];
  name: Scalars['String'];
  products: PaginatedProducts;
};


/** This is a brand under management of the currently authenticated entity. */
export type ManagedBrandCustomersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


/** This is a brand under management of the currently authenticated entity. */
export type ManagedBrandProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type MarkReceiptAsIrrelevantMutationResult = AuthorizationError | MarkReceiptAsIrrelevantMutationSuccess | ThrottlingError | UnknownError;

export type MarkReceiptAsIrrelevantMutationSuccess = {
  __typename?: 'MarkReceiptAsIrrelevantMutationSuccess';
  done: Scalars['Boolean'];
};

export type MismatchedUploadSignatureError = IError & {
  __typename?: 'MismatchedUploadSignatureError';
  id: Scalars['ID'];
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float'];
  currency: Currency;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBadges: AddBadgesMutationResult;
  addReceiptForWalletItem: AddReceiptForWalletItemMutationResult;
  addWalletItem: AddWalletItemMutationResult;
  addWalletItemForUser: AddWalletItemForUserMutationResult;
  addWalletItemFromReceipt: AddWalletItemFromReceiptMutationResult;
  addWalletItemWithImageUrl: AddWalletItemWithImageUrlMutationResult;
  /** @deprecated no longer doing multi uploads. will mutation by Jan 31st 2022 */
  addWalletItems: AddWalletItemsMutationResult;
  createAuthUrl: CreateAuthUrlMutationResult;
  createBrand: CreateBrandMutationResult;
  createOrGetDemoWalletItem: CreateOrGetDemoWalletItemMutationResult;
  createProduct: CreateProductMutationResult;
  deleteAccount: DeleteAccountMutationResult;
  deleteAvatar: DeleteAvatarMutationResult;
  deleteEmailTemplate: DeleteEmailTemplateMutationResult;
  deleteProduct: DeleteProductMutationResult;
  deleteReceiptForWalletItem: DeleteReceiptForWalletItemMutationResult;
  deleteWalletItems: DeleteWalletItemsMutationResult;
  finalizeReceiptIdentification: FinalizeReceiptIdentificationMutationResult;
  ingestGmailInboxMailIds: IngestGmailInboxMailIdsMutationResult;
  markReceiptAsIrrelevant: MarkReceiptAsIrrelevantMutationResult;
  /** @deprecated upsertmany api methods are now deprecated */
  registerBrand: RegisterBrandMutationResult;
  registerEmailTemplate: RegisterEmailTemplateMutationResult;
  registerGmailAuth: RegisterGmailAuthMutationResult;
  registerImageUploads: RegisterImageUploadsMutationResult;
  registerInstagramOAuthToken: RegisterInstagramOAuthTokenMutationResult;
  registerProductCatalog: RegisterProductCatalogMutationResult;
  registerProductCategory: RegisterProductCategoryMutationResult;
  registerProductImage: RegisterProductImageMutationResult;
  removeBadges: RemoveBadgesMutationResult;
  requestDeleteAccountToken: RequestDeleteAccountTokenMutationResult;
  requestProtectionForWalletItem: RequestProtectionForWalletItemMutationResult;
  requestSignInToken: RequestSignInTokenMutationResult;
  requestSignInTokenByBackOffice: RequestSignInTokenByBackOfficeMutationResult;
  requestSignUpToken: RequestSignUpTokenMutationResult;
  sendUnboxingExperienceForReceipt: SendUnboxingExperienceForReceiptMutationResult;
  setBadges: SetBadgesMutationResult;
  setWalletItemsVisibility: SetWalletItemsVisibilityMutationResult;
  signIn: SignInMutationResult;
  signOut: SignOutMutationResult;
  signUp: SignUpMutationResult;
  updateAvatar: UpdateAvatarMutationResult;
  updateBrand: UpdateBrandMutationResult;
  updateItem: UpdateItemMutationResult;
  updateProduct: UpdateProductMutationResult;
  updateProtectionStatusForWalletItem: UpdateProtectionStatusForWalletItemMutationResult;
  updateUser: UpdateUserMutationResult;
  updateUserSettings: UpdateUserSettingsMutationResult;
  updateWalletItem: UpdateWalletItemMutationResult;
};


export type MutationAddBadgesArgs = {
  input: BadgesOnProductInput;
};


export type MutationAddReceiptForWalletItemArgs = {
  input: AddReceiptForWalletItemInput;
};


export type MutationAddWalletItemArgs = {
  walletItem: AddWalletItemInput;
};


export type MutationAddWalletItemForUserArgs = {
  input: AddWalletItemForUserInput;
};


export type MutationAddWalletItemFromReceiptArgs = {
  receiptRawString: Scalars['String'];
};


export type MutationAddWalletItemWithImageUrlArgs = {
  walletItem: AddWalletItemWithImageUrlInput;
};


export type MutationAddWalletItemsArgs = {
  items: Array<AddWalletItemInput>;
};


export type MutationCreateAuthUrlArgs = {
  email: Scalars['String'];
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
  resaleCoefficient?: Maybe<Scalars['Float']>;
};


export type MutationCreateOrGetDemoWalletItemArgs = {
  input: CreateOrGetDemoWalletItemInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationDeleteAccountArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type MutationDeleteReceiptForWalletItemArgs = {
  walletItemId: Scalars['String'];
};


export type MutationDeleteWalletItemsArgs = {
  items: Array<DeleteWalletItemInput>;
};


export type MutationFinalizeReceiptIdentificationArgs = {
  receiptId: Scalars['ID'];
};


export type MutationMarkReceiptAsIrrelevantArgs = {
  receiptId: Scalars['ID'];
};


export type MutationRegisterBrandArgs = {
  input: Array<RegisterBrandInput>;
};


export type MutationRegisterEmailTemplateArgs = {
  input: RegisterEmailTemplateArgs;
};


export type MutationRegisterGmailAuthArgs = {
  code: Scalars['String'];
};


export type MutationRegisterImageUploadsArgs = {
  input: Array<RegisterSingleImageUploadInput>;
};


export type MutationRegisterInstagramOAuthTokenArgs = {
  shortLivedToken: Scalars['String'];
};


export type MutationRegisterProductCatalogArgs = {
  input: Array<RegisterProductCatalogInput>;
};


export type MutationRegisterProductCategoryArgs = {
  input: Array<RegisterProductCategoryInput>;
};


export type MutationRegisterProductImageArgs = {
  input: RegisterProductImageArgs;
};


export type MutationRemoveBadgesArgs = {
  input: BadgesOnProductInput;
};


export type MutationRequestProtectionForWalletItemArgs = {
  input: RequestProtectionForWalletItemInput;
};


export type MutationRequestSignInTokenArgs = {
  email?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
};


export type MutationRequestSignInTokenByBackOfficeArgs = {
  email: Scalars['String'];
};


export type MutationRequestSignUpTokenArgs = {
  affiliateId?: Maybe<Scalars['String']>;
  email?: Maybe<EmailSignUpProvider>;
};


export type MutationSendUnboxingExperienceForReceiptArgs = {
  receiptId: Scalars['ID'];
};


export type MutationSetBadgesArgs = {
  input: BadgesOnProductInput;
};


export type MutationSetWalletItemsVisibilityArgs = {
  input: SetWalletItemsVisibilityInput;
};


export type MutationSignInArgs = {
  token: Scalars['String'];
};


export type MutationSignUpArgs = {
  token: Scalars['String'];
};


export type MutationUpdateAvatarArgs = {
  crop?: Maybe<ImageCropInput>;
  input: RegisterSingleImageUploadInput;
};


export type MutationUpdateBrandArgs = {
  brandId: Scalars['ID'];
  resaleCoefficient?: Maybe<Scalars['Float']>;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProtectionStatusForWalletItemArgs = {
  coverageRequestId: Scalars['ID'];
  status: WalletItemProtectionStateEnumType;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserSettingsArgs = {
  settings: UserSettingsInput;
};


export type MutationUpdateWalletItemArgs = {
  input: UpdateWalletItemInput;
};

export type MyWallet = IWallet & {
  __typename?: 'MyWallet';
  id: Scalars['ID'];
  items: PaginatedIMyWalletItem;
  name: Scalars['String'];
  numVerifiedWalletItems: Scalars['Int'];
  numWalletItems: Scalars['Int'];
  owner: CurrentUser;
  total: Scalars['Float'];
};


export type MyWalletItemsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<WalletItemsSortTypeInput>;
};

export type NoSuchUserWithEmailError = IError & {
  __typename?: 'NoSuchUserWithEmailError';
  id: Scalars['ID'];
};

/** When try to update with non existing coverage request item id */
export type NonExistingCoverageRequestError = IError & {
  __typename?: 'NonExistingCoverageRequestError';
  id: Scalars['ID'];
};

/** When try to update with non existing wallet item id */
export type NonExistingWalletItemError = IError & {
  __typename?: 'NonExistingWalletItemError';
  id: Scalars['ID'];
};

/** When try to update with non existing foreign key constraint */
export type NonExistingWalletItemUpdateInputError = IError & {
  __typename?: 'NonExistingWalletItemUpdateInputError';
  field: Scalars['String'];
  id: Scalars['ID'];
};

/** This is a structural error. Since GraphQL doesn't allow union types for input objects, we have to "simulate" input unions by a single object with all optional fields. In this hack, we expect exactly one of the fields to be present. Nothing more, nothing less. We can't enforce this through the type system, so we capture it at runtime. */
export type OptionalInputUnionError = IError & {
  __typename?: 'OptionalInputUnionError';
  id: Scalars['ID'];
  keys: Array<Scalars['String']>;
};

export type PaginatedAffiliateUser = {
  __typename?: 'PaginatedAffiliateUser';
  hasNext: Scalars['Boolean'];
  paginated: Array<AffiliateUser>;
  totalCount: Scalars['Int'];
};

export type PaginatedAffiliateWalletItem = {
  __typename?: 'PaginatedAffiliateWalletItem';
  hasNext: Scalars['Boolean'];
  paginated: Array<AffiliateWalletItem>;
  totalCount: Scalars['Int'];
};

export type PaginatedCustomers = {
  __typename?: 'PaginatedCustomers';
  hasNext: Scalars['Boolean'];
  paginated: Array<Customer>;
  totalCount: Scalars['Int'];
};

export type PaginatedIMyWalletItem = {
  __typename?: 'PaginatedIMyWalletItem';
  hasNext: Scalars['Boolean'];
  paginated: Array<IMyWalletItem>;
  totalCount: Scalars['Int'];
};

export type PaginatedProducts = {
  __typename?: 'PaginatedProducts';
  hasNext: Scalars['Boolean'];
  paginated: Array<Product>;
  totalCount: Scalars['Int'];
};

export type PlaceholderAuthToken = IOauthToken & {
  __typename?: 'PlaceholderAuthToken';
  accessToken: Scalars['String'];
  id: Scalars['ID'];
  isExpired: Scalars['Boolean'];
};

export type PriceInputError = IError & {
  __typename?: 'PriceInputError';
  id: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  badges: Array<ProductBadgeEnumType>;
  brand: IBrand;
  category: ProductCategory;
  currentResalePrice: Money;
  currentRetailPrice: Money;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images: Array<Image>;
  name: Scalars['String'];
  sku: Scalars['String'];
};


export type ProductImagesArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

/** Returned when an organization tries to create a product with an already existing brand+sku */
export type ProductAlreadyExistError = IError & {
  __typename?: 'ProductAlreadyExistError';
  existingProduct: Product;
  id: Scalars['ID'];
};

export enum ProductBadgeEnumType {
  Iconic = 'iconic',
  Investment = 'investment',
  Limited = 'limited',
  Seasonal = 'seasonal',
  Sustainable = 'sustainable',
  Trending = 'trending',
  Vintage = 'vintage'
}

export type ProductCategoriesQueryResult = AuthorizationError | ProductCategoriesQuerySuccess | ThrottlingError | UnknownError;

export type ProductCategoriesQuerySuccess = {
  __typename?: 'ProductCategoriesQuerySuccess';
  productCategories: Array<ProductCategory>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  children: Array<ProductCategory>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<ProductCategory>;
  products: Array<Product>;
};

export type ProductCategoryQueryResult = AuthorizationError | ProductCategoryQuerySuccess | ThrottlingError | UnknownError;

export type ProductCategoryQuerySuccess = {
  __typename?: 'ProductCategoryQuerySuccess';
  productCategory?: Maybe<ProductCategory>;
};

export type ProductInstance = {
  __typename?: 'ProductInstance';
  id: Scalars['String'];
};

/** Returned when the product could not be found */
export type ProductNotFoundError = IError & {
  __typename?: 'ProductNotFoundError';
  id: Scalars['ID'];
};

export type ProductQueryResult = AuthorizationError | ProductQuerySuccess | ThrottlingError | UnknownError;

export type ProductQuerySuccess = {
  __typename?: 'ProductQuerySuccess';
  product?: Maybe<Product>;
};

export type ProductsQueryResult = AuthorizationError | PaginatedProducts | ThrottlingError | UnknownError;

export type ProductsWithoutImagesQueryResult = AuthorizationError | ProductsWithoutImagesQuerySuccess | ThrottlingError | UnknownError;

export type ProductsWithoutImagesQuerySuccess = {
  __typename?: 'ProductsWithoutImagesQuerySuccess';
  products: Array<Maybe<Product>>;
};

export type Query = {
  __typename?: 'Query';
  brand: BrandQueryResult;
  brands: BrandsQueryResult;
  coverageRequests: CoverageRequestsQueryResult;
  currentUser: CurrentUserQueryResult;
  emailTemplate: EmailTemplateQueryResult;
  emailTemplates: EmailTemplatesQueryResult;
  getFingerPrintMapping: GetFingerPrintMappingQueryResult;
  getGmailInbox: GetGmailInboxQueryResult;
  getGmailInboxMailContent: GetGmailInboxMailContentQueryResult;
  getGmailInboxMailIds: GetGmailInboxMailIdsQueryResult;
  product: ProductQueryResult;
  productCategories: ProductCategoriesQueryResult;
  productCategory: ProductCategoryQueryResult;
  products: ProductsQueryResult;
  productsWithoutImages: ProductsWithoutImagesQueryResult;
  referredUsers: ReferredUsersQueryResult;
  unboxingExperienceForReceipt: UnboxingExperienceForReceiptQueryResult;
  walletItems: WalletItemsQueryResult;
  wallets: WalletsQueryResult;
};


export type QueryBrandArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryBrandsArgs = {
  search?: Maybe<Scalars['String']>;
};


export type QueryCoverageRequestsArgs = {
  coverageStatus: WalletItemProtectionStateEnumType;
};


export type QueryEmailTemplateArgs = {
  key: Scalars['String'];
};


export type QueryGetGmailInboxArgs = {
  userId: Scalars['ID'];
};


export type QueryGetGmailInboxMailContentArgs = {
  messageId: Scalars['String'];
  userId: Scalars['ID'];
};


export type QueryGetGmailInboxMailIdsArgs = {
  userId: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  badge?: Maybe<ProductBadgeEnumType>;
  limit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryReferredUsersArgs = {
  affiliateId: Scalars['String'];
};


export type QueryUnboxingExperienceForReceiptArgs = {
  receiptId: Scalars['ID'];
};


export type QueryWalletItemsArgs = {
  walletId: Scalars['ID'];
};

export type Receipt = {
  __typename?: 'Receipt';
  brand: SomeBrand;
  createdAt: Scalars['String'];
  id: Scalars['String'];
  type: ReceiptTypeEnumType;
  updatedAt: Scalars['String'];
  user: SomeUser;
};

/** Returned when the requested receipt could not be found */
export type ReceiptNotFoundError = IError & {
  __typename?: 'ReceiptNotFoundError';
  id: Scalars['ID'];
};

export type ReceiptRawFileError = IError & {
  __typename?: 'ReceiptRawFileError';
  id: Scalars['ID'];
};

export enum ReceiptTypeEnumType {
  Identified = 'identified',
  Irrelevant = 'irrelevant',
  Pending = 'pending',
  Unknown = 'unknown'
}

export type ReferredUsersQueryResult = AuthorizationError | OptionalInputUnionError | ReferredUsersQuerySuccess | ThrottlingError | UnknownError;

export type ReferredUsersQuerySuccess = {
  __typename?: 'ReferredUsersQuerySuccess';
  users: PaginatedAffiliateUser;
};


export type ReferredUsersQuerySuccessUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type RegisterBrandInput = {
  brand: Scalars['String'];
  resaleCoefficient?: Maybe<Scalars['String']>;
};

export type RegisterBrandMutationResult = AuthorizationError | OptionalInputUnionError | RegisterBrandMutationSuccess | ThrottlingError | UnknownError;

export type RegisterBrandMutationSuccess = {
  __typename?: 'RegisterBrandMutationSuccess';
  status: Scalars['Boolean'];
};

export type RegisterEmailTemplateArgs = {
  fromAddress: Scalars['String'];
  fromName: Scalars['String'];
  html: Scalars['String'];
  key: Scalars['String'];
  subject: Scalars['String'];
};

export type RegisterEmailTemplateMutationResult = AuthorizationError | RegisterEmailTemplateMutationSuccess | ThrottlingError | UnknownError;

export type RegisterEmailTemplateMutationSuccess = {
  __typename?: 'RegisterEmailTemplateMutationSuccess';
  registeredEmailTemplates: EmailTemplate;
};

export type RegisterGmailAuthMutationResult = AuthorizationError | RegisterGmailAuthMutationSuccess | ThrottlingError | UnknownError;

export type RegisterGmailAuthMutationSuccess = {
  __typename?: 'RegisterGmailAuthMutationSuccess';
  status: Scalars['Boolean'];
};

export type RegisterImageUploadsMutationResult = AuthorizationError | EmptyArrayInputError | InvalidImageUploadArgsError | MismatchedUploadSignatureError | RegisterImageUploadsMutationSuccess | SizeTooLargeImageUploadError | ThrottlingError | TooManyUploadsImageUploadError | UnknownError;

export type RegisterImageUploadsMutationSuccess = {
  __typename?: 'RegisterImageUploadsMutationSuccess';
  imageUploads: Array<ImageUpload>;
};

export type RegisterInstagramOAuthTokenMutationResult = AuthorizationError | InstagramApiError | RegisterInstagramOAuthTokenMutationSuccess | ThrottlingError | UnknownError;

export type RegisterInstagramOAuthTokenMutationSuccess = {
  __typename?: 'RegisterInstagramOAuthTokenMutationSuccess';
  instagramOAuth: InstagramOAuthToken;
};

export type RegisterProductCatalogInput = {
  brand: Scalars['String'];
  category: Scalars['String'];
  collectionVariant?: Maybe<Scalars['String']>;
  colorVariant?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  materialVariant?: Maybe<Scalars['String']>;
  productName: Scalars['String'];
  productVariant?: Maybe<Scalars['String']>;
  resalePrice?: Maybe<Scalars['String']>;
  retailPrice: Scalars['String'];
  sku: Scalars['String'];
  styleVariant?: Maybe<Scalars['String']>;
  subCategory: Scalars['String'];
};

export type RegisterProductCatalogMutationResult = AuthorizationError | OptionalInputUnionError | PriceInputError | RegisterProductCatalogMutationSuccess | ThrottlingError | UnknownError | ValueNotExistError;

export type RegisterProductCatalogMutationSuccess = {
  __typename?: 'RegisterProductCatalogMutationSuccess';
  status: Scalars['Boolean'];
};

export type RegisterProductCategoryInput = {
  category: Scalars['String'];
  subCategory: Scalars['String'];
};

export type RegisterProductCategoryMutationResult = AuthorizationError | OptionalInputUnionError | RegisterProductCategoryMutationSuccess | ThrottlingError | UnknownError;

export type RegisterProductCategoryMutationSuccess = {
  __typename?: 'RegisterProductCategoryMutationSuccess';
  status: Scalars['Boolean'];
};

export type RegisterProductImageArgs = {
  crop?: Maybe<ImageCropInput>;
  imageUrl: Scalars['String'];
  productId: Scalars['String'];
};

export type RegisterProductImageMutationResult = AuthorizationError | RegisterProductImageMutationSuccess | ThrottlingError | UnknownError;

export type RegisterProductImageMutationSuccess = {
  __typename?: 'RegisterProductImageMutationSuccess';
  status: Scalars['Boolean'];
};

export type RegisterSingleImageUploadInput = {
  id: Scalars['ID'];
  payload: Scalars['JSON'];
  uploadPurpose: ImageUploadPurpose;
};

export type RemoveBadgesMutationResult = AuthorizationError | RemoveBadgesMutationSuccess | ThrottlingError | UnknownError;

export type RemoveBadgesMutationSuccess = {
  __typename?: 'RemoveBadgesMutationSuccess';
  product: Product;
};

export type RequestDeleteAccountTokenMutationResult = AuthorizationError | RequestDeleteAccountTokenMutationSuccess | ThrottlingError | UnknownError;

export type RequestDeleteAccountTokenMutationSuccess = {
  __typename?: 'RequestDeleteAccountTokenMutationSuccess';
  tokenUuid: Scalars['String'];
};

export type RequestProtectionForWalletItemInput = {
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  city: Scalars['String'];
  coverageValue: Scalars['String'];
  dateOfBirth: Scalars['Date'];
  isConsent: Scalars['Boolean'];
  legalName: Scalars['String'];
  state: Scalars['String'];
  walletItemId: Scalars['String'];
  zipCode: Scalars['String'];
};

export type RequestProtectionForWalletItemMutationResult = AuthorizationError | ConsentError | InvalidDateOfBirthError | InvalidLegalNameError | NonExistingWalletItemError | RequestProtectionForWalletItemMutationSuccess | ThrottlingError | UnidentifiedItemCannotHaveProtectionError | UnknownError;

export type RequestProtectionForWalletItemMutationSuccess = {
  __typename?: 'RequestProtectionForWalletItemMutationSuccess';
  walletItemId: Scalars['String'];
};

export type RequestSignInTokenByBackOfficeMutationResult = AuthorizationError | InvalidEmailAddressError | RequestSignInTokenByBackOfficeMutationSuccess | ThrottlingError | UnknownError;

export type RequestSignInTokenByBackOfficeMutationSuccess = {
  __typename?: 'RequestSignInTokenByBackOfficeMutationSuccess';
  signInUrl: Scalars['String'];
};

export type RequestSignInTokenMutationResult = AlreadySignedInError | AuthorizationError | InvalidEmailAddressError | NoSuchUserWithEmailError | OptionalInputUnionError | RequestSignInTokenMutationSuccess | ThrottlingError | UnknownError;

export type RequestSignInTokenMutationSuccess = {
  __typename?: 'RequestSignInTokenMutationSuccess';
  done: Scalars['Boolean'];
};

export type RequestSignUpTokenMutationResult = AlreadySignedInError | AuthorizationError | EmailAlreadyTakenError | InvalidEmailAddressError | InvalidFullNameError | InvalidPreferredNameError | OptionalInputUnionError | RequestSignUpTokenMutationSuccess | ThrottlingError | UnknownError;

export type RequestSignUpTokenMutationSuccess = {
  __typename?: 'RequestSignUpTokenMutationSuccess';
  tokenUuid: Scalars['String'];
};

export type SendUnboxingExperienceForReceiptMutationResult = AuthorizationError | SendUnboxingExperienceForReceiptMutationSuccess | ThrottlingError | UnknownError;

export type SendUnboxingExperienceForReceiptMutationSuccess = {
  __typename?: 'SendUnboxingExperienceForReceiptMutationSuccess';
  walletItemId: Array<Scalars['String']>;
};

export type SetBadgesMutationResult = AuthorizationError | SetBadgesMutationSuccess | ThrottlingError | UnknownError;

export type SetBadgesMutationSuccess = {
  __typename?: 'SetBadgesMutationSuccess';
  product: Product;
};

export type SetWalletItemsVisibilityInput = {
  items: Array<Scalars['String']>;
  visibility: WalletItemVisibilityEnumType;
};

export type SetWalletItemsVisibilityMutationResult = AuthorizationError | SetWalletItemsVisibilityMutationSuccess | ThrottlingError | UnknownError;

export type SetWalletItemsVisibilityMutationSuccess = {
  __typename?: 'SetWalletItemsVisibilityMutationSuccess';
  updatedWalletItems: Array<IMyWalletItem>;
};

/** A wallet that the user does not own but has access to */
export type SharedWallet = IWallet & {
  __typename?: 'SharedWallet';
  id: Scalars['ID'];
  items: Array<ISharedWalletItem>;
  name: Scalars['String'];
  owner: IUser;
};

export type SignInMutationResult = AlreadySignedInError | AuthorizationError | InvalidTokenError | JwtMalformedError | SignInMutationSuccess | SignedInAsSameUserError | ThrottlingError | TokenExpiredError | UnknownError;

export type SignInMutationSuccess = {
  __typename?: 'SignInMutationSuccess';
  currentUser: CurrentUser;
  redirectUrl?: Maybe<Scalars['String']>;
};

export type SignOutMutationResult = AlreadySignedOutError | AuthorizationError | SignOutMutationSuccess | ThrottlingError | UnknownError;

export type SignOutMutationSuccess = {
  __typename?: 'SignOutMutationSuccess';
  previouslySignedInAs: CurrentUser;
};

export type SignUpMutationResult = AlreadySignedInError | AuthorizationError | InvalidTokenError | JwtMalformedError | SignUpMutationSuccess | ThrottlingError | TokenExpiredError | UnknownError;

export type SignUpMutationSuccess = {
  __typename?: 'SignUpMutationSuccess';
  currentUser: CurrentUser;
};

export type SignedInAsSameUserError = IError & {
  __typename?: 'SignedInAsSameUserError';
  currentUser: CurrentUser;
  id: Scalars['ID'];
  redirectUrl?: Maybe<Scalars['String']>;
};

export type SizeTooLargeImageUploadError = IError & {
  __typename?: 'SizeTooLargeImageUploadError';
  id: Scalars['ID'];
  size: Scalars['Int'];
};

export type SocialAccounts = {
  __typename?: 'SocialAccounts';
  instagram?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum SocialAccountsEnumType {
  Instagram = 'instagram',
  Tiktok = 'tiktok',
  Twitter = 'twitter'
}

export type SocialAccountsInput = {
  instagram?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

/** This is a brand that is not managed by the currently authenticated entity. */
export type SomeBrand = IBrand & {
  __typename?: 'SomeBrand';
  id: Scalars['ID'];
  name: Scalars['String'];
  products: PaginatedProducts;
};


/** This is a brand that is not managed by the currently authenticated entity. */
export type SomeBrandProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};

export type SomeUser = IUser & {
  __typename?: 'SomeUser';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
};

export enum SortOrderEnumType {
  Asc = 'asc',
  Desc = 'desc'
}

export type ThrottlingError = IError & {
  __typename?: 'ThrottlingError';
  id: Scalars['ID'];
  /** Throttling period in milliseconds */
  period: Scalars['Int'];
};

export type TokenExpiredError = IError & {
  __typename?: 'TokenExpiredError';
  id: Scalars['ID'];
};

/** Returned when the user tries to upload more than 20 images at a time */
export type TooManyUploadsImageUploadError = IError & {
  __typename?: 'TooManyUploadsImageUploadError';
  id: Scalars['ID'];
  numUploads: Scalars['Int'];
};

export type UnauthorizedActionError = IError & {
  __typename?: 'UnauthorizedActionError';
  id: Scalars['ID'];
};

export type UnboxingExperienceForReceiptQueryResult = AuthorizationError | ThrottlingError | UnboxingExperienceForReceiptQuerySuccess | UnknownError;

export type UnboxingExperienceForReceiptQuerySuccess = {
  __typename?: 'UnboxingExperienceForReceiptQuerySuccess';
  items: Array<IMyWalletItem>;
};

/** When try to request protection for unidentified wallet item */
export type UnidentifiedItemCannotHaveProtectionError = IError & {
  __typename?: 'UnidentifiedItemCannotHaveProtectionError';
  id: Scalars['ID'];
};

export type UnidentifiedWalletItem = IBaseWalletItem & IMyWalletItem & {
  __typename?: 'UnidentifiedWalletItem';
  createdAt: Scalars['Date'];
  hasReceiptUpload: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Image;
  imageUpload?: Maybe<ImageUpload>;
  isVerified: Scalars['Boolean'];
  moderationFlag: WalletItemModerationFlagEnumType;
  pricingKey?: Maybe<Scalars['String']>;
  productInstance?: Maybe<ProductInstance>;
  protectionState: WalletItemProtectionStateEnumType;
  receiptImage: Image;
  unidentifiedBrandName?: Maybe<Scalars['String']>;
  unidentifiedProductName?: Maybe<Scalars['String']>;
  visibility: WalletItemVisibilityEnumType;
};


export type UnidentifiedWalletItemImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};


export type UnidentifiedWalletItemReceiptImageArgs = {
  adjustments?: Maybe<ImageAdjustmentsInput>;
};

export type UnknownError = IError & {
  __typename?: 'UnknownError';
  id: Scalars['ID'];
};

/** A wallet that the current user has no access to */
export type UnreachableWallet = IWallet & {
  __typename?: 'UnreachableWallet';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UpdateAvatarMutationResult = AuthorizationError | InvalidImageUploadArgsError | SizeTooLargeImageUploadError | ThrottlingError | UnknownError | UpdateAvatarMutationSuccess;

export type UpdateAvatarMutationSuccess = {
  __typename?: 'UpdateAvatarMutationSuccess';
  currentUser: CurrentUser;
};

export type UpdateBrandMutationResult = AuthorizationError | ThrottlingError | UnknownError | UpdateBrandMutationSuccess;

export type UpdateBrandMutationSuccess = {
  __typename?: 'UpdateBrandMutationSuccess';
  brand: IBrand;
};

export type UpdateItemInput = {
  id: Scalars['String'];
  sharing?: Maybe<Scalars['Boolean']>;
  unidentifiedBrandName?: Maybe<Scalars['String']>;
  unidentifiedProductName?: Maybe<Scalars['String']>;
};

export type UpdateItemMutationResult = AuthorizationError | NonExistingWalletItemError | ThrottlingError | UnknownError | UpdateItemMutationSuccess | VerifiedItemCannotUpdateError;

export type UpdateItemMutationSuccess = {
  __typename?: 'UpdateItemMutationSuccess';
  updatedWalletItem: IMyWalletItem;
};

export type UpdateProductInput = {
  categoryId?: Maybe<Scalars['String']>;
  collectionVariant?: Maybe<Scalars['String']>;
  colorVariant?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  materialVariant?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productVariant?: Maybe<Scalars['String']>;
  resalePrice?: Maybe<Scalars['String']>;
  retailPrice?: Maybe<Scalars['String']>;
  styleVariant?: Maybe<Scalars['String']>;
  subCategory?: Maybe<Scalars['String']>;
};

export type UpdateProductMutationResult = AuthorizationError | PriceInputError | ProductNotFoundError | ThrottlingError | UnknownError | UpdateProductMutationSuccess | ValueNotExistError;

export type UpdateProductMutationSuccess = {
  __typename?: 'UpdateProductMutationSuccess';
  product: Product;
};

export type UpdateProtectionStatusForWalletItemMutationResult = AuthorizationError | NonExistingCoverageRequestError | ThrottlingError | UnidentifiedItemCannotHaveProtectionError | UnknownError | UpdateProtectionStatusForWalletItemMutationSuccess;

export type UpdateProtectionStatusForWalletItemMutationSuccess = {
  __typename?: 'UpdateProtectionStatusForWalletItemMutationSuccess';
  walletItemId: Scalars['String'];
};

export type UpdateUserInput = {
  fullName?: Maybe<Scalars['String']>;
  preferredName?: Maybe<Scalars['String']>;
  socialAccounts?: Maybe<SocialAccountsInput>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateUserMutationResult = AuthorizationError | InvalidFullNameError | InvalidLengthUsernameError | InvalidPreferredNameError | InvalidUsernameCharacterError | ThrottlingError | UnknownError | UpdateUserMutationSuccess | UsernameAlreadyTakenError;

export type UpdateUserMutationSuccess = {
  __typename?: 'UpdateUserMutationSuccess';
  currentUser: CurrentUser;
};

export type UpdateUserSettingsMutationResult = AuthorizationError | ThrottlingError | UnknownError | UpdateUserSettingsMutationSuccess;

export type UpdateUserSettingsMutationSuccess = {
  __typename?: 'UpdateUserSettingsMutationSuccess';
  currentUser: CurrentUser;
};

export type UpdateWalletItemError = IError & {
  __typename?: 'UpdateWalletItemError';
  id: Scalars['ID'];
};

export type UpdateWalletItemInput = {
  updateData: WalletItemUpdateInput;
  walletItemId: Scalars['String'];
};

export type UpdateWalletItemMutationResult = AuthorizationError | NonExistingWalletItemError | NonExistingWalletItemUpdateInputError | ThrottlingError | UnknownError | UpdateWalletItemError | UpdateWalletItemMutationSuccess;

export type UpdateWalletItemMutationSuccess = {
  __typename?: 'UpdateWalletItemMutationSuccess';
  walletItemId: Scalars['String'];
};

/** Returned when the requested user could not be found */
export type UserNotFoundError = IError & {
  __typename?: 'UserNotFoundError';
  id: Scalars['ID'];
};

export type UserSettings = {
  __typename?: 'UserSettings';
  welcomeExperienceShown: Scalars['Boolean'];
};

export type UserSettingsInput = {
  welcomeExperienceShown: Scalars['Boolean'];
};

export type UsernameAlreadyTakenError = IError & {
  __typename?: 'UsernameAlreadyTakenError';
  id: Scalars['ID'];
};

export type ValueNotExistError = IError & {
  __typename?: 'ValueNotExistError';
  id: Scalars['ID'];
  message: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** When try to update verified wallet item */
export type VerifiedItemCannotUpdateError = IError & {
  __typename?: 'VerifiedItemCannotUpdateError';
  id: Scalars['ID'];
};

/** Wallet */
export type Wallet = IWallet & {
  __typename?: 'Wallet';
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: WalletOwnerUser;
};

export enum WalletItemModerationFlagEnumType {
  Escalated = 'escalated',
  Identified = 'identified',
  Irrelevant = 'irrelevant',
  NotFound = 'notFound',
  Pending = 'pending'
}

export enum WalletItemProtectionStateEnumType {
  NotProtected = 'not_protected',
  Protected = 'protected',
  Requested = 'requested'
}

export enum WalletItemTypeEnumType {
  Identified = 'identified',
  Unidentified = 'unidentified'
}

export type WalletItemUpdateInput = {
  imageUploadId?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  moderationFlag?: Maybe<WalletItemModerationFlagEnumType>;
  productId?: Maybe<Scalars['String']>;
  productInstanceId?: Maybe<Scalars['String']>;
  type?: Maybe<WalletItemTypeEnumType>;
  walletId?: Maybe<Scalars['String']>;
};

export enum WalletItemVisibilityEnumType {
  Private = 'private',
  Public = 'public'
}

export type WalletItemsQueryResult = AuthorizationError | ThrottlingError | UnknownError | WalletItemsQuerySuccess;

export type WalletItemsQuerySuccess = {
  __typename?: 'WalletItemsQuerySuccess';
  items: Array<IMyWalletItem>;
};

export type WalletItemsSortTypeInput = {
  brand?: Maybe<SortOrderEnumType>;
  date?: Maybe<SortOrderEnumType>;
  resalePrice?: Maybe<SortOrderEnumType>;
};

export type WalletOwnerUser = IUser & {
  __typename?: 'WalletOwnerUser';
  createdAt: Scalars['Date'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  primaryEmailAddress: Scalars['String'];
};

export type WalletsQueryResult = AuthorizationError | ThrottlingError | UnknownError | WalletsQuerySuccess;

export type WalletsQuerySuccess = {
  __typename?: 'WalletsQuerySuccess';
  wallets: Array<Maybe<Wallet>>;
};

export type CurrentUser_QueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUser_Query_Op_ = { __typename?: 'Query', currentUser: { __typename: 'AuthorizationError' } | { __typename: 'CurrentUser', id: string, fullName: string, username: string, primaryEmailAddress: string, avatarImage?: Maybe<{ __typename?: 'Image', url: string }>, socialAccounts: { __typename?: 'SocialAccounts', instagram?: Maybe<string>, twitter?: Maybe<string>, tiktok?: Maybe<string> } } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } | { __typename: 'UserNotFoundError' } };

export type RequestSignInToken_MutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
}>;


export type RequestSignInToken_Mutation_Op_ = { __typename?: 'Mutation', requestSignInToken: { __typename: 'AlreadySignedInError', currentUser: { __typename?: 'CurrentUser', id: string, fullName: string, preferredName: string, primaryEmailAddress: string } } | { __typename: 'AuthorizationError' } | { __typename: 'InvalidEmailAddressError' } | { __typename: 'NoSuchUserWithEmailError', id: string } | { __typename: 'OptionalInputUnionError', keys: Array<string> } | { __typename: 'RequestSignInTokenMutationSuccess' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type RequestSignUpToken_MutationVariables = Exact<{
  email?: Maybe<EmailSignUpProvider>;
  affiliateId?: Maybe<Scalars['String']>;
}>;


export type RequestSignUpToken_Mutation_Op_ = { __typename?: 'Mutation', requestSignUpToken: { __typename: 'AlreadySignedInError' } | { __typename: 'AuthorizationError' } | { __typename: 'EmailAlreadyTakenError' } | { __typename: 'InvalidEmailAddressError' } | { __typename: 'InvalidFullNameError' } | { __typename: 'InvalidPreferredNameError' } | { __typename: 'OptionalInputUnionError' } | { __typename: 'RequestSignUpTokenMutationSuccess', tokenUuid: string } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type SignOut_MutationVariables = Exact<{ [key: string]: never; }>;


export type SignOut_Mutation_Op_ = { __typename?: 'Mutation', signOut: { __typename: 'AlreadySignedOutError' } | { __typename: 'AuthorizationError' } | { __typename: 'SignOutMutationSuccess' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type SignIn_MutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type SignIn_Mutation_Op_ = { __typename?: 'Mutation', signIn: { __typename: 'AlreadySignedInError', redirectUrl?: Maybe<string>, currentUser: { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, preferredName: string, fullName: string } } | { __typename: 'AuthorizationError' } | { __typename: 'InvalidTokenError' } | { __typename: 'JwtMalformedError' } | { __typename: 'SignInMutationSuccess', redirectUrl?: Maybe<string>, currentUser: { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, preferredName: string, fullName: string } } | { __typename: 'SignedInAsSameUserError', redirectUrl?: Maybe<string>, currentUser: { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, preferredName: string, fullName: string } } | { __typename: 'ThrottlingError' } | { __typename: 'TokenExpiredError' } | { __typename: 'UnknownError' } };

export type SignUp_MutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type SignUp_Mutation_Op_ = { __typename?: 'Mutation', signUp: { __typename: 'AlreadySignedInError', currentUser: { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, preferredName: string, fullName: string } } | { __typename: 'AuthorizationError' } | { __typename: 'InvalidTokenError' } | { __typename: 'JwtMalformedError' } | { __typename: 'SignUpMutationSuccess', currentUser: { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, preferredName: string, fullName: string } } | { __typename: 'ThrottlingError' } | { __typename: 'TokenExpiredError' } | { __typename: 'UnknownError' } };

export type UnboxingExperienceForReceipt_QueryVariables = Exact<{
  receiptId: Scalars['ID'];
}>;


export type UnboxingExperienceForReceipt_Query_Op_ = { __typename?: 'Query', unboxingExperienceForReceipt: { __typename: 'AuthorizationError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnboxingExperienceForReceiptQuerySuccess', items: Array<{ __typename: 'IdentifiedWalletItem', id: string, product: { __typename?: 'Product', name: string, brand: { __typename?: 'ManagedBrand', name: string } | { __typename?: 'SomeBrand', name: string }, currentResalePrice: { __typename?: 'Money', amount: number } }, image: { __typename?: 'Image', url: string } } | { __typename: 'UnidentifiedWalletItem', unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, id: string, image: { __typename?: 'Image', url: string } }> } | { __typename: 'UnknownError' } };

export type RegisterImageUploads_MutationVariables = Exact<{
  input: Array<RegisterSingleImageUploadInput> | RegisterSingleImageUploadInput;
  imageAdjustments: ImageAdjustmentsInput;
}>;


export type RegisterImageUploads_Mutation_Op_ = { __typename?: 'Mutation', registerImageUploads: { __typename?: 'AuthorizationError' } | { __typename?: 'EmptyArrayInputError' } | { __typename?: 'InvalidImageUploadArgsError' } | { __typename?: 'MismatchedUploadSignatureError' } | { __typename: 'RegisterImageUploadsMutationSuccess', imageUploads: Array<{ __typename?: 'ImageUpload', id: string, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } }> } | { __typename?: 'SizeTooLargeImageUploadError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'TooManyUploadsImageUploadError' } | { __typename?: 'UnknownError' } };

export type RegisterInstagramOAuthToken_MutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RegisterInstagramOAuthToken_Mutation_Op_ = { __typename?: 'Mutation', registerInstagramOAuthToken: { __typename: 'AuthorizationError' } | { __typename: 'InstagramApiError', id: string, message: string } | { __typename: 'RegisterInstagramOAuthTokenMutationSuccess', instagramOAuth: { __typename?: 'InstagramOAuthToken', instagramUserId: string, isExpired: boolean, accessToken: string, id: string } } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type RequestDeleteUserTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RequestDeleteUserTokenMutation_Op_ = { __typename?: 'Mutation', requestDeleteAccountToken: { __typename?: 'AuthorizationError' } | { __typename: 'RequestDeleteAccountTokenMutationSuccess', tokenUuid: string } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export type UpdateUserProfileSettingsMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserProfileSettingsMutation_Op_ = { __typename?: 'Mutation', updateUser: { __typename?: 'AuthorizationError' } | { __typename?: 'InvalidFullNameError' } | { __typename?: 'InvalidLengthUsernameError' } | { __typename?: 'InvalidPreferredNameError' } | { __typename?: 'InvalidUsernameCharacterError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } | { __typename: 'UpdateUserMutationSuccess', currentUser: { __typename?: 'CurrentUser', id: string, fullName: string, preferredName: string, username: string, socialAccounts: { __typename?: 'SocialAccounts', tiktok?: Maybe<string>, twitter?: Maybe<string>, instagram?: Maybe<string> } } } | { __typename?: 'UsernameAlreadyTakenError' } };

export type DeleteUserAccountMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type DeleteUserAccountMutation_Op_ = { __typename?: 'Mutation', deleteAccount: { __typename?: 'AuthorizationError' } | { __typename?: 'DeleteAccountMutationSuccess', success: boolean } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export type CreateAuthUrl_MutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type CreateAuthUrl_Mutation_Op_ = { __typename?: 'Mutation', createAuthUrl: { __typename: 'AuthorizationError' } | { __typename: 'CreateAuthUrlMutationSuccess', url: string } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type MyWalletPageQueryVariables = Exact<{
  imageAdjustments: ImageAdjustmentsInput;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<WalletItemsSortTypeInput>;
}>;


export type MyWalletPageQuery_Op_ = { __typename?: 'Query', currentUser: { __typename?: 'AuthorizationError' } | { __typename?: 'CurrentUser', id: string, primaryEmailAddress: string, createdAt: string, preferredName: string, fullName: string, userSettings: { __typename?: 'UserSettings', welcomeExperienceShown: boolean }, avatarImage?: Maybe<{ __typename?: 'Image', url: string }>, oAuthTokens: Array<{ __typename: 'InstagramOAuthToken', accessToken: string } | { __typename: 'PlaceholderAuthToken', accessToken: string }>, defaultWallet: { __typename: 'MyWallet', name: string, id: string, numWalletItems: number, numVerifiedWalletItems: number, total: number, items: { __typename?: 'PaginatedIMyWalletItem', totalCount: number, hasNext: boolean, paginated: Array<{ __typename: 'IdentifiedWalletItem', id: string, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, pricingKey?: Maybe<string>, product: { __typename?: 'Product', id: string, name: string, badges: Array<ProductBadgeEnumType>, currentRetailPrice: { __typename?: 'Money', amount: number, currency: Currency }, currentResalePrice: { __typename?: 'Money', amount: number, currency: Currency }, brand: { __typename?: 'ManagedBrand', name: string } | { __typename?: 'SomeBrand', name: string } }, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } | { __typename: 'UnidentifiedWalletItem', id: string, unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, pricingKey?: Maybe<string>, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } }> } } } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } | { __typename?: 'UserNotFoundError' } };

export type AddWalletItem_MutationVariables = Exact<{
  item: AddWalletItemInput;
  imageAdjustments: ImageAdjustmentsInput;
}>;


export type AddWalletItem_Mutation_Op_ = { __typename?: 'Mutation', addWalletItem: { __typename: 'AddWalletItemMutationSuccess', addedWalletItems: Array<{ __typename: 'IdentifiedWalletItem', protectionState: WalletItemProtectionStateEnumType, id: string, createdAt: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, product: { __typename?: 'Product', id: string, name: string, currentRetailPrice: { __typename?: 'Money', amount: number, currency: Currency }, currentResalePrice: { __typename?: 'Money', amount: number, currency: Currency }, brand: { __typename?: 'ManagedBrand', name: string } | { __typename?: 'SomeBrand', name: string } }, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } | { __typename: 'UnidentifiedWalletItem', id: string, unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, visibility: WalletItemVisibilityEnumType, createdAt: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } }> } | { __typename: 'AuthorizationError' } | { __typename: 'InvalidImageUploadAddWalletItemInputError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type DeleteWalletItems_MutationVariables = Exact<{
  items: Array<DeleteWalletItemInput> | DeleteWalletItemInput;
}>;


export type DeleteWalletItems_Mutation_Op_ = { __typename?: 'Mutation', deleteWalletItems: { __typename: 'AuthorizationError' } | { __typename: 'DeleteWalletItemError' } | { __typename: 'DeleteWalletItemsMutationSuccess' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type IngestGmailInboxMailIds_MutationVariables = Exact<{ [key: string]: never; }>;


export type IngestGmailInboxMailIds_Mutation_Op_ = { __typename?: 'Mutation', ingestGmailInboxMailIds: { __typename: 'AuthorizationError' } | { __typename: 'GmailOAuthApiError' } | { __typename: 'IngestGmailInboxMailIdsMutationSuccess', mailIds: Array<string> } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type UpdateUserAvatarMutationVariables = Exact<{
  crop?: Maybe<ImageCropInput>;
  input: RegisterSingleImageUploadInput;
}>;


export type UpdateUserAvatarMutation_Op_ = { __typename?: 'Mutation', updateAvatar: { __typename?: 'AuthorizationError' } | { __typename?: 'InvalidImageUploadArgsError' } | { __typename?: 'SizeTooLargeImageUploadError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } | { __typename: 'UpdateAvatarMutationSuccess', currentUser: { __typename?: 'CurrentUser', id: string, avatarImage?: Maybe<{ __typename?: 'Image', url: string }> } } };

export type UpdateItem_MutationVariables = Exact<{
  input: UpdateItemInput;
}>;


export type UpdateItem_Mutation_Op_ = { __typename?: 'Mutation', updateItem: { __typename: 'AuthorizationError' } | { __typename: 'NonExistingWalletItemError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } | { __typename: 'UpdateItemMutationSuccess', updatedWalletItem: { __typename?: 'IdentifiedWalletItem', id: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', height: number, strategy: LqipStrategy, url: string, width: number } } } | { __typename?: 'UnidentifiedWalletItem', unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, id: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', height: number, strategy: LqipStrategy, url: string, width: number } } } } | { __typename: 'VerifiedItemCannotUpdateError' } };

export type UpdateSettingsMutationVariables = Exact<{
  settings: UserSettingsInput;
}>;


export type UpdateSettingsMutation_Op_ = { __typename?: 'Mutation', updateUserSettings: { __typename?: 'AuthorizationError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } | { __typename: 'UpdateUserSettingsMutationSuccess', currentUser: { __typename?: 'CurrentUser', userSettings: { __typename?: 'UserSettings', welcomeExperienceShown: boolean } } } };

export type UpdateWalletItemsVisibilityMutationVariables = Exact<{
  input: SetWalletItemsVisibilityInput;
}>;


export type UpdateWalletItemsVisibilityMutation_Op_ = { __typename?: 'Mutation', setWalletItemsVisibility: { __typename?: 'AuthorizationError' } | { __typename: 'SetWalletItemsVisibilityMutationSuccess', updatedWalletItems: Array<{ __typename: 'IdentifiedWalletItem', id: string, visibility: WalletItemVisibilityEnumType } | { __typename: 'UnidentifiedWalletItem', id: string, visibility: WalletItemVisibilityEnumType }> } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export type AddWalletItemWithImageUrl_MutationVariables = Exact<{
  input: AddWalletItemWithImageUrlInput;
}>;


export type AddWalletItemWithImageUrl_Mutation_Op_ = { __typename?: 'Mutation', addWalletItemWithImageUrl: { __typename?: 'AddWalletItemWithImageUrlMutationSuccess', walletItemId: string } | { __typename?: 'AuthorizationError' } | { __typename?: 'InvalidImageUploadAddWalletItemInputError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

type WalletItemComponentFieldsHelper_IdentifiedWalletItem_Fragment = { __typename: 'IdentifiedWalletItem', id: string, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, product: { __typename?: 'Product', id: string, name: string, badges: Array<ProductBadgeEnumType>, currentRetailPrice: { __typename?: 'Money', amount: number, currency: Currency }, currentResalePrice: { __typename?: 'Money', amount: number, currency: Currency }, brand: { __typename?: 'ManagedBrand', name: string } | { __typename?: 'SomeBrand', name: string } }, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } };

type WalletItemComponentFieldsHelper_UnidentifiedWalletItem_Fragment = { __typename: 'UnidentifiedWalletItem', unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, id: string, createdAt: string, visibility: WalletItemVisibilityEnumType, protectionState: WalletItemProtectionStateEnumType, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } };

export type WalletItemComponentFieldsHelperFragment = WalletItemComponentFieldsHelper_IdentifiedWalletItem_Fragment | WalletItemComponentFieldsHelper_UnidentifiedWalletItem_Fragment;

export type GetBrandsQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type GetBrandsQuery_Op_ = { __typename?: 'Query', brands: { __typename?: 'AuthorizationError' } | { __typename?: 'BrandsQuerySuccess', brands: Array<{ __typename?: 'ManagedBrand', id: string, name: string } | { __typename?: 'SomeBrand', id: string, name: string }> } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export type GetBrandProductsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  productSearch?: Maybe<Scalars['String']>;
}>;


export type GetBrandProductsQuery_Op_ = { __typename?: 'Query', brand: { __typename?: 'AuthorizationError' } | { __typename?: 'BrandNotFoundError' } | { __typename?: 'BrandQuerySuccess', brand: { __typename?: 'ManagedBrand', products: { __typename?: 'PaginatedProducts', paginated: Array<{ __typename?: 'Product', id: string, name: string }> } } | { __typename?: 'SomeBrand', products: { __typename?: 'PaginatedProducts', paginated: Array<{ __typename?: 'Product', id: string, name: string }> } } } | { __typename?: 'OptionalInputUnionError' } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export type AddReceipt_MutationVariables = Exact<{
  input: AddReceiptForWalletItemInput;
}>;


export type AddReceipt_Mutation_Op_ = { __typename?: 'Mutation', addReceiptForWalletItem: { __typename: 'AddReceiptForWalletItemMutationSuccess', updatedWalletItem: { __typename?: 'IdentifiedWalletItem', id: string, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } | { __typename?: 'UnidentifiedWalletItem', unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, id: string, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } } | { __typename: 'AuthorizationError' } | { __typename: 'NonExistingWalletItemError' } | { __typename: 'ReceiptRawFileError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } | { __typename: 'VerifiedItemCannotUpdateError' } };

export type DeleteReceipt_MutationVariables = Exact<{
  walletItemId: Scalars['String'];
}>;


export type DeleteReceipt_Mutation_Op_ = { __typename?: 'Mutation', deleteReceiptForWalletItem: { __typename: 'AuthorizationError' } | { __typename: 'DeleteReceiptForWalletItemMutationSuccess', updatedWalletItem: { __typename?: 'IdentifiedWalletItem', id: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } | { __typename?: 'UnidentifiedWalletItem', unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, id: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } } | { __typename: 'NonExistingWalletItemError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } | { __typename: 'VerifiedItemCannotUpdateError' } };

export type RequestProtection_MutationVariables = Exact<{
  input: RequestProtectionForWalletItemInput;
}>;


export type RequestProtection_Mutation_Op_ = { __typename?: 'Mutation', requestProtectionForWalletItem: { __typename: 'AuthorizationError' } | { __typename: 'ConsentError' } | { __typename: 'InvalidDateOfBirthError' } | { __typename: 'InvalidLegalNameError' } | { __typename: 'NonExistingWalletItemError' } | { __typename: 'RequestProtectionForWalletItemMutationSuccess', walletItemId: string } | { __typename: 'ThrottlingError' } | { __typename: 'UnidentifiedItemCannotHaveProtectionError' } | { __typename: 'UnknownError' } };

export type AddWalletItemFromReceipt_MutationVariables = Exact<{
  receiptRawString: Scalars['String'];
}>;


export type AddWalletItemFromReceipt_Mutation_Op_ = { __typename?: 'Mutation', addWalletItemFromReceipt: { __typename: 'AddWalletItemFromReceiptMutationSuccess', addedWalletItem: { __typename: 'IdentifiedWalletItem', protectionState: WalletItemProtectionStateEnumType, id: string, createdAt: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, product: { __typename?: 'Product', id: string, name: string, currentRetailPrice: { __typename?: 'Money', amount: number, currency: Currency }, currentResalePrice: { __typename?: 'Money', amount: number, currency: Currency }, brand: { __typename?: 'ManagedBrand', name: string } | { __typename?: 'SomeBrand', name: string } }, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } | { __typename: 'UnidentifiedWalletItem', id: string, unidentifiedBrandName?: Maybe<string>, unidentifiedProductName?: Maybe<string>, visibility: WalletItemVisibilityEnumType, createdAt: string, moderationFlag: WalletItemModerationFlagEnumType, hasReceiptUpload: boolean, receiptImage: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } }, image: { __typename?: 'Image', url: string, width: number, height: number, lqip: { __typename?: 'LQIPImage', url: string, width: number, height: number, strategy: LqipStrategy } } } } | { __typename: 'AuthorizationError' } | { __typename: 'ReceiptRawFileError' } | { __typename: 'ThrottlingError' } | { __typename: 'UnknownError' } };

export type RegisterGmailAuth_MutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type RegisterGmailAuth_Mutation_Op_ = { __typename?: 'Mutation', registerGmailAuth: { __typename?: 'AuthorizationError' } | { __typename?: 'RegisterGmailAuthMutationSuccess', status: boolean } | { __typename?: 'ThrottlingError' } | { __typename?: 'UnknownError' } };

export const WalletItemComponentFieldsHelperFragmentDoc = gql`
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
export const CurrentUser_Document = gql`
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

/**
 * __useCurrentUser_Query__
 *
 * To run a query within a React component, call `useCurrentUser_Query` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUser_Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUser_Query({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUser_Query(baseOptions?: Apollo.QueryHookOptions<CurrentUser_Query_Op_, CurrentUser_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUser_Query_Op_, CurrentUser_QueryVariables>(CurrentUser_Document, options);
      }
export function useCurrentUser_LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUser_Query_Op_, CurrentUser_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUser_Query_Op_, CurrentUser_QueryVariables>(CurrentUser_Document, options);
        }
export type CurrentUser_QueryHookResult = ReturnType<typeof useCurrentUser_Query>;
export type CurrentUser_LazyQueryHookResult = ReturnType<typeof useCurrentUser_LazyQuery>;
export type CurrentUser_QueryResult = Apollo.QueryResult<CurrentUser_Query_Op_, CurrentUser_QueryVariables>;
export const RequestSignInToken_Document = gql`
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
export type RequestSignInToken_MutationFn = Apollo.MutationFunction<RequestSignInToken_Mutation_Op_, RequestSignInToken_MutationVariables>;

/**
 * __useRequestSignInToken_Mutation__
 *
 * To run a mutation, you first call `useRequestSignInToken_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestSignInToken_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestSignInTokenMutation, { data, loading, error }] = useRequestSignInToken_Mutation({
 *   variables: {
 *      email: // value for 'email'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useRequestSignInToken_Mutation(baseOptions?: Apollo.MutationHookOptions<RequestSignInToken_Mutation_Op_, RequestSignInToken_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestSignInToken_Mutation_Op_, RequestSignInToken_MutationVariables>(RequestSignInToken_Document, options);
      }
export type RequestSignInToken_MutationHookResult = ReturnType<typeof useRequestSignInToken_Mutation>;
export type RequestSignInToken_MutationResult = Apollo.MutationResult<RequestSignInToken_Mutation_Op_>;
export type RequestSignInToken_MutationOptions = Apollo.BaseMutationOptions<RequestSignInToken_Mutation_Op_, RequestSignInToken_MutationVariables>;
export const RequestSignUpToken_Document = gql`
    mutation requestSignUpToken_($email: EmailSignUpProvider, $affiliateId: String) {
  requestSignUpToken(email: $email, affiliateId: $affiliateId) {
    __typename
    ... on RequestSignUpTokenMutationSuccess {
      tokenUuid
    }
  }
}
    `;
export type RequestSignUpToken_MutationFn = Apollo.MutationFunction<RequestSignUpToken_Mutation_Op_, RequestSignUpToken_MutationVariables>;

/**
 * __useRequestSignUpToken_Mutation__
 *
 * To run a mutation, you first call `useRequestSignUpToken_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestSignUpToken_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestSignUpTokenMutation, { data, loading, error }] = useRequestSignUpToken_Mutation({
 *   variables: {
 *      email: // value for 'email'
 *      affiliateId: // value for 'affiliateId'
 *   },
 * });
 */
export function useRequestSignUpToken_Mutation(baseOptions?: Apollo.MutationHookOptions<RequestSignUpToken_Mutation_Op_, RequestSignUpToken_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestSignUpToken_Mutation_Op_, RequestSignUpToken_MutationVariables>(RequestSignUpToken_Document, options);
      }
export type RequestSignUpToken_MutationHookResult = ReturnType<typeof useRequestSignUpToken_Mutation>;
export type RequestSignUpToken_MutationResult = Apollo.MutationResult<RequestSignUpToken_Mutation_Op_>;
export type RequestSignUpToken_MutationOptions = Apollo.BaseMutationOptions<RequestSignUpToken_Mutation_Op_, RequestSignUpToken_MutationVariables>;
export const SignOut_Document = gql`
    mutation signOut_ {
  signOut {
    __typename
  }
}
    `;
export type SignOut_MutationFn = Apollo.MutationFunction<SignOut_Mutation_Op_, SignOut_MutationVariables>;

/**
 * __useSignOut_Mutation__
 *
 * To run a mutation, you first call `useSignOut_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOut_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOut_Mutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOut_Mutation(baseOptions?: Apollo.MutationHookOptions<SignOut_Mutation_Op_, SignOut_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOut_Mutation_Op_, SignOut_MutationVariables>(SignOut_Document, options);
      }
export type SignOut_MutationHookResult = ReturnType<typeof useSignOut_Mutation>;
export type SignOut_MutationResult = Apollo.MutationResult<SignOut_Mutation_Op_>;
export type SignOut_MutationOptions = Apollo.BaseMutationOptions<SignOut_Mutation_Op_, SignOut_MutationVariables>;
export const SignIn_Document = gql`
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
export type SignIn_MutationFn = Apollo.MutationFunction<SignIn_Mutation_Op_, SignIn_MutationVariables>;

/**
 * __useSignIn_Mutation__
 *
 * To run a mutation, you first call `useSignIn_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignIn_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignIn_Mutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSignIn_Mutation(baseOptions?: Apollo.MutationHookOptions<SignIn_Mutation_Op_, SignIn_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignIn_Mutation_Op_, SignIn_MutationVariables>(SignIn_Document, options);
      }
export type SignIn_MutationHookResult = ReturnType<typeof useSignIn_Mutation>;
export type SignIn_MutationResult = Apollo.MutationResult<SignIn_Mutation_Op_>;
export type SignIn_MutationOptions = Apollo.BaseMutationOptions<SignIn_Mutation_Op_, SignIn_MutationVariables>;
export const SignUp_Document = gql`
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
export type SignUp_MutationFn = Apollo.MutationFunction<SignUp_Mutation_Op_, SignUp_MutationVariables>;

/**
 * __useSignUp_Mutation__
 *
 * To run a mutation, you first call `useSignUp_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUp_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUp_Mutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSignUp_Mutation(baseOptions?: Apollo.MutationHookOptions<SignUp_Mutation_Op_, SignUp_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUp_Mutation_Op_, SignUp_MutationVariables>(SignUp_Document, options);
      }
export type SignUp_MutationHookResult = ReturnType<typeof useSignUp_Mutation>;
export type SignUp_MutationResult = Apollo.MutationResult<SignUp_Mutation_Op_>;
export type SignUp_MutationOptions = Apollo.BaseMutationOptions<SignUp_Mutation_Op_, SignUp_MutationVariables>;
export const UnboxingExperienceForReceipt_Document = gql`
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

/**
 * __useUnboxingExperienceForReceipt_Query__
 *
 * To run a query within a React component, call `useUnboxingExperienceForReceipt_Query` and pass it any options that fit your needs.
 * When your component renders, `useUnboxingExperienceForReceipt_Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnboxingExperienceForReceipt_Query({
 *   variables: {
 *      receiptId: // value for 'receiptId'
 *   },
 * });
 */
export function useUnboxingExperienceForReceipt_Query(baseOptions: Apollo.QueryHookOptions<UnboxingExperienceForReceipt_Query_Op_, UnboxingExperienceForReceipt_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnboxingExperienceForReceipt_Query_Op_, UnboxingExperienceForReceipt_QueryVariables>(UnboxingExperienceForReceipt_Document, options);
      }
export function useUnboxingExperienceForReceipt_LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnboxingExperienceForReceipt_Query_Op_, UnboxingExperienceForReceipt_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnboxingExperienceForReceipt_Query_Op_, UnboxingExperienceForReceipt_QueryVariables>(UnboxingExperienceForReceipt_Document, options);
        }
export type UnboxingExperienceForReceipt_QueryHookResult = ReturnType<typeof useUnboxingExperienceForReceipt_Query>;
export type UnboxingExperienceForReceipt_LazyQueryHookResult = ReturnType<typeof useUnboxingExperienceForReceipt_LazyQuery>;
export type UnboxingExperienceForReceipt_QueryResult = Apollo.QueryResult<UnboxingExperienceForReceipt_Query_Op_, UnboxingExperienceForReceipt_QueryVariables>;
export const RegisterImageUploads_Document = gql`
    mutation registerImageUploads_($input: [RegisterSingleImageUploadInput!]!, $imageAdjustments: ImageAdjustmentsInput!) {
  registerImageUploads(input: $input) {
    ... on RegisterImageUploadsMutationSuccess {
      __typename
      imageUploads {
        id
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
      }
    }
  }
}
    `;
export type RegisterImageUploads_MutationFn = Apollo.MutationFunction<RegisterImageUploads_Mutation_Op_, RegisterImageUploads_MutationVariables>;

/**
 * __useRegisterImageUploads_Mutation__
 *
 * To run a mutation, you first call `useRegisterImageUploads_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterImageUploads_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerImageUploadsMutation, { data, loading, error }] = useRegisterImageUploads_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *      imageAdjustments: // value for 'imageAdjustments'
 *   },
 * });
 */
export function useRegisterImageUploads_Mutation(baseOptions?: Apollo.MutationHookOptions<RegisterImageUploads_Mutation_Op_, RegisterImageUploads_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterImageUploads_Mutation_Op_, RegisterImageUploads_MutationVariables>(RegisterImageUploads_Document, options);
      }
export type RegisterImageUploads_MutationHookResult = ReturnType<typeof useRegisterImageUploads_Mutation>;
export type RegisterImageUploads_MutationResult = Apollo.MutationResult<RegisterImageUploads_Mutation_Op_>;
export type RegisterImageUploads_MutationOptions = Apollo.BaseMutationOptions<RegisterImageUploads_Mutation_Op_, RegisterImageUploads_MutationVariables>;
export const RegisterInstagramOAuthToken_Document = gql`
    mutation registerInstagramOAuthToken_($token: String!) {
  registerInstagramOAuthToken(shortLivedToken: $token) {
    __typename
    ... on RegisterInstagramOAuthTokenMutationSuccess {
      instagramOAuth {
        instagramUserId
        isExpired
        accessToken
        id
      }
    }
    ... on InstagramApiError {
      id
      message
      __typename
    }
  }
}
    `;
export type RegisterInstagramOAuthToken_MutationFn = Apollo.MutationFunction<RegisterInstagramOAuthToken_Mutation_Op_, RegisterInstagramOAuthToken_MutationVariables>;

/**
 * __useRegisterInstagramOAuthToken_Mutation__
 *
 * To run a mutation, you first call `useRegisterInstagramOAuthToken_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterInstagramOAuthToken_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerInstagramOAuthTokenMutation, { data, loading, error }] = useRegisterInstagramOAuthToken_Mutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRegisterInstagramOAuthToken_Mutation(baseOptions?: Apollo.MutationHookOptions<RegisterInstagramOAuthToken_Mutation_Op_, RegisterInstagramOAuthToken_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterInstagramOAuthToken_Mutation_Op_, RegisterInstagramOAuthToken_MutationVariables>(RegisterInstagramOAuthToken_Document, options);
      }
export type RegisterInstagramOAuthToken_MutationHookResult = ReturnType<typeof useRegisterInstagramOAuthToken_Mutation>;
export type RegisterInstagramOAuthToken_MutationResult = Apollo.MutationResult<RegisterInstagramOAuthToken_Mutation_Op_>;
export type RegisterInstagramOAuthToken_MutationOptions = Apollo.BaseMutationOptions<RegisterInstagramOAuthToken_Mutation_Op_, RegisterInstagramOAuthToken_MutationVariables>;
export const RequestDeleteUserTokenDocument = gql`
    mutation requestDeleteUserToken {
  requestDeleteAccountToken {
    ... on RequestDeleteAccountTokenMutationSuccess {
      tokenUuid
      __typename
    }
  }
}
    `;
export type RequestDeleteUserTokenMutationFn = Apollo.MutationFunction<RequestDeleteUserTokenMutation_Op_, RequestDeleteUserTokenMutationVariables>;

/**
 * __useRequestDeleteUserTokenMutation__
 *
 * To run a mutation, you first call `useRequestDeleteUserTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestDeleteUserTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestDeleteUserTokenMutation, { data, loading, error }] = useRequestDeleteUserTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestDeleteUserTokenMutation(baseOptions?: Apollo.MutationHookOptions<RequestDeleteUserTokenMutation_Op_, RequestDeleteUserTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestDeleteUserTokenMutation_Op_, RequestDeleteUserTokenMutationVariables>(RequestDeleteUserTokenDocument, options);
      }
export type RequestDeleteUserTokenMutationHookResult = ReturnType<typeof useRequestDeleteUserTokenMutation>;
export type RequestDeleteUserTokenMutationResult = Apollo.MutationResult<RequestDeleteUserTokenMutation_Op_>;
export type RequestDeleteUserTokenMutationOptions = Apollo.BaseMutationOptions<RequestDeleteUserTokenMutation_Op_, RequestDeleteUserTokenMutationVariables>;
export const UpdateUserProfileSettingsDocument = gql`
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
export type UpdateUserProfileSettingsMutationFn = Apollo.MutationFunction<UpdateUserProfileSettingsMutation_Op_, UpdateUserProfileSettingsMutationVariables>;

/**
 * __useUpdateUserProfileSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileSettingsMutation, { data, loading, error }] = useUpdateUserProfileSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileSettingsMutation_Op_, UpdateUserProfileSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileSettingsMutation_Op_, UpdateUserProfileSettingsMutationVariables>(UpdateUserProfileSettingsDocument, options);
      }
export type UpdateUserProfileSettingsMutationHookResult = ReturnType<typeof useUpdateUserProfileSettingsMutation>;
export type UpdateUserProfileSettingsMutationResult = Apollo.MutationResult<UpdateUserProfileSettingsMutation_Op_>;
export type UpdateUserProfileSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileSettingsMutation_Op_, UpdateUserProfileSettingsMutationVariables>;
export const DeleteUserAccountDocument = gql`
    mutation deleteUserAccount($token: String!) {
  deleteAccount(token: $token) {
    ... on DeleteAccountMutationSuccess {
      success
    }
  }
}
    `;
export type DeleteUserAccountMutationFn = Apollo.MutationFunction<DeleteUserAccountMutation_Op_, DeleteUserAccountMutationVariables>;

/**
 * __useDeleteUserAccountMutation__
 *
 * To run a mutation, you first call `useDeleteUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAccountMutation, { data, loading, error }] = useDeleteUserAccountMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useDeleteUserAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAccountMutation_Op_, DeleteUserAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAccountMutation_Op_, DeleteUserAccountMutationVariables>(DeleteUserAccountDocument, options);
      }
export type DeleteUserAccountMutationHookResult = ReturnType<typeof useDeleteUserAccountMutation>;
export type DeleteUserAccountMutationResult = Apollo.MutationResult<DeleteUserAccountMutation_Op_>;
export type DeleteUserAccountMutationOptions = Apollo.BaseMutationOptions<DeleteUserAccountMutation_Op_, DeleteUserAccountMutationVariables>;
export const CreateAuthUrl_Document = gql`
    mutation createAuthUrl_($email: String!) {
  createAuthUrl(email: $email) {
    __typename
    ... on CreateAuthUrlMutationSuccess {
      url
    }
  }
}
    `;
export type CreateAuthUrl_MutationFn = Apollo.MutationFunction<CreateAuthUrl_Mutation_Op_, CreateAuthUrl_MutationVariables>;

/**
 * __useCreateAuthUrl_Mutation__
 *
 * To run a mutation, you first call `useCreateAuthUrl_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthUrl_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthUrlMutation, { data, loading, error }] = useCreateAuthUrl_Mutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateAuthUrl_Mutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthUrl_Mutation_Op_, CreateAuthUrl_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthUrl_Mutation_Op_, CreateAuthUrl_MutationVariables>(CreateAuthUrl_Document, options);
      }
export type CreateAuthUrl_MutationHookResult = ReturnType<typeof useCreateAuthUrl_Mutation>;
export type CreateAuthUrl_MutationResult = Apollo.MutationResult<CreateAuthUrl_Mutation_Op_>;
export type CreateAuthUrl_MutationOptions = Apollo.BaseMutationOptions<CreateAuthUrl_Mutation_Op_, CreateAuthUrl_MutationVariables>;
export const MyWalletPageDocument = gql`
    query myWalletPage($imageAdjustments: ImageAdjustmentsInput!, $limit: Int, $offset: Int, $sort: WalletItemsSortTypeInput) {
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

/**
 * __useMyWalletPageQuery__
 *
 * To run a query within a React component, call `useMyWalletPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyWalletPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyWalletPageQuery({
 *   variables: {
 *      imageAdjustments: // value for 'imageAdjustments'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useMyWalletPageQuery(baseOptions: Apollo.QueryHookOptions<MyWalletPageQuery_Op_, MyWalletPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyWalletPageQuery_Op_, MyWalletPageQueryVariables>(MyWalletPageDocument, options);
      }
export function useMyWalletPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyWalletPageQuery_Op_, MyWalletPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyWalletPageQuery_Op_, MyWalletPageQueryVariables>(MyWalletPageDocument, options);
        }
export type MyWalletPageQueryHookResult = ReturnType<typeof useMyWalletPageQuery>;
export type MyWalletPageLazyQueryHookResult = ReturnType<typeof useMyWalletPageLazyQuery>;
export type MyWalletPageQueryResult = Apollo.QueryResult<MyWalletPageQuery_Op_, MyWalletPageQueryVariables>;
export const AddWalletItem_Document = gql`
    mutation addWalletItem_($item: AddWalletItemInput!, $imageAdjustments: ImageAdjustmentsInput!) {
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
export type AddWalletItem_MutationFn = Apollo.MutationFunction<AddWalletItem_Mutation_Op_, AddWalletItem_MutationVariables>;

/**
 * __useAddWalletItem_Mutation__
 *
 * To run a mutation, you first call `useAddWalletItem_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWalletItem_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWalletItemMutation, { data, loading, error }] = useAddWalletItem_Mutation({
 *   variables: {
 *      item: // value for 'item'
 *      imageAdjustments: // value for 'imageAdjustments'
 *   },
 * });
 */
export function useAddWalletItem_Mutation(baseOptions?: Apollo.MutationHookOptions<AddWalletItem_Mutation_Op_, AddWalletItem_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWalletItem_Mutation_Op_, AddWalletItem_MutationVariables>(AddWalletItem_Document, options);
      }
export type AddWalletItem_MutationHookResult = ReturnType<typeof useAddWalletItem_Mutation>;
export type AddWalletItem_MutationResult = Apollo.MutationResult<AddWalletItem_Mutation_Op_>;
export type AddWalletItem_MutationOptions = Apollo.BaseMutationOptions<AddWalletItem_Mutation_Op_, AddWalletItem_MutationVariables>;
export const DeleteWalletItems_Document = gql`
    mutation deleteWalletItems_($items: [DeleteWalletItemInput!]!) {
  deleteWalletItems(items: $items) {
    __typename
  }
}
    `;
export type DeleteWalletItems_MutationFn = Apollo.MutationFunction<DeleteWalletItems_Mutation_Op_, DeleteWalletItems_MutationVariables>;

/**
 * __useDeleteWalletItems_Mutation__
 *
 * To run a mutation, you first call `useDeleteWalletItems_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWalletItems_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWalletItemsMutation, { data, loading, error }] = useDeleteWalletItems_Mutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useDeleteWalletItems_Mutation(baseOptions?: Apollo.MutationHookOptions<DeleteWalletItems_Mutation_Op_, DeleteWalletItems_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWalletItems_Mutation_Op_, DeleteWalletItems_MutationVariables>(DeleteWalletItems_Document, options);
      }
export type DeleteWalletItems_MutationHookResult = ReturnType<typeof useDeleteWalletItems_Mutation>;
export type DeleteWalletItems_MutationResult = Apollo.MutationResult<DeleteWalletItems_Mutation_Op_>;
export type DeleteWalletItems_MutationOptions = Apollo.BaseMutationOptions<DeleteWalletItems_Mutation_Op_, DeleteWalletItems_MutationVariables>;
export const IngestGmailInboxMailIds_Document = gql`
    mutation ingestGmailInboxMailIds_ {
  ingestGmailInboxMailIds {
    __typename
    ... on IngestGmailInboxMailIdsMutationSuccess {
      mailIds
    }
  }
}
    `;
export type IngestGmailInboxMailIds_MutationFn = Apollo.MutationFunction<IngestGmailInboxMailIds_Mutation_Op_, IngestGmailInboxMailIds_MutationVariables>;

/**
 * __useIngestGmailInboxMailIds_Mutation__
 *
 * To run a mutation, you first call `useIngestGmailInboxMailIds_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIngestGmailInboxMailIds_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ingestGmailInboxMailIdsMutation, { data, loading, error }] = useIngestGmailInboxMailIds_Mutation({
 *   variables: {
 *   },
 * });
 */
export function useIngestGmailInboxMailIds_Mutation(baseOptions?: Apollo.MutationHookOptions<IngestGmailInboxMailIds_Mutation_Op_, IngestGmailInboxMailIds_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IngestGmailInboxMailIds_Mutation_Op_, IngestGmailInboxMailIds_MutationVariables>(IngestGmailInboxMailIds_Document, options);
      }
export type IngestGmailInboxMailIds_MutationHookResult = ReturnType<typeof useIngestGmailInboxMailIds_Mutation>;
export type IngestGmailInboxMailIds_MutationResult = Apollo.MutationResult<IngestGmailInboxMailIds_Mutation_Op_>;
export type IngestGmailInboxMailIds_MutationOptions = Apollo.BaseMutationOptions<IngestGmailInboxMailIds_Mutation_Op_, IngestGmailInboxMailIds_MutationVariables>;
export const UpdateUserAvatarDocument = gql`
    mutation updateUserAvatar($crop: ImageCropInput, $input: RegisterSingleImageUploadInput!) {
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
export type UpdateUserAvatarMutationFn = Apollo.MutationFunction<UpdateUserAvatarMutation_Op_, UpdateUserAvatarMutationVariables>;

/**
 * __useUpdateUserAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAvatarMutation, { data, loading, error }] = useUpdateUserAvatarMutation({
 *   variables: {
 *      crop: // value for 'crop'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAvatarMutation_Op_, UpdateUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAvatarMutation_Op_, UpdateUserAvatarMutationVariables>(UpdateUserAvatarDocument, options);
      }
export type UpdateUserAvatarMutationHookResult = ReturnType<typeof useUpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationResult = Apollo.MutationResult<UpdateUserAvatarMutation_Op_>;
export type UpdateUserAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateUserAvatarMutation_Op_, UpdateUserAvatarMutationVariables>;
export const UpdateItem_Document = gql`
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
        image(adjustments: {height: 215, width: 246}) {
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
export type UpdateItem_MutationFn = Apollo.MutationFunction<UpdateItem_Mutation_Op_, UpdateItem_MutationVariables>;

/**
 * __useUpdateItem_Mutation__
 *
 * To run a mutation, you first call `useUpdateItem_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItem_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItem_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItem_Mutation(baseOptions?: Apollo.MutationHookOptions<UpdateItem_Mutation_Op_, UpdateItem_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItem_Mutation_Op_, UpdateItem_MutationVariables>(UpdateItem_Document, options);
      }
export type UpdateItem_MutationHookResult = ReturnType<typeof useUpdateItem_Mutation>;
export type UpdateItem_MutationResult = Apollo.MutationResult<UpdateItem_Mutation_Op_>;
export type UpdateItem_MutationOptions = Apollo.BaseMutationOptions<UpdateItem_Mutation_Op_, UpdateItem_MutationVariables>;
export const UpdateSettingsDocument = gql`
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
export type UpdateSettingsMutationFn = Apollo.MutationFunction<UpdateSettingsMutation_Op_, UpdateSettingsMutationVariables>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      settings: // value for 'settings'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSettingsMutation_Op_, UpdateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSettingsMutation_Op_, UpdateSettingsMutationVariables>(UpdateSettingsDocument, options);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = Apollo.MutationResult<UpdateSettingsMutation_Op_>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateSettingsMutation_Op_, UpdateSettingsMutationVariables>;
export const UpdateWalletItemsVisibilityDocument = gql`
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
export type UpdateWalletItemsVisibilityMutationFn = Apollo.MutationFunction<UpdateWalletItemsVisibilityMutation_Op_, UpdateWalletItemsVisibilityMutationVariables>;

/**
 * __useUpdateWalletItemsVisibilityMutation__
 *
 * To run a mutation, you first call `useUpdateWalletItemsVisibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWalletItemsVisibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWalletItemsVisibilityMutation, { data, loading, error }] = useUpdateWalletItemsVisibilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWalletItemsVisibilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWalletItemsVisibilityMutation_Op_, UpdateWalletItemsVisibilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWalletItemsVisibilityMutation_Op_, UpdateWalletItemsVisibilityMutationVariables>(UpdateWalletItemsVisibilityDocument, options);
      }
export type UpdateWalletItemsVisibilityMutationHookResult = ReturnType<typeof useUpdateWalletItemsVisibilityMutation>;
export type UpdateWalletItemsVisibilityMutationResult = Apollo.MutationResult<UpdateWalletItemsVisibilityMutation_Op_>;
export type UpdateWalletItemsVisibilityMutationOptions = Apollo.BaseMutationOptions<UpdateWalletItemsVisibilityMutation_Op_, UpdateWalletItemsVisibilityMutationVariables>;
export const AddWalletItemWithImageUrl_Document = gql`
    mutation addWalletItemWithImageUrl_($input: AddWalletItemWithImageUrlInput!) {
  addWalletItemWithImageUrl(walletItem: $input) {
    ... on AddWalletItemWithImageUrlMutationSuccess {
      walletItemId
    }
  }
}
    `;
export type AddWalletItemWithImageUrl_MutationFn = Apollo.MutationFunction<AddWalletItemWithImageUrl_Mutation_Op_, AddWalletItemWithImageUrl_MutationVariables>;

/**
 * __useAddWalletItemWithImageUrl_Mutation__
 *
 * To run a mutation, you first call `useAddWalletItemWithImageUrl_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWalletItemWithImageUrl_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWalletItemWithImageUrlMutation, { data, loading, error }] = useAddWalletItemWithImageUrl_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddWalletItemWithImageUrl_Mutation(baseOptions?: Apollo.MutationHookOptions<AddWalletItemWithImageUrl_Mutation_Op_, AddWalletItemWithImageUrl_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWalletItemWithImageUrl_Mutation_Op_, AddWalletItemWithImageUrl_MutationVariables>(AddWalletItemWithImageUrl_Document, options);
      }
export type AddWalletItemWithImageUrl_MutationHookResult = ReturnType<typeof useAddWalletItemWithImageUrl_Mutation>;
export type AddWalletItemWithImageUrl_MutationResult = Apollo.MutationResult<AddWalletItemWithImageUrl_Mutation_Op_>;
export type AddWalletItemWithImageUrl_MutationOptions = Apollo.BaseMutationOptions<AddWalletItemWithImageUrl_Mutation_Op_, AddWalletItemWithImageUrl_MutationVariables>;
export const GetBrandsDocument = gql`
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

/**
 * __useGetBrandsQuery__
 *
 * To run a query within a React component, call `useGetBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetBrandsQuery(baseOptions?: Apollo.QueryHookOptions<GetBrandsQuery_Op_, GetBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBrandsQuery_Op_, GetBrandsQueryVariables>(GetBrandsDocument, options);
      }
export function useGetBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBrandsQuery_Op_, GetBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBrandsQuery_Op_, GetBrandsQueryVariables>(GetBrandsDocument, options);
        }
export type GetBrandsQueryHookResult = ReturnType<typeof useGetBrandsQuery>;
export type GetBrandsLazyQueryHookResult = ReturnType<typeof useGetBrandsLazyQuery>;
export type GetBrandsQueryResult = Apollo.QueryResult<GetBrandsQuery_Op_, GetBrandsQueryVariables>;
export const GetBrandProductsDocument = gql`
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

/**
 * __useGetBrandProductsQuery__
 *
 * To run a query within a React component, call `useGetBrandProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandProductsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      productSearch: // value for 'productSearch'
 *   },
 * });
 */
export function useGetBrandProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetBrandProductsQuery_Op_, GetBrandProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBrandProductsQuery_Op_, GetBrandProductsQueryVariables>(GetBrandProductsDocument, options);
      }
export function useGetBrandProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBrandProductsQuery_Op_, GetBrandProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBrandProductsQuery_Op_, GetBrandProductsQueryVariables>(GetBrandProductsDocument, options);
        }
export type GetBrandProductsQueryHookResult = ReturnType<typeof useGetBrandProductsQuery>;
export type GetBrandProductsLazyQueryHookResult = ReturnType<typeof useGetBrandProductsLazyQuery>;
export type GetBrandProductsQueryResult = Apollo.QueryResult<GetBrandProductsQuery_Op_, GetBrandProductsQueryVariables>;
export const AddReceipt_Document = gql`
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
export type AddReceipt_MutationFn = Apollo.MutationFunction<AddReceipt_Mutation_Op_, AddReceipt_MutationVariables>;

/**
 * __useAddReceipt_Mutation__
 *
 * To run a mutation, you first call `useAddReceipt_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReceipt_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReceiptMutation, { data, loading, error }] = useAddReceipt_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddReceipt_Mutation(baseOptions?: Apollo.MutationHookOptions<AddReceipt_Mutation_Op_, AddReceipt_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReceipt_Mutation_Op_, AddReceipt_MutationVariables>(AddReceipt_Document, options);
      }
export type AddReceipt_MutationHookResult = ReturnType<typeof useAddReceipt_Mutation>;
export type AddReceipt_MutationResult = Apollo.MutationResult<AddReceipt_Mutation_Op_>;
export type AddReceipt_MutationOptions = Apollo.BaseMutationOptions<AddReceipt_Mutation_Op_, AddReceipt_MutationVariables>;
export const DeleteReceipt_Document = gql`
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
export type DeleteReceipt_MutationFn = Apollo.MutationFunction<DeleteReceipt_Mutation_Op_, DeleteReceipt_MutationVariables>;

/**
 * __useDeleteReceipt_Mutation__
 *
 * To run a mutation, you first call `useDeleteReceipt_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReceipt_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReceiptMutation, { data, loading, error }] = useDeleteReceipt_Mutation({
 *   variables: {
 *      walletItemId: // value for 'walletItemId'
 *   },
 * });
 */
export function useDeleteReceipt_Mutation(baseOptions?: Apollo.MutationHookOptions<DeleteReceipt_Mutation_Op_, DeleteReceipt_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReceipt_Mutation_Op_, DeleteReceipt_MutationVariables>(DeleteReceipt_Document, options);
      }
export type DeleteReceipt_MutationHookResult = ReturnType<typeof useDeleteReceipt_Mutation>;
export type DeleteReceipt_MutationResult = Apollo.MutationResult<DeleteReceipt_Mutation_Op_>;
export type DeleteReceipt_MutationOptions = Apollo.BaseMutationOptions<DeleteReceipt_Mutation_Op_, DeleteReceipt_MutationVariables>;
export const RequestProtection_Document = gql`
    mutation requestProtection_($input: RequestProtectionForWalletItemInput!) {
  requestProtectionForWalletItem(input: $input) {
    __typename
    ... on RequestProtectionForWalletItemMutationSuccess {
      walletItemId
    }
  }
}
    `;
export type RequestProtection_MutationFn = Apollo.MutationFunction<RequestProtection_Mutation_Op_, RequestProtection_MutationVariables>;

/**
 * __useRequestProtection_Mutation__
 *
 * To run a mutation, you first call `useRequestProtection_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestProtection_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestProtectionMutation, { data, loading, error }] = useRequestProtection_Mutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRequestProtection_Mutation(baseOptions?: Apollo.MutationHookOptions<RequestProtection_Mutation_Op_, RequestProtection_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestProtection_Mutation_Op_, RequestProtection_MutationVariables>(RequestProtection_Document, options);
      }
export type RequestProtection_MutationHookResult = ReturnType<typeof useRequestProtection_Mutation>;
export type RequestProtection_MutationResult = Apollo.MutationResult<RequestProtection_Mutation_Op_>;
export type RequestProtection_MutationOptions = Apollo.BaseMutationOptions<RequestProtection_Mutation_Op_, RequestProtection_MutationVariables>;
export const AddWalletItemFromReceipt_Document = gql`
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
export type AddWalletItemFromReceipt_MutationFn = Apollo.MutationFunction<AddWalletItemFromReceipt_Mutation_Op_, AddWalletItemFromReceipt_MutationVariables>;

/**
 * __useAddWalletItemFromReceipt_Mutation__
 *
 * To run a mutation, you first call `useAddWalletItemFromReceipt_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWalletItemFromReceipt_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWalletItemFromReceiptMutation, { data, loading, error }] = useAddWalletItemFromReceipt_Mutation({
 *   variables: {
 *      receiptRawString: // value for 'receiptRawString'
 *   },
 * });
 */
export function useAddWalletItemFromReceipt_Mutation(baseOptions?: Apollo.MutationHookOptions<AddWalletItemFromReceipt_Mutation_Op_, AddWalletItemFromReceipt_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddWalletItemFromReceipt_Mutation_Op_, AddWalletItemFromReceipt_MutationVariables>(AddWalletItemFromReceipt_Document, options);
      }
export type AddWalletItemFromReceipt_MutationHookResult = ReturnType<typeof useAddWalletItemFromReceipt_Mutation>;
export type AddWalletItemFromReceipt_MutationResult = Apollo.MutationResult<AddWalletItemFromReceipt_Mutation_Op_>;
export type AddWalletItemFromReceipt_MutationOptions = Apollo.BaseMutationOptions<AddWalletItemFromReceipt_Mutation_Op_, AddWalletItemFromReceipt_MutationVariables>;
export const RegisterGmailAuth_Document = gql`
    mutation registerGmailAuth_($code: String!) {
  registerGmailAuth(code: $code) {
    ... on RegisterGmailAuthMutationSuccess {
      status
    }
  }
}
    `;
export type RegisterGmailAuth_MutationFn = Apollo.MutationFunction<RegisterGmailAuth_Mutation_Op_, RegisterGmailAuth_MutationVariables>;

/**
 * __useRegisterGmailAuth_Mutation__
 *
 * To run a mutation, you first call `useRegisterGmailAuth_Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterGmailAuth_Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerGmailAuthMutation, { data, loading, error }] = useRegisterGmailAuth_Mutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRegisterGmailAuth_Mutation(baseOptions?: Apollo.MutationHookOptions<RegisterGmailAuth_Mutation_Op_, RegisterGmailAuth_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterGmailAuth_Mutation_Op_, RegisterGmailAuth_MutationVariables>(RegisterGmailAuth_Document, options);
      }
export type RegisterGmailAuth_MutationHookResult = ReturnType<typeof useRegisterGmailAuth_Mutation>;
export type RegisterGmailAuth_MutationResult = Apollo.MutationResult<RegisterGmailAuth_Mutation_Op_>;
export type RegisterGmailAuth_MutationOptions = Apollo.BaseMutationOptions<RegisterGmailAuth_Mutation_Op_, RegisterGmailAuth_MutationVariables>;