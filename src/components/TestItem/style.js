import styled from 'styled-components/macro';
import {colors, dark, breakpoints, effects, flex, fonts, light, textSizes} from '@styles/vars';
import theme from 'styled-theming';

export const ListItem = styled.li`
  ${flex.col};
  padding: 20px;
  gap: 20px;
  border-radius: 8px;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight
  })};
  transform-origin: center center;
  will-change: transform;
`;

export const Header = styled.div`
  display: flex;
  ${flex.between};
  border-bottom: ${theme('theme', {
    light: effects.dashedLight,
    dark: effects.dashedDark
  })};
  padding-bottom: 20px;
  gap: 20px;
`;

export const Main = styled.div`
  ${flex.col};
  gap: 20px;

  .info {
    ${flex.col};
    gap: 10px;

    .title {
      font-weight: 500;
    }

    .timestamp {
      font-size: ${textSizes['12']};
      font-family: ${fonts.accent};
    }
  }
  
  ${breakpoints.tablet} {
    flex-direction: row;
    ${flex.between};
  }
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 20px;
  background-color: ${theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
  })};
  color: ${theme('theme', {
    light: colors.blue,
    dark: '#fff'
  })};
  font-size: ${textSizes['14']};
  font-family: ${fonts.accent};
  padding: 0 25px;
  transition: background-color var(--transition), color var(--transition);

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }
`;