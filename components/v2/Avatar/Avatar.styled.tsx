import styled from 'styled-components';
import tw from 'twin.macro';

import { AvatarSizeType } from '.';

export const StyledAvatarWrapper = styled.div<{ $size: AvatarSizeType }>`
  ${tw`w-16 h-16 rounded-full bg-gray-250 text-white flex justify-center items-center mx-auto relative`}
  ${(props) => (props.$size === 'large' ? tw`lg:w-20 lg:h-20` : tw``)}
`;

export const StyledUserName = styled.span`
  ${tw`uppercase text-4xl md:text-5xl`}
`;

export const StyledAvatar = styled.img`
  ${tw`w-full h-full rounded-full object-cover`}
`;

export const StyledAvatarOverlay = styled.label`
  ${tw`hidden absolute top-0 left-0 w-full h-full rounded-full items-center justify-center bg-opacity-50 bg-black cursor-pointer`}
`;

export const StyledFileInput = styled.input`
  ${tw`opacity-0 absolute w-0 h-0`}
`;
