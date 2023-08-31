import styled from 'styled-components';
import tw from 'twin.macro';

import { UploadSizeType } from '.';

export const StyledUpload = styled.button`
  ${tw`flex flex-col gap-8 w-full px-8 py-6 bg-gray-100 hover:bg-gray-200 active:bg-gray-200 border border-gray-250 hover:border-gray-400 active:border-gray-600 items-center`}
`;

export const StyledText = styled.p<{ $size: UploadSizeType }>`
  ${tw`font-maison-neue-book text-center text-gray-500`}
  ${(props) => (props.$size === 'large' ? tw`text-2xl` : tw`text-base`)}
`;
