import React from 'react';
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Links {
  name: string;
  href: string;
  tagline?: string;
  color?: string;
}

interface LinksProps {
  navLinks: Links[];
}

export const HeaderLinks: React.FC<LinksProps> = ({ navLinks }) => {
  const router = useRouter();
  return (
    <div
      className="inline-block items-center space-x-6 header-links"
      role="navigation"
    >
      {navLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            'pb-2 ',
            'tracking-wider text-panda-dark text-navlink uppercase group relative',
            `${router.asPath == item.href ? 'active' : ''}`,
          )}
          role="link"
        >
          {item.name}
          {!!item.tagline && (
            <span
              className={`${item.color} hidden leading-5 text-panda-dark normal-case rounded-sm py-2 px-3 mt-3 group-hover:block absolute w-[280px] left-0`}
            >
              {item.tagline}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};
