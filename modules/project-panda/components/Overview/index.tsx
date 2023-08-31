import React from 'react';

interface OverviewProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export const Overview: React.FC<OverviewProps> = ({
  description,
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`text-panda-dark ${className}`}>
      <div className="flex justify-center mb-8 xl:mb-10">{children}</div>
      <h4
        className="uppercase text-xl leading-26-px mb-3 xl:text-2xl xl:leading-30-px xl:mb-4 tracking-widest font-maison-neue-medium text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h4>
      <p className="text-center xl:text-base font-maison-neue-book text-14-px leading-22-px">
        {description}
      </p>
    </div>
  );
};
