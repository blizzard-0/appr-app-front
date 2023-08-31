import React, { forwardRef } from 'react';
import { UserDetails } from './Default';
import { UserDetailsSticky } from './Sticky';
import { PageSticker } from '..';

interface UserDetailsSectionProps {
  stickyVisible: boolean;
}

export const UserDetailsSection = forwardRef<
  HTMLDivElement,
  UserDetailsSectionProps
>(({ stickyVisible }, ref) => {
  return (
    <>
      <UserDetails ref={ref} />
      <PageSticker visible={stickyVisible}>
        <UserDetailsSticky />
      </PageSticker>
    </>
  );
});
UserDetailsSection.displayName = 'UserDeteails';
