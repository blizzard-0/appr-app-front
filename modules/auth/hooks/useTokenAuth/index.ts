import { useCallback, useState } from 'react';
import { useSignIn_Mutation, useSignUp_Mutation } from '@/generated/graphql';
import { mixpanel } from '@/modules/mixpanel/mixpanel';

export type TokenAuth = {
  type: 'signup' | 'login';
  token: string;
};

export type CurrentUser = {
  id: string;
  primaryEmailAddress: string;
  preferredName: string;
  fullName: string;
};

type TokenError =
  | { __typename: 'InvalidTokenError' }
  | { __typename: 'TokenExpiredError' }
  | { __typename: 'JwtMalformedError' };

type AuthState =
  | {
      type: 'loading';
    }
  | {
      type: 'alreadyLoggedIn';
      currentUser: CurrentUser;
      redirectUrl?: string | null;
    }
  | {
      type: 'tokenError';
      error: TokenError;
    }
  | {
      type: 'unknownError';
      error: unknown;
    }
  | {
      type: 'successfullyAuthenticated';
      currentUser: CurrentUser;
      redirectUrl?: string | null;
    }
  | {
      type: 'sameUser';
      currentUser: CurrentUser;
    };

const useSignUp = (token: string) => {
  const [signUpMutation] = useSignUp_Mutation();
  return {
    handleSignUp: () => {
      return signUpMutation({
        variables: { token },
      })
        .then(({ data, errors }) => {
          if (errors) {
            return {
              type: 'unknownError' as const,
              error: errors[0],
            };
          } else if (data) {
            if (data.signUp.__typename === 'SignUpMutationSuccess') {
              mixpanel.alias(data.signUp.currentUser.id);
              mixpanel.track('signUp');
              return {
                currentUser: data.signUp.currentUser,
                type: 'successfullyAuthenticated' as const,
              };
            } else if (data.signUp.__typename === 'AlreadySignedInError') {
              return {
                type: 'alreadyLoggedIn' as const,
                currentUser: data.signUp.currentUser,
              };
            } else if (
              data.signUp.__typename === 'JwtMalformedError' ||
              data.signUp.__typename === 'InvalidTokenError'
            ) {
              return {
                type: 'tokenError' as const,
                error: data.signUp,
              };
            }
          }
          return {
            type: 'unknownError' as const,
            error: null,
          };
        })
        .catch((e) => {
          return {
            type: 'unknownError' as const,
            error: e,
          };
        });
    },
  };
};

const useSignIn = (token: string) => {
  const [signInMutation] = useSignIn_Mutation();
  const handleSignIn = () => {
    return signInMutation({
      variables: { token: token },
    })
      .then(({ data, errors }) => {
        if (errors) {
          return {
            type: 'unknownError' as const,
            error: errors[0],
          };
        } else if (data) {
          if (data.signIn.__typename === 'SignInMutationSuccess') {
            mixpanel.identify(data.signIn.currentUser.id);
            mixpanel.track('signIn');
            return {
              type: 'successfullyAuthenticated' as const,
              currentUser: data.signIn.currentUser,
              redirectUrl: data.signIn.redirectUrl,
            };
          } else if (data.signIn.__typename === 'AlreadySignedInError') {
            return {
              type: 'alreadyLoggedIn' as const,
              currentUser: data.signIn.currentUser,
              redirectUrl: data.signIn.redirectUrl,
            };
          } else if (data.signIn.__typename === 'SignedInAsSameUserError') {
            // if the currently signed in user is attempting to auth again, we'll let them pass
            return {
              type: 'successfullyAuthenticated' as const,
              currentUser: data.signIn.currentUser,
              redirectUrl: data.signIn.redirectUrl,
            };
          } else if (
            data.signIn.__typename === 'JwtMalformedError' ||
            data.signIn.__typename === 'InvalidTokenError'
          ) {
            return {
              type: 'tokenError' as const,
              error: data.signIn,
            };
          }
        }
        return {
          type: 'unknownError' as const,
          error: null,
        };
      })
      .catch((e) => {
        return {
          type: 'unknownError' as const,
          error: e,
        };
      });
  };
  return {
    handleSignIn,
  };
};

export const useTokenAuth = ({
  tokenAuth,
  onSuccess,
}: {
  tokenAuth: TokenAuth;
  onSuccess: (redirectUrl?: string | null) => any;
}) => {
  /**
   * Auth can result in the following outcomes:
   *
   * 1) Successful log in
   * 2) Already logged in as X
   * 3) Unknown error (i.e Something went wrong)
   * 4) Known error (i.e We know what went wrong, and here's what you should do)
   */

  const { handleSignUp } = useSignUp(tokenAuth.token);
  const { handleSignIn } = useSignIn(tokenAuth.token);

  const [authState, setAuthState] = useState<AuthState>({
    type: 'loading',
  });

  const handleTokenAuth = useCallback(async () => {
    let authState: AuthState;
    if (tokenAuth.type === 'login') {
      authState = await handleSignIn();
    } else if (tokenAuth.type === 'signup') {
      authState = await handleSignUp();
    } else {
      authState = {
        type: 'unknownError' as const,
        error: null,
      };
    }
    setAuthState(authState);
    if (authState.type === 'successfullyAuthenticated') {
      return onSuccess(authState.redirectUrl);
    }
  }, [tokenAuth, onSuccess, handleSignIn, handleSignUp]);

  return [authState, handleTokenAuth] as const;
};
