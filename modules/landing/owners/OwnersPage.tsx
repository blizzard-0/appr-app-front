/* eslint-disable @next/next/no-img-element */

import React from 'react';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

import { TwoColSection } from '../components/TwoColSection';
import { ThreeColIconSection } from '../components/ThreeColIconSection';
import { HeroSection } from '../components/HeroSection';

import { ManageIcon, ExploreIcon, InvesmentIcon } from './Icons';

const iconList = [
  {
    title: 'Manage your <br class="hidden lg:block 2xl:hidden"/>collection',
    icon: <ManageIcon />,
    content:
      'Enjoy a bird’s eye view of your luxury collection from the convenience of your favorite device: mobile, desktop, or tablet.',
  },
  {
    title: 'Investment <br class="hidden lg:block 2xl:hidden"/>mindset',
    icon: <InvesmentIcon />,
    content:
      'Treat your items as assets by tracking their value, purchasing coverage, listing them for resale, and more.',
  },
  {
    title:
      'Explore the world <br class="hidden lg:block 2xl:hidden"/>of luxury',
    icon: <ExploreIcon />,
    content:
      'Browse for your favorite brands, access exclusive Owners-Only content, and become an expert on the items you own.',
  },
];

export const OwnersPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header theme="green" CTADesktopModal={true} />

      <HeroSection
        title="A digital wallet to manage your luxury collection"
        content="Create a digital wallet to manage your collection of luxury items and do more stuff with your stuff. Sign-up for an account to experience the future of ownership."
        ctaLink="https://apps.apple.com/us/app/appreciate/id1603845311"
        ctaTitle="CREATE YOUR DIGITAL WALLET"
        image="/owners-hero-image-combined.png"
        theme="green"
        page="owners"
        CTADesktopModal={true}
      ></HeroSection>
      <ThreeColIconSection
        title={
          'Do more stuff with <span class="maison-neue-extended-demi">your stuff</span>'
        }
        iconList={iconList}
      ></ThreeColIconSection>

      <TwoColSection
        title="Luxury items are an investment"
        image="/analytics.png"
        imagePosition="right"
        ctaLink="https://apps.apple.com/us/app/appreciate/id1603845311"
        ctaTitle="TRACK YOUR COLLECTION"
        theme="green"
        bgType="2"
        CTADesktopModal={true}
      >
        Luxury items can appreciate in value as the market evolves. Follow the
        real-time value of your collection to know when to hold, or when to
        flip.
      </TwoColSection>

      <TwoColSection
        title="Luxury coverage for your collection"
        image="/protection.png"
        imagePosition="left"
        ctaLink="/coverage"
        ctaTitle="PURCHASE COVERAGE"
        theme="pink"
        bgType="2"
        target="_self"
      >
        Our luxury coverage plans protect against damage, loss, and theft.
        Coverage is available for all brands and claims are processed within 30
        days.
      </TwoColSection>

      <TwoColSection
        title="Join the luxury community"
        image="/speedy.png"
        imagePosition="right"
        ctaLink="https://apps.apple.com/us/app/appreciate/id1603845311"
        ctaTitle="EXPLORE LUXURY CONTENT"
        theme="yellow"
        bgType="2"
        CTADesktopModal={true}
      >
        There’s a story behind every luxury item. Discover exclusive content and
        browse additional collections.
      </TwoColSection>

      <Footer />
    </div>
  );
};
