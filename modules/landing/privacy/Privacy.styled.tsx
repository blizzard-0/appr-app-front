import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledPrivacyHeroSectionWrapper = styled.div`
  ${tw` flex flex-col items-center text-panda-dark px-5 lg:px-10`}

  padding-top: 72px;
  padding-bottom: 120px;
  @media (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 75px;
  }
`;

export const StyledPrivacyHeroTitleWrapper = styled.h1`
  ${tw`font-maison-neue-extended-book  mx-auto text-center`}
  font-size:72px;
  line-height: 104px;

  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 48px;
  }
`;

export const StyledPrivacySectionTitleWrapper = styled.h1`
  ${tw`font-maison-neue-book   mx-auto text-panda-dark uppercase `}
  font-size:40px;
  line-height: 48px;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 40px;
  }
`;
