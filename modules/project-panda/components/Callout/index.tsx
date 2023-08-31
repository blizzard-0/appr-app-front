/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CallOutProps {
  children?: React.ReactNode;
  title: string;
  image: [string, string];
  align?: 'left' | 'right';
}

export const CallOut: React.FC<CallOutProps> = ({
  align = 'left',
  title,
  children,
  image,
}) => {
  const [desktop, mobile] = image;

  return (
    <div className="xl:max-w-1060-px lg:max-w-816-px md:max-w-528-px mx-auto relative overflow-visible">
      <div
        className={`flex flex-col ${
          align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } py-10 px-5 lg:h-450-px xl:h-640-px items-center`}
      >
        <div className="flex-1">
          <div
            className={`mb-6 lg:mb-0 text-panda-dark text-center lg:text-left w-full md:max-w-480-px lg:max-w-400-px xl:max-w-480-px ${
              align === 'left' ? '' : 'ml-auto'
            }`}
          >
            <h2 className="font-maison-neue-extended mb-6 text-40-px leading-12 md:text-5xl md:leading-56-px xl:text-56-px xl:leading-64-px">
              {title}
            </h2>
            <p className="font-maison-neue-book text-base xl:text-xl leading-30-px">
              {children}
            </p>
          </div>
        </div>
        <div
          className={`hidden lg:block flex-1 h-full relative ${
            align === 'left' ? 'text-right' : 'text-left'
          }`}
        >
          <img
            src={desktop}
            alt="callout"
            className={`block relative lg:absolute lg:transform lg:-translate-y-1/2 lg:top-1/2 left-0 w-auto lg:h-auto sm:h- ${
              align === 'left' ? 'lg:translate-x-20' : 'lg:-translate-x-20'
            } z-1`}
          />
        </div>
        <div className="lg:hidden flex-1">
          <img
            src={mobile}
            alt="callout_sm"
            className="max-w-352-px mx-auto block"
          />
        </div>
      </div>
      <img
        src="/images/panda/callout_pattern.png"
        alt="pattern"
        className={`hidden lg:block bottom-0 absolute z-0 ${
          align === 'left'
            ? '-right-120-px'
            : '-left-120-px transform rotate-180'
        }`}
      />
    </div>
  );
};
