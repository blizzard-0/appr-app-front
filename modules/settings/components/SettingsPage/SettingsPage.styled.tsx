import styled from 'styled-components';
import tw from 'twin.macro';

export const SettingsForm = styled.form`
  ${tw`pb-16`}
`;

export const SettingsPageContainer = styled.div`
  ${tw`w-full md:w-[560px] mx-auto font-maison-neue-book`}
`;

export const SettingsPageTitle = styled.h2`
  ${tw`text-left md:text-center font-bold text-2xl font-maison-neue-bold leading-10 md:text-heading md:leading-10 md:mt-10 md:mb-9 md:mx-0 mx-5 my-6 tracking-0.02em text-gray-800`}
`;

export const SettingsPageFormContent = styled.div`
  ${tw`bg-white`}
`;

export const SettingsPageFormContentInner = styled.div`
  ${tw`p-5 md:p-6`}
`;

export const SettingsPageSectionHeading = styled.h3`
  ${tw`text-xl leading-6 tracking-wider font-medium mb-10`}
`;

export const SettingsPageAvatarWrapper = styled.div`
  ${tw`mb-8 flex items-center gap-4 text-gray-600 text-base leading-5`}
`;

export const SettingsPageDivider = styled.div`
  ${tw`w-full h-0.5 bg-gray-300 my-10`}
`;
