import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {textSizes, colors, light} from '@styles/vars';

export const ControlWrapper = styled.div`
  &:not(:last-of-type) {
    padding-right: 21px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 100%;
      background-color: ${theme('theme', {
        light: '#A2C0D4',
        dark: light.text
      })};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${textSizes['14']};
  line-height: 1;
  transition: none;
  
  &:hover, &:focus {
    .icon {
      color: ${colors.blue};
    }
  }

  .icon {
    transition: color var(--transition);
    font-size: ${textSizes['16']};
    color: ${colors.gray};
    &-font {
        font-size: ${textSizes['14']};
    }
  }
  
  &.disabled {
    pointer-events: none;
  }
`