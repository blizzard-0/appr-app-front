import React from 'react';
import { useMyWalletPageContext } from '../../../../../context';
import { getCurrency } from '../../../../../../../utils/currency';

import { StatusDisplaySticky } from './Styles';

export const UserDetailsSticky: React.FC = () => {
  const { currentUser } = useMyWalletPageContext();

  if (!currentUser) return null;

  const {
    items: { totalCount },
    numVerifiedWalletItems,
    total,
  } = currentUser.defaultWallet;

  return (
    <div className="py-6 flex justify-center items-center">
      <StatusDisplaySticky label="Items">{totalCount}</StatusDisplaySticky>
      <StatusDisplaySticky label="Verified">
        {numVerifiedWalletItems}
      </StatusDisplaySticky>
      <StatusDisplaySticky label="Value">
        {getCurrency(total || 0)}
      </StatusDisplaySticky>
    </div>
  );
};
