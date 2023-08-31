import { MyWalletPageQuery_Op_ } from '../../../../generated/graphql';

export const sortedItemsCacheUpdate = (
  prev: MyWalletPageQuery_Op_,
  fetchMoreResult: MyWalletPageQuery_Op_ | undefined,
) => {
  if (typeof fetchMoreResult === 'undefined') {
    return prev;
  }
  if (fetchMoreResult?.currentUser?.__typename !== 'CurrentUser') {
    return prev;
  }
  if (prev.currentUser?.__typename !== 'CurrentUser') {
    return prev;
  }

  return {
    ...fetchMoreResult,
    currentUser: {
      ...fetchMoreResult.currentUser,
      defaultWallet: {
        ...fetchMoreResult.currentUser.defaultWallet,
        items: {
          ...fetchMoreResult.currentUser.defaultWallet.items,
          paginated: fetchMoreResult.currentUser.defaultWallet.items.paginated,
        },
      },
    },
  };
};
