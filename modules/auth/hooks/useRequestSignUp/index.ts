import { useCallback } from 'react';
import { useRequestSignUpToken_Mutation } from '@/generated/graphql';
import { routes } from '@/modules/routes';

const getAuthResultUrl = (email: string, name: string): string =>
  routes.appFrontend.authResult.fillURL(null, {
    success: true,
    source: 'signup',
    email,
    name,
  });

export enum SignUpError {
  SomethingWentWrong = 'SomethingWentWrong',
  EmailAlreadyTakenError = 'EmailAlreadyTakenError',
  InvalidFullNameError = 'AlreadySignedInError',
}

export const useRequestSignUp = () => {
  const [request] = useRequestSignUpToken_Mutation();

  const handleSubmit = useCallback(
    async (email: string, name: string, affiliateId?: string) => {
      const authResultUrl = getAuthResultUrl(email, name);
      try {
        const { data, errors } = await request({
          variables: {
            affiliateId: affiliateId ? affiliateId.toString() : null,
            email: {
              emailAddress: email,
              fullName: name,
            },
          },
        });
        if (errors || !data) {
          throw new Error(SignUpError.SomethingWentWrong);
        }
        if (data.requestSignUpToken.__typename === 'EmailAlreadyTakenError') {
          throw new Error(SignUpError.EmailAlreadyTakenError);
        }
        if (data.requestSignUpToken.__typename === 'InvalidFullNameError') {
          throw new Error(SignUpError.InvalidFullNameError);
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
