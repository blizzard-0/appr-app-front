import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeroSectionwrapper = styled.div`
  ${tw`bg-repeat	bg-cover`}
  background-image: url(/bg-pattern-404.svg);
  padding-top: 60px;
  padding-bottom: 60px;
  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media (min-width: 1280px) {
    padding-top: 132px;
    padding-bottom: 158px;
  }
`;

export const StyledHeroContentWrapper = styled.div`
  ${tw`text-center`}
  font-size:16px;
  line-height: 24px;
  max-width: 860px;
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

export const StyledHeroCTAwrapper = styled.a`
  ${tw` uppercase bg-panda-dark border-2 border-panda-dark  text-light-gray hover:bg-light-gray hover:text-panda-dark  text-center rounded-full`}

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
    line-height: 29px;
    letter-spacing: 0.08em;
    padding-top: 13px;
    padding-bottom: 13px;
    max-width: 455px;
    width: 100%;
  }
`;
