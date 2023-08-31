import React from 'react';

import {
  StyledExploreItem,
  StyledExploreImage,
  StyledExploreItemImage,
  StyledDetailSection,
  StyledItemInfo,
  StyledItemText,
  StyledAddedBadge,
} from './ExploreItem.styled';
import { FloatingDots, Tag } from '..';

interface ExploreItemProps {
  brandName: string;
  productName: string;
  resalePrice: string;
  image: string;
  loadingResalePrice?: boolean;
  alreadyAdded?: boolean;
  onClick?: () => void;
}

export const ExploreItem: React.FC<ExploreItemProps> = ({
  image,
  brandName,
  productName,
  resalePrice,
  loadingResalePrice = false,
  alreadyAdded = false,
  onClick,
}) => {
  return (
    <StyledExploreItem onClick={onClick}>
      <StyledExploreItemImage>
        <StyledExploreImage src={image} alt={`${brandName}-${productName}`} />
        {alreadyAdded && (
          <StyledAddedBadge>
            <Tag $variant="success">Added</Tag>
          </StyledAddedBadge>
        )}
      </StyledExploreItemImage>
      <StyledDetailSection>
        <StyledItemInfo>
          <StyledItemText as="h4" className="font-maison-neue-demi">
            {brandName ?? '…'}
          </StyledItemText>
          <StyledItemText>{productName ?? '…'}</StyledItemText>
          <StyledItemText>
            {loadingResalePrice ? (
              <span className="flex items-center">
                Analyzing value
                <FloatingDots className="ml-2" />
              </span>
            ) : (
              <>
                {resalePrice === '…'
                  ? resalePrice
                  : `${resalePrice} resale value`}
              </>
            )}
          </StyledItemText>
        </StyledItemInfo>
      </StyledDetailSection>
    </StyledExploreItem>
  );
};
