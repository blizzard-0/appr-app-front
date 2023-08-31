import React from 'react';
import { Meta } from '../../components/Meta';
import { SingleBlogPage } from '../../modules/landing/blog/SingleBlogPage';
import { useRouter } from 'next/router';
import { Spinner } from '@/components/Spinner';
import { AuthorProps, PostProps } from '@/modules/landing/blog/BlogProps';
import { fetchAPI } from 'lib/api';
import NotFoundPage from '../404';

const Blog: React.FC<{
  post: PostProps;
  authors: {
    data: AuthorProps[];
  };
}> = ({ post, authors }) => {
  const router = useRouter();

  if (router.isFallback && !post) {
    return <Spinner />;
  }

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Meta
        title={post.attributes.seo.metaTitle}
        description={post.attributes.seo.metaDescription}
        url={`https://appreciate.it/blog/${post.attributes.slug}`}
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <SingleBlogPage
        post={post}
        categories={post.attributes.categories.data}
        authors={authors}
      />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps({ params }: Params) {
  const postsRes = await fetchAPI('/posts', {
    filters: {
      slug: params?.slug,
    },
    populate: [
      'thumbnail',
      'seo',
      'categories',
      'author',
      'relatedPosts',
      'relatedPosts.thumbnail',
      'relatedPosts.author',
    ],
  });

  if (!postsRes) {
    return {
      notFound: true,
    };
  }
  const categoriesRes = await fetchAPI('/categories');
  const authorsRes = await fetchAPI('/authors', { populate: 'avatar' });
  const currentPost = postsRes.data.find(
    (post: PostProps) => post.attributes.slug === params?.slug,
  );
  return {
    props: {
      post: currentPost || null,
      categories: categoriesRes || null,
      authors: authorsRes || null,
    },
  };
}

export default Blog;
