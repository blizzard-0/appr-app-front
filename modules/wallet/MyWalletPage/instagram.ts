import { WalletPageQueryCurrentUser } from '../context';

export const getCurrentInstagramToken = (
  currentUser: WalletPageQueryCurrentUser,
) => {
  let accessToken = '';
  if (currentUser) {
    currentUser.oAuthTokens.forEach((token) => {
      if (token.__typename === 'InstagramOAuthToken') {
        accessToken = token.accessToken;
      }
    });
  }
  return accessToken;
};
