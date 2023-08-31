import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import lodash from 'lodash';
import { useProductSearch } from '../hooks';
import {
  ProductSearch,
  UnAuthenticatedHeader,
  NoSearchResult,
} from '../components';
import { GoogleSearchProduct } from '../../../pages/api/image';
import { routes } from '../../routes';
import { useAddWalletFromExplore } from '../hooks/useAddWalletFromExplore';
import { Brands } from './const';
import {
  Navbar,
  Meta,
  Modal,
  AppButton,
  ExploreItem,
  ExploreItemDetail,
  ProgressIndicator,
} from '@/components/v2';
import { useExplorePageContext, ExplorePageProvider } from '../context';
import { useToastContext } from '@/modules/toast';
import { ExploreItemSkeleton } from '../components/ExploreSkeleton';

const randomIndex = Math.floor(Math.random() * Brands.length);

const ExplorePageInner: React.FC = () => {
  const { currentUser, loading: authLoading } = useExplorePageContext();
  const { pushError, pushSuccess } = useToastContext();
  const router = useRouter();
  const [searchString, setSearchString] = useState(Brands[randomIndex]);
  const [selectedProduct, setSelectedProduct] =
    useState<GoogleSearchProduct | null>(null);
  const {
    loading,
    data: googleProducts,
    loadingPrices,
    resalePrices,
    mockProducts,
    hasMore,
    getProducts,
    initData,
  } = useProductSearch();

  const { handleAddWalletItem, uploading } = useAddWalletFromExplore();

  const isLiked = (product: GoogleSearchProduct) => {
    if (!currentUser) return false;
    const user = currentUser.defaultWallet;
    return !!user.items.paginated.find((item) => {
      if (item.pricingKey === product.item_id) {
        return true;
      }
      return false;
    });
  };

  const handleAddWallet = (product: GoogleSearchProduct) => {
    if (!currentUser) {
      localStorage.setItem('draftWalletItem', JSON.stringify(product));
      router.push(routes.appFrontend.logIn.fillPath(null));
      return;
    }
    if (isLiked(product)) {
      pushError(`You've already added that item in your wallet.`);
      return;
    }
    handleAddWalletItem(product)
      .then(() => {
        pushSuccess('Item successfully added to your wallet.');
        setSelectedProduct(null);
      })
      .catch((err) => {
        pushError(err);
      });
  };

  const handleChangeSearch = lodash.debounce((s: string) => {
    initData();
    setSearchString(s);
  }, 600);

  useEffect(() => {
    getProducts(searchString);
  }, [searchString, getProducts]);

  if (authLoading) {
    return <ProgressIndicator active />;
  }

  return (
    <div className="pb-16">
      <Meta />
      {currentUser ? (
        <Navbar
          currentUser={{
            primaryEmail: currentUser.primaryEmailAddress,
            userName: currentUser.fullName,
            avatarUrl: currentUser.avatarImage?.url,
          }}
        />
      ) : (
        <UnAuthenticatedHeader />
      )}
      <div className="mt-16 pt-px">
        <div className="py-10 text-center border-b-0 md:border-b border-gray-300 px-5">
          <h2 className="font-maison-neue-bold mb-6 text-40-px leading-12 text-gray-900">
            Explore
          </h2>
          <p className="font-maison-neue-book text-base leading-22-px md:max-w-600-px w-full mx-auto text-gray-800">
            Welcome to the world of luxury ownership. Discover new brands and
            items, or browse for your favorite pieces. Simply search and
            explore.
          </p>
        </div>
        <div className="py-6">
          <div className="w-full md:w-c-wallet-actions mx-auto">
            <ProductSearch
              onChange={(e) => handleChangeSearch(e.target.value)}
            />
            {!loading && googleProducts.length === 0 && <NoSearchResult />}
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-6">
              {loading && googleProducts.length === 0
                ? mockProducts.map((_, index) => (
                    <ExploreItemSkeleton key={index} />
                  ))
                : null}
              {googleProducts.map((product) => (
                <ExploreItem
                  image={product.link}
                  brandName={product.brand_name}
                  productName={product.title}
                  key={product.id}
                  resalePrice={resalePrices[product.id]}
                  loadingResalePrice={loadingPrices[product.id]}
                  alreadyAdded={isLiked(product)}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
            {hasMore && (
              <AppButton
                $variant="pagination"
                disabled={loading}
                $loading={loading}
                onClick={() => getProducts(searchString)}
              >
                Load more
              </AppButton>
            )}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <Modal.Base
          $size="large"
          onClose={() => setSelectedProduct(null)}
          $show
        >
          <Modal.Header $showClose onClose={() => setSelectedProduct(null)}>
            Item Details
          </Modal.Header>
          <Modal.Content className="p-5">
            <ExploreItemDetail
              brandName={selectedProduct.brand_name}
              productName={selectedProduct.title}
              resalePrice={resalePrices[selectedProduct.id]}
              image={selectedProduct.link}
              adding={uploading}
              priceLoading={loadingPrices[selectedProduct.id]}
              onAddItem={() => handleAddWallet(selectedProduct)}
              added={isLiked(selectedProduct)}
            />
          </Modal.Content>
        </Modal.Base>
      )}
    </div>
  );
};

export const ExplorePage: React.FC = () => (
  <ExplorePageProvider>
    <ExplorePageInner />
  </ExplorePageProvider>
);
