import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light, flex, colors, breakpoints} from '@styles/vars';
import {HeaderWrapper} from '@components/Widget/style';

export const NavWrapper = styled(HeaderWrapper)`
  ${breakpoints.tablet} {
    flex-direction: row;
    ${flex.between};

    .gender {
      max-width: 300px;
    }
  }
`;

export const LetterNav = styled.ul`
  display: flex;
  margin: 0 2px;
  gap: 1px;
  height: 80px;
  align-items: center;
  border-radius: 8px;
  padding: 0 18px;
  overflow-x: auto;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
`

export const LetterNavWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    background: ${theme('theme', {
      light: light.shadow,
      dark: dark.shadowDarker
    })};
    height: 100%;
    width: 24px;
    z-index: 1;
    filter: blur(1px);
    display: block;
  }

  &:before {
    left: 2px;
  }

  &:after {
    right: 2px;
    transform: scaleX(-1);
  }
`

export const LetterNavItem = styled.a`
  display: flex;
  ${flex.center};
  width: 44px;
  height: 40px;
  text-transform: uppercase;
  color: ${colors.blue};
  border-radius: 8px;
  background: ${theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
  })};
  transition: color var(--transition), background var(--transition);

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }

  &:not(&.active) {
    pointer-events: none;
    background-color: transparent;
    color: ${theme('theme', {
      light: light.text,
      dark: dark.text
    })};
  }
`
