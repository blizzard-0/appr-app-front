import {
  useMyWalletPageQuery,
  SortOrderEnumType,
} from '../../../../generated/graphql';
import { WALLET_ITEM_GRID_IMAGE_SIZE } from '../../../../consts/consts';

export const MY_WALLET_PAGE_QUERY_VARS = {
  imageAdjustments: {
    width: WALLET_ITEM_GRID_IMAGE_SIZE.WIDTH,
    height: WALLET_ITEM_GRID_IMAGE_SIZE.HEIGHT,
  },
  limit: 12,
  offset: 0,
  sort: {
    date: SortOrderEnumType.Desc,
  },
};

export function useMyWalletPage() {
  return useMyWalletPageQuery({
    variables: MY_WALLET_PAGE_QUERY_VARS,
    notifyOnNetworkStatusChange: true,
    nextFetchPolicy: 'cache-only',
  });
}
