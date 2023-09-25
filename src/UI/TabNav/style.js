import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, textSizes, light, dark, colors} from '@styles/vars';

const current = theme('theme', {
    light: light.bodyBg,
    dark: light.text
})

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: ${textSizes['14']};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${theme('theme', {
    light: `
        color: ${colors.blue};
        background-color: ${light.highlight};
    `,
    dark: `
        color: ${colors.secondary};
        background-color: ${dark.highlight};
    `
  })};
  display: flex;
  ${flex.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${current};
  }
`

export const Item = styled.div`
  &.active .nav-link {
    background-color: ${current};
  };
`