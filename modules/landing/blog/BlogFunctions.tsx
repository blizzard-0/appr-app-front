import Link from 'next/link';
import React from 'react';
import { CategoryProps } from './BlogProps';

export function readingTime(body: string) {
  const text = body;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateConverter = (date: number) => {
  const fullDate = new Date(date);
  return (
    monthNames[fullDate.getMonth()] +
    ' ' +
    fullDate.toString().split(' ')[2] +
    ', ' +
    fullDate.getFullYear()
  );
};

export const CategoryList: React.FC<{ categories: CategoryProps[] }> = ({
  categories,
}) => {
  return (
    <>
      {categories.map((item, index) => (
        <Link
          key={index}
          href={`/blog/category/${item.attributes.slug}`}
          passHref
        >
          <a className=" border-2 border-transparent bg-light-purple/25 lg:py-1 px-2 lg:px-4 rounded-full text-xs leading-5 lg:text-14-px  hover:border-light-purple hover:text-light-purple">
            {item.attributes.name}
          </a>
        </Link>
      ))}
    </>
  );
};
