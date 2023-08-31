import styled from 'styled-components';
import tw from 'twin.macro';

interface TwoColSectionProps {
  imagePosition?: 'left' | 'right';
  theme?: 'purple' | 'green' | 'yellow' | 'pink';
  bgType?: '1' | '2' | '3' | '4';
  mobileImageTop?: boolean;
}

export const TwoColSectionwrapper = styled.div<TwoColSectionProps>`
  ${tw`flex mx-auto text-panda-dark `}
  ${(p) => (p.mobileImageTop ? tw`flex-col-reverse` : tw`flex-col`)}
  ${(p) =>
    p.imagePosition == 'left' ? tw`lg:flex-row-reverse` : tw`lg:flex-row`}
  
  min-height:864px;
  max-width: 1728px;
  @media (max-width: 1280px) {
    min-height: 600px;
  }
  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const TwoColSectionImageWrapper = styled.div<TwoColSectionProps>`
  ${tw`bg-cover`}
  ${(p) => (p.theme == 'purple' ? tw`bg-theme-purple-1` : tw``)}
  ${(p) => (p.theme == 'green' ? tw`bg-theme-green-1` : tw``)}
  ${(p) => (p.theme == 'yellow' ? tw`bg-theme-yellow-1` : tw``)}
  ${(p) => (p.theme == 'pink' ? tw`bg-theme-pink-1` : tw``)}
  background-image: url(/${(props) =>
    props.theme + '_pattern_' + props.bgType + '.svg'});
  padding: 80px;
  @media (max-width: 768px) {
    padding: 35px;
  }
`;

export const TwoColSectionContentwrapper = styled.div`
  ${tw``}
  padding:172px 134px;
  @media (max-width: 1280px) {
    padding: 80px;
  }
  @media (max-width: 1024px) {
    padding: 149px 50px;
  }
  @media (max-width: 768px) {
    padding: 84px 36px;
  }
`;

export const TwoColSectionTitlewrapper = styled.div`
  ${tw``}
  font-size: 48px;
  line-height: 64px;
  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 64px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 35px;
  }
`;

export const TwoColSectionSubTitlewrapper = styled.div`
  ${tw`font-maison-neue-book`}
  font-size: 32px;
  line-height: 42px;
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 31px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const TwoColSectionCTAwrapper = styled.a<TwoColSectionProps>`
  ${tw`font-maison-neue-book  uppercase bg-panda-dark border-2 border-panda-dark  text-white hover:bg-light-gray  text-center rounded-full`}
  ${(p) =>
    p.theme == 'purple'
      ? tw`hover:border-theme-purple-3 hover:text-theme-purple-3`
      : tw``}
  ${(p) =>
    p.theme == 'green'
      ? tw`hover:border-theme-green-3 hover:text-theme-green-3`
      : tw``}
  ${(p) =>
    p.theme == 'yellow'
      ? tw`hover:border-theme-yellow-3 hover:text-theme-yellow-3`
      : tw``}
  ${(p) =>
    p.theme == 'pink'
      ? tw`hover:border-theme-pink-3 hover:text-theme-pink-3`
      : tw``}
  
  font-size: 23px;
  line-height: 32px;
  letter-spacing: 0.08em;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 455px;
  width: 100%;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 31px;
  }
  @media (max-width: 768px) {
    line-height: 26px;
    min-width: 320px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
