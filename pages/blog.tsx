/* eslint-disable @next/next/no-img-element */
import {
  AuthorProps,
  CategoryProps,
  PostProps,
} from '@/modules/landing/blog/BlogProps';
import { fetchAPI } from 'lib/api';
import React from 'react';
import { Meta } from '../components/Meta';
import { BlogPage } from '../modules/landing/blog/BlogPage';

const Blog: React.FC<{
  posts?: PostProps[];
  categories: CategoryProps[];
  authors: AuthorProps[];
}> = ({ posts, categories, authors }) => {
  return (
    <>
      <Meta
        title="appreciate Blog - Your source for fashion and Web3 news"
        ogTitle="Your source for luxury fashion and Web3 news"
        description="The appreciate blog covers fashion and Web3 news. Read for highlights and subscribe."
        url="https://appreciate.it/blog"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <BlogPage posts={posts} categories={categories} authors={authors} />
    </>
  );
};

export async function getServerSideProps() {
  const [postsRes, categoriesRes, authorsRes] = await Promise.all([
    fetchAPI('/posts', {
      populate: ['thumbnail', 'author', 'categories'],
      sort: {
        releaseDate: 'desc',
      },
    }),
    fetchAPI('/categories'),
    fetchAPI('/authors', { populate: 'avatar' }),
  ]);

  return {
    props: {
      posts: postsRes.data,
      categories: categoriesRes.data,
      authors: authorsRes.data,
    },
  };
}

export default Blog;
