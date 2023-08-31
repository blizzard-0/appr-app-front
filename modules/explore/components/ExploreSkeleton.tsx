import React from 'react';

export const ExploreItemSkeleton: React.FC = () => {
  return (
    <div className="p-5 md:pb-4 pb-5 bg-white rounded-sm w-full md:w-286-px flex md:flex-col flex-row-reverse justify-between cursor-pointer border-b md:border border-gray-300 md:border-white">
      <div className="md:mb-4 md:w-full w-40">
        <div className="bg-gray-100 w-40 md:w-full h-[141px] md:h-[215px]"></div>
      </div>
      <div className="mr-2 md:mr-0 flex-1 overflow-x-hidden gap-y-2 flex flex-col">
        <p className="bg-gray-100 text-14-px leading-4 truncate font-maison-neue-bold capitalize h-5" />
        <p className="bg-gray-100 text-14-px leading-4 truncate font-maison-neue-book h-5 w-1/2" />
        <p className="bg-gray-100 text-14-px leading-4 truncate font-maison-neue-book h-5 w-3/4" />
      </div>
    </div>
  );
};
