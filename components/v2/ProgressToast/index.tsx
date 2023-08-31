import { useSmoothProgress } from '../../../hooks/useSmoothProgress';
import React from 'react';
import {
  StyledProgressToastContent,
  StyledProgressToastInner,
  StyledProgressToastProgress,
  StyledProgressToastText,
  StyledProgressToastWrapper,
} from './ProgressToast.styled';

interface ProgressToastProps {
  $progress: number;
  $text: string;
}

export const ProgressToast: React.FC<ProgressToastProps> = ({
  $progress,
  $text,
}) => {
  const [visualProgress] = useSmoothProgress($progress);
  return (
    <StyledProgressToastWrapper>
      <StyledProgressToastInner>
        <StyledProgressToastContent>
          <StyledProgressToastProgress
            style={{ width: `${visualProgress}%` }}
            data-testid="toast-progressbar"
          ></StyledProgressToastProgress>
          <StyledProgressToastText>{$text}</StyledProgressToastText>
        </StyledProgressToastContent>
      </StyledProgressToastInner>
    </StyledProgressToastWrapper>
  );
};
