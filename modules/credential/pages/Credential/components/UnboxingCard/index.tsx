import React from 'react';

import { IdentifiedUnboxingItem } from '@/modules/credential/hooks';
import {
  StyledCard,
  StyledCardImage,
  StyledCardInfo,
  StyledCardTitle,
  StyledCardName,
  StyledBadge,
} from './UnboxingCard.styled';
import { VerifiedIcon } from '@/components/v2/WalletItem/icon/Verified';

interface UnboxingCardProps {
  walletItem: IdentifiedUnboxingItem;
}

export const UnboxingCard: React.FC<UnboxingCardProps> = ({ walletItem }) => {
  const { brandName, imageUrl, productName } = walletItem;
  return (
    <StyledCard>
      <StyledCardImage $bgUrl={imageUrl}>
        <StyledBadge>
          <VerifiedIcon />
        </StyledBadge>
      </StyledCardImage>
      <StyledCardInfo>
        <StyledCardTitle>{brandName}</StyledCardTitle>
        <StyledCardName>{productName}</StyledCardName>
      </StyledCardInfo>
    </StyledCard>
  );
};
