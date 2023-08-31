/* eslint-disable @next/next/no-img-element */

import React from 'react';
import {
  FourColIconSectionWrapper,
  FourColIconSectionHeading,
  FourColIconSectionSubHeading,
  FourColIconSectionSubContent,
  FourColIconSectionImage,
} from './FourColIconSection.styled';

interface IconProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

interface FourColIconSectionProps {
  title: string;
  iconList: IconProps[];
}

export const FourColIconSection: React.FC<FourColIconSectionProps> = ({
  title,
  iconList,
}) => {
  return (
    <FourColIconSectionWrapper className="px-5 md:px-6 lg:px-20 flex flex-col justify-between text-panda-dark four-col-icon-section">
      <FourColIconSectionHeading className="maison-neue-extended-book text-center">
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </FourColIconSectionHeading>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-24 md:gap-16 xl:gap-6">
        {iconList.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col text-center ">
              <FourColIconSectionImage>{item.icon}</FourColIconSectionImage>
              <FourColIconSectionSubHeading className="maison-neue-demi">
                <div dangerouslySetInnerHTML={{ __html: item.title }} />
              </FourColIconSectionSubHeading>
              <FourColIconSectionSubContent className="maison-neue-book text-base lg:text-xl">
                {item.content}
              </FourColIconSectionSubContent>
            </div>
          </div>
        ))}
      </div>
    </FourColIconSectionWrapper>
  );
};
