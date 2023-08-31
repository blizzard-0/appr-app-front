import React from 'react';
import clsx from 'clsx';

interface PageHeaderProps {
  children?: React.ReactNode;
  keepSpacing?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  keepSpacing = false,
}) => {
  return (
    <section
      className={clsx(
        'md:py-10 flex items-center justify-center font-maison-neue-book bg-gray-100',
        'border-b-px border-gray-300',
        keepSpacing ? 'py-10' : 'py-8',
      )}
    >
      {children}
    </section>
  );
};

export default PageHeader;
