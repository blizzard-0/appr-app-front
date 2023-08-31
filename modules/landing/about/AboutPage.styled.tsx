import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledAboutHeroSectionwrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark`}
  padding-top:195px;
  padding-bottom: 651px;
  @media (max-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 454px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 268px;
  }
`;

export const StyledAboutHeroTitleWrapper = styled.h1`
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

export const StyledAboutHeroContentWrapper = styled.div`
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

export const StayledOverlapSectionWrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark`}
  margin-top:-398px;
  @media (max-width: 1024px) {
    margin-top: -272px;
  }
  @media (max-width: 768px) {
    margin-top: -200px;
  }
`;

export const StayledAboutSectionTitleWrapper = styled.div`
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
