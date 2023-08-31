import { ApolloCache } from '@apollo/client';
import {
  AddReceipt_Mutation_Op_,
  AddWalletItem_Mutation_Op_,
  CurrentUser,
  DeleteReceipt_Mutation_Op_,
  DeleteWalletItems_Mutation_Op_,
  MyWalletPageQuery_Op_,
  RequestProtection_Mutation_Op_,
  UpdateItem_Mutation_Op_,
  WalletItemComponentFieldsHelperFragment,
  WalletItemProtectionStateEnumType,
} from '../../../../generated/graphql';
import { MY_WALLET_PAGE_QUERY_VARS } from '../../hooks/useMyWalletPage';
import { MY_WALLET_PAGE_QUERY } from './gql';

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

export const deleteItemsCacheUpdate = (
  cache: ApolloCache<any>,
  data: DeleteWalletItems_Mutation_Op_ | null | undefined,
  itemsToDelete: WalletItemComponentFieldsHelperFragment[],
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  const numIdentifiedWalletItem = itemsToDelete.reduce(
    (acc, cur) => (cur.__typename === 'IdentifiedWalletItem' ? ++acc : acc),
    0,
  );

  if (
    !cacheData?.currentUser ||
    data?.deleteWalletItems?.__typename !== 'DeleteWalletItemsMutationSuccess'
  ) {
    return;
  }

  const deleteIds: string[] = [];
  let totalToDecrease = 0;
  for (const element of itemsToDelete) {
    deleteIds.push(element.id);
    if (element.__typename === 'IdentifiedWalletItem') {
      totalToDecrease += element.product.currentResalePrice.amount;
    }
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated;
  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        numVerifiedWalletItems:
          cacheData.currentUser.defaultWallet.numVerifiedWalletItems -
          numIdentifiedWalletItem,
        numWalletItems:
          cacheData.currentUser.defaultWallet.numWalletItems -
          itemsToDelete.length,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount:
            cacheData.currentUser.defaultWallet.items.totalCount -
            itemsToDelete.length,
          paginated: [...paginated.filter((wi) => !deleteIds.includes(wi.id))],
        },
        total: cacheData.currentUser.defaultWallet.total - totalToDecrease,
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};

export const addItemCacheUpdate = (
  cache: ApolloCache<any>,
  data: AddWalletItem_Mutation_Op_ | null | undefined,
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  if (
    !cacheData?.currentUser ||
    data?.addWalletItem?.__typename !== 'AddWalletItemMutationSuccess'
  ) {
    return;
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated || [];

  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount: cacheData.currentUser.defaultWallet.items.totalCount + 1,
          paginated: [
            ...data.addWalletItem.addedWalletItems.map((d) => ({
              ...d,
              protectionState: WalletItemProtectionStateEnumType.NotProtected,
            })),
            ...paginated,
          ],
        },
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};

export const deleteReceiptCacheUpdate = (
  cache: ApolloCache<any>,
  data: DeleteReceipt_Mutation_Op_ | null | undefined,
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  if (
    !cacheData?.currentUser ||
    data?.deleteReceiptForWalletItem.__typename !==
      'DeleteReceiptForWalletItemMutationSuccess'
  ) {
    return;
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated || [];

  const newPaginated = paginated.map((cachedPaginatedProduct) =>
    data.deleteReceiptForWalletItem.__typename ===
      'DeleteReceiptForWalletItemMutationSuccess' &&
    cachedPaginatedProduct.id ===
      data.deleteReceiptForWalletItem.updatedWalletItem.id
      ? {
          ...cachedPaginatedProduct,
          receiptImage:
            data.deleteReceiptForWalletItem.updatedWalletItem.receiptImage,
          moderationFlag:
            data.deleteReceiptForWalletItem.updatedWalletItem.moderationFlag,
        }
      : cachedPaginatedProduct,
  );

  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount: cacheData.currentUser.defaultWallet.items.totalCount,
          paginated: [...newPaginated],
        },
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};

export const addReceiptCacheUpdate = (
  cache: ApolloCache<any>,
  data: AddReceipt_Mutation_Op_ | null | undefined,
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  if (
    !cacheData?.currentUser ||
    data?.addReceiptForWalletItem.__typename !==
      'AddReceiptForWalletItemMutationSuccess'
  ) {
    return;
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated || [];

  const newPaginated = paginated.map((cachedPaginatedProduct) =>
    data.addReceiptForWalletItem.__typename ===
      'AddReceiptForWalletItemMutationSuccess' &&
    cachedPaginatedProduct.id ===
      data.addReceiptForWalletItem.updatedWalletItem.id
      ? {
          ...cachedPaginatedProduct,
          receiptImage:
            data.addReceiptForWalletItem.updatedWalletItem.receiptImage,
        }
      : cachedPaginatedProduct,
  );

  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount: cacheData.currentUser.defaultWallet.items.totalCount,
          paginated: [...newPaginated],
        },
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};

export const updateUnverifiedItemCacheUpdate = (
  cache: ApolloCache<any>,
  data: UpdateItem_Mutation_Op_ | null | undefined,
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  if (
    !cacheData?.currentUser ||
    data?.updateItem?.__typename !== 'UpdateItemMutationSuccess'
  ) {
    return;
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated || [];

  const newPaginated = paginated.map((p) =>
    data.updateItem.__typename === 'UpdateItemMutationSuccess' &&
    p.id === data.updateItem.updatedWalletItem.id
      ? data.updateItem.updatedWalletItem
      : p,
  );

  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount: cacheData.currentUser.defaultWallet.items.totalCount,
          paginated: [...newPaginated],
        },
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};

export const loadMoreItemsCacheUpdate = (
  prev: MyWalletPageQuery_Op_,
  fetchMoreResult: MyWalletPageQuery_Op_ | undefined,
) => {
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
          paginated: prev.currentUser.defaultWallet.items.paginated.concat(
            fetchMoreResult.currentUser.defaultWallet.items.paginated,
          ),
        },
      },
    },
  };
};

export const updateWalletItemProtectionCacheUpdate = (
  cache: ApolloCache<any>,
  data: RequestProtection_Mutation_Op_ | null | undefined,
) => {
  const cacheData = cache.readQuery<{
    currentUser: CurrentUser | null;
  }>({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
  });

  if (
    !cacheData?.currentUser ||
    data?.requestProtectionForWalletItem.__typename !==
      'RequestProtectionForWalletItemMutationSuccess'
  ) {
    return;
  }

  const paginated = cacheData.currentUser.defaultWallet.items.paginated || [];

  const newPaginated = paginated.map((cachedWalletItem) =>
    data.requestProtectionForWalletItem.__typename ===
      'RequestProtectionForWalletItemMutationSuccess' &&
    cachedWalletItem.id === data.requestProtectionForWalletItem.walletItemId
      ? {
          ...cachedWalletItem,
          protectionState: WalletItemProtectionStateEnumType.Requested,
        }
      : cachedWalletItem,
  );

  const newState = {
    currentUser: {
      ...cacheData.currentUser,
      defaultWallet: {
        ...cacheData.currentUser.defaultWallet,
        items: {
          ...cacheData.currentUser.defaultWallet.items,
          totalCount: cacheData.currentUser.defaultWallet.items.totalCount,
          paginated: [...newPaginated],
        },
      },
    },
  };

  cache.writeQuery({
    query: MY_WALLET_PAGE_QUERY,
    variables: MY_WALLET_PAGE_QUERY_VARS,
    data: newState,
  });
};
