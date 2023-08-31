import { SocialAccounts } from '../../../generated/graphql';

type CurrentUserAvatar = {
  url: string;
};

export type CurrentUser = {
  id: string;
  username: string;
  fullName: string;
  primaryEmailAddress: string;
  avatarImage?: CurrentUserAvatar | null;
  socialAccounts: Exclude<SocialAccounts, '__typename'>;
};
