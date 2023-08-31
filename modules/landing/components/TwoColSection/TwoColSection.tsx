/* eslint-disable @next/next/no-img-element */

import { boolean } from 'fp-ts';
import React, { useState } from 'react';
import { CTAPopup } from '../CTAPopup';
import {
  TwoColSectionwrapper,
  TwoColSectionImageWrapper,
  TwoColSectionContentwrapper,
  TwoColSectionTitlewrapper,
  TwoColSectionSubTitlewrapper,
  TwoColSectionCTAwrapper,
} from './TwoColSection.styled';

interface TwoColSectionProps {
  title: string;
  subTitle?: string;
  imagePosition: 'left' | 'right';
  image: string;
  ctaLink?: string;
  ctaTitle?: string;
  theme: 'purple' | 'green' | 'yellow' | 'pink';
  bgType?: '1' | '2' | '3' | '4';
  children?: React.ReactNode;
  typeForm?: boolean;
  mobileImageTop?: boolean;
  CTADesktopModal?: boolean;
  target?: string;
}

export const TwoColSection: React.FC<TwoColSectionProps> = ({
  title,
  subTitle,
  imagePosition,
  image,
  ctaLink,
  ctaTitle,
  theme,
  children,
  bgType = '1',
  typeForm = false,
  mobileImageTop = false,
  CTADesktopModal = false,
  target = '_blank',
}) => {
  const [CTAModalActive, setCTAModalActive] = useState(false);

  const handleActiveCTAModal = () => {
    setCTAModalActive(true);
  };

  const handleCloseCTAModal = () => {
    setCTAModalActive(false);
  };
  return (
    <div
      className={`${theme == 'purple' ? 'bg-theme-purple-1' : ''} ${
        theme == 'green' ? 'bg-theme-green-1' : ''
      } ${theme == 'yellow' ? 'bg-theme-yellow-1' : ''} ${
        theme == 'pink' ? 'bg-theme-pink-1' : ''
      }`}
    >
      <div className="flex flex-col  overflow-hidden ">
        <div className="w-full h-full flex flex-col justify-between">
          <TwoColSectionwrapper
            imagePosition={imagePosition}
            mobileImageTop={mobileImageTop}
            className={`${theme == 'purple' ? 'bg-theme-purple-0' : ''} ${
              theme == 'green' ? 'bg-theme-green-0' : ''
            } ${theme == 'yellow' ? 'bg-theme-yellow-0' : ''} ${
              theme == 'pink' ? 'bg-theme-pink-0' : ''
            }`}
          >
            <TwoColSectionContentwrapper className="w-full lg:w-1/2 ">
              <div className="flex h-full flex-col  text-left justify-center mx-auto ">
                <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10">
                  <TwoColSectionTitlewrapper className="maison-neue-extended-medium">
                    {title}
                  </TwoColSectionTitlewrapper>
                  {subTitle ? (
                    <TwoColSectionSubTitlewrapper className="maison-neue-book">
                      {subTitle}
                    </TwoColSectionSubTitlewrapper>
                  ) : (
                    ''
                  )}
                  <div className="maison-neue-book text-base lg:text-xl xl:text-2xl xl:leading-10 mx-auto">
                    {children}
                  </div>
                  <div className="">
                    {typeForm ? (
                      <TwoColSectionCTAwrapper
                        data-tf-popup="Gjh6tUN8"
                        data-tf-size="70"
                        data-tf-iframe-props="title=Get protection with appreciate"
                        data-tf-medium="snippet"
                        className="cursor-pointer inline-block"
                        theme={theme}
                      >
                        {ctaTitle}
                      </TwoColSectionCTAwrapper>
                    ) : (
                      <>
                        <TwoColSectionCTAwrapper
                          href={ctaLink}
                          theme={theme}
                          target={target}
                          className={`${
                            CTADesktopModal
                              ? 'inline-block lg:hidden'
                              : 'inline-block'
                          }`}
                        >
                          {ctaTitle}
                        </TwoColSectionCTAwrapper>

                        <TwoColSectionCTAwrapper
                          theme={theme}
                          className={`${
                            CTADesktopModal
                              ? 'hidden lg:inline-block cursor-pointer'
                              : 'hidden'
                          }`}
                          onClick={handleActiveCTAModal}
                        >
                          {ctaTitle}
                        </TwoColSectionCTAwrapper>
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
            </TwoColSectionContentwrapper>
            <TwoColSectionImageWrapper
              theme={theme}
              bgType={bgType}
              className="w-full lg:w-1/2"
            >
              <div className="flex h-full  flex-col justify-center mx-auto">
                <img className="mx-auto" src={image} alt="" />
              </div>
            </TwoColSectionImageWrapper>
          </TwoColSectionwrapper>
        </div>
      </div>
    </div>
  );
};
