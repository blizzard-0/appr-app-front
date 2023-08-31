import React from 'react';

import { StyledLoaderWrapper } from './ProgressIndicator.styled';

interface ProgressIndicatorProps {
  active?: boolean;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  active = false,
}) => {
  if (!active) return null;
  return (
    <StyledLoaderWrapper>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </StyledLoaderWrapper>
  );
};
