/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '../../../modules/routes';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Posts } from '../blog/Posts';
import { StyledBlogHeroWrapper } from './BlogPage.styled';
import { AuthorProps, CategoryProps, PostProps } from './BlogProps';

export const BlogPage: React.FC<{
  posts?: PostProps[];
  categories: CategoryProps[];
  authors: AuthorProps[];
}> = ({ posts, categories, authors }) => {
  const router = useRouter();
  return (
    <div className="bg-light-yellow text-panda-dark">
      <Header />

      <StyledBlogHeroWrapper className="hidden lg:block">
        <div className="w-full max-w-screen-xl px-5 md:px-20 lg:pr-0 mx-auto flex flex-col justify-center">
          <div className="">
            <div>
              <Link href={routes.appFrontend.root.fillPath(null)} passHref>
                <a>
                  <img
                    className="block  w-auto m-auto max-w-sm"
                    src="/appreciate-logo-with-icon.svg"
                    alt="Workflow"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </StyledBlogHeroWrapper>

      <div className="pt-12 lg:mt-0 lg:pt-0 flex flex-col">
        <div className="w-full max-w-screen-xl px-5 md:px-20 lg:px-5 xl:px-0 mx-auto flex flex-col justify-center">
          <div className=" text-14-px leading-4 mb-6 lg:mb-[74px] flex flex-wrap items-end  gap-1.5  lg:gap-6 tracking-wide category-links">
            <Link href={`/blog`} passHref>
              <a
                className={`${
                  router.asPath == `/blog`
                    ? 'maison-neue-demi active'
                    : 'maison-neue-book'
                }  uppercase hover:text-theme-red-3`}
              >
                All Posts
              </a>
            </Link>
            {categories?.map((item, index) => (
              <>
                <span className="leading-5">|</span>
                <Link
                  key={index}
                  href={`/blog/category/${item.attributes.slug}`}
                  passHref
                >
                  <a
                    className={`${
                      router.asPath == `/blog/category/${item.attributes.slug}`
                        ? 'maison-neue-demi active'
                        : 'maison-neue-book'
                    }  uppercase hover:text-theme-red-3`}
                  >
                    {item.attributes.name}
                  </a>
                </Link>
              </>
            ))}
          </div>
          <div className="">
            {posts ? (
              <Posts posts={posts} categories={categories} authors={authors} />
            ) : (
              'There are no posts!'
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
