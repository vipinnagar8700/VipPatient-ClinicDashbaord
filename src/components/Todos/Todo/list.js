import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, effects, flex, fonts, light, textSizes, breakpoints} from '@styles/vars';

export const Label = styled.span`
  display: none;
  align-items: center;
  line-height: ${textSizes['10']};
  gap: 6px;
  font-size: ${textSizes['10']};
  font-family: ${fonts.accent};
  text-transform: uppercase;

  .text {
    opacity: 0;
    transition: opacity var(--transition);
  }

  ${breakpoints.mobileL} {
    display: flex;
  }

  ${breakpoints.tablet} {
    .text {
      display: none;
    }
  }

  ${breakpoints.laptop} {
    .text {
      display: inline;
    }
  }
`

export const ListItemContainer = styled.div`
  padding: 20px 22px;
  position: relative;
  cursor: grab;

  * {
    user-select: none !important;
  }

  input {
    cursor: grab;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    left: 24px;
    bottom: 0;
    width: calc(100% - 48px);
    border-bottom: ${theme('theme', {
      light: effects.dashedLight,
      dark: effects.dashedDark
    })};
  }

  &:after {
    display: block;
    border-radius: 8px;
    height: 100%;
    top: -1px;
    left: 0;
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: light.text
    })};
    box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
    z-index: 1;
    opacity: 0;
    transition: opacity var(--transition);
    border-bottom: 2px ${props => colors[props.color]} solid;
  }

  .dots {
    color: ${theme('theme', {
      light: light.text,
      dark: dark.text
    })};
    opacity: 0;
    transition: opacity var(--transition);
  }

  &:hover {
    &:after,
    ${Label} .text,
    .dots {
      opacity: 1;
    }

    .checkbox label {
      background-color: ${theme('theme', {
        dark: dark.highlight
      })};
    }
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 12px;
`

export const Main = styled.div`
  ${flex.col};
  gap: 10px;
  flex-grow: 1;
`

export const Secondary = styled.div`
  ${flex.col};
  justify-content: flex-end;
  align-items: flex-end;
`

