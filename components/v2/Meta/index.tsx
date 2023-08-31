import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { OpenGraphImages } from 'next-seo/lib/types';

const DEAFAULT_META_PROPS = {
  title: 'appreciate',
  description: 'elevate ownership',
  siteName: 'appreciate',
  locale: 'en-US',
  url: 'https://appreciate.it/',
  type: 'website',
  images: [
    {
      url: 'https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1645754105/user-uploads/prod/brand-cover_uxcdzp.png',
    },
  ],
};

export type IMetaProps = {
  title?: string;
  description?: string;
  canonical?: string;
  siteName?: string;
  locale?: string;
  url?: string;
  type?: string;
  images?: ReadonlyArray<OpenGraphImages>;
};

export const Meta: React.FC<IMetaProps> = ({
  title = DEAFAULT_META_PROPS.title,
  description = DEAFAULT_META_PROPS.description,
  siteName = DEAFAULT_META_PROPS.siteName,
  locale = DEAFAULT_META_PROPS.locale,
  url = DEAFAULT_META_PROPS.url,
  type = DEAFAULT_META_PROPS.type,
  images = DEAFAULT_META_PROPS.images,
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=0"
          key="viewport"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: 'https://appreciate.it/assets/appreciate-favicon.svg',
          },
          {
            rel: 'alternate icon',
            href: 'https://appreciate.it/assets/appreciate-favicon.png',
          },
        ]}
        // canonical={props.canonical}
        openGraph={{
          title,
          description,
          locale,
          site_name: siteName,
          url,
          type,
          images,
        }}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
  return { props: {} };
};
