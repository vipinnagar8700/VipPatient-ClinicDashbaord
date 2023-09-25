import {keyframes} from 'styled-components/macro';

export const pulse = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: linear;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: linear;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: linear;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: linear;
  }
  45% {
    transform: scale(1);
    animation-timing-function: linear;
  }
`

export const aura = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: .3;
  }
  to {
    opacity: .1;
    transform: scale(1);
  }
`;

export const pen = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`;