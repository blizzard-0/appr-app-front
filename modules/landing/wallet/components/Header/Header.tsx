/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../../../../../components/v2/Logo';
import { StyledLogoWrapper, StyledCTAWrapper } from './Header.styled';
import { routes } from '../../../../../modules/routes';
import { CTAPopup } from '@/modules/landing/components/CTAPopup';
import { isIOS } from 'react-device-detect';

export const Header: React.FC = () => {
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

  return (
    <>
      <div
        className={`bg-white fixed top-0 left-0 right-0 z-10 border-b border-gray-300`}
      >
        <div className="maison-neue-book w-full mx-auto h-full flex flex-col justify-between">
          <div className={`max-w-full w-full mx-auto px-5 py-4`}>
            <div className="flex items-center justify-start xl:justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link href={routes.appFrontend.root.fillPath(null)} passHref>
                    <a>
                      <StyledLogoWrapper>
                        <Logo $variant="tiny" />
                      </StyledLogoWrapper>
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex ml-auto">
                <StyledCTAWrapper
                  onClick={handleActiveCTAModal}
                  className={` hidden xl:inline-block `}
                >
                  Create my wallet
                </StyledCTAWrapper>
                <StyledCTAWrapper
                  href={
                    isIOSDevice
                      ? 'https://apps.apple.com/us/app/appreciate/id1603845311'
                      : 'https://appreciate.it/app/signup'
                  }
                  className={` inline-block xl:hidden`}
                >
                  Create my wallet
                </StyledCTAWrapper>
                <CTAPopup
                  active={CTAModalActive}
                  onClose={handleCloseCTAModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[65px]"></div>
    </>
  );
};
