import { NextPage } from 'next';
import { SignInForm } from '@/modules/auth/components/SignInForm';

import { AuthPageLayout } from '../../components/AuthPageLayout';

export const AuthRequiredPage: NextPage = () => {
  const pageLabel = {
    header: 'Hello!',
    text: 'You need to be signed in to view this page.',
  };
  return (
    <AuthPageLayout>
      <SignInForm data={pageLabel} />
    </AuthPageLayout>
  );
};
