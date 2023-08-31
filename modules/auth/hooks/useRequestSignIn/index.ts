import { useCallback } from 'react';
import { useRequestSignInToken_Mutation } from '@/generated/graphql';
import { routes } from '@/modules/routes';

const getAuthResultUrl = (email: string): string =>
  routes.appFrontend.authResult.fillURL(null, {
    success: true,
    email,
    source: 'signin',
    name: '',
  });

export enum SignInError {
  SomethingWentWrong = 'SomethingWentWrong',
  NoSuchUserWithEmailError = 'NoSuchUserWithEmailError',
  AlreadySignedInError = 'AlreadySignedInError',
  InvalidEmailAddressError = 'InvalidEmailAddressError',
}

export const useRequestSignIn = () => {
  const [request] = useRequestSignInToken_Mutation();

  const handleSubmit = useCallback(
    async (email: string) => {
      const authResultUrl = getAuthResultUrl(email);
      try {
        const { data, errors } = await request({ variables: { email } });
        if (errors || !data) {
          throw new Error(SignInError.SomethingWentWrong);
        }
        if (data.requestSignInToken.__typename === 'NoSuchUserWithEmailError') {
          throw new Error(SignInError.NoSuchUserWithEmailError);
        }
        if (data.requestSignInToken.__typename === 'AlreadySignedInError') {
          throw new Error(SignInError.AlreadySignedInError);
        }
        if (data.requestSignInToken.__typename === 'InvalidEmailAddressError') {
          throw new Error(SignInError.InvalidEmailAddressError);
        }
        return authResultUrl;
      } catch (err) {
        throw err;
      }
    },
    [request],
  );

  return { handleSubmit };
};
