import React from 'react';

import {
  StyledProgressBar,
  StyledRemaingBar,
  StyledWrapper,
} from './ProgressBar.styled';

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <StyledWrapper>
      <StyledProgressBar>
        <StyledRemaingBar $width={100 - progress} />
      </StyledProgressBar>
    </StyledWrapper>
  );
};
