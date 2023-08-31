import { ToastOptions } from '../../../components/Toast';
import {
  MyWalletPageQuery_Op_,
  WalletItemComponentFieldsHelperFragment,
} from '../../../generated/graphql';

type WalletPageQueryCurrentUserField = MyWalletPageQuery_Op_['currentUser'] & {
  __typename: string;
};

export type WalletPageQueryCurrentUser = Omit<
  Extract<WalletPageQueryCurrentUserField, { __typename: 'CurrentUser' }>,
  '__typename'
>;

export type ToastFunc = (msg: string, options?: ToastOptions) => void;

const appStates = [
  'MyWalletPage',
  'AddWallet',
  'WEXAddWallet',
  'ForwardReceipt',
  'SyncGmail',
  'ShareReceipt',
  'WEXForwardReceipt',
  'RequestCoverage',
] as const;

export type AppState = typeof appStates[number];

export type WalletItem = WalletItemComponentFieldsHelperFragment;
