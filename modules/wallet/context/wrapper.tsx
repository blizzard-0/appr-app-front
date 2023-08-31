import { AuthRequiredPage } from '@/modules/auth/pages/AuthRequiredPage';
import React from 'react';
import { useMyWalletPageContext } from '.';
import { MyWalletPageSkeleton } from '../MyWalletPage/Sections/WalletPage/components';

export const AuthWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { currentUser, loading } = useMyWalletPageContext();
  if (loading) {
    return <MyWalletPageSkeleton />;
  } else if (currentUser) {
    return <>{children}</>;
  } else {
    return <AuthRequiredPage />;
  }
};
