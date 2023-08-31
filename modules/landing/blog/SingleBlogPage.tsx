/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { AuthorItem, AuthorItemBlock } from './Author';
import {
  Twitter,
  Facebook,
  Instagram,
  Tiktok,
} from '../../../modules/landing/blog/Icons';
import {
  readingTime,
  CategoryList,
  dateConverter,
} from '../../../modules/landing/blog/BlogFunctions';
import { PostItemCard } from './Post';
import {
  StyledSingleBlogWrapper,
  StyledSingleBlogContentWrapper,
  StyledSingleBlogSidebarWrapper,
  StyledSingleBlogImageCaption,
  StyledFormBlock,
} from './BlogPage.styled';

import { CustomForm } from './MailchimpForm';
import md from 'markdown-it';
import { AuthorProps, CategoryProps, PostProps } from './BlogProps';

interface SingleBlogPageProps {
  post: PostProps;
  categories: CategoryProps[];
  authors: {
    data: AuthorProps[];
  };
}
interface SocialLinkProps {
  link: string;
  icon: React.ReactNode;
  name: string;
}

interface SocialLinksProps {
  socialLinks: SocialLinkProps[];
}

const SocialLinks = [
  {
    name: 'twitter',
    link: 'https://twitter.com/appreciate__app',
    icon: <Twitter />,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/appreciate-101710658700313',
    icon: <Facebook />,
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/appreciate.app/',
    icon: <Instagram />,
  },
  {
    name: 'tiktok',
    link: 'https://www.tiktok.com/@appreciate.app?lang=en',
    icon: <Tiktok />,
  },
];

const SocialIconBar: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  return (
    <div className="flex gap-4 py-1" role="navigation">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className=""
          role="link"
          target="_blank"
          rel="noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

interface RelatedPosts {
  relatedPosts: PostProps[];
  authors: AuthorProps[];
  categories: CategoryProps[];
}

const RelatedPostsSection: React.FC<RelatedPosts> = ({
  relatedPosts,
  authors,
  categories,
}) => {
  return (
    <div className="mt-6 lg:mt-12 ">
      <div className="flex justify-between text-base lg:text-xl">
        <h3 className="maison-neue-medium">Related Posts</h3>
        <a className="text-light-purple maison-neue-book" href="/blog">
          See all
        </a>
      </div>
      <div className="flex overflow-x-scroll hide-scroll-bar -mr-5 lg:mr-0">
        <div className="flex flex-nowrap gap-6 pt-4 lg:pt-11">
          {relatedPosts?.map((item) => (
            <PostItemCard
              key={item.id}
              post={item}
              categories={categories}
              authors={authors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SingleBlogPage: React.FC<SingleBlogPageProps> = ({
  post,
  categories,
  authors,
}) => {
  const readTime = readingTime(post.attributes.content);
  const currentAuthor =
    authors &&
    authors.data.find((a) => a.id === post.attributes.author.data.id);
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />

      <StyledSingleBlogWrapper>
        <div className="w-full max-w-screen-xl px-12 lg:px-20  mx-auto flex flex-col justify-center">
          <div className="flex justify-between items-start">
            <StyledSingleBlogContentWrapper>
              <div className="hidden lg:block text-base tracking-widest	">
                {dateConverter(
                  post.attributes.releaseDate
                    ? post.attributes.releaseDate
                    : post.attributes.publishedAt,
                )}
                <span className="mx-6 inline-block align-text-bottom">|</span>
                {readTime} min read
              </div>
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-maison-neue-extended-medium mt-0 mb-5 lg:my-12">
                {post.attributes.title}
              </h1>
              <div className="block lg:hidden text-xs tracking-widest	">
                {dateConverter(
                  post.attributes.releaseDate
                    ? post.attributes.releaseDate
                    : post.attributes.publishedAt,
                )}
                <span className="mx-2 inline-block align-text-bottom">|</span>
                {readTime} min read
              </div>
              {currentAuthor && (
                <div className="block lg:hidden	pt-3 pb-2">
                  <AuthorItem
                    avatar={currentAuthor.attributes.avatar}
                    name={currentAuthor.attributes.name}
                    onlyname={true}
                    slug={currentAuthor.attributes.slug}
                  />
                </div>
              )}
              <div className="-mx-12  lg:mx-0 pt-6 lg:pt-0">
                <img
                  className="image w-full"
                  src={post.attributes.thumbnail.data.attributes.url}
                  alt="post"
                />
                <StyledSingleBlogImageCaption
                  className=""
                  dangerouslySetInnerHTML={{
                    __html:
                      post.attributes.thumbnail.data.attributes.alternativeText,
                  }}
                />
              </div>
              <div
                className="flex flex-col gap-6 mt-5 mb-12 lg:my-12 text-base lg:text-xl single-blog-content"
                dangerouslySetInnerHTML={{
                  __html: md().render(post.attributes.content),
                }}
              />
              <div className="block lg:hidden">
                <div className="h-px bg-light-purple mb-6 mt-6"></div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <CategoryList categories={categories} />
                </div>
              </div>
              <div className="flex border-solid border-t lg:border-b border-purple py-6 lg:py-4 gap-6 items-center">
                <div className="block lg:hidden text-base">appreciate us:</div>
                <SocialIconBar socialLinks={SocialLinks}></SocialIconBar>
              </div>
              {currentAuthor && (
                <div className="-mx-12  lg:mx-0 px-12  lg:px-0 block lg:hidden bg-light-pink py-8">
                  <AuthorItemBlock
                    key={post.id}
                    avatar={currentAuthor.attributes.avatar}
                    name={currentAuthor.attributes.name}
                    bio={currentAuthor.attributes.bio}
                    shortBio={currentAuthor.attributes.shortBio}
                    slug={currentAuthor.attributes.slug}
                  />
                </div>
              )}
              <div className="-mx-7 lg:mx-0">
                <RelatedPostsSection
                  relatedPosts={post.attributes.relatedPosts.data}
                  authors={authors?.data}
                  categories={categories}
                ></RelatedPostsSection>
              </div>
            </StyledSingleBlogContentWrapper>
            <StyledSingleBlogSidebarWrapper className="hidden lg:block">
              {currentAuthor && (
                <AuthorItemBlock
                  key={post.id}
                  avatar={currentAuthor.attributes.avatar}
                  name={currentAuthor.attributes.name}
                  bio={currentAuthor.attributes.bio}
                  shortBio={currentAuthor.attributes.shortBio}
                  slug={currentAuthor.attributes.slug}
                />
              )}
              <StyledFormBlock className="custom-mailchimp-form">
                <div className="font-maison-neue-extended text-base mb-8">
                  Let’s stay in touch!
                </div>
                <CustomForm />
              </StyledFormBlock>

              <div className="pt-10 pb-[42px]">
                <div className="text-xl leading-5 font-bold pb-6">
                  appreciate us:
                </div>
                <SocialIconBar socialLinks={SocialLinks}></SocialIconBar>
              </div>
              <div className="">
                <div className="h-px bg-light-purple mb-[42px]"></div>
                <div className="text-xl leading-5 font-bold pb-6">Tags:</div>
                <div className="flex flex-wrap gap-2">
                  <CategoryList categories={categories} />
                </div>
              </div>
            </StyledSingleBlogSidebarWrapper>
          </div>
        </div>
      </StyledSingleBlogWrapper>
      <StyledFormBlock className="custom-mailchimp-form block lg:hidden">
        <div className="font-maison-neue-extended text-xl lg:text-base mb-8">
          Let’s stay in touch!
        </div>
        <CustomForm />
      </StyledFormBlock>
      <Footer />
    </div>
  );
};
