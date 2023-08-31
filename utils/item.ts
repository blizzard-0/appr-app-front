import { WalletItemProtectionStateEnumType } from '../generated/graphql';
import { WalletItem } from '../modules/wallet/context/types';

export const getProtectionText = (walletItem: WalletItem) => {
  if (
    walletItem.protectionState ===
    WalletItemProtectionStateEnumType.NotProtected
  ) {
    return 'Not Covered';
  } else if (
    walletItem.protectionState === WalletItemProtectionStateEnumType.Requested
  ) {
    return 'Requested';
  } else {
    return 'Covered';
  }
};

export const getCredentialText = (walletItem: WalletItem) => {
  if (
    walletItem.__typename === 'UnidentifiedWalletItem' &&
    !walletItem.hasReceiptUpload
  ) {
    return 'Unverified';
  } else if (
    walletItem.__typename === 'UnidentifiedWalletItem' &&
    walletItem.hasReceiptUpload
  ) {
    return 'Under Review';
  } else {
    return 'Verified';
  }
};
