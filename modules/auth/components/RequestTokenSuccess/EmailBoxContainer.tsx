import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export const EmailBoxContainer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [overflowed, setOverflowed] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (ref.current.scrollWidth > ref.current.clientWidth) {
      setOverflowed(true);
    }
  }, []);

  return (
    <div className="bg-gray-200 max-w-full mx-auto inline-block relative">
      <span
        className={clsx(
          `overflow-auto text-base leading-12 tracking-0.02em font-maison-neue-medium font-medium text-gray-900 w-full block no-scrollbar px-4`,
          overflowed && 'pr-6',
        )}
        ref={ref}
      >
        {children}
      </span>
      {overflowed && (
        <div className="absolute top-0 right-0 w-9 h-full -mr-px">
          <svg
            width="36"
            height="48"
            viewBox="0 0 36 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="48" fill="url(#paint0_linear_730_35516)" />
            <defs>
              <linearGradient
                id="paint0_linear_730_35516"
                x1="18"
                y1="48"
                x2="0"
                y2="48"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3F3F3" />
                <stop offset="1" stopColor="#EFEFEF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};
