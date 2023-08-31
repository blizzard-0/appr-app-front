import React, { useState } from 'react';
import { PostItem } from './Post';
import { StyledBlogListWrapper, StyledLoadMoreButton } from './BlogPage.styled';
import { AuthorProps, CategoryProps, PostProps } from './BlogProps';

const LIMIT = 3;

export const Posts: React.FC<{
  posts: PostProps[];
  categories: CategoryProps[];
  authors: AuthorProps[];
}> = ({ posts, authors }) => {
  const [next, setNext] = useState(LIMIT);
  const handleMorePost = () => {
    setNext(next + LIMIT);
  };
  return (
    <div className="">
      <StyledBlogListWrapper>
        <div className="">
          {posts.slice(0, next).map((item, index) => (
            <PostItem
              categories={item.attributes.categories.data}
              key={item.id}
              post={item}
              imagePosition={`${index % 2 ? 'right' : 'left'}`}
              authors={authors}
            />
          ))}
        </div>
        <div className="text-center">
          {next < posts.length && (
            <StyledLoadMoreButton onClick={handleMorePost}>
              LOAD MORE
            </StyledLoadMoreButton>
          )}
        </div>
      </StyledBlogListWrapper>
    </div>
  );
};
