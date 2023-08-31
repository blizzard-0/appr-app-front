/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';
import { CTAPopup } from '@/modules/landing/components/CTAPopup';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Disclosure } from '@headlessui/react';

import {
  StyledHeroTitleWrapper,
  StyledHeroSectionWrapper,
  StyledHeroContentWrapper,
  StyledCTAwrapper,
  TwoColSectionwrapper,
  TwoColSectionImageWrapper,
  TwoColSectionContentwrapper,
  SectionTitlewrapper,
  TwoColSectionTextwrapper,
  StayledProtectionSection,
  StayledSectionTitle,
  StayledProcessSection,
  StyledArrowSection,
  StayledProcessIconSection,
  StyledFaqSectionTitle,
} from './CoveragePage.styled';

import {
  PremiumIcon,
  PolicyIcon,
  ConvenienceIcon,
  ArrowIcon,
  PlusIcon,
} from './Icons';

const CTAButtonWithPopup: React.FC<{ title: string; outline?: boolean }> = ({
  title,
  outline = false,
}) => {
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
      <StyledCTAwrapper
        href={
          isIOSDevice
            ? 'https://apps.apple.com/us/app/appreciate/id1603845311'
            : 'https://appreciate.it/app/signup'
        }
        target="_blank"
        className={`inline-block xl:hidden cursor-pointer ${
          outline
            ? 'bg-light-gray text-panda-dark hover:bg-panda-dark hover:text-light-gray'
            : 'bg-panda-dark text-light-gray hover:bg-light-gray hover:text-panda-dark'
        }`}
      >
        {title}
      </StyledCTAwrapper>
      <StyledCTAwrapper
        onClick={handleActiveCTAModal}
        target="_blank"
        className={`hidden xl:inline-block cursor-pointer ${
          outline
            ? 'bg-light-gray text-panda-dark hover:bg-panda-dark hover:text-light-gray'
            : 'bg-panda-dark text-light-gray hover:bg-light-gray hover:text-panda-dark'
        }`}
      >
        {title}
      </StyledCTAwrapper>
      <CTAPopup active={CTAModalActive} onClose={handleCloseCTAModal} />
    </>
  );
};

const HeroSection: React.FC = () => {
  return (
    <StyledHeroSectionWrapper className="">
      <div className="w-full max-w-screen-xl px-5 mx-auto ">
        <div className="mx-auto flex flex-col  gap-8 md:gap-10 xl:gap-12">
          <StyledHeroTitleWrapper className="">
            The simplest way to protect your luxury goods
          </StyledHeroTitleWrapper>
          <StyledHeroContentWrapper>
            We’ve partnered with WAX Insurance to protect your luxury goods
            against damage, loss, and theft worldwide. Add an item to your
            appreciate wallet, request coverage, and enjoy peace-of-mind.
          </StyledHeroContentWrapper>
          <div className="md:text-center">
            <CTAButtonWithPopup title="Request coverage" />
          </div>
        </div>
      </div>
    </StyledHeroSectionWrapper>
  );
};

interface TwoColSectionProps {
  title: string;
  imagePosition: 'left' | 'right';
  image: string;
  ctaTitle: string;
  children?: React.ReactNode;
  mobileImageTop?: boolean;
  className?: string;
}

export const TwoColSection: React.FC<TwoColSectionProps> = ({
  title,
  imagePosition,
  image,
  ctaTitle,
  children,
  className,
  mobileImageTop = true,
}) => {
  return (
    <div className={`bg-theme-green-0 py-16 lg:py-10 ${className}`}>
      <div className="flex flex-col  overflow-hidden w-full max-w-[1416px] px-8 lg:px-[88px] xl:px-5 mx-auto">
        <div className="w-full h-full flex flex-col justify-between">
          <TwoColSectionwrapper
            imagePosition={imagePosition}
            mobileImageTop={mobileImageTop}
            className=""
          >
            <TwoColSectionContentwrapper>
              <div className="flex h-full flex-col  text-left justify-center mx-auto ">
                <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10">
                  <SectionTitlewrapper className="maison-neue-extended-medium">
                    {title}
                  </SectionTitlewrapper>

                  <TwoColSectionTextwrapper className="">
                    {children}
                  </TwoColSectionTextwrapper>
                  <div className="">
                    <CTAButtonWithPopup title={ctaTitle} outline={true} />
                  </div>
                </div>
              </div>
            </TwoColSectionContentwrapper>
            <TwoColSectionImageWrapper>
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

interface ProcessIconProps {
  iconImage: string;
  title: string;
  children?: React.ReactNode;
}
export const ProcessSectionIcon: React.FC<ProcessIconProps> = ({
  iconImage,
  title,
  children,
}) => {
  return (
    <div className="flex h-full flex-col md:max-w-[213px]  xl:max-w-[360px] items-center justify-center gap-6 md:gap-[15px] xl:gap-6 text-center">
      <div className="w-full md:h-[212px] xl:h-[360px] flex justify-center items-center">
        <img
          className="w-auto h-auto max-w-full max-h-full"
          src={iconImage}
          alt="Download"
        />
      </div>
      <div className="maison-neue-demi  text-[24px] leading-[32px] md:text-[28px] md:leading-[38px] xl:text-[32px] xl:leading-10 pt-[8px] md:pt-[41px] xl:pt-8">
        {title}
      </div>
      <div className="maison-neue-book text-[16px] leading-[24px] md:text-[20px] md:leading-[27px] xl:text-[24px] xl:leading-[45px]">
        {children}
      </div>
    </div>
  );
};
export const ProcessSection: React.FC = () => {
  return (
    <StayledProcessSection>
      <div className="flex  flex-col  overflow-hidden w-full max-w-[1416px] px-6 lg:px-[88px] xl:px-5 mx-auto">
        <div className="w-full h-full flex flex-col items-center gap-14 md:gap-[47px]  xl:gap-20">
          <div className="flex-0 text-center mx-auto ">
            <StayledSectionTitle>How it works</StayledSectionTitle>
          </div>
          <StayledProcessIconSection>
            <ProcessSectionIcon
              iconImage="/process-qr-icon.svg"
              title="Download"
            >
              Create your appreciate account
            </ProcessSectionIcon>
            <StyledArrowSection>
              <ArrowIcon />
            </StyledArrowSection>
            <ProcessSectionIcon
              iconImage="/add-your-item.png"
              title="Add your item"
            >
              Build your collection in your wallet
            </ProcessSectionIcon>
            <StyledArrowSection>
              <ArrowIcon />
            </StyledArrowSection>
            <ProcessSectionIcon
              iconImage="/add-coverage.svg"
              title="Add coverage"
            >
              Protect against damage, loss, and theft
            </ProcessSectionIcon>
          </StayledProcessIconSection>
        </div>
      </div>
    </StayledProcessSection>
  );
};
interface ProtectionIconProps {
  icon: React.ReactNode;
  title: string;
}
export const ProtectionSectionIcon: React.FC<ProtectionIconProps> = ({
  icon,
  title,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[42px] md:gap-10 text-center">
      <div className="w-[120px] md:w-[140px] 2xl:w-[162px]">{icon}</div>
      <div className="maison-neue-book text-[24px] leading-[32px] md:text-[28px] md:leading-[38px] xl:text-[32px] xl:leading-10 md:px-4 xl:px-0">
        {title}
      </div>
    </div>
  );
};
export const ProtectionSection: React.FC = () => {
  return (
    <StayledProtectionSection>
      <div className="flex flex-col  overflow-hidden w-full max-w-[1416px] px-6 lg:px-[88px] xl:px-5 mx-auto">
        <div className="w-full h-full flex flex-col xl:flex-row items-center gap-16 md:gap-[72px] xl:gap-6">
          <div className="flex-0 text-center mx-auto max-w-[490px] xl:text-left xl:w-[443px]">
            <StayledSectionTitle>
              Protection for the modern luxury owner
            </StayledSectionTitle>
          </div>
          <div className="gap-16 md:gap-10 xl:gap-6 justify-around flex-1 flex flex-col md:flex-row items-center">
            <ProtectionSectionIcon
              icon={<PremiumIcon />}
              title="Premium item coverage"
            />
            <ProtectionSectionIcon
              icon={<ConvenienceIcon />}
              title="Coverage with convenience"
            />
            <ProtectionSectionIcon
              icon={<PolicyIcon />}
              title="Your policy, on your phone"
            />
          </div>
        </div>
      </div>
    </StayledProtectionSection>
  );
};

interface FaqProps {
  title: string;
  children?: React.ReactNode;
  open?: boolean;
}

const Faq: React.FC<FaqProps> = ({ title, children, open = false }) => {
  return (
    <Disclosure as="div" defaultOpen={open}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex gap-6  font-semibold text-panda-dark maison-neue-medium text-base md:text-xl xl:text-2xl xl:leading-10 pb-0 lg:pb-1">
            <div className="md:pt-1 xl:pt-2">
              <div
                className={`transition  duration-300 ease-in-out ${
                  open ? 'transform rotate-45' : ''
                } `}
              >
                <PlusIcon />
              </div>
            </div>
            <span className="text-left hover:text-theme-red-3">{title}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-dark-gray-2 maison-neue-book text-base lg:text-2xl lg:leading-10 flex flex-col gap-4 pl-12 pt-4 lg:pt-0">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const FaqSection: React.FC<{
  sectionTitle: string;
  children: React.ReactNode;
}> = ({ sectionTitle, children }) => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-20 2xl:gap-40 py-16 lg:py-20">
        <StyledFaqSectionTitle className="maison-neue-extended-book  ">
          {sectionTitle}
        </StyledFaqSectionTitle>
        <div className=" flex flex-col gap-8 lg:gap-14">{children}</div>
      </div>
    </>
  );
};

export const CoveragePage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header theme="green" CTADesktopModal={true} />
      <HeroSection />
      <ProcessSection />
      <ProtectionSection />
      <TwoColSection
        title="For wanderlust travelers and jetsetters"
        image="/travel-worry-free.png"
        imagePosition="left"
        ctaTitle="Travel worry-free"
        className="mb-2"
      >
        Travel with confidence. Lost luggage? Pickpockets? Rest assured, your
        items are protected against damage, theft, and loss anywhere on the
        globe.
      </TwoColSection>
      <TwoColSection
        title="Flexible plans"
        image="/flexible-plans.png"
        imagePosition="right"
        ctaTitle="Create coverage plan"
        className="mb-2"
      >
        Personalized policies that fit your needs and reflect your ownership. As
        your collection grows, you can add them to your policy and expand your
        coverage amount. Or, reduce your coverage as you part with your items.
      </TwoColSection>
      <TwoColSection
        title="We love all brands"
        image="/all-brands.png"
        imagePosition="left"
        ctaTitle="Protect your collection"
        className=""
      >
        Coverage plans are available for your entire closet – from your Louis
        Vuitton handbags to your Rolex watches. Our coverage plans are expanding
        and will be inclusive of the entire luxury market in 2023.
      </TwoColSection>
      <section className=" px-5 lg:px-20 bg-light-gray">
        <div className="max-w-1280-px mx-auto">
          <h2 className="maison-neue-extended-book text-[36px] leading-[48px] lg:text-[56px] lg:leading-[96px] text-center pt-16 lg:pt-20 pb-0">
            FAQ
          </h2>
          <FaqSection sectionTitle="Luxury Coverage">
            <Faq title="How much does it cost to cover my items?">
              <div>
                The standard premium is 1% of the value of the item (example:
                $50 premium to cover an item worth $5,000). For an accurate
                quote, request coverage for your item within your appreciate
                account.
              </div>
            </Faq>
            <Faq title="What are the benefits of luxury coverage?">
              <div>
                Coverage benefits are provided to appreciate members. The policy
                features the following benefits:
              </div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Worldwide coverage with no deductible for most causes of
                    loss.
                  </li>
                  <li>
                    No appraisals required. We just need a detailed description
                    and estimated value of your item.
                  </li>
                  <li>
                    Comprehensive coverage for damage from fire, theft,
                    earthquake, flood and breakage.
                  </li>
                  <li>
                    Newly acquired items are covered for up to 90 days with
                    itemized coverage.
                  </li>
                  <li>Top tier service on claims.</li>
                  <li>
                    Up to 150% replacement for a covered loss and the item’s
                    current market value exceeds the itemized limit, up to the
                    policy limit.
                  </li>
                </ul>
              </div>
            </Faq>
            <Faq title="What items qualify for luxury coverage?">
              <div>
                Luxury coverage policies are available for handbags and watches.
              </div>
            </Faq>
            <Faq title="How long does my luxury coverage policy last?">
              <div>
                A full calendar year from the day your policy is confirmed. You
                may auto-renew at the end of the term to extend your coverage.
              </div>
            </Faq>
            <Faq title="How do I file an incident report?">
              <div>
                Once an item is covered, you can notify us of a “Report” through
                your appreciate wallet. For additional assistance, please email{' '}
                <a
                  className="text-theme-indigo-3"
                  href="mailto:coverage@appreciate.it"
                >
                  coverage@appreciate.it
                </a>
                .
              </div>
            </Faq>
            <Faq title="How fast are incident reports resolved?">
              <div>Incident reports are resolved within 30 days.</div>
            </Faq>
            <Faq title="When can I cover luxury items other than handbags and watches?">
              <div>
                Expanded coverage options will become available throughout the
                rest of 2022.
              </div>
            </Faq>
            <Faq title="Aren't my items already covered by my homeowners policy and/or renter's insurance?">
              <div>
                This is likely not the case. Unfortunately, most insurance
                policies in the US require the submission of a rider document
                for any item with a value greater than $500.
              </div>
            </Faq>
          </FaqSection>
        </div>
      </section>

      <section className="bg-theme-green-0">
        <div className="w-full max-w-screen-xl px-5 mx-auto ">
          <div className="mx-auto flex flex-col gap-10 py-20 items-center">
            <SectionTitlewrapper className="maison-neue-extended-medium text-center">
              Protect my collection
            </SectionTitlewrapper>
            <CTAButtonWithPopup title="Request coverage" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
