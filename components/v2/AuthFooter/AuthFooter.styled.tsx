import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`text-footerlink font-maison-neue-book w-vw flex justify-center absolute bottom-0 pb-8`}
  @media (max-width: 961px) {
    padding-bottom: 20px;
  }
`;
export const Container = styled.div`
  ${tw`justify-center items-center flex`}
`;

export const Dot = styled.div`
  ${tw`mx-2 inline-block w-1 h-1 bg-krestrel-surfaceFloating`}
`;
