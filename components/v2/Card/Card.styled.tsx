import styled from 'styled-components';
import tw from 'twin.macro';

import { CardProps } from '.';

export const StyledCard = styled.div<CardProps>`
  ${tw`p-5 bg-white border-b md:border border-gray-300 md:border-white rounded-sm hover:border-gray-300 inline-flex transition-colors`}
  ${(props) => (props.$full ? tw`w-full` : tw`w-full md:w-72`)}
`;
