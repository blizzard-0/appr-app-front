/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AuthorItem } from './Author';
import {
  readingTime,
  CategoryList,
  dateConverter,
} from '../../../modules/landing/blog/BlogFunctions';
import {
  StyledBlogListItemTitle,
  StyledPostItemCardWarpper,
  StyledPostItemCardImageWarpper,
  StyledPostItemCardContentWarpper,
  StyledBlogListItemContentWrapper,
  StyledBlogListItemImageWrapper,
} from './BlogPage.styled';
import Link from 'next/link';
import { AuthorProps, CategoryProps, PostProps } from './BlogProps';

interface PostItemProps {
  post: PostProps;
  imagePosition?: string;
  categories: CategoryProps[];
  authors: AuthorProps[];
}

export const PostItem: React.FC<PostItemProps> = ({
  post,
  imagePosition,
  categories,
  authors,
}) => {
  const readTime = readingTime(post.attributes.content);
  const currentAuthor =
    authors && authors.find((a) => a.id === post.attributes.author.data.id);

  return (
    <div className="maison-neue-book mb-6 lg:mb-72-px">
      <div className="flex items-center justify-center bg-white">
        <div
          className={`flex flex-col  lg:flex overflow-hidden ${
            imagePosition == 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
          }`}
        >
          <StyledBlogListItemImageWrapper
            className=""
            href={`/blog/${post.attributes.slug}`}
          >
            <img
              className="object-cover"
              src={post.attributes.thumbnail.data.attributes.url}
              alt={post.attributes.title}
            />
          </StyledBlogListItemImageWrapper>
          <StyledBlogListItemContentWrapper>
            {currentAuthor && (
              <div className="mb-4 xl:mb-11">
                <AuthorItem
                  key={post.id}
                  slug={currentAuthor.attributes.slug}
                  avatar={currentAuthor.attributes.avatar}
                  name={currentAuthor.attributes.name}
                  date={dateConverter(
                    post.attributes.releaseDate
                      ? post.attributes.releaseDate
                      : post.attributes.publishedAt,
                  )}
                  readTime={readTime}
                />
              </div>
            )}
            <a className="" href={`/blog/${post.attributes.slug}`}>
              <StyledBlogListItemTitle>
                {post.attributes.title}
              </StyledBlogListItemTitle>
            </a>

            <p className="text-base xl:leading-30-px xl:text-xl pt-4 xl:pt-8">
              {post.attributes.previewText.substring(0, 200)} ...{' '}
              <a
                className="text-light-purple"
                href={`/blog/${post.attributes.slug}`}
              >
                Read more
              </a>
            </p>
            <div className="pt-4 xl:pt-16">
              <div className="h-px bg-dark-gray mb-3 lg:mb-5"></div>
              <div className="flex flex-wrap gap-2">
                <CategoryList categories={categories} />
              </div>
            </div>
          </StyledBlogListItemContentWrapper>
        </div>
      </div>
    </div>
  );
};

export const PostItemCard: React.FC<PostItemProps> = ({
  post,
  categories,
  authors,
}) => {
  const readTime = readingTime(post.attributes.content);
  const currentAuthor =
    authors && authors.find((a) => a.id === post.attributes.author.data.id);
  return (
    <StyledPostItemCardWarpper>
      <div className="flex items-center justify-center ">
        <div className="">
          <a className="" href={`/blog/${post.attributes.slug}`}>
            <StyledPostItemCardImageWarpper
              src={post.attributes.thumbnail.data.attributes.url}
              alt={post.attributes.title}
            ></StyledPostItemCardImageWarpper>
          </a>
          <StyledPostItemCardContentWarpper>
            {currentAuthor && (
              <div className="mb-2 xl:mb-4">
                <AuthorItem
                  key={post.id}
                  name={currentAuthor.attributes.name}
                  avatar={currentAuthor.attributes.avatar}
                  date={dateConverter(
                    post.attributes.releaseDate
                      ? post.attributes.releaseDate
                      : post.attributes.publishedAt,
                  )}
                  small={true}
                  readTime={readTime}
                />
              </div>
            )}
            <a className="" href={`/blog/${post.attributes.slug}`}>
              <div className="font-maison-neue-extended-medium text-xs lg:text-base">
                {post.attributes.title}
              </div>
            </a>
            <p className="text-xs leading-5 pt-2 xl:pt-4">
              {post.attributes.previewText.substring(0, 145)}...{' '}
              <a
                className="text-light-purple"
                href={`/blog/${post.attributes.slug}`}
              >
                Read more
              </a>
            </p>
            <div className="pt-2 xl:pt-8">
              <div className="h-px bg-dark-gray mb-3 lg:mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    href={`/blog/category/${item.attributes.slug}`}
                    passHref
                  >
                    <a className=" border border-transparent bg-light-purple/25  px-2 lg:px-2 rounded-full text-[8px] leading-[10px] md:text-[10px] md:leading-[14px]   hover:border-light-purple hover:text-light-purple">
                      {item.attributes.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </StyledPostItemCardContentWarpper>
        </div>
      </div>
    </StyledPostItemCardWarpper>
  );
};
