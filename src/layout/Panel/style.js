import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, breakpoints, effects, flex, fonts, light, textSizes} from '@styles/vars';

export const Search = styled.form`
  position: relative;
  flex-grow: 1;

  ${breakpoints.tablet} {
    margin-left: 26px;
    max-width: 540px;
  }

  ${breakpoints.laptopL} {
    margin-left: 0;
    width: 100%;
  }
`

export const Label = styled.label`
  color: ${colors.gray};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 10px 10px 10px 50px;
  font-size: ${textSizes['14']};
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.widgetBg
  })};
  transition: box-shadow var(--transition);

  &:hover {
    box-shadow: ${theme('theme', {
      light: `0 0 0 2px #A2C0D4`,
      dark: `0 0 0 2px ${colors.dark}`
    })};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-grow: 1;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  .info {
    ${flex.col}
    margin: 0 20px 0 0;
    position: relative;

    .position {
      font-family: ${fonts.accent};
      font-size: ${textSizes['10']};
      text-transform: uppercase;
    }
  }

  .trigger {
    color: ${theme('theme', {
      light: '#BBCDD9',
      dark: colors.gray
    })};
  }

  ${breakpoints.laptopL} {
    margin-right: 20px;
  }

  ${breakpoints.desktop} {
    margin-right: 0;
  }
`

export const Menu = styled.div`
  position: absolute;
  bottom: -100px;
  padding: 20px;
  gap: 16px;
  border-radius: 8px;
  font-size: ${textSizes['14']};
  ${flex.col}
  box-shadow: ${effects.widgetShadow};
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  min-width: 160px;
  width: max-content;
  background-color: ${theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
  })};

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    i {
      transition: color var(--transition);
      font-size: ${textSizes['16']};
    }

    &:hover, &:focus {
      i {
        color: ${theme('theme', {
          light: colors.blue,
          dark: '#fff'
        })};
      }
    }
  }
`

export const Header = styled.header`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  transition: top .5s ease-in-out;
  gap: 16px;

  &.hidden {
    top: -200px;
  }

  &.sticky {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    top: 0;
  }

  button.square {
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg
    })};

    &:hover, &:focus {
      background-color: ${colors.blue};
    }
  }

  ${breakpoints.tablet} {
    padding: 20px 30px;
    height: fit-content;
  }

  ${breakpoints.laptopL} {
    padding: 0;
    position: static;
    box-shadow: none !important;
  }

  ${breakpoints.desktop} {
    .logo-wrapper {
      width: 240px;
    }

    ${Search} {
      margin-left: 0;
    }
  }
`