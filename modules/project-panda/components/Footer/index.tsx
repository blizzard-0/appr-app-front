import React from 'react';
import Link from 'next/link';
import { Logo } from '..';

import { routes } from '../../../routes';

const mainNavigation = [
  { name: 'For Brands', href: routes.appFrontend.brands.fillPath(null) },
  { name: 'For Owners', href: routes.appFrontend.owners.fillPath(null) },
];

const infoNavigation = [
  {
    name: 'About',
    href: routes.appFrontend.about.fillPath(null),
  },

  {
    name: 'Careers',
    href: routes.appFrontend.careers.fillPath(null),
  },
  { name: 'FAQ', href: routes.appFrontend.faq.fillPath(null) },
  {
    name: 'Blog',
    href: routes.appBlog.blog.fillURL(null),
  },
];
const trustNavigation = [
  { name: 'Terms', href: routes.appFrontend.tos.fillPath(null) },
  { name: 'Privacy Policy', href: routes.appFrontend.privacy.fillPath(null) },
];
const socialNavigation = [
  { name: 'Instagram', href: 'https://www.instagram.com/appreciate.app' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@appreciate.app?lang=en' },
  { name: 'Twitter', href: 'https://twitter.com/appreciate__app' },
];

const FooterSection: React.FC<{
  label: string;
  links: { href: string; name: string }[];
}> = ({ label, links }) => {
  return (
    <div>
      <p className="mb-4 text-xs leading-6 font-medium tracking-wider uppercase font-maison-neue-demi">
        {label}
      </p>
      <ul className="flex flex-col gap-2 w-40">
        {links.map(({ href, name }) => (
          <Link href={href} key={name} passHref>
            <a className="text-14-px leading-6 tracking-wider font-maison-neue-book">
              {name}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-panda-dark w-full">
      <div className="px-5 md:px-12 lg:px-20 pt-10 md:pt-12 pb-20 xl:pb-56 max-w-1280-px mx-auto">
        <div className="flex flex-col xl:flex-row text-panda-light">
          <Logo />
          <div className="w-full h-px bg-panda-divider my-10 xl:hidden"></div>
          <div className="xl:ml-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <FooterSection label="Company" links={infoNavigation} />
            <hr className="border-panda-divider my-2 md:hidden" />
            <FooterSection label="Product" links={mainNavigation} />
            <hr className="border-panda-divider my-2 md:hidden" />
            <FooterSection label="Social" links={socialNavigation} />
            <hr className="border-panda-divider my-2 md:hidden" />
            <FooterSection label="Trust" links={trustNavigation} />
          </div>
        </div>
      </div>
    </footer>
  );
};
