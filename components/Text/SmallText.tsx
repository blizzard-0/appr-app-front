import React from 'react';

export const SmallText: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <span className="text-gray-500 font-normal text-sm">{children}</span>;
};
