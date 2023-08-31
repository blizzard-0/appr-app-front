import { Meta, Navbar } from '@/components/v2';
import React from 'react';

export const WalletPageLayout: React.FC<{
  children: React.ReactNode;
  primaryEmail: string;
  userName: string;
  avatarUrl?: string;
}> = ({ children, primaryEmail, userName, avatarUrl }) => {
  return (
    <>
      <Meta />
      <Navbar currentUser={{ primaryEmail, userName, avatarUrl }} />
      <div className="mt-16 pt-px mb-4 md:mb-0">{children}</div>
    </>
  );
};
