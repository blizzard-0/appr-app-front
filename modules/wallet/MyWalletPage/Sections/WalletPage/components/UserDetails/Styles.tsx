import React, { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

interface WithChildren {
  children?: React.ReactNode;
}

interface StatusDisplayProps {
  label: string;
  border?: boolean;
}
export const StatusDisplay: React.FC<PropsWithChildren<StatusDisplayProps>> = ({
  label,
  border,
  children,
}) => {
  return (
    <div
      className={clsx('text-center', border && 'border-r-px border-gray-300')}
    >
      <dt className="font-maison-neue-demi text-xl md:text-heading mb-0.5 md:mb-2 leading-6 md:leading-10 tracking-0.02em">
        {children}
      </dt>
      <dd className="text-sm md:text-base leading-5 md:leading-6 text-gray-500 tracking-0.02em">
        {label}
      </dd>
    </div>
  );
};

export const StatusDisplaySticky: React.FC<
  PropsWithChildren<StatusDisplayProps>
> = ({ label, children }) => {
  return (
    <div className="flex items-center font-maison-neue-book text-sm leading-6 mx-4">
      <span className="text-gray-800 font-medium mr-1.5">{children}</span>
      <span className="text-gray-500">{label}</span>
    </div>
  );
};

export const UserName: React.FC<WithChildren> = ({ children }) => (
  <p className="mt-4 uppercase leading-6 tracking-wider font-medium text-gray-800 text-center">
    {children}
  </p>
);

export const StatusWrapper = forwardRef<HTMLDivElement, WithChildren>(
  ({ children }, ref) => {
    return (
      <div
        className="grid grid-cols-3 pt-10 w-full md:w-c-wallet-stats mx-auto px-5 md:px-0"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
StatusWrapper.displayName = 'StatusWrapper';
