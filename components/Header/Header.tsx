/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '../../modules/routes';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { HeaderLinks } from './HeaderLinks';
import { StyledLogoWrapper, StyledCTAWrapper } from './Header.styled';
import { Logo } from './Icons';
import { CTAPopup } from '../../modules/landing/components/CTAPopup';
import { isIOS } from 'react-device-detect';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const mainNavigation = [
  {
    name: 'For Owners',
    href: routes.appFrontend.owners.fillPath(null),
    tagline: 'Organize, flex, and interact with your items',
    color: 'bg-owners-light-pink',
  },
  {
    name: 'For Brands',
    href: routes.appFrontend.brands.fillPath(null),
    tagline: 'Delight, connect, and serve your owners',
    color: 'bg-brands-light-green',
  },

  {
    name: 'For Partners',
    href: '/partners', //TODO add route
    tagline: 'Engage and empower your owners',
    color: 'bg-partners-light-blue',
  },
  {
    name: 'Explore',
    href: routes.appFrontend.explore.fillPath(null),
  },
];

const infoNavigation = [
  {
    name: 'About',
    href: routes.appFrontend.about.fillPath(null),
  },
  {
    name: 'Blog',
    href: '/blog', //TODO add route
  },
  {
    name: 'Careers',
    href: routes.appFrontend.careers.fillPath(null),
  },
  { name: 'FAQ', href: routes.appFrontend.faq.fillPath(null) },
];

interface HeaderProps {
  white?: boolean;

  theme?: 'purple' | 'green' | 'yellow' | 'red';
  typeFormCTA?: boolean;
  CTADesktopModal?: boolean;
}
export const Header: React.FC<HeaderProps> = ({
  white = false,
  theme = 'red',
  typeFormCTA = false,
  CTADesktopModal = false,
}) => {
  const [navbar, setNavbar] = useState(white);
  const router = useRouter();
  useEffect(() => {
    const changeNavbar = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeNavbar);
    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [white]);

  const [CTAModalActive, setCTAModalActive] = useState(false);

  const handleActiveCTAModal = () => {
    setCTAModalActive(true);
  };

  const handleCloseCTAModal = () => {
    setCTAModalActive(false);
  };

  const [isIOSDevice, setIOSDevice] = useState(false);

  useEffect(() => {
    const IOSDevice = isIOS;
    setIOSDevice(IOSDevice);
  }, []);

  const [HeaderHidden, setHeaderHidden] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.get('headerHidden') &&
      urlParams.get('headerHidden') == 'true'
    ) {
      setHeaderHidden(true);
    }
  }, []);

  return (
    <>
      {!HeaderHidden ? (
        <>
          <div
            className={`${
              white ? 'bg-white' : 'bg-light-gray'
            } fixed top-0 left-0 right-0 z-40 theme-${theme}`}
          >
            <div className="maison-neue-book w-full mx-auto h-full flex flex-col justify-between">
              <Disclosure as="nav" className="bg-transparent">
                {({ open }) => (
                  <>
                    <div
                      className={`${
                        open
                          ? 'bg-white h-screen flex flex-col'
                          : 'bg-transparent'
                      } `}
                    >
                      <div
                        className={`${
                          open
                            ? 'bg-white border-b border-panda-dark border-opacity-25 '
                            : ''
                        } max-w-full w-full mx-auto px-5 py-5  lg:px-6`}
                      >
                        <div className="flex items-center justify-start xl:justify-between">
                          <div className="flex items-center pr-2 lg:pr-6 lg:border-r border-panda-dark border-opacity-25">
                            <div className="flex-shrink-0">
                              <Link
                                href={routes.appFrontend.root.fillPath(null)}
                                passHref
                              >
                                <a>
                                  <StyledLogoWrapper>
                                    <Logo />
                                  </StyledLogoWrapper>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div className="hidden lg:ml-6 lg:block">
                            <HeaderLinks navLinks={mainNavigation} />
                          </div>
                          <div className="hidden  xl:flex items-center ml-auto">
                            <HeaderLinks navLinks={infoNavigation} />
                            <div className="h-4 w-px bg-black mx-5 "></div>
                            <div className="">
                              <Link
                                href={routes.appFrontend.logIn.fillPath(null)}
                                passHref
                              >
                                <a
                                  className={classNames(
                                    'tracking-wider text-panda-dark text-navlink uppercase group pb-2',
                                  )}
                                  role="link"
                                >
                                  Log in
                                </a>
                              </Link>
                            </div>
                            {typeFormCTA ? (
                              <StyledCTAWrapper
                                data-tf-popup="Gjh6tUN8"
                                data-tf-size="70"
                                data-tf-iframe-props="title=Get protection with appreciate"
                                data-tf-medium="snippet"
                                className={`py-2 px-3  ml-8 cursor-pointer inline-block`}
                                theme={theme}
                              >
                                Join Platform
                              </StyledCTAWrapper>
                            ) : (
                              <>
                                <StyledCTAWrapper
                                  href="https://apps.apple.com/us/app/appreciate/id1603845311"
                                  className={`py-2 px-3  ml-8 ${
                                    CTADesktopModal
                                      ? 'inline-block lg:hidden'
                                      : 'inline-block'
                                  }`}
                                  theme={theme}
                                >
                                  Get App
                                </StyledCTAWrapper>
                                <StyledCTAWrapper
                                  onClick={handleActiveCTAModal}
                                  className={`py-2 px-3  ml-8 ${
                                    CTADesktopModal
                                      ? 'hidden lg:inline-block cursor-pointer'
                                      : 'hidden'
                                  }`}
                                  theme={theme}
                                >
                                  Get App
                                </StyledCTAWrapper>
                              </>
                            )}
                            {CTADesktopModal ? (
                              <CTAPopup
                                active={CTAModalActive}
                                onClose={handleCloseCTAModal}
                              />
                            ) : (
                              ''
                            )}
                          </div>
                          <div className=" flex ml-auto xl:ml-0 xl:hidden">
                            {typeFormCTA ? (
                              <StyledCTAWrapper
                                data-tf-popup="Gjh6tUN8"
                                data-tf-size="70"
                                data-tf-iframe-props="title=Get protection with appreciate"
                                data-tf-medium="snippet"
                                className={` 'inline-block  py-2 px-4 mr-6 cursor-pointer`}
                                theme={theme}
                              >
                                Join Platform
                              </StyledCTAWrapper>
                            ) : (
                              <StyledCTAWrapper
                                href={
                                  isIOSDevice
                                    ? 'https://apps.apple.com/us/app/appreciate/id1603845311'
                                    : 'https://appreciate.it/app/signup'
                                }
                                className={` inline-block py-2 px-4 mr-6`}
                                theme={theme}
                              >
                                Get App
                              </StyledCTAWrapper>
                            )}

                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded text-panda-dark  focus:outline-none">
                              <span className="sr-only">Open main menu</span>
                              {open ? (
                                <XIcon
                                  className="block h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MenuIcon
                                  className="block h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </Disclosure.Button>
                          </div>
                        </div>
                      </div>

                      <Disclosure.Panel className="xl:hidden bg-white">
                        <div className="px-5 py-8">
                          <div className="space-y-8 header-links">
                            {mainNavigation.map((item) => (
                              <div key={item.name}>
                                <Link href={item.href} passHref>
                                  <a
                                    className={classNames(
                                      'maison-neue-book  tracking-wider text-panda-dark block  text-xs  lg:text-sub-header uppercase font-medium',
                                    )}
                                  >
                                    <span
                                      className={`leading-8 pb-1 mb-1 ${
                                        router.asPath == item.href
                                          ? 'active'
                                          : ''
                                      }`}
                                    >
                                      {item.name}
                                    </span>
                                    <span
                                      className={`${item.color} mt-1 maison-neue leading-5 block text-panda-dark text-navlink normal-case py-2 px-3 rounded`}
                                    >
                                      {item.tagline}
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-col gap-5 border-t mt-10 mb-8 py-8 border-panda-dark header-links">
                            {infoNavigation.map((item) => (
                              <div key={item.name}>
                                <Link href={item.href} passHref>
                                  <a
                                    className={classNames(
                                      'maison-neue-book tracking-wider text-panda-dark block px-0 py-0 text-xs lg:text-sm font-medium uppercase inline-block',
                                      `${
                                        router.asPath == item.href
                                          ? 'active'
                                          : ''
                                      }`,
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="mt-[76px]"></div>
        </>
      ) : null}
    </>
  );
};
