import React from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface Links {
  name: string;
  href: string;
}

interface LinksProps {
  title: string;
  navLinks: Links[];
}

export const FooterLinks: React.FC<LinksProps> = ({ title, navLinks }) => {
  return (
    <div
      className="border-t border-dark-gray border-opacity-40 mt-8 pt-8 text-footerlink md:border-t-0 md:mt-0 md:pt-0 space-y-2"
      role="navigation"
    >
      <div className="uppercase maison-neue-demi pb-4 md:pb-5 tracking-wider text-xs md:text-14-px leading-6">
        {title}
      </div>
      <div className="flex flex-col gap-2">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              'hover:underline',
              'maison-neue-book tracking-wider text-14-px md:text-base block leading-6 md:leading-7 md:pb-px',
            )}
            role="link"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
