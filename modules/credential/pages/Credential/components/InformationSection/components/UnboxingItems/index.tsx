import { useUnboxingContext } from '@/modules/credential/context';
import React, { HTMLAttributes } from 'react';
import {
  UnboxingItemWrapper,
  UnboxingItemTop,
  UnboxingItemSecond,
  UnboxingItemThird,
  UnboxingItemDescription,
} from './UnboxingItems.styled';
import { PlayIcon } from './PlayIcon';

export const UnboxingItems: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  onClick,
}) => {
  const { identifiedItems } = useUnboxingContext();

  return (
    <div className="mb-5">
      <UnboxingItemWrapper onClick={onClick}>
        <UnboxingItemTop $bgUrl={identifiedItems[0].imageUrl}>
          <PlayIcon />
        </UnboxingItemTop>
        {identifiedItems.length > 1 && (
          <>
            <UnboxingItemThird />
            <UnboxingItemSecond />
          </>
        )}
      </UnboxingItemWrapper>
      {identifiedItems.length > 1 && (
        <UnboxingItemDescription>
          and {identifiedItems.length - 1} more items to unbox.
        </UnboxingItemDescription>
      )}
    </div>
  );
};
