import * as Sentry from '@sentry/nextjs';

import { CurrentUser } from '../../context/types';
import { useCurrentUser_Query } from '@/generated/graphql';

export const useCurrentUser = () => {
  const { data, loading } = useCurrentUser_Query({
    fetchPolicy: 'cache-first',
  });
  const currentUser: CurrentUser | null =
    data?.currentUser.__typename === 'CurrentUser' ? data.currentUser : null;
  if (currentUser) {
    try {
      Sentry.setUser({
        email: currentUser.primaryEmailAddress,
      });
    } catch (e) {
      console.log('Sentry set user error');
    }
  }

  return {
    loading,
    currentUser,
  };
};
