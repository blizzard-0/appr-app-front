import React from 'react';
import { Meta } from '../../../components/Meta';
import { BlogPage } from '@/modules/landing/blog/BlogPage';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/Spinner';
import { AuthorProps, CategoryProps } from '@/modules/landing/blog/BlogProps';
import { fetchAPI } from 'lib/api';
import NotFoundPage from '../../404';

const Author: React.FC<{
  author: AuthorProps;
  categories: {
    data: CategoryProps[];
  };
  authors: {
    data: AuthorProps[];
  };
}> = ({ author, categories, authors }) => {
  const router = useRouter();

  if (router.isFallback && !author) {
    return <Spinner />;
  }

  if (!author) {
    return <NotFoundPage />;
  }

  const sortedPosts = author.attributes.posts.data.sort((a, b) => {
    return (
      new Date(b.attributes.releaseDate).getTime() -
      new Date(a.attributes.releaseDate).getTime()
    );
  });

  return (
    <>
      <Meta
        title="appreciate Blog - Your source for fashion and Web3 news"
        ogTitle="Your source for luxury fashion and Web3 news"
        description="The appreciate blog covers fashion and Web3 news. Read for highlights and subscribe."
        url={`https://appreciate.it/blog/author/${author.attributes.slug}`}
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <BlogPage
        posts={sortedPosts}
        categories={categories.data}
        authors={authors.data}
      />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const matchingAuthors = await fetchAPI('/authors', {
    filters: { slug: params?.slug },
    populate: {
      posts: {
        populate: '*',
      },
    },
  });

  if (!matchingAuthors) {
    return {
      notFound: true,
    };
  }
  const allAuthors = await fetchAPI('/authors', { populate: 'avatar' });
  const allCategories = await fetchAPI('/categories');
  const currentAuthor = matchingAuthors.data.find(
    (author: AuthorProps) => author.attributes.slug === params?.slug,
  );
  return {
    props: {
      author: currentAuthor || null,
      authors: allAuthors || null,
      categories: allCategories || null,
    },
  };
};

export default Author;
