/* eslint-disable @next/next/no-img-element */

import React from 'react';
import {
  ThreeColIconSectionWrapper,
  ThreeColIconSectionHeading,
  ThreeColIconSectionSubHeading,
  ThreeColIconSectionSubContent,
  ThreeColIconSectionImage,
} from './ThreeColIconSection.styled';

interface IconProps {
  title: string;
  icon: React.ReactNode;
  content: string;
}

interface ThreeColIconSectionProps {
  title: string;
  iconList: IconProps[];
}

export const ThreeColIconSection: React.FC<ThreeColIconSectionProps> = ({
  title,
  iconList,
}) => {
  return (
    <ThreeColIconSectionWrapper className="px-5 md:px-6 lg:px-20 flex flex-col justify-between text-panda-dark three-col-icon-section">
      <ThreeColIconSectionHeading className="maison-neue-extended-book text-center">
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </ThreeColIconSectionHeading>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-6">
        {iconList.map((item, index) => (
          <div
            key={index}
            className={
              index == 0 ? 'md:col-span-2 xl:col-span-1 md:pb-12 xl:pb-0' : ''
            }
          >
            <div className="flex flex-col text-center ">
              <ThreeColIconSectionImage>{item.icon}</ThreeColIconSectionImage>

              <ThreeColIconSectionSubHeading className="maison-neue-demi">
                <div dangerouslySetInnerHTML={{ __html: item.title }} />
              </ThreeColIconSectionSubHeading>
              <ThreeColIconSectionSubContent className="maison-neue-book text-base lg:text-xl">
                {item.content}
              </ThreeColIconSectionSubContent>
            </div>
          </div>
        ))}
      </div>
    </ThreeColIconSectionWrapper>
  );
};
