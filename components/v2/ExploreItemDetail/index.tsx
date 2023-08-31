import React from 'react';
import { Lockup, FloatingDots } from '..';
import { Spinner } from './icon/Spinner';

import {
  StyledExploreItemDetail,
  StyledExploreItemSection,
  StyledExploreItemDetails,
  StyledExploreItemImage,
  StyledAddButton,
} from './ExploreItem.styled';

interface ExploreItemDetailProps {
  brandName: string;
  productName: string;
  image: string;
  resalePrice: string;
  adding: boolean;
  added: boolean;
  priceLoading: boolean;
  onAddItem: () => void;
}

export const ExploreItemDetail: React.FC<ExploreItemDetailProps> = ({
  image,
  productName,
  brandName,
  resalePrice,
  priceLoading,
  adding,
  added,
  onAddItem,
}) => {
  return (
    <StyledExploreItemDetail>
      <StyledExploreItemSection>
        <StyledExploreItemImage src={image} alt={productName} />
      </StyledExploreItemSection>
      <StyledExploreItemDetails>
        <Lockup label="Brand">{brandName || '…'}</Lockup>
        <Lockup label="Product">{productName || '…'}</Lockup>
        <Lockup label="Resale Value">
          {priceLoading ? (
            <>
              Analyzing value
              <FloatingDots className="ml-2" />
            </>
          ) : (
            <>
              {resalePrice === '…'
                ? resalePrice
                : `${resalePrice} resale value`}
            </>
          )}
        </Lockup>
        {!added && (
          <StyledAddButton onClick={onAddItem}>
            {adding ? <Spinner /> : 'Add to wallet'}
          </StyledAddButton>
        )}
      </StyledExploreItemDetails>
    </StyledExploreItemDetail>
  );
};
