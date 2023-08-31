import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledComboboxWrapper = styled.div`
  ${tw`relative`}
`;

export const StyledComboboxInput = styled.input`
  ${tw`border bg-white block w-full focus:outline-none focus:shadow-none focus:ring-transparent focus:ring-0 font-maison-neue-book text-gray-800 border-gray-250 hover:border-gray-400 focus:border-gray-700`}
`;

export const StyledComboboxOption = styled.li<{
  $active?: boolean;
}>`
  ${tw`font-maison-neue-book relative cursor-pointer select-none text-sm leading-6 py-2 px-3 border-b border-lightgray-800 last:border-none outline-none text-gray-800 hover:bg-lightgray-800`}
  ${(props) =>
    props.$active ? tw`bg-lightgray-800 hover:bg-lightgray-800` : tw`bg-white`}
`;

export const StyledComboboxOptions = styled.ul`
  ${tw`absolute max-h-[212px] z-20 w-full overflow-y-auto border-l border-r border-b border-gray-250 font-sans shadow-lg outline-none`}
`;

export const StyledComboboxLabel = styled.label`
  ${tw`block text-gray-600 mb-2 text-base leading-5`}
`;
