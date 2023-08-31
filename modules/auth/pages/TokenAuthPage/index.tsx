import React, { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import router from 'next/router';

import { routes } from '@/modules/routes';
import { TokenAuth, useTokenAuth } from '../../hooks';
import { ProgressIndicator } from '@/components/v2';

import {
  InvalidTokenModal,
  InvalidURLModal,
  SomethingWentWrongModal,
  AlreadyLoggedInModal,
} from '../../Modals';

const TokenAuthPageInner: React.FC<{ tokenAuth: TokenAuth }> = ({
  tokenAuth,
}) => {
  const inited = useRef(false);
  const [authState, handleTokenAuth] = useTokenAuth({
    tokenAuth,
    onSuccess: (redirectUrl?: string | null) => {
      if (redirectUrl) {
        router.push(redirectUrl);
      } else {
        router.push(routes.appFrontend.myWallet.fillURL(null));
      }
    },
  });
  const authRedirectPath =
    tokenAuth.type === 'signup'
      ? routes.appFrontend.signUp.fillPath(null)
      : routes.appFrontend.logIn.fillPath(null);

  useEffect(() => {
    if (inited.current === true) return;
    inited.current = true;
    handleTokenAuth();

    return () => {
      inited.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    authState.type === 'loading' ||
    authState.type === 'successfullyAuthenticated'
  ) {
    return <ProgressIndicator active />;
  } else if (
    authState.type === 'tokenError' &&
    (authState.error.__typename === 'InvalidTokenError' ||
      authState.error.__typename === 'JwtMalformedError' ||
      authState.error.__typename === 'TokenExpiredError')
  ) {
    return <InvalidTokenModal active redirectPath={authRedirectPath} />;
  } else if (authState.type === 'alreadyLoggedIn') {
    return <AlreadyLoggedInModal />;
  } else {
    return <SomethingWentWrongModal active redirectPath={authRedirectPath} />;
  }
};

type TokenAuthPageProps =
  | {
      shouldAttempt: false; // url has invalidURL parts
    }
  | {
      shouldAttempt: true; // will attempt auth
      tokenAuth: TokenAuth;
      affiliateId?: string;
    };

export const TokenAuthPage: NextPage<TokenAuthPageProps> = (props) => {
  if (props.shouldAttempt === false) {
    return <InvalidURLModal active />;
  } else {
    return <TokenAuthPageInner tokenAuth={props.tokenAuth} />;
  }
};

TokenAuthPage.getInitialProps = (context) => {
  const token = context.query.token;
  const authType = context.query.type;

  if (
    typeof token === 'string' &&
    (authType === 'signup' || authType === 'login')
  ) {
    return {
      shouldAttempt: true,
      tokenAuth: {
        type: authType,
        token,
      },
    };
  } else {
    return {
      shouldAttempt: false,
    };
  }
};
