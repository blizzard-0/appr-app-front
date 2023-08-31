import React from 'react';

import {
  StyledAvatarWrapper,
  StyledUserName,
  StyledAvatar,
  StyledAvatarOverlay,
  StyledFileInput,
} from './Avatar.styled';
import { PencilIcon } from './icon/Pencil';

export type AvatarSizeType = 'large' | 'small';

interface AvatarProps {
  userName: string;
  avatarUrl?: string;
  onUploadAvatar?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  $size?: AvatarSizeType;
}

export const Avatar: React.FC<AvatarProps> = ({
  avatarUrl,
  userName,
  onUploadAvatar,
  $size = 'large',
}) => {
  return (
    <StyledAvatarWrapper $size={$size} className="group">
      {!avatarUrl ? (
        <StyledUserName>{userName.charAt(0)}</StyledUserName>
      ) : (
        <StyledAvatar src={avatarUrl} alt="user_avatar" />
      )}
      <StyledAvatarOverlay htmlFor="avatar-upload" className="group-hover:flex">
        <PencilIcon />
        <StyledFileInput
          type="file"
          id="avatar-upload"
          onChange={onUploadAvatar}
          accept="image/png, image/gif, image/jpeg"
        />
      </StyledAvatarOverlay>
    </StyledAvatarWrapper>
  );
};
