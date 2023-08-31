import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { HyperLinkProps } from './types';

export const HyperLink: React.FC<PropsWithChildren<HyperLinkProps>> = ({
  href,
  children,
}) => {
  return (
    <span className="text-link hover:underline focus:underline visited:bg-krestrel-action-hyperlinkVisited cursor-pointer">
      <Link href={href} passHref>
        {children}
      </Link>
    </span>
  );
};
