import styled from 'styled-components';
import tw from 'twin.macro';

interface HeroSectionProps {
  theme?: 'purple' | 'green' | 'yellow';
  page?: 'brands' | 'owners' | 'partners' | 'rest';
}

export const HeroSectionwrapper = styled.div<HeroSectionProps>`
  ${tw` font-maison-neue-book`}
  ${(p) => (p.theme == 'purple' ? tw`bg-theme-purple-2` : tw``)}
  ${(p) => (p.theme == 'green' ? tw`bg-theme-green-2` : tw``)}
  ${(p) => (p.theme == 'yellow' ? tw`bg-theme-yellow-2` : tw``)}

  ${(p) =>
    p.page == 'owners' ? 'padding-top:112px;padding-bottom: 298px;' : ''}
  ${(p) =>
    p.page == 'brands' ? 'padding-top:28px;padding-bottom: 298px;' : ''}
  ${(p) =>
    p.page == 'partners' ? 'padding-top:28px;padding-bottom: 298px;' : ''}
  ${(p) => (p.page == 'rest' ? 'padding-top:78px;padding-bottom: 298px;' : '')}
 
  @media (max-width: 1024px) {
    padding-top: 64px;
    padding-bottom: 329px;
  }
  @media (max-width: 768px) {
    padding-top: 64px;
    padding-bottom: 130px;
  }
`;
export const HeroSectionInnerwrapper = styled.div`
  ${tw` `}
  max-width:1728px;
  margin: 0 auto;
  padding-left: 156px;
  padding-right: 96px;

  @media (max-width: 1727px) {
    width: 90%;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const HeroSectionTitle = styled.h1`
  ${tw`font-maison-neue-extended-book`}
  font-size:72px;
  line-height: 95px;
  @media (max-width: 1538px) {
    font-size: 60px;
    line-height: 72px;
  }
  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 55px;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 47px;
  }
`;
export const HeroSectionContent = styled.div`
  ${tw` `}
  font-size:24px;
  line-height: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 29px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HeroSectionCTAwrapper = styled.a`
  ${tw`font-maison-neue-book  uppercase bg-panda-dark border-2 border-panda-dark  text-white hover:bg-light-gray hover:text-panda-dark text-center rounded-full`}
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 0.08em;
  padding-top: 15px;
  padding-bottom: 15px;
  min-width: 455px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 26px;

    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
    max-width: 350px;
    min-width: auto;
    margin-bottom: 70px;
  }
`;

export const HeroSectionImage = styled.div`
  ${tw``}
  flex:0 0 768px;
  @media (max-width: 1727px) {
    flex: 0 0 45%;
  }
`;
