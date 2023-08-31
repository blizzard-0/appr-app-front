import React from 'react';

import {
  StyledTooltipWrapper,
  StyledTooltipContent,
  StyledTooltipText,
  StyledArrow,
} from './Tooltip.styled';

export type ToolTipPositionType = 'left' | 'right' | 'top';

interface TooltipProps {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  position?: ToolTipPositionType;
}

export const Tooltip: React.FC<TooltipProps> = ({
  trigger,
  title = '',
  children,
  position = 'right',
}) => {
  return (
    <StyledTooltipWrapper className="group">
      <div>{trigger}</div>
      <StyledTooltipContent $position={position} className="group-hover:flex">
        {position === 'right' && <StyledArrow className="-mr-2" />}
        <StyledTooltipText $position={position}>
          {!!title && <label className="font-bold mb-1 block">{title}</label>}
          <p>{children}</p>
        </StyledTooltipText>
        {position === 'left' && <StyledArrow className="-ml-2" />}
        {position === 'top' && <StyledArrow className="-mt-2" />}
      </StyledTooltipContent>
    </StyledTooltipWrapper>
  );
};
