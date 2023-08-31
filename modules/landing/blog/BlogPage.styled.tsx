import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledBlogHeroWrapper = styled.div`
  ${tw` text-white`}
  padding-top: 124px;
  padding-bottom: 100px;
`;

export const StyledBlogListWrapper = styled.div`
  ${tw``}
  margin-bottom: 180px;
  @media (max-width: 1024px) {
    margin-bottom: 64px;
  }
`;

export const StyledBlogListItemContentWrapper = styled.div`
  ${tw`w-full lg:w-1/2 flex flex-col py-8 px-8 justify-center md:px-[77px] xl:px-120-px lg:py-24`}
  min-height:630px;
  @media (max-width: 1024px) {
    min-height: auto;
  }
`;
export const StyledBlogListItemImageWrapper = styled.a`
  ${tw`w-full lg:w-1/2  flex`}

  @media (max-width: 768px) {
    min-height: 252px;
  }
`;

export const StyledBlogListItemTitle = styled.div`
  ${tw`font-maison-neue-extended-medium`}
  font-size: 32px;
  line-height: 52px;
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const StyledSingleBlogWrapper = styled.div`
  ${tw`flex flex-col font-maison-neue-book`}
  padding-top: 134px;
  padding-bottom: 137px;
  @media (max-width: 1024px) {
    padding-top: 24px;
    padding-bottom: 50px;
  }
`;

export const StyledSingleBlogContentWrapper = styled.div`
  ${tw``}

  @media (min-width: 1024px) {
    max-width: 55%;
  }
  @media (min-width: 1280px) {
    max-width: 696px;
  }
`;
export const StyledSingleBlogSidebarWrapper = styled.div`
  ${tw`w-full bg-light-pink`}
  max-width:336px;
  padding: 45px 37px;
  margin-top: 78px;
`;

export const StyledSingleBlogImageCaption = styled.div`
  ${tw`text-center text-dark-gray lg:text-panda-dark font-sans pt-2 lg:pt-4`}
  font-size:10px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const StyledPostItemCardWarpper = styled.div`
  ${tw` flex-shrink-0 lg:flex-shrink font-maison-neue-book border-light-silver border-solid border`}
  width: 50%;
  @media (max-width: 768px) {
    max-width: 230px;
  }

  @media (min-width: 1024px) {
    min-width: 192px;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

export const StyledPostItemCardImageWarpper = styled.img`
  ${tw`object-cover`}
  width:100%;
  height: 167px;

  @media (min-width: 1024px) {
    height: 192px;
  }
  @media (min-width: 1280px) {
    height: 292px;
  }
`;

export const StyledPostItemCardContentWarpper = styled.div`
  ${tw`flex flex-col py-6 lg:py-4 xl:pt-8 xl:pb-12`}
  padding-left: 21px;
  padding-right: 21px;
  @media (min-width: 1024px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 1280px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const StyledAuthorItemBlock = styled.img`
  ${tw``}
  width:108px;
  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const StyledFormBlock = styled.div`
  ${tw` bg-purple text-light-gray py-14 px-11 text-center lg:mt-10 font-maison-neue-book`}
  border:3px;
  @media (max-width: 768px) {
    padding-top: 44px;
    padding-bottom: 55px;
  }
`;

export const StyledLoadMoreButton = styled.button`
  ${tw` text-panda-dark border-solid border-panda-dark border-2 text-14-px py-3 lg:mt-8 font-maison-neue-medium hover:bg-panda-dark hover:text-light-gray`}
  line-height:18px;
  border-radius: 31px;
  max-width: 280px;
  width: 100%;
`;
