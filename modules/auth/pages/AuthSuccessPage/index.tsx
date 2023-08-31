import { useRouter } from 'next/router';

import {
  RequestSignInTokenResult,
  RequestSignUpTokenResult,
} from '../../components/RequestTokenSuccess';
import { AuthNav } from '@/components/v2';
import { StyledAuthPageInner } from '../../components/AuthPageLayout/AuthPageLayout.styled';

import { AuthFooter } from '@/components/v2/AuthFooter';

export const AuthSuccessPage = () => {
  const router = useRouter();
  const { email, source, name } = router.query;
  return (
    <>
      <AuthNav />
      <StyledAuthPageInner>
        {source === 'signup' ? (
          <RequestSignUpTokenResult
            email={email as string}
            fullName={name as string}
          />
        ) : (
          <RequestSignInTokenResult email={email as string} />
        )}
      </StyledAuthPageInner>
      <AuthFooter />
    </>
  );
};
