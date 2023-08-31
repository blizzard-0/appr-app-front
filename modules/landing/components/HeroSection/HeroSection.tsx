/* eslint-disable @next/next/no-img-element */

import React, { useState } from 'react';
import { CTAPopup } from '../CTAPopup';
import {
  HeroSectionwrapper,
  HeroSectionInnerwrapper,
  HeroSectionTitle,
  HeroSectionContent,
  HeroSectionCTAwrapper,
  HeroSectionImage,
} from './HeroSection.styled';

interface HeroSectionProps {
  title: string;
  content: string;
  ctaLink?: string;
  ctaTitle: string;
  typeForm?: boolean;
  CTADesktopModal?: boolean;
  image: string;
  theme: 'purple' | 'green' | 'yellow';
  page: 'brands' | 'owners' | 'partners' | 'rest';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  content,
  ctaLink,
  ctaTitle,
  typeForm = false,
  CTADesktopModal = false,
  image,
  theme,
  page = 'rest',
}) => {
  const [CTAModalActive, setCTAModalActive] = useState(false);

  const handleActiveCTAModal = () => {
    setCTAModalActive(true);
  };

  const handleCloseCTAModal = () => {
    setCTAModalActive(false);
  };
  return (
    <HeroSectionwrapper theme={theme} page={page}>
      <HeroSectionInnerwrapper className="">
        <div
          className={`flex flex-col md:flex-row relative  ${
            page == 'owners' ? 'items-start' : 'items-center'
          }`}
        >
          <div>
            <div className="flex flex-col gap-8 lg:gap-12">
              <HeroSectionTitle className="">{title}</HeroSectionTitle>
              <HeroSectionContent className="">{content}</HeroSectionContent>
              <div>
                {typeForm ? (
                  <HeroSectionCTAwrapper
                    data-tf-popup="Gjh6tUN8"
                    data-tf-size="70"
                    data-tf-iframe-props="title=Get protection with appreciate"
                    data-tf-medium="snippet"
                    className="cursor-pointer inline-block"
                  >
                    {ctaTitle}
                  </HeroSectionCTAwrapper>
                ) : (
                  <>
                    <HeroSectionCTAwrapper
                      href={ctaLink}
                      className={`${
                        CTADesktopModal
                          ? 'inline-block lg:hidden'
                          : 'inline-block'
                      }`}
                    >
                      {ctaTitle}
                    </HeroSectionCTAwrapper>
                    <HeroSectionCTAwrapper
                      className={`${
                        CTADesktopModal
                          ? 'hidden lg:inline-block cursor-pointer'
                          : 'hidden'
                      }`}
                      onClick={handleActiveCTAModal}
                    >
                      {ctaTitle}
                    </HeroSectionCTAwrapper>
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
            </div>
          </div>
          <HeroSectionImage>
            <div className="flex h-full items-center">
              <img src={image} className="" alt="hero_image" />
            </div>
          </HeroSectionImage>
        </div>
      </HeroSectionInnerwrapper>
    </HeroSectionwrapper>
  );
};
