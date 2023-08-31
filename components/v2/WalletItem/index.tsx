import React from 'react';
import {
  WalletItemVisibilityEnumType,
  ProductBadgeEnumType,
  WalletItemProtectionStateEnumType,
} from '../../../generated/graphql';

import {
  StyledWalletItem,
  StyledWalletItemImage,
  StyledWalletImage,
  StyledVerifiedBadge,
  StyledDetailSection,
  StyledItemInfo,
  StyledStatusInfo,
  StyledStatusInfoRow,
  StyledWalletText,
} from './WalletItem.styled';
import { VerifiedIcon } from './icon/Verified';
import { BadgeList, Tag } from '..';

interface WalletItemProps {
  brandName: string;
  productName: string;
  image: string;
  priceLabel: string;
  visibility: WalletItemVisibilityEnumType;
  identified: boolean;
  badges?: ProductBadgeEnumType[];
  protection: WalletItemProtectionStateEnumType;
  hasReceipt: boolean;
  onClick?: () => void;
}

function getProtectionText(state: WalletItemProtectionStateEnumType) {
  if (state === WalletItemProtectionStateEnumType.NotProtected) {
    return 'Not Covered';
  } else if (state === WalletItemProtectionStateEnumType.Requested) {
    return 'Requested';
  } else {
    return 'Covered';
  }
}

function getCredentialText(identified: boolean, hasReceipt: boolean) {
  if (!identified && !hasReceipt) {
    return 'Unverified';
  } else if (!identified && hasReceipt) {
    return 'Under Review';
  } else {
    return 'Verified';
  }
}

export const WalletItem: React.FC<WalletItemProps> = ({
  image,
  brandName,
  productName,
  identified,
  priceLabel,
  badges,
  protection,
  hasReceipt,
  onClick,
}) => {
  return (
    <StyledWalletItem onClick={onClick}>
      <StyledWalletItemImage>
        <StyledWalletImage src={image} alt={`${brandName}-${productName}`} />
        {identified && (
          <StyledVerifiedBadge>
            <VerifiedIcon />
          </StyledVerifiedBadge>
        )}
      </StyledWalletItemImage>
      <StyledDetailSection>
        <StyledItemInfo>
          <StyledWalletText as="h4" className="font-maison-neue-demi">
            {brandName}
          </StyledWalletText>
          <StyledWalletText>{productName}</StyledWalletText>
          <StyledWalletText>{priceLabel}</StyledWalletText>
        </StyledItemInfo>
        <StyledStatusInfo>
          {!!badges?.length && (
            <StyledStatusInfoRow>
              <BadgeList badges={badges} />
            </StyledStatusInfoRow>
          )}
          <StyledStatusInfoRow>
            <Tag $variant={identified ? 'success' : 'warning'}>
              {getCredentialText(identified, hasReceipt)}
            </Tag>
          </StyledStatusInfoRow>
          <StyledStatusInfoRow>
            <Tag $variant="warning">{getProtectionText(protection)}</Tag>
          </StyledStatusInfoRow>
        </StyledStatusInfo>
      </StyledDetailSection>
    </StyledWalletItem>
  );
};
