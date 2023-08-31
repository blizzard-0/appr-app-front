import { useEffect, useState } from 'react';
import {
  SortOrderEnumType,
  WalletItemsSortTypeInput,
} from '../../../../generated/graphql';
import { useMyWalletPage } from '..';
import { sortedItemsCacheUpdate } from './cache';
import { Option } from '@/components/v2/Listbox';

export type SortKey = keyof WalletItemsSortTypeInput;
export { SortOrderEnumType };

type SortState = Record<SortKey, SortOrderEnumType>;

const DEFAULT_SORT_STATE: SortState = {
  brand: SortOrderEnumType.Asc,
  date: SortOrderEnumType.Desc,
  resalePrice: SortOrderEnumType.Desc,
};

export const SORT_OPTIONS: Option<keyof WalletItemsSortTypeInput>[] = [
  { label: 'Date added', value: 'date' },
  { label: 'Brand', value: 'brand' },
  { label: 'Resale Price', value: 'resalePrice' },
];

export function useSortWallet() {
  const [sortOrder, setSortOrder] = useState<SortOrderEnumType>(
    SortOrderEnumType.Desc,
  );
  const [sort, setSort] = useState<SortKey>('date');
  const { fetchMore } = useMyWalletPage();

  function changeSortDirection() {
    setSortOrder((order) =>
      order === SortOrderEnumType.Asc
        ? SortOrderEnumType.Desc
        : SortOrderEnumType.Asc,
    );
  }

  function changeSortType(sortType: SortKey) {
    setSort(sortType);
    setSortOrder(DEFAULT_SORT_STATE[sortType]);
  }

  useEffect(() => {
    fetchMore({
      variables: {
        sort: {
          [sort]: sortOrder,
        },
      },
      updateQuery(prev, { fetchMoreResult }) {
        return sortedItemsCacheUpdate(prev, fetchMoreResult);
      },
    });
  }, [sort, sortOrder, fetchMore]);

  return {
    sort,
    sortOrder,
    changeSortType,
    changeSortDirection,
  };
}
