import React, { forwardRef } from 'react';
import { truncate } from 'lodash';

import { Avatar, ProgressIndicator } from '@/components/v2';
import { getCurrency } from '../../../../../../../utils/currency';
import { useUploadUserAvatar } from '../../../../../../../hooks/useUploadUserAvatar';
import { useMyWalletPageContext } from '../../../../../context';
import { MAX_FULLNAME_LENGTH } from '../../../../../../../consts/consts';

import { PageHeader } from '..';
import { UserName, StatusDisplay, StatusWrapper } from './Styles';

export const UserDetails = forwardRef<HTMLDivElement>((_, ref) => {
  const { currentUser } = useMyWalletPageContext();
  const { uploading, uploadAvatar } = useUploadUserAvatar();

  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }
    const avatarImage = e.target.files[0];
    e.target.value = '';
    uploadAvatar(avatarImage);
  };

  if (!currentUser) return null;

  const {
    items: { totalCount },
    numVerifiedWalletItems,
    total,
  } = currentUser.defaultWallet;

  return (
    <PageHeader>
      <ProgressIndicator active={uploading} />
      <div className="w-full">
        <Avatar
          avatarUrl={currentUser.avatarImage?.url}
          userName={currentUser.fullName}
          onUploadAvatar={handleUploadAvatar}
        />
        <UserName>
          {truncate(currentUser.fullName, { length: MAX_FULLNAME_LENGTH })}
        </UserName>
        {totalCount > 0 && (
          <StatusWrapper ref={ref}>
            <StatusDisplay label="Items" border>
              {totalCount}
            </StatusDisplay>
            <StatusDisplay label="Verified" border>
              {numVerifiedWalletItems}
            </StatusDisplay>
            <StatusDisplay label="Value">
              {getCurrency(total || 0)}
            </StatusDisplay>
          </StatusWrapper>
        )}
      </div>
    </PageHeader>
  );
});
UserDetails.displayName = 'UserDetails';
