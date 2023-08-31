import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledLoaderWrapper = styled.div`
  ${tw`min-h-screen px-4 text-center fixed inset-0 bg-current opacity-50 z-50 flex justify-center items-center`}

  .spinner > div {
    width: 12px;
    height: 12px;
    margin-left: 4px;
    margin-right: 4px;
    background-color: #f6f6f6;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const StyledEmptyContent = styled.span`
  ${tw`inline-block h-screen align-middle`}
`;
