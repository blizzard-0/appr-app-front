import { useCallback } from 'react';
import { useRequestDeleteUserTokenMutation } from '@/generated/graphql';
import { routes } from '@/modules/routes';

export const useRequestDeleteUser = () => {
  const [requestDeleteUser, { loading }] = useRequestDeleteUserTokenMutation();

  const handleRequestDeleteUser = useCallback(
    async (email: string) => {
      const { data, errors } = await requestDeleteUser();
      if (!data || errors) {
        throw new Error('SomethingWentWrong');
      }
      if (
        data.requestDeleteAccountToken.__typename !==
        'RequestDeleteAccountTokenMutationSuccess'
      ) {
        throw new Error('SomethingWentWrong');
      }
      const route = routes.appFrontend.requestDeleteAccount.fillURL(null, {
        email,
      });
      return route;
    },
    [requestDeleteUser],
  );

  return {
    handleRequestDeleteUser,
    loading,
  };
};
