import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { AppButton, ProgressIndicator } from '@/components/v2';
import { useDeleteUserAccountMutation } from '../../../../generated/graphql';
import { YouNeedToBeSignedInWrapper } from '../../../auth/YouNeedToBeSignedInWrapper';
import { DeleteAccountLayout } from './DeleteAccountLayout';
import { routes } from '../../../routes';

export const REQUEST_DELETE_ACCOUNT_MUTATION = gql`
  mutation deleteUserAccount($token: String!) {
    deleteAccount(token: $token) {
      ... on DeleteAccountMutationSuccess {
        success
      }
    }
  }
`;

export function DeleteAccountPage() {
  const router = useRouter();
  const { token } = router.query;

  const [deleteUserAccountMutation, { data, loading }] =
    useDeleteUserAccountMutation();

  useEffect(() => {
    if (token) {
      deleteUserAccountMutation({
        variables: {
          token: token as string,
        },
      });
    }
  }, [deleteUserAccountMutation, token]);

  const responseType = data?.deleteAccount?.__typename;

  return (
    <YouNeedToBeSignedInWrapper>
      <DeleteAccountLayout>
        <ProgressIndicator active={loading} />

        <div className="text-center maison-neue-medium text-2xl h-44 pt-8 md:pt-20">
          {data && responseType === 'DeleteAccountMutationSuccess' && (
            <div className=" text-success">
              You’ve successfully deleted your account
            </div>
          )}

          {data && responseType !== 'DeleteAccountMutationSuccess' && (
            <div className="text-error">
              An error occured, please try again later.
            </div>
          )}
        </div>
        {data && (
          <div className="text-center flex flex-col items-center">
            <AppButton
              onClick={() => {
                const route =
                  responseType === 'DeleteAccountMutationSuccess'
                    ? routes.appFrontend.owners.fillPath(null)
                    : routes.appFrontend.myWallet.fillPath(null);

                router.push(route);
              }}
            >
              Continue
            </AppButton>
          </div>
        )}
      </DeleteAccountLayout>
    </YouNeedToBeSignedInWrapper>
  );
}
