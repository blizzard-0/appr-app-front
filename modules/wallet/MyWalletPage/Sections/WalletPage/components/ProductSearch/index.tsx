/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import uniqBy from 'lodash/uniqBy';
import {
  useGetBrandsQuery,
  useGetBrandProductsQuery,
} from '../../../../../../../generated/graphql';
import { Autocomplete } from '@/components/v2/Autocomplete';

export interface SearchResult {
  brandId: string;
  brandLabel: string;
  productId: string;
  productLabel: string;
}

export interface InitialValues {
  brandLabel: string;
  productLabel: string;
}

export const ProductSearch: React.FC<{
  onComplete: (searchResult: SearchResult) => void;
  initialValues?: InitialValues;
  isUpdatingWallet?: boolean;
}> = ({ onComplete, initialValues, isUpdatingWallet }) => {
  const [searchBrands, setSearchBrands] = useState(
    initialValues?.brandLabel || '',
  );
  const [selectedBrand, setSelectedBrand] = useState('');
  const [searchProducts, setSearchProducts] = useState(
    initialValues?.productLabel || '',
  );
  const [selectedProduct, setSelectedProduct] = useState('');

  const onSelectBrand = useCallback((value: string) => {
    setSelectedBrand(value);
  }, []);

  const onSearchBrand = useCallback((value: string) => {
    setSearchBrands(value);
    setSelectedBrand('');
    setSelectedProduct('');
  }, []);

  const onSearchProduct = useCallback(
    (value: string) => {
      if (isUpdatingWallet) {
        /**
         * split searchBrands string and add hyphen between words
         * and replace all accented characters in brand (ex. chloé)
         * to make searchBrands string behave like selectedBrand
         */
        setSelectedBrand(
          searchBrands
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s/g, '-')
            .toLowerCase(),
        );
      }
      setSearchProducts(value);
      setSelectedProduct('');
    },
    [isUpdatingWallet, searchBrands],
  );

  const onSelectProduct = useCallback((value: string) => {
    setSelectedProduct(value);
  }, []);

  const { data } = useGetBrandsQuery({
    variables: {
      search: searchBrands,
    },
    skip: !!!searchBrands || (!!searchBrands && !!selectedBrand),
  });

  const { data: selectedBrandProducts } = useGetBrandProductsQuery({
    variables: {
      id: selectedBrand,
      productSearch: searchProducts,
    },
    skip:
      !!!selectedBrand ||
      !!!searchProducts ||
      (!!searchProducts && !!selectedProduct),
  });

  useEffect(() => {
    onComplete({
      brandId: selectedBrand,
      brandLabel: searchBrands,
      productId: selectedProduct,
      productLabel: searchProducts,
    });
  }, [
    onComplete,
    searchBrands,
    selectedBrand,
    searchProducts,
    selectedProduct,
    initialValues,
  ]);

  const brands = useMemo(() => {
    return searchBrands && data?.brands?.__typename === 'BrandsQuerySuccess'
      ? data.brands.brands.map((b) => ({
          value: b.id,
          label: b.name,
        }))
      : [];
  }, [data, searchBrands]);

  /**
   * lots of products have the same name since they are variants of each other. we dedupe them
   * by their names to avoid showing duplicates to the end user.
   */

  const products = useMemo(() => {
    if (
      !selectedBrandProducts ||
      !selectedBrandProducts.brand ||
      selectedBrandProducts.brand.__typename !== 'BrandQuerySuccess'
    ) {
      return [];
    }

    if (!selectedBrandProducts.brand.brand) {
      return [];
    }

    const { products } = selectedBrandProducts.brand.brand;

    const resultsWithDuplicates = products.paginated.map((p) => ({
      value: p.id,
      label: p.name,
    }));
    const deduped = uniqBy(resultsWithDuplicates, ({ label }) => {
      return label.toLowerCase().trim();
    });
    return deduped;
  }, [selectedBrandProducts]);

  return (
    <>
      <div className="mb-6 relative z-10">
        <Autocomplete
          options={brands}
          onChange={onSearchBrand}
          onSelect={onSelectBrand}
          value={initialValues?.brandLabel}
          placeholder="Enter brand"
          label="Brand"
        />
      </div>
      <Autocomplete
        options={products}
        onChange={onSearchProduct}
        onSelect={onSelectProduct}
        value={initialValues?.productLabel}
        placeholder="Enter product"
        label="Product"
      />
    </>
  );
};
