import React from 'react';
interface SubHeaderProps {
  bottomPadding?: 'none' | 'default';
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
}
export const SubHeader: React.FC<SubHeaderProps> = ({
  bottomPadding = 'default',
  align = 'center',
  children,
}) => {
  const alignText = `text-${align}`;
  const pb = `${
    bottomPadding == 'default' ? 'pb-10 md:pb-12 lg:pb-20' : 'pb-0'
  }`;
  return (
    <div className={`${pb}  max-w-full mx-auto xl:max-w-1280-px`}>
      <h2
        className={`text-panda-dark text-24-px leading-40-px md:text-32-px md:leading-48-px lg:text-40-px  mb-0 font-maison-neue-book border-t-2 md:border-t-4 lg:border-t-6 border-panda-slate border-b-px py-4 md:py-6 lg:py-8 ${alignText}`}
      >
        {children}
      </h2>
    </div>
  );
};
