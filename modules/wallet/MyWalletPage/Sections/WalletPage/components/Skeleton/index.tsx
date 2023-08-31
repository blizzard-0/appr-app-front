import React from 'react';
import { WalletPageLayout } from '@/modules/wallet/components/Layout';
import { AppListbox, IconButton } from '@/components/v2';
import { AddIcon, SortIcon, MenuDown } from '@/components/Icons';
import { PageHeader } from '..';
import { StatusWrapper, StatusDisplay } from '../UserDetails/Styles';
import { SkeletonCard } from './Card';

const SkeletonAvatar: React.FC = () => (
  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-skeleton text-white flex justify-center items-center mx-auto relative group" />
);

const SkeletonUserName: React.FC = () => (
  <div className="block m-auto w-56 h-4 bg-skeleton mt-4" />
);

const SkeletonUserStats: React.FC = () => (
  <div className="inline-block w-20 h-7 md:h-10 bg-skeleton" />
);

const StatusCategories = ['Items', 'Verified', 'Value'] as const;

export const MyWalletPageSkeleton: React.FC = () => {
  return (
    <WalletPageLayout primaryEmail="" userName="">
      <PageHeader>
        <div className="w-full animate-pulse">
          <SkeletonAvatar />
          <SkeletonUserName />
          <StatusWrapper>
            {StatusCategories.map((label, i) => (
              <StatusDisplay key={label} label={label} border={i < 2}>
                <SkeletonUserStats />
              </StatusDisplay>
            ))}
          </StatusWrapper>
        </div>
      </PageHeader>
      <div className="w-full md:w-small-container-tablet lg:w-small-container mx-auto relative">
        <div className="mx-auto px-5 md:px-0 py-7 md:py-8 flex justify-between">
          <div className="flex flex-1">
            <div className="w-sort-dropdown-small md:w-sort-dropdown">
              <AppListbox options={[]} value="date" onChange={() => null} />
            </div>
            <div className="ml-2 lg:ml-4">
              <IconButton>
                <SortIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex">
            <IconButton $wide>
              <AddIcon />
              <span className="hidden md:block">add</span>
              <MenuDown />
            </IconButton>
          </div>
        </div>
        <div
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 place-items-center relative"
        >
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={`loading-item-${i}`} />
          ))}
        </div>
      </div>
    </WalletPageLayout>
  );
};
