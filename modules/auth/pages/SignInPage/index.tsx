import React from 'react';
import { SignInForm } from '../../components/SignInForm';
import { AuthPageLayout } from '../../components/AuthPageLayout';

export function SignInPage() {
  const pageLabel = {
    header: 'Welcome back!',
    text: 'Sign in to your account.',
  };
  return (
    <AuthPageLayout>
      <SignInForm data={pageLabel} />
    </AuthPageLayout>
  );
}
