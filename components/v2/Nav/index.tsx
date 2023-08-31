import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { truncate } from 'lodash';

import { routes } from '../../../modules/routes';
import { MAX_FULLNAME_LENGTH } from '../../../consts/consts';

import { Logo } from '..';
import {
  HamburgerIcon,
  CloseIcon,
  WalletIcon,
  ExploreIcon,
  AccountIcon,
} from './icons';
import {
  StyledHeader,
  StyledNavbarLink,
  StyledLink,
  StyledSpan,
  StyledNavbarUser,
  StyledNavbarAvatarWrapper,
  StyledNavbarAvatar,
  StyledNavbarUserInfo,
  StyledNavbarUserName,
  StyledNavbarUserEmail,
  StyledNavWrapper,
  StyledLogo,
  StyledVerticalDivider,
  StyledNavItems,
  StyledMobileButton,
  StyledDivider,
  StyledMenuItem,
  StyledMobileMenu,
  StyledMenuWrapper,
  StyledBottomNavigation,
  StyledBottomNavigationButton,
} from './Nav.styled';

interface NavLinkProps {
  href: string;
  label: string;
  disabled?: boolean;
}

const NAV_LINKS: NavLinkProps[] = [
  { href: routes.appFrontend.myWallet.fillPath(null), label: 'Wallet' },
  { href: routes.appFrontend.explore.fillPath(null), label: 'Explore' },
];

interface NavbarProps {
  currentUser: {
    avatarUrl?: string;
    userName: string;
    primaryEmail: string;
  };
}

interface NavbarLinkProps extends LinkProps {
  disabled?: boolean;
  label: string;
  index: number;
  pathname: string;
}

interface NavbarUserProps {
  email: string;
  name: string;
  avatarUrl?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  disabled = false,
  pathname,
  ...rest
}) => {
  const active = pathname === rest.href.toString();

  return (
    <StyledNavbarLink $active={active} $disabled={disabled} role="menuitem">
      {!disabled ? (
        <Link {...rest} passHref>
          <StyledLink>{label}</StyledLink>
        </Link>
      ) : (
        <StyledSpan>{label}</StyledSpan>
      )}
    </StyledNavbarLink>
  );
};

const NavbarUser: React.FC<NavbarUserProps> = ({ email, name, avatarUrl }) => {
  return (
    <StyledNavbarUser>
      <StyledNavbarAvatarWrapper>
        {avatarUrl ? (
          <StyledNavbarAvatar src={avatarUrl} alt="user_avatar" />
        ) : (
          name.charAt(0)
        )}
      </StyledNavbarAvatarWrapper>
      <StyledNavbarUserInfo>
        <StyledNavbarUserName>
          {truncate(name, { length: MAX_FULLNAME_LENGTH })}
        </StyledNavbarUserName>
        <StyledNavbarUserEmail>{email}</StyledNavbarUserEmail>
      </StyledNavbarUserInfo>
    </StyledNavbarUser>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const router = useRouter();
  const { primaryEmail, userName, avatarUrl } = currentUser;

  return (
    <>
      <StyledHeader role="navigation">
        <StyledNavWrapper>
          <Link href={routes.appFrontend.myWallet.fillPath(null)} passHref>
            <StyledLogo>
              <Logo $variant="tiny" />
            </StyledLogo>
          </Link>
          <StyledVerticalDivider />
          <StyledNavItems>
            {NAV_LINKS.map((navLink, index) => (
              <NavbarLink
                {...navLink}
                key={navLink.href.toString()}
                index={index}
                pathname={router.pathname}
              />
            ))}
          </StyledNavItems>
          <Menu>
            <Menu.Button className="ml-auto hidden md:block" role="menu">
              <HamburgerIcon />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out origin-top"
              enterFrom="transform scale-y-0 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-75 ease-out origin-top"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-0 opacity-0"
              className="absolute bg-white top-16 h-auto right-0 shadow-lg mt-px w-nav-dropdown hidden md:block"
            >
              {isMobile && (
                <StyledMobileButton>
                  <Menu.Button className="ml-auto">
                    <CloseIcon />
                  </Menu.Button>
                </StyledMobileButton>
              )}
              <Menu.Items className="focus:outline-none">
                <StyledMenuWrapper>
                  <NavbarUser
                    name={userName}
                    email={primaryEmail}
                    avatarUrl={avatarUrl}
                  />
                  <StyledDivider className="block md:hidden" />
                  <StyledMobileMenu>
                    {NAV_LINKS.map((navLink, index) => (
                      <NavbarLink
                        {...navLink}
                        key={navLink.href.toString()}
                        index={index}
                        pathname={router.pathname}
                      />
                    ))}
                  </StyledMobileMenu>
                  <StyledDivider />
                  <StyledMenuItem
                    $active={
                      router.pathname ===
                      routes.appFrontend.settings.fillPath(null)
                    }
                  >
                    <Link href={routes.appFrontend.settings.fillPath(null)}>
                      Account
                    </Link>
                  </StyledMenuItem>
                </StyledMenuWrapper>
              </Menu.Items>
            </Transition>
          </Menu>
        </StyledNavWrapper>
      </StyledHeader>
      <StyledBottomNavigation>
        <Link passHref href={routes.appFrontend.myWallet.fillPath(null)}>
          <StyledBottomNavigationButton
            $active={
              router.pathname === routes.appFrontend.myWallet.fillPath(null)
            }
          >
            <WalletIcon />
            Wallet
          </StyledBottomNavigationButton>
        </Link>
        <Link passHref href={routes.appFrontend.explore.fillPath(null)}>
          <StyledBottomNavigationButton
            $active={
              router.pathname === routes.appFrontend.explore.fillPath(null)
            }
          >
            <ExploreIcon />
            Explore
          </StyledBottomNavigationButton>
        </Link>
        <Link passHref href={routes.appFrontend.settings.fillPath(null)}>
          <StyledBottomNavigationButton
            $active={
              router.pathname === routes.appFrontend.settings.fillPath(null)
            }
          >
            <AccountIcon /> Account
          </StyledBottomNavigationButton>
        </Link>
      </StyledBottomNavigation>
    </>
  );
};
