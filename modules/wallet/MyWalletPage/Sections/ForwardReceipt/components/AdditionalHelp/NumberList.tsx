import React from 'react';

interface NumberListProps {
  index: number;
  children: React.ReactNode;
}

export const NumberList: React.FC<NumberListProps> = ({ index, children }) => {
  return (
    <li className="flex items-start">
      <div className="inline-flex w-8 h-8 rounded-full bg-[#d9d9d9] mr-5 items-center justify-center font-maison-neue-demi text-2xl">
        {index}
      </div>
      <div className="flex-1 text-gray-800 text-base leading-snug">
        {children}
      </div>
    </li>
  );
};
