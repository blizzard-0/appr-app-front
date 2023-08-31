import React from 'react';
import Image from 'next/image';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { FourColIconSection } from '../components/FourColIconSection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import {
  DisabilityIcon,
  EquityIcon,
  RemoteIcon,
  Four01Icon,
  HealthcareIcon,
  VacationIcon,
  UniqueIcon,
  PragmaticIcon,
  SocialIcon,
  IntentinalIcon,
} from './Icons';
import {
  StyledCareerHeroTitleWrapper,
  StyledCareerHeroContentWrapper,
  StyledCareerHeroSectionWrapper,
  StayledOverlapSectionWrapper,
  StayledCareerSectionTitleWrapper,
  StyledCareerHeroCTAwrapper,
  StyledCareerSliderWrapper,
  CareerSliderItemWrapper,
  CareerSliderItemInnerWrapper,
  CareerSliderItemImageWrapper,
} from './CareerPage.styled';

const iconList = [
  {
    title: 'Uniquely <br class="hidden xl:block 2xl:hidden"/>autonomous',
    icon: <UniqueIcon />,
    content: 'Empower others to make the best decisions for themselves.',
  },
  {
    title: 'Pragmatic <br class="hidden xl:block 2xl:hidden"/>optimism',
    icon: <PragmaticIcon />,
    content: 'Ideate to deliver beneficial and sensible solutions.',
  },
  {
    title: 'Intentional <br class="hidden xl:block 2xl:hidden"/>design',
    icon: <IntentinalIcon />,
    content:
      'Design for the micro and macro context, for the present and future.',
  },
  {
    title: 'Social <br class="hidden xl:block 2xl:hidden"/>catalyst',
    icon: <SocialIcon />,
    content: 'Be the voice for our users, business, and environment.',
  },
];

const CareersPageHeading: React.FC = () => {
  return (
    <StyledCareerHeroSectionWrapper className="">
      <div className="w-full max-w-screen-xl px-5 md:px-20 xl:px-5 mx-auto ">
        <div className="mx-auto flex flex-col gap-8 md:gap-10 xl:gap-12">
          <StyledCareerHeroTitleWrapper className="xl:px-32">
            Help humans appreciate the items they own
          </StyledCareerHeroTitleWrapper>
          <StyledCareerHeroContentWrapper>
            It’s about connection. The appreciate platform empowers luxury
            brands and partners to deliver impactful post-purchase experiences
            to owners – who in turn, find greater utility in the items they own
            and a deeper appreciation for them. Our seed-stage Web3 team is
            recruiting those looking to do more stuff, with their stuff.
          </StyledCareerHeroContentWrapper>
          <div className="text-center">
            <StyledCareerHeroCTAwrapper href="mailto:careers@appreciate.it">
              Meet the team
            </StyledCareerHeroCTAwrapper>
          </div>
        </div>
      </div>
    </StyledCareerHeroSectionWrapper>
  );
};

interface PerkProps {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}

const Perk: React.FC<PerkProps> = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col items-center py-6 px-5 lg:py-6 xl:px-16  font-maison-neue-book rounded  lg:h-auto">
      <div className="w-28 h-28 mb-4 lg:mb-6">{icon}</div>
      <div className="text-center lg:pb-6">
        <p className="text-panda-dark font-maison-neue-demi mb-4 lg:mb-6 text-3xl leading-10">
          {title}
        </p>
        <p className="text-panda-dark text-xl">{children}</p>
      </div>
    </div>
  );
};

const CareersPagePerks: React.FC = () => {
  return (
    <section className=" px-5 pt-12 pb-0 lg:px-20 md:pt-[120px] xl:pt-40 lg:pb-10 bg-light-gray">
      <div className="max-w-1280-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
          <Perk icon={<EquityIcon />} title="Equity">
            Be an owner, <br />
            own your work
          </Perk>
          <Perk icon={<HealthcareIcon />} title="Healthcare">
            We{`'`}ve got your medical, <br />
            vision, and dental covered
          </Perk>
          <Perk icon={<VacationIcon />} title="Vacation">
            Unlimited PTO
            <br /> (we love getting postcards)
          </Perk>

          <Perk icon={<Four01Icon />} title="401K">
            Tax-advantaged account <br />
            for retirement
          </Perk>
          <Perk icon={<RemoteIcon />} title="Remote-First">
            Our team works where they <br />
            know they are most efficient
          </Perk>
          <Perk icon={<DisabilityIcon />} title="Disability">
            Comprehensive short and <br />
            long term coverage
          </Perk>
        </div>
      </div>
    </section>
  );
};

type SlideContent = {
  text: string;
  name: string;
  title: string;
  image: string;
  bgImage: string;
  bgColor: string;
  contentBgColor: string;
};
interface CareersSliderProps {
  slides: SlideContent[];
}
const CareersSlider: React.FC<CareersSliderProps> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: `slick-dots`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <>
      <section className=" font-maison-neue-book bg-light-gray">
        <StyledCareerSliderWrapper className="max-w-1280-px mx-auto career-slider">
          <Slider {...settings}>
            {slides.map((slideData, index) => (
              <CareerSliderItemWrapper
                key={index}
                className={`${slideData.bgColor}`}
                bgImage={slideData.bgImage}
              >
                <CareerSliderItemInnerWrapper
                  className={`${slideData.contentBgColor}`}
                >
                  <p className="font-maison-neue-extended-book">
                    {'"' + slideData.text + '"'}
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 xl:gap-8">
                    <CareerSliderItemImageWrapper className="">
                      <Image
                        width={150}
                        height={150}
                        src={slideData.image}
                        alt="career_quote"
                      />
                    </CareerSliderItemImageWrapper>
                    <div className="text-panda-dark">
                      <p className="text-base xl:text-2xl xl:leading-8 mb-0.5 font-bold">
                        {slideData.name}
                      </p>
                      <p className="text-14-px lg:text-base xl:text-xl xl:leading-8">
                        {slideData.title}
                      </p>
                    </div>
                  </div>
                </CareerSliderItemInnerWrapper>
              </CareerSliderItemWrapper>
            ))}
          </Slider>
        </StyledCareerSliderWrapper>
      </section>
    </>
  );
};

export const CareersPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />
      <CareersPageHeading />
      <StayledOverlapSectionWrapper>
        <FourColIconSection
          title={'Values'}
          iconList={iconList}
        ></FourColIconSection>
      </StayledOverlapSectionWrapper>

      <CareersSlider
        slides={[
          {
            name: 'Allys Ton',
            title: 'Co-Founder & Chief Growth Officer',
            text: 'I cofounded appreciate to address mindless consumerism at scale. We are building a platform that empowers users to better understand the things they own and to make better purchasing decisions. This is a platform for social change, with mindfulness and intention at its core.',
            image: '/quotes/Allys.png',
            bgImage: '/quotes/Allys_pattern_quote-bg.png',
            bgColor: 'bg-theme-pink-1',
            contentBgColor: 'bg-theme-pink-0',
          },
          {
            name: 'Alex Lake',
            title: 'Project Manager',
            text: "Everyday at appreciate is exciting because we're at the vanguard of digitizing physical things, building decentralized architectures and systems that will benefit real people in the real world. No Vaporware.",
            image: '/quotes/Alex.png',
            bgImage: '/quotes/Alex-pattern-quote-bg.png',
            bgColor: 'bg-theme-purple-1',
            contentBgColor: 'bg-theme-purple-0',
          },
          {
            name: 'Bonnie Mounier',
            title: 'Art Director',
            text: "I am inspired by appreciate's mission to reduce waste. I saw a world chasing the next new trend and forgetting about yesterday's purchase. The appreciate platform elevates ownership by letting you do more with your stuff that you couldn't do before.",
            image: '/quotes/bonnie.png',
            bgImage: '/quotes/Bonnie_pattern_quote-bg.png',
            bgColor: 'bg-theme-yellow-1',
            contentBgColor: 'bg-theme-yellow-0',
          },
        ]}
      />
      <CareersPagePerks />
      <section className="px-5 py-20 lg:px-20 md:py-20 xl:py-40 bg-light-gray">
        <div className="max-w-1280-px mx-auto">
          <StayledCareerSectionTitleWrapper className="px-5 pb-12 lg:pb-14 text-center">
            Drop a line at{' '}
            <a
              href="mailto:careers@appreciate.it"
              rel="noreferrer"
              className="text-theme-indigo-3 break-all block md:inline-block"
            >
              careers@appreciate.it
            </a>
          </StayledCareerSectionTitleWrapper>
        </div>
      </section>
      <Footer />
    </div>
  );
};
