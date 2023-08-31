/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { TwoColSection } from '../components/TwoColSection';
import { ThreeColIconSection } from '../components/ThreeColIconSection';
import {
  StyledAboutHeroTitleWrapper,
  StyledAboutHeroContentWrapper,
  StyledAboutHeroSectionwrapper,
  StayledOverlapSectionWrapper,
  StayledAboutSectionTitleWrapper,
} from './AboutPage.styled';
import { PhysicallyIcon, SociallyIcon, PersonallyIcon } from './Icons';

const iconList = [
  {
    title: 'Physically',
    icon: <PhysicallyIcon />,
    content:
      'Buy fewer items, and together, reduce global waste by 1% over 25 years.',
  },
  {
    title: 'Socially',
    icon: <SociallyIcon />,
    content:
      'Buy from brands that care about their employees, partners, and the Earth.',
  },
  {
    title: 'Personally',
    icon: <PersonallyIcon />,
    content:
      'Build a relationship with our stuff to offset our dopamine addictions with sustainable serotonin.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />

      <StyledAboutHeroSectionwrapper className="bg-hero-about bg-light-yellow bg-no-repeat	bg-cover">
        <div className="w-full max-w-screen-xl px-5 md:px-20  mx-auto ">
          <div className="mx-auto flex flex-col  gap-8 md:gap-10 xl:gap-12">
            <StyledAboutHeroTitleWrapper className=" ">
              Creating a world in which humans appreciate the items they buy
            </StyledAboutHeroTitleWrapper>
            <StyledAboutHeroContentWrapper>
              We are the intersection between owners, the items they own, the
              luxury brands they shop with, and the partners they engage with
              post-purchase. Built on credentials, our platform optimizes
              ownership utility, mindful consumerism, and community engagement.
            </StyledAboutHeroContentWrapper>
          </div>
        </div>
      </StyledAboutHeroSectionwrapper>
      <StayledOverlapSectionWrapper>
        <ThreeColIconSection
          title={'Mission: Reduce waste'}
          iconList={iconList}
        ></ThreeColIconSection>
      </StayledOverlapSectionWrapper>
      <StayledAboutSectionTitleWrapper className="pb-12 -mt-2 md:-mt-5 md:pb-20 px-5 text-center">
        Our Team
      </StayledAboutSectionTitleWrapper>
      <TwoColSection
        title="Justin Connor"
        subTitle="Co-Founder & Person Accountable"
        image="/justin.png"
        imagePosition="right"
        ctaLink="https://linktr.ee/justinappreciates"
        ctaTitle="contact justin"
        theme="pink"
        bgType="4"
        mobileImageTop={true}
      >
        <div className="py-4">
          Hey, I'm Justin from appreciate. You can find me at
          justin@appreciate.it. I spend a lot of time thinking about the
          membrane between physical and digital realities. In my spare time, I
          cook with my daughter Emilia, travel (106 countries and counting),
          volunteer, and build fun stuff like the FatKidWeekend, BottleStock
          (sold to $GCI), and 1?4America. I also shop (way too much) mainly for
          watches, bags, and sneakers.{' '}
        </div>

        <div>
          In 2022, I plan to help appreciate users better connect with their
          stuff, to be more specific, and to raise $500k for children’s
          charities through a FatKidWeekend event. Recently, I’ve been inspired
          by <em>Principles for Dealing with the Changing World Order</em> by
          Ray Dalio. Send me a note if you’d like a copy, or just to say hello.
        </div>
      </TwoColSection>
      <TwoColSection
        title="Allys Ton"
        subTitle="Co-Founder & Chief Growth Officer"
        image="/Allys.png"
        imagePosition="left"
        ctaLink="https://linktr.ee/allyston"
        ctaTitle="contact allys"
        theme="yellow"
        bgType="4"
        mobileImageTop={true}
      >
        <div className="py-4">
          Hello there, I'm Allys (pronounced AH-lease)! I have a talent for
          actualizing ideas — whether it be turning doodles into pitch decks, or
          standing up business processes. My hobbies rotate with the seasons,
          but there's always an element of food exploration and creativity
          involved. Currently, I'm designing omakase sushi dinners for friends
          and mastering pottery.
        </div>

        <div>
          At appreciate, I want our users to find the value and empowerment that
          comes from ownership, and to build a company culture where we look
          forward to Monday mornings. I'm a true ENFP and have been told that I
          pitch appreciate in my sleep — let's chat at allys@appreciate.it.
        </div>
      </TwoColSection>
      <TwoColSection
        title="Jeremy McEntire"
        subTitle="Chief Technology Officer"
        image="/Jeremy.png"
        imagePosition="right"
        ctaLink="mailto:jeremy@appreciate.it"
        ctaTitle="contact jeremy"
        theme="purple"
        bgType="4"
        mobileImageTop={true}
      >
        <div className="py-4">
          Hi. I'm Jeremy. I have a passion for technology and philosophy; I'm
          particularly interested in how computer science impacts our society,
          values, and lives. When I'm not engrossed in a technical conversation,
          I enjoy traveling back roads and scenic byways with my camera and two
          puppies, Buffer and Proxy. On weekends, I can also be found
          cultivating my woodworking skills in the garage. Before appreciate, I
          managed the API team at Twilio, a multi-billion dollar communications
          company.
        </div>

        <div>
          I joined appreciate to engage with and ameliorate the philosophies and
          technologies of web3 by building a platform of trust. At appreciate,
          I'm leveraging my affinity for privacy and autonomy to help create
          web3 solutions that provide pragmatic functionality and robust
          security for users. Our infrastructure uses cryptograms to convey
          truth or proofs -- encrypted, signed, portable truths owned by people
          and operable by trusted actors. I'm always thrilled to talk about the
          future of technology and this new paradigm.
        </div>
      </TwoColSection>
      <TwoColSection
        title="Kayla Trivieri"
        subTitle="Chief Product Officer"
        image="/Kayla.png"
        imagePosition="left"
        ctaLink="mailto:kayla@appreciate.it"
        ctaTitle="contact kayla"
        theme="green"
        bgType="4"
        mobileImageTop={true}
      >
        <div className="py-4">
          I’m Kayla, Chief Product Officer at appreciate. Before I even knew
          what product principles were, I was learning them in my sewing lessons
          in first grade. I played around with colors, patterns, and shapes
          during class time. I’d sew clothes, blankets and even bean bag chairs,
          showcasing them at the annual fashion show (a.k.a. my Paris Fashion
          Week). Now I spend most of my time building Web3 and blockchain
          products for people.
        </div>

        <div>
          Known for my “tech for hot girls” series on TikTok, I’ve cultivated a
          following of 230K+ and growing on social media platforms. Constantly
          acquiring appreciate inspiration from over the world along the way.
          Let’s connect at kayla@appreciate.it.
        </div>
      </TwoColSection>

      <div className="py-20 md:py-40 bg-light-gray">
        <div className="w-full max-w-screen-xl px-5 md:px-20  mx-auto h-full flex flex-col justify-between text-panda-dark">
          <StayledAboutSectionTitleWrapper className="text-center pb-10">
            Backed by
          </StayledAboutSectionTitleWrapper>

          <div className="flex flex-col md:flex-row gap-6 flex-wrap xl:flex-nowrap items-center justify-center pb-20">
            <div className="w-full max-w-[342px] xl:max-w-full xl:w-1/3 bg-light-yellow rounded  border boredr-light-yellow hover:border-hover-border">
              <a
                className="flex h-32 lg:max-w-352-px px-5  text-center"
                href="https://human.capital/"
                rel="norefeerer noreferrer"
                target="_blank"
              >
                <img
                  className="m-auto"
                  src="/human-capital.png"
                  alt="Human Capital"
                />
              </a>
            </div>
            <div className="w-full max-w-[342px] xl:max-w-full xl:w-1/3 bg-light-yellow rounded  border boredr-light-yellow hover:border-hover-border">
              <a
                className="flex h-32 lg:max-w-352-px px-5  text-center"
                href="https://www.libertycityventures.com/"
                rel="norefeerer noreferrer"
                target="_blank"
              >
                <img
                  className="m-auto"
                  src="/liberty-city.png"
                  alt="Liberty City"
                />
              </a>
            </div>
            <div className="w-full max-w-[342px] xl:max-w-full xl:w-1/3 bg-light-yellow rounded border boredr-light-yellow hover:border-hover-border">
              <a
                className="flex h-32 lg:max-w-352-px px-5  text-center"
                href="https://www.mubadala.com/"
                rel="norefeerer noreferrer"
                target="_blank"
              >
                <img
                  className="m-auto w-3/5"
                  src="/mubadala-logo.png"
                  alt="Mubadala"
                />
              </a>
            </div>
          </div>

          <StayledAboutSectionTitleWrapper className="text-center pb-10">
            Founded at
          </StayledAboutSectionTitleWrapper>

          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 text-dark justify-center items-center">
            <div className="w-full max-w-[342px] xl:max-w-full xl:w-1/3 bg-light-yellow rounded maison-neue-medium border boredr-light-yellow hover:border-hover-border">
              <a
                className="flex h-32 px-5  text-center"
                href="https://www.libertycityventures.com/"
                rel="norefeerer noreferrer"
                target="_blank"
              >
                <img className="m-auto" src="/liberty-city.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
