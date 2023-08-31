import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { useSignOut_Mutation } from '@/generated/graphql';
import { mixpanel } from '@/modules/mixpanel/mixpanel';
import { routes } from '@/modules/routes';

export const useSignOut = () => {
  const [signOutMutation, signOutState] = useSignOut_Mutation();
  const client = useApolloClient();
  const router = useRouter();

  const signOut = useCallback(async () => {
    const { data } = await signOutMutation();
    if (data?.signOut.__typename === 'SignOutMutationSuccess') {
      mixpanel.track('signOut');
      mixpanel.reset();
      const loginPath = routes.appFrontend.logIn.fillPath(null);
      return client.clearStore().finally(() => {
        return router.push(loginPath);
      });
    }
  }, [signOutMutation, router, client]);

  return {
    signOut,
    signOutState,
  };
};
