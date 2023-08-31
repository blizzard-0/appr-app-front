import styled from 'styled-components';
import tw from 'twin.macro';

export const FourColIconSectionWrapper = styled.div`
  ${tw`mx-auto w-full flex flex-col bg-light-gray`}
  max-width:1538px;
  box-shadow: 0px 0px 19.2px rgba(34, 34, 34, 0.1);
  border-radius: 56.4px;
  padding: 136px 61px;
  margin-top: -300px;
  margin-bottom: 128px;
  @media (max-width: 1538px) {
    width: 90%;
    margin-top: -200px;
  }
  @media (max-width: 1240px) {
    padding: 72px 48px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 87px;
  }
  @media (max-width: 768px) {
    padding: 60px 24px;
    margin-left: 14px;
    margin-right: 14px;
    width: auto;
    border-radius: 32px;
    margin-top: -126px;
    margin-bottom: 48px;
  }
`;

export const FourColIconSectionHeading = styled.div`
  ${tw` `}
  font-size:56px;
  line-height: 75px;
  margin-bottom: 84px;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 43px;
    margin-bottom: 60px;
  }
`;

export const FourColIconSectionSubHeading = styled.div`
  ${tw` `}
  font-size:32px;
  line-height: 40px;
  margin-top: 80px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 32px;
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 12px;
  }
`;

export const FourColIconSectionSubContent = styled.div`
  ${tw` `}
`;

export const FourColIconSectionImage = styled.div`
  ${tw`block w-auto mx-auto `}
  height:161px;
  @media (max-width: 1024px) {
    max-height: 140px;
  }
  @media (max-width: 768px) {
    max-height: 120px;
    max-width: 120px;
  }
`;
