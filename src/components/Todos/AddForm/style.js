import styled from 'styled-components/macro';
import {colors, dark, flex, light} from '@styles/vars';
import theme from 'styled-theming';

const border = theme('theme', {
  light: `1px solid ${colors.light_gray} !important`,
  dark: `1px solid ${colors.dark} !important`,
})

export const Form = styled.form`
  ${flex.col};
  padding: 20px 22px;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight,
  })};
  border-radius: 8px;
  margin: ${props => props.variant === 'list' ? '24px' : '0 0 20px 0'};
  border: ${border};
`

export const InputWrapper = styled.div`
  ${flex.col};
  gap: 10px;
  margin-bottom: 20px;
  
  .field, .Select__control {
    border: ${border};
  }
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;