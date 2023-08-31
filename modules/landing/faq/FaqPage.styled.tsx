import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledFaqHeroSectionWrapper = styled.div`
  ${tw` font-maison-neue-book text-panda-dark bg-light-yellow bg-no-repeat	bg-cover`}
  background-image:url('./FAQ_pattern.png');
  padding-top: 198px;
  padding-bottom: 198px;
  @media (max-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 72px;
  }
`;

export const StyledFaqHeroTitleWrapper = styled.h1`
  ${tw`font-maison-neue-extended-book text-left md:text-center mx-auto`}
  font-size:72px;
  line-height: 95px;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 55px;
    max-width: 553px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 47px;
  }
`;

export const StyledFaqSectionTitle = styled.h3`
  ${tw`font-maison-neue-extended-book lg:text-right`}
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
