import { useState } from 'react';
import gql from 'graphql-tag';
import { publicRuntimeConfig } from '../../config';
import { routes } from '../../routes';
import { useRegisterInstagramOAuthToken_Mutation } from '../../../generated/graphql';
const { NEXT_PUBLIC_INSTAGRAM_APP_ID } = publicRuntimeConfig;
const redirectUri = routes.appFrontend.instagramOAuthCallback.fillURL(null);
export const REGISTER_INSTAGRAM_OAUTH_MUTATION = gql`
  mutation registerInstagramOAuthToken_($token: String!) {
    registerInstagramOAuthToken(shortLivedToken: $token) {
      __typename
      ... on RegisterInstagramOAuthTokenMutationSuccess {
        instagramOAuth {
          instagramUserId
          isExpired
          accessToken
          id
        }
      }
      ... on InstagramApiError {
        id
        message
        __typename
      }
    }
  }
`;
type Idle = {
  status: 'idle';
};
type InProgress = {
  status: 'inprogress';
};
type Success = {
  status: 'success';
};
type Failure = {
  status: 'failure';
  message: string;
};
export type InstagramRequestState = Idle | InProgress | Success | Failure;

export const buildInstagramCodeRequestURL = (
  scope = ['user_profile', 'user_media'],
) => {
  const uri = encodeURIComponent(redirectUri);
  return `https://api.instagram.com/oauth/authorize?app_id=${NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${uri}&scope=${scope.join(
    ',',
  )}&response_type=code`;
};

export const useInstagramOAuth = () => {
  const [registerInstagramToken] = useRegisterInstagramOAuthToken_Mutation();

  const [registerStatus, setRegisterStatus] = useState<InstagramRequestState>({
    status: 'idle',
  });

  const registerToken = (code: string) => {
    setRegisterStatus({ status: 'inprogress' });
    return registerInstagramToken({
      variables: {
        token: code,
      },
    })
      .then((data) => {
        // console.log('mutation result: ', data);
        if (
          data.data?.registerInstagramOAuthToken.__typename ===
          'RegisterInstagramOAuthTokenMutationSuccess'
        ) {
          setRegisterStatus({ status: 'success' });
          return;
        } else if (
          data.data?.registerInstagramOAuthToken.__typename ===
          'InstagramApiError'
        ) {
          setRegisterStatus({
            status: 'failure',
            message: data.data.registerInstagramOAuthToken.message,
          });
          return;
        }
      })
      .catch((err) => {
        setRegisterStatus({
          status: 'failure',
          message: 'Unexpected Error',
        });
      });
  };

  return [registerToken, registerStatus] as const;
};
