import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {fonts, textSizes, light, dark} from '@styles/vars';

export const AddButton = styled.button`
  font-family: ${fonts.accent};
  font-size: ${textSizes['24']};
  font-weight: 500;
  color: ${theme('theme', {
    light: light.text,
    dark: dark.text
  })};

  &.disabled {
    pointer-events: none;
    opacity: .5;
  }
`;