import styled from 'styled-components';
import tw from 'twin.macro';

interface CareerSliderSectionProps {
  bgImage?: string;
}

export const StyledCareerHeroSectionWrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark bg-light-yellow bg-no-repeat	bg-cover`}
  background-image:url('./career_hero_bg.png');
  padding-top: 184px;
  padding-bottom: 640px;
  @media (max-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 385px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 685px;
  }
`;

export const StyledCareerHeroTitleWrapper = styled.h1`
  ${tw`font-maison-neue-extended-book text-left md:text-center`}
  font-size:72px;
  line-height: 95px;
  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 55px;
    max-width: 553px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 36px;
    line-height: 47px;
  }
`;

export const StyledCareerHeroContentWrapper = styled.div`
  ${tw` text-left md:text-center`}
  font-size:24px;
  line-height: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 29px;
    max-width: 696px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const StyledCareerHeroCTAwrapper = styled.a`
  ${tw`inline-block font-maison-neue-book  uppercase bg-panda-dark border-2 border-panda-dark  text-light-gray hover:bg-light-gray hover:text-panda-dark text-center rounded-full`}
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.08em;
  padding-top: 20px;
  padding-bottom: 20px;
  min-width: 455px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
    min-width: 320px;
    padding: 15px 13px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StayledOverlapSectionWrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark`}
  margin-top:-400px;
  @media (max-width: 1024px) {
    margin-top: -239px;
  }
  @media (max-width: 768px) {
    margin-top: -600px;
  }
`;

export const StayledCareerSectionTitleWrapper = styled.div`
  ${tw` font-maison-neue-extended-book text-panda-dark`}
  font-size:56px;
  line-height: 74px;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 47px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const StyledCareerSliderWrapper = styled.div`
  ${tw`mx-auto`}
  max-width:1728px;
  @media (max-width: 768px) {
  }
`;

export const CareerSliderItemWrapper = styled.div<CareerSliderSectionProps>`
  ${tw`flex flex-col lg:flex-row items-start lg:items-center bg-cover h-full`}

  background-image: url(.${(props) => props.bgImage});
  padding: 90px;
  @media (max-width: 1536px) {
    padding: 52px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
export const CareerSliderItemInnerWrapper = styled.div<CareerSliderSectionProps>`
  ${tw`flex flex-col gap-8 md:gap-6 xl:gap-10 h-full justify-center`}
  padding:105px 80px;
  font-size: 24px;
  line-height: 40px;
  @media (max-width: 1536px) {
    padding: 40px;
  }
  @media (max-width: 1024px) {
    padding: 52px 47px;
    font-size: 16px;
    line-height: 28px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    line-height: 24px;
  }
`;

export const CareerSliderItemImageWrapper = styled.div`
  ${tw`h-full block`}
  max-width:150px;
  @media (max-width: 1280px) {
    max-width: 100px;
  }
  @media (max-width: 1024px) {
    max-width: 80px;
  }
`;
