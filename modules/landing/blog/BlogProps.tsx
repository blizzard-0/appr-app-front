export type AuthorProps = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    posts: {
      data: PostProps[];
    };
    shortBio: string;
    bio: string;
    avatar: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export type CategoryProps = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    posts: {
      data: PostProps[];
    };
    publishedAt: string;
  };
};

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

export type PostProps = {
  id: number;
  attributes: {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: number;
    releaseDate: number;
    content: string;
    slug: string;
    previewText: string;
    keywords: string;
    preventIndexing: boolean;
    author: {
      data: AuthorProps;
    };
    categories: {
      data: CategoryProps[];
    };
    thumbnail: {
      data: ThumbnailProps;
    };
    seo: {
      id: number;
      metaTitle: string;
      metaDescription: string;
    };
    relatedPosts: {
      data: PostProps[];
    };
  };
};
