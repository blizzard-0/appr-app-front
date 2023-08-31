import React from 'react';
import { Meta, AuthNav } from '@/components/v2';
import { AuthContextProvider } from '../../context';
import {
  StyledAuthPageContent,
  StyledAuthPageInner,
} from './AuthPageLayout.styled';
import { AuthFooter } from '@/components/v2/AuthFooter';

export const AuthPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AuthContextProvider>
      <Meta />
      <AuthNav />
      <StyledAuthPageInner>
        <StyledAuthPageContent>{children}</StyledAuthPageContent>
      </StyledAuthPageInner>
      <AuthFooter />
    </AuthContextProvider>
  );
};
