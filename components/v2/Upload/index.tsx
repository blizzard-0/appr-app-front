import React, { HTMLAttributes } from 'react';

import { StyledUpload, StyledText } from './Upload.styled';
import { UploadIcon } from './icon/Upload';

export type UploadSizeType = 'large' | 'small';

interface UploadProps extends HTMLAttributes<HTMLButtonElement> {
  $size?: UploadSizeType;
}

export const Upload: React.FC<UploadProps> = ({
  children,
  $size = 'large',
  ...rest
}) => {
  return (
    <StyledUpload {...rest}>
      <UploadIcon />
      <StyledText $size={$size}>{children}</StyledText>
    </StyledUpload>
  );
};
