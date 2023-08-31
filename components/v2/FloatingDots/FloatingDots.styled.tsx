import styled from 'styled-components';

export const StyledFloatingDots = styled.span`
  position: relative;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: #222222;
  color: #222222;
  -webkit-animation: dot-flashing 1s infinite linear alternate;
  animation: dot-flashing 1s infinite linear alternate;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &:before {
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: #222222;
    color: #222222;
    -webkit-animation: dot-flashing 1s infinite alternate;
    animation: dot-flashing 1s infinite alternate;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  &:after {
    left: 10px;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: #222222;
    color: #222222;
    -webkit-animation: dot-flashing 1s infinite alternate;
    animation: dot-flashing 1s infinite alternate;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
  @-webkit-keyframes dot-flashing {
    0% {
      background-color: #222222;
    }
    50%,
    100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
  }
  @keyframes dot-flashing {
    0% {
      background-color: #222222;
    }
    50%,
    100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
  }
`;

export const StyledLoader = styled.span`
  display: inline-flex;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
`;
