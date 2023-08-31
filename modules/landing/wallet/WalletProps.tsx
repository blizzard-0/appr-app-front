export type ThumbnailProps = {
  id: number;
  attributes: {
    name: string;
    url: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
};

export type WalletItemProps = {
  id: number;

  productName: string;
  brandName: string;
  resalePrice: number;
  retailPrice: number;
  verified: boolean;
  coverage: boolean;
  productImage: {
    data: ThumbnailProps;
  };
};

export type SeoImageProps = {
  alt: string;
  media: {
    data: ThumbnailProps;
  };
};
export type WalletProps = {
  id: number;
  attributes: {
    userName: string;
    totalValue: number;
    totalWalletItems: number;
    totalVerifiedWalletItems: number;
    slug: string;
    avatarImage: {
      data: ThumbnailProps;
    };
    seo: {
      id: number;
      metaTitle: string;
      metaDescription: string;
      sharedImage: SeoImageProps;
    };
    walletItem: WalletItemProps[];
  };
};
