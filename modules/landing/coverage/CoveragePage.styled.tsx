import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeroSectionWrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark bg-light-yellow bg-no-repeat	bg-cover`}
  background-image:url('./coveragePattern.png');

  padding-top: 80px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
  @media (min-width: 1280px) {
    padding-top: 132px;
    padding-bottom: 133px;
  }
`;

export const StyledHeroTitleWrapper = styled.h1`
  ${tw`font-maison-neue-extended-book text-left md:text-center mx-auto`}
  font-size: 36px;
  line-height: 48px;
  max-width: 100%;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 56px;
    max-width: 553px;
    margin: 0 auto;
  }
  @media (min-width: 1280px) {
    font-size: 72px;
    line-height: 96px;
    letter-spacing: 0em;
    max-width: 999px;
    margin: 0 auto;
  }
`;

export const StyledHeroContentWrapper = styled.div`
  ${tw` text-left md:text-center`}
  max-width: 100%;
  font-size: 16px;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 29px;
    max-width: 696px;
    margin: 0 auto;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
    max-width: 859px;
    margin: 0 auto;
  }
`;

export const StyledCTAwrapper = styled.a`
  ${tw` font-maison-neue-book  uppercase  border-2 border-panda-dark text-center rounded-full`}

  font-size: 16px;
  line-height: 26px;
  padding: 13px;
  max-width: 350px;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    max-width: 335px;
    padding: 12px 13px;
  }

  @media (min-width: 1280px) {
    font-size: 23px;
    line-height: 29px;
    letter-spacing: 0.08em;
    padding-top: 13px;
    padding-bottom: 13px;
    max-width: 455px;
  }
`;

interface TwoColSectionProps {
  imagePosition?: 'left' | 'right';
  mobileImageTop?: boolean;
}

export const TwoColSectionwrapper = styled.div<TwoColSectionProps>`
  ${tw`flex mx-auto text-panda-dark  gap-12 lg:gap-5 xl:gap-6`}
  ${(p) => (p.mobileImageTop ? tw`flex-col-reverse` : tw`flex-col`)}
  ${(p) =>
    p.imagePosition == 'left' ? tw`lg:flex-row-reverse` : tw`lg:flex-row`}
`;

export const TwoColSectionImageWrapper = styled.div<TwoColSectionProps>`
  ${tw`w-full lg:w-1/2`}
`;

export const TwoColSectionContentwrapper = styled.div`
  ${tw`w-full lg:w-1/2 lg:px-[29px] xl:px-12`}
`;

export const SectionTitlewrapper = styled.div`
  ${tw``}
  font-size: 28px;
  line-height: 35px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 64px;
  }
`;
export const TwoColSectionTextwrapper = styled.div`
  ${tw`font-maison-neue-book`}
  font-size: 16px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 27px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const TwoColSectionCTAwrapper = styled.a<TwoColSectionProps>`
  ${tw`font-maison-neue-book  uppercase bg-panda-dark border-2 border-panda-dark  text-light-gray hover:bg-light-gray hover:text-panda-dark  text-center rounded-full`}

  line-height: 26px;
  max-width: 320px;
  width: 100%;
  padding: 13px 15px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 31px;
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 336px;
  }

  @media (min-width: 1280px) {
    font-size: 23px;
    line-height: 32px;
    letter-spacing: 0.08em;
    padding-top: 13px;
    padding-bottom: 13px;
    max-width: 455px;
    width: 100%;
  }
`;

export const StayledProtectionSection = styled.div`
  ${tw`bg-white `}
  padding: 64px 0;
  @media (min-width: 768px) {
    padding: 72px 0;
  }
  @media (min-width: 1280px) {
    padding: 136px 0;
  }
`;

export const StayledSectionTitle = styled.h2`
  ${tw`font-maison-neue-extended-book`}
  font-size:28px;
  line-height: 35px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (min-width: 1280px) {
    font-size: 56px;
    line-height: 74px;
  }
`;

export const StayledProcessSection = styled.div`
  ${tw`bg-theme-green-0 `}
  padding: 64px 0;
  @media (min-width: 768px) {
    padding: 72px 0;
  }
  @media (min-width: 1280px) {
    padding: 80px 0 120px 0;
  }
`;
export const StayledProcessIconSection = styled.div`
  ${tw`h-full gap-16 md:gap-4 xl:gap-[26px] justify-around  flex flex-col md:flex-row items-center items-stretch`}
`;
export const StyledArrowSection = styled.div`
  ${tw`flex items-center hidden md:flex justify-center w-[57px] xl:w-[97px]`}
  @media (min-width: 768px) {
    margin-bottom: 140px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 160px;
  }
`;

export const StyledFaqSectionTitle = styled.h3`
  ${tw`lg:text-right`}
  font-size:56px;
  line-height: 74px;
  min-width: 285px;
  width: 285px;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 47px;
    min-width: 198px;
    width: 198px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
    width: 100%;
  }
`;
