import React from 'react';
import { useCurrentUser } from './hooks';
import { ProgressIndicator } from '@/components/v2';
import { AuthRequiredPage } from './pages/AuthRequiredPage';

export const YouNeedToBeSignedInWrapper: React.FC<{
  children: React.ReactNode;
  loadingOverride?: boolean;
}> = ({ children }) => {
  const { currentUser, loading } = useCurrentUser();
  if (loading) {
    return <ProgressIndicator active />;
  } else if (!currentUser) {
    return <AuthRequiredPage />;
  }
  return <>{children}</>;
};
