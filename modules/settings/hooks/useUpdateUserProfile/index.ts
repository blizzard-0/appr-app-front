import { useCallback, useState } from 'react';
import { useUpdateUserProfileSettingsMutation } from '@/generated/graphql';

export enum UpdateUserProfileError {
  SomethingWentWrong = 'SomethingWentWrong',
  UsernameAlreadyTakenError = 'UsernameAlreadyTakenError',
  InvalidFullNameError = 'InvalidFullNameError',
}

type IUserInfo = {
  fullName: string;
  username: string;
  instagram: string;
  twitter: string;
  tiktok: string;
};

export const useUpdateUserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [updateUserProfile] = useUpdateUserProfileSettingsMutation();

  const handleUpdateUserProfile = useCallback(
    async (values: IUserInfo) => {
      setLoading(true);
      const { data, errors } = await updateUserProfile({
        variables: {
          input: {
            fullName: values.fullName,
            username: values.username,
            socialAccounts: {
              instagram: values.instagram || null,
              twitter: values.twitter || null,
              tiktok: values.tiktok || null,
            },
          },
        },
      });
      if (!data || errors) {
        throw new Error(UpdateUserProfileError.SomethingWentWrong);
      }
      if (data.updateUser.__typename === 'UsernameAlreadyTakenError') {
        throw new Error(UpdateUserProfileError.UsernameAlreadyTakenError);
      }
      if (data.updateUser.__typename === 'InvalidFullNameError') {
        throw new Error(UpdateUserProfileError.InvalidFullNameError);
      }
      setLoading(false);
    },
    [updateUserProfile],
  );

  return {
    handleUpdateUserProfile,
    loading,
  };
};
