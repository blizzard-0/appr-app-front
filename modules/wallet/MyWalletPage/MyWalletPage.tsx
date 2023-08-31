import React, { useMemo } from 'react';
import { WalletPageLayout } from '../components/Layout';

import { useMyWalletPageContext } from '../context';

import {
  MyWalletPageInner,
  AddWallet,
  ForwardReceipt,
  SyncGmail,
} from './Sections';
import { RequestCoverage } from './Sections/RequestCoverage';

export function MyWalletPage() {
  const { currentUser, loading, appState } = useMyWalletPageContext();
  const innerChildren = useMemo(() => {
    if (!currentUser) return null;
    if (appState === 'MyWalletPage') {
      return <MyWalletPageInner currentUser={currentUser} />;
    }
    if (appState === 'ForwardReceipt') {
      return <ForwardReceipt />;
    }
    if (appState === 'WEXForwardReceipt') {
      return <ForwardReceipt $variant="wex" />;
    }
    if (appState === 'SyncGmail') {
      return <SyncGmail />;
    }
    if (appState === 'WEXAddWallet') {
      return <AddWallet $variant="wex" />;
    }
    if (appState === 'RequestCoverage') {
      return <RequestCoverage />;
    }
    return <AddWallet />;
  }, [currentUser, appState]);

  if (loading || !currentUser) return null;

  return (
    <WalletPageLayout
      primaryEmail={currentUser.primaryEmailAddress}
      userName={currentUser.fullName}
      avatarUrl={currentUser.avatarImage?.url}
    >
      {innerChildren}
    </WalletPageLayout>
  );
}
