import React from 'react';
import { Meta } from '../../components/Meta';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/Spinner';
import { WalletProps } from '@/modules/landing/wallet/WalletProps';
import { fetchAPI } from 'lib/api';
import NotFoundPage from '../404';
import { WalletPage } from '@/modules/landing/wallet/WalletPage';

const Wallet: React.FC<{
  wallet: WalletProps;
}> = ({ wallet }) => {
  const router = useRouter();

  if (router.isFallback && !wallet) {
    return <Spinner />;
  }

  if (!wallet) {
    return <NotFoundPage />;
  }

  let seoImage = 'https://appreciate.it/assets/og-appreciate-logo.png';
  if (wallet.attributes.seo.sharedImage) {
    if (wallet.attributes.seo.sharedImage.media.data) {
      seoImage = wallet.attributes.seo.sharedImage.media.data.attributes.url;
    }
  }

  return (
    <>
      <Meta
        title={wallet.attributes.seo.metaTitle}
        description={wallet.attributes.seo.metaDescription}
        url={`https://appreciate.it/wallet/${wallet.attributes.slug}${wallet.attributes.seo.sharedImage}`}
        images={[
          {
            url: seoImage,
          },
        ]}
      />
      <WalletPage wallet={wallet} />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps({ params }: Params) {
  const walletRes = await fetchAPI('/wallets', {
    filters: {
      slug: params?.slug,
    },
    populate: [
      'avatarImage',
      'seo',
      'walletItem',
      'walletItem.productImage',
      'seo.sharedImage.media',
    ],
  });

  if (!walletRes) {
    return {
      props: {
        wallet: null,
      },
    };
  }

  const currentWallet = walletRes.data.find(
    (wallet: WalletProps) => wallet.attributes.slug === params?.slug,
  );
  return {
    props: {
      wallet: currentWallet || null,
    },
  };
}

export default Wallet;
