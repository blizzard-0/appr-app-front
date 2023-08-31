import React from 'react';
import { Meta } from '../../../components/Meta';
import { BlogPage } from '../../../modules/landing/blog/BlogPage';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/Spinner';
import { AuthorProps, CategoryProps } from '@/modules/landing/blog/BlogProps';
import { fetchAPI } from 'lib/api';
import NotFoundPage from '../../404';

const Category: React.FC<{
  categories: {
    data: CategoryProps[];
  };
  category: CategoryProps;
  authors: {
    data: AuthorProps[];
  };
}> = ({ category, categories, authors }) => {
  const router = useRouter();

  if (router.isFallback && !category) {
    return <Spinner />;
  }
  if (!category) {
    return <NotFoundPage />;
  }
  const sortedPosts = category.attributes.posts.data.sort((a, b) => {
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
        url={`https://appreciate.it/blog/ctaegory/${category.attributes.slug}`}
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
  const matchingCategories = await fetchAPI('/categories', {
    filters: { slug: params?.slug },
    populate: {
      posts: {
        populate: '*',
      },
    },
  });

  if (!matchingCategories) {
    return {
      notFound: true,
    };
  }
  const allCategories = await fetchAPI('/categories');
  const allAuthors = await fetchAPI('/authors', {
    populate: 'avatar',
  });
  const currentCategory = matchingCategories.data.find(
    (category: CategoryProps) => category.attributes.slug === params?.slug,
  );
  return {
    props: {
      category: currentCategory || null,
      categories: allCategories || null,
      authors: allAuthors || null,
    },
  };
};

export default Category;
