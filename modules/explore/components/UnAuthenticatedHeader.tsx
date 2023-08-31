import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@/components/v2';
import { NavbarLink } from '@/components/v2/Nav';
import { routes } from '../../routes';

export const UnAuthenticatedHeader = () => {
  const { pathname } = useRouter();

  return (
    <header className="fixed top-0 left-0 z-20 w-full font-maison-neue-book">
      <nav className="bg-white py-5 px-5 md:px-6 flex items-center w-full border-b-px border-gray-300 relative">
        <Link href={routes.appFrontend.brands.fillPath(null)} passHref>
          <a className="inline-block h-6 cursor-pointer">
            <Logo $variant="tiny" />
          </a>
        </Link>
        <span className="w-px h-6 bg-nav-divider mx-6 hidden md:flex"></span>
        <ul className="items-center flex ml-6 md:ml-0">
          <NavbarLink
            index={0}
            pathname={pathname}
            label="Log in"
            href={routes.appFrontend.logIn.fillPath(null)}
          />
        </ul>
        <ul className="items-center flex ml-6">
          <NavbarLink
            index={0}
            pathname={pathname}
            label="Sign up"
            href={routes.appFrontend.signUp.fillPath(null)}
          />
        </ul>
      </nav>
    </header>
  );
};
