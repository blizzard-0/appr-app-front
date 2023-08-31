import React, { forwardRef } from 'react';
import { WalletToolbar, PageSticker } from '../components';
import { WalkthroughStep } from './Walkthrough';

interface ToolbarSectionProps {
  stickyVisible: boolean;
  walkthrough?: WalkthroughStep;
}

export const WalletToolbarSection = forwardRef<
  HTMLDivElement,
  ToolbarSectionProps
>(({ stickyVisible, walkthrough }, ref) => {
  return (
    <>
      <WalletToolbar ref={ref} walkthrough={walkthrough} />
      <PageSticker visible={stickyVisible}>
        <WalletToolbar walkthrough={walkthrough} />
      </PageSticker>
    </>
  );
});
WalletToolbarSection.displayName = 'UserDeteails';
