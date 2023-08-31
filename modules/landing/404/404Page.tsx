import React, { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';
import { CTAPopup } from '../components/CTAPopup';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

import {
  StyledHeroContentWrapper,
  StyledHeroSectionwrapper,
  StyledHeroCTAwrapper,
} from './404Page.styled';
import { Icon404 } from './Icons';

export const Custom404Page: React.FC = () => {
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
    <div className="bg-light-gray text-panda-dark maison-neue-book">
      <Header theme="green" CTADesktopModal={true} />

      <StyledHeroSectionwrapper className="bg-light-yellow">
        <div className="w-full max-w-screen-xl px-5 md:px-20  mx-auto ">
          <div className="mx-auto flex flex-col  gap-8 ">
            <div className="mx-auto w-full max-w-[456px]">
              <Icon404 />
            </div>

            <StyledHeroContentWrapper>
              We cannot find the page you were looking for. Please check the URL
              or navigate to another page. We apologize for the inconvenience.
            </StyledHeroContentWrapper>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center	">
              <StyledHeroCTAwrapper
                href={
                  isIOSDevice
                    ? 'https://apps.apple.com/us/app/appreciate/id1603845311'
                    : 'https://appreciate.it/app/signup'
                }
                target="_blank"
                className="inline-block xl:hidden"
              >
                Get App
              </StyledHeroCTAwrapper>
              <StyledHeroCTAwrapper
                className="hidden xl:inline-block cursor-pointer"
                onClick={handleActiveCTAModal}
              >
                Get App
              </StyledHeroCTAwrapper>
              <CTAPopup active={CTAModalActive} onClose={handleCloseCTAModal} />
              <StyledHeroCTAwrapper
                className="inline-block "
                href="mailto:support@appreciate.it"
              >
                Contact Us
              </StyledHeroCTAwrapper>
            </div>
          </div>
        </div>
      </StyledHeroSectionwrapper>

      <Footer />
    </div>
  );
};
