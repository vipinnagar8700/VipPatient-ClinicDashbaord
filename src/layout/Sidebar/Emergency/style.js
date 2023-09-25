import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, fonts, textSizes, breakpoints, colors} from '@styles/vars';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;

  ${breakpoints.desktop} {
    margin-bottom: 30px;
  }
`

export const ButtonWrapper = styled.div`
  position: relative;

  .indicator {
    position: absolute;
    top: -6px;
    right: -6px;
  }

  a.square {
    color: #fff;
    font-size: ${textSizes['20']};
    background-color: ${light.text};

    &:hover, &:focus {
      background-color: ${colors.blue};
      color: #fff;
    }
  }
`

export const Label = styled.h3`
  color: ${theme('theme', {
    light: light.text,
    dark: '#fff'
  })};
  font: ${fonts.accent};
  pointer-events: none;
`