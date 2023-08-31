import React from 'react';

export const NoSearchResult: React.FC = () => {
  return (
    <div>
      <div className="mb-10 flex justify-center">
        <svg
          width="124"
          height="156"
          viewBox="0 0 124 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="124" height="92" fill="#D1D1D1" />
          <rect
            width="124"
            height="64"
            transform="translate(0 92)"
            fill="#EDEDED"
          />
          <rect
            width="100"
            height="4"
            transform="translate(12 104)"
            fill="#D1D1D1"
          />
          <rect
            width="100"
            height="4"
            transform="translate(12 116)"
            fill="#D1D1D1"
          />
          <rect
            width="100"
            height="4"
            transform="translate(12 128)"
            fill="#D1D1D1"
          />
        </svg>
      </div>
      <h3 className="font-maison-neue-book text-3xl leading-10 text-center">
        No products found
      </h3>
    </div>
  );
};
