import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Logo } from '..';
import { routes } from '../../../routes';

interface NavigationBarProps {
  theme?: 'sea' | 'grellow' | 'blue' | 'salm';
  current?: 'brands' | 'owners';
}

const LinkComponent = ({
  label,
  link,
  active = false,
}: {
  label: string;
  link: string;
  active?: boolean;
}) => (
  <Link href={link} passHref>
    <a className="uppercase text-xs leading-8 tracking-wider text-panda-dark relative">
      {label}
      {active && (
        <span className="block h-px w-full bg-panda-dark absolute left-0 bottom-1" />
      )}
    </a>
  </Link>
);

export const NavigationBar: React.FC<NavigationBarProps> = ({
  theme = 'sea',
  current,
}) => {
  return (
    <header className="bg-white fixed left-0 w-full top-0 z-10 font-maison-neue-book">
      <nav className="p-5 md:pl-6 flex items-center text-panda-dark">
        <Link href="/" passHref>
          <span className="inline-block">
            <Logo />
          </span>
        </Link>
        <div className="w-px h-4 bg-panda-dark mx-6 hidden md:block"></div>
        <div className="gap-6 hidden md:flex">
          <LinkComponent
            label="For Brands"
            link={routes.appFrontend.brands.fillPath(null)}
            active={current === 'brands'}
          />
          <LinkComponent
            label="For Owners"
            link={routes.appFrontend.owners.fillPath(null)}
            active={current === 'owners'}
          />
        </div>
        <div className="ml-auto"></div>
        <div className="hidden xl:flex items-center gap-6">
          <LinkComponent
            label="About us"
            link={routes.appFrontend.about.fillPath(null)}
          />
          <LinkComponent
            label="Careers"
            link={routes.appFrontend.careers.fillPath(null)}
          />
          <LinkComponent
            label="Faq"
            link={routes.appFrontend.faq.fillPath(null)}
          />
          <LinkComponent
            label="Explore"
            link={routes.appFrontend.explore.fillPath(null)}
          />
          <div className="w-px h-4 bg-panda-dark"></div>
          <LinkComponent
            label="Log in"
            link={routes.appFrontend.logIn.fillPath(null)}
          />
        </div>
        <Link href={routes.appFrontend.signUp.fillPath(null)} passHref>
          <a
            className={`ml-8 uppercase px-3 py-2 font-maison-neue-medium ${
              theme === 'blue' ? 'text-panda-light' : 'text-panda-dark'
            } text-xs tracking-widest font-medium ${
              theme === 'sea'
                ? 'bg-panda-sea'
                : theme === 'grellow'
                ? 'bg-panda-grellow'
                : theme === 'salm'
                ? 'bg-panda-salm'
                : 'bg-panda-blue'
            }`}
          >
            Get Started
          </a>
        </Link>
        <div className="ml-5 h-8 xl:hidden">
          <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
              <>
                <Disclosure.Button className="inline-flex items-center justify-center text-panda-dark focus:outline-none w-8 h-8">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="xl:hidden bg-white fixed top-72-px right-0 bottom-0 left-0 lg:left-2/3 overflow-y-auto">
                  <div className="px-5 py-10">
                    <div className="space-y-8">
                      <Link
                        href={routes.appFrontend.brands.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book  tracking-wider text-panda-dark block  text-sub-header uppercase font-medium">
                          For Brands
                          <span className="maison-neue leading-5 block text-navlink normal-case">
                            Delight, connect, and serve your customers
                          </span>
                        </a>
                      </Link>
                      <Link
                        href={routes.appFrontend.owners.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book  tracking-wider text-panda-dark block  text-sub-header uppercase font-medium">
                          For Owners
                          <span className="maison-neue leading-5 block text-navlink normal-case">
                            Organize, flex, and interact with your items
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className="border-t mt-10 mb-8 py-8 space-y-6 border-b border-dark border-opacity-25">
                      <Link
                        href={routes.appFrontend.explore.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book tracking-wider text-panda-dark block px-0 py-2  text-sm font-medium uppercase">
                          Explore
                        </a>
                      </Link>
                      <Link
                        href={routes.appFrontend.about.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book tracking-wider text-panda-dark block px-0 py-2  text-sm font-medium uppercase">
                          About Us
                        </a>
                      </Link>
                      <Link
                        href={routes.appFrontend.careers.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book tracking-wider text-panda-dark block px-0 py-2  text-sm font-medium uppercase">
                          Careers
                        </a>
                      </Link>
                      <Link
                        href={routes.appFrontend.faq.fillPath(null)}
                        passHref
                      >
                        <a className="hover:underline maison-neue-book tracking-wider text-panda-dark block px-0 py-2  text-sm font-medium uppercase">
                          FAQ
                        </a>
                      </Link>
                      <Link href="https://blog.appreciate.it/" passHref>
                        <a className="hover:underline maison-neue-book tracking-wider text-panda-dark block px-0 py-2  text-sm font-medium uppercase">
                          Blog
                        </a>
                      </Link>
                    </div>
                    <Link
                      href={routes.appFrontend.logIn.fillPath(null)}
                      passHref
                    >
                      {/* maison-neue-book uppercase bg-indigo text-sm text-white font-bold py-4 text-center px-4 block rounded  */}
                      <a
                        className={clsx(
                          `uppercase p-4 block font-maison-neue-medium text-sm text-center tracking-widest font-medium`,
                          theme === 'blue'
                            ? 'text-panda-light'
                            : 'text-panda-dark',
                          theme === 'sea'
                            ? 'bg-panda-sea'
                            : theme === 'grellow'
                            ? 'bg-panda-grellow'
                            : theme === 'salm'
                            ? 'bg-panda-salm'
                            : 'bg-panda-blue',
                        )}
                      >
                        Log In
                      </a>
                    </Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </header>
  );
};
