import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, flex, light, textSizes} from '@styles/vars';

export const Wrapper = styled.div`
  display: flex;
  ${flex.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${textSizes['14']};
  border-radius: 8px;
  background-color: ${theme('theme', {light: light.bodyBg, dark: dark.bodyBg})};

  .label {
    user-select: none;
  }

  button {
    transition: opacity var(--transition);

    &:hover, &:focus {
      opacity: .8;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0;
    }
  }
`