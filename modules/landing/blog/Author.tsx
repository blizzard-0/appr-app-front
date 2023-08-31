/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { StyledAuthorItemBlock } from './BlogPage.styled';

interface AuthorProps {
  date?: string;
  small?: boolean;
  onlyname?: boolean;
  readTime?: number;
  slug?: string;
  name: string;
  avatar: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  shortBio?: string;
  bio?: string;
}

export const AuthorItem: React.FC<AuthorProps> = ({
  name,
  avatar,
  date,
  small,
  onlyname,
  readTime,
}) => {
  if (onlyname) {
    return <div className=" text-xs tracking-widest">By {name}</div>;
  } else {
    return (
      <div
        className={`author-card flex items-center ${
          small
            ? ' author-card-small gap-[6px] md:gap-[9px] xl:gap-4'
            : 'gap-2 lg:gap-5'
        }`}
      >
        <img
          className={`rounded-full ${
            small ? 'w-[35px] md:w-[27px] xl:w-12' : 'w-14'
          }`}
          src={avatar.data.attributes.url}
          alt={name}
        />
        <div
          className={`author-name text-silver  ${
            small
              ? 'text-[11px] leading-[15px] md:text-[12px] md:leading-4 xl:text-base xl:leading-6'
              : 'text-base'
          }`}
        >
          <div className="maison-neue-demi">{name} at appreciate</div>
          <div className={`${small ? 'text-[11px] xl:text-[12px]' : ''}`}>
            {date} <span className="mx-0.5 inline-block align-middle">|</span>{' '}
            {readTime} min read
          </div>
        </div>
      </div>
    );
  }
};

export const AuthorItemBlock: React.FC<AuthorProps> = ({
  name,
  avatar,
  shortBio,
  bio,
  slug,
}) => {
  return (
    <div>
      <div className="flex items-center lg:block gap-5">
        <StyledAuthorItemBlock
          className="rounded-full lg:mb-8"
          src={avatar.data.attributes.url}
          alt={name}
        />
        <div className="">
          <div className="text-base lg:text-xl maison-neue-demi">{name}</div>
          <div className="text-gray-700 text-xs lg:text-sm">{shortBio}</div>
          {bio ? (
            <div className="hidden lg:block text-base leading-7 lg:text-14-px lg:leading-5 pt-8 pb-4">
              {bio}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {bio ? (
        <div className="block lg:hidden text-base leading-7 lg:text-14-px lg:leading-5 pt-6 pb-8">
          {bio}
        </div>
      ) : (
        ''
      )}

      <div className="">
        <Link href={`/blog/author/${slug}`} passHref>
          <a className="text-light-purple text-xs leading-5 lg:text-14-px ">
            View all posts by {name}
          </a>
        </Link>
      </div>
    </div>
  );
};
