import React from 'react';
import Iconic from './icons/Iconic';
import Seasonal from './icons/Seasonal';
import Vintage from './icons/Vintage';
import Investment from './icons/Investment';
import Limited from './icons/Limited';
import Trending from './icons/Trending';
import Sustainable from './icons/Sustainable';
import { ProductBadgeEnumType } from '../../../generated/graphql';

import { BadgeListWrapper } from './BadgeList.styled';

interface BadgeListProps {
  badges: ProductBadgeEnumType[];
}

export const badgeIcons = {
  [ProductBadgeEnumType.Iconic]: Iconic,
  [ProductBadgeEnumType.Seasonal]: Seasonal,
  [ProductBadgeEnumType.Vintage]: Vintage,
  [ProductBadgeEnumType.Investment]: Investment,
  [ProductBadgeEnumType.Limited]: Limited,
  [ProductBadgeEnumType.Sustainable]: Sustainable,
  [ProductBadgeEnumType.Trending]: Trending,
};

export const BadgeList: React.FC<BadgeListProps> = ({ badges }) => {
  if (!badges.length) {
    return null;
  }
  return (
    <BadgeListWrapper>
      {badges.map((badge, i) => {
        const Icon = badgeIcons[badge];
        return <Icon key={i} inheritColor />;
      })}
    </BadgeListWrapper>
  );
};
