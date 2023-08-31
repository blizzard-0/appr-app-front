/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { routes } from '../../modules/routes';
import { FooterLinks } from './FooterLinks';
import { StyledFooterBottomBar } from './Footer.styled';
const mainNavigation = [
  { name: 'For Brands', href: routes.appFrontend.brands.fillPath(null) },
  { name: 'For Owners', href: routes.appFrontend.owners.fillPath(null) },
  {
    name: 'For Partners',
    href: '/partners', //TODO add route
  },
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
  {
    name: 'Explore',
    href: routes.appFrontend.explore.fillPath(null),
  },
  { name: 'FAQ', href: routes.appFrontend.faq.fillPath(null) },
];
const trustNavigation = [
  { name: 'Terms', href: routes.appFrontend.tos.fillPath(null) },
  { name: 'Privacy Policy', href: routes.appFrontend.privacy.fillPath(null) },
];
const socialNavigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Instagram', href: 'https://www.instagram.com/appreciate.app' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@appreciate.app?lang=en' },
  { name: 'Twitter', href: 'https://twitter.com/appreciate__app' },
];

export const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-900 flex flex-col pb-[42px] lg:pb-[92px] pt-[42px] lg:pt-16 ">
        <div className="w-full text-light-gray px-[50px] md:px-5 sm:max-w-screen-2xl mx-auto h-full flex flex-col justify-between">
          <div className="block py-1 mb-8 lg:py-0 lg:hidden ">
            <Link href={routes.appFrontend.root.fillPath(null)}>
              <a>
                <img
                  className="block w-auto"
                  src="/appreciate-logo-white-new.svg"
                  alt="Workflow"
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap md:grid md:border-t  lg:border-t-0 border-dark-gray border-opacity-40 md:pt-10 md:mt-10 lg:mt-0 lg:pt-0  md:grid-cols-4 lg:grid-cols-6 md:gap-4 lg:gap-8">
            <div className="hidden lg:block lg:col-span-2">
              <Link href={routes.appFrontend.root.fillPath(null)}>
                <a>
                  <img
                    className="my-1 md:my-0 block w-auto"
                    src="/appreciate-logo-white-new.svg"
                    alt="Workflow"
                  />
                </a>
              </Link>
            </div>
            <div className="w-1/2 md:w-auto">
              <FooterLinks title="Company" navLinks={infoNavigation} />
            </div>
            <div className="w-1/2 md:w-auto">
              <FooterLinks title="Product" navLinks={mainNavigation} />
            </div>
            <div className="w-1/2 md:w-auto">
              <FooterLinks title="Social" navLinks={socialNavigation} />
            </div>
            <div className="w-1/2 md:w-auto">
              <FooterLinks title="Trust" navLinks={trustNavigation} />
            </div>
          </div>
          <StyledFooterBottomBar>
            © 2022 Appreciate Stuff, Inc. All Rights Reserved.
          </StyledFooterBottomBar>
        </div>
      </div>
    </>
  );
};
