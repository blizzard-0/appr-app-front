import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledWrapper = styled.div`
  ${tw`fixed top-20 left-1/2 -translate-x-1/2 w-[200px] rounded-[4px] overflow-hidden bg-[#B3B3B3] h-0.5 z-1`}
`;

export const StyledProgressBar = styled.div`
  ${tw`relative w-full h-0.5`}
`;

export const StyledRemaingBar = styled.div<{ $width: number }>`
  ${tw`absolute right-0 top-0 h-full bg-white rounded-[4px] transition-all`}
  width: ${(props) => props.$width}%;
`;
