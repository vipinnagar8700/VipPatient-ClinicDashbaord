import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, dark, textSizes, fonts, breakpoints} from '@styles/vars';

export const Total = styled.div`
  margin: 0 2px 20px;
  min-height: 40px;
  padding: 10px 22px;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.highlight,
  })};
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: ${textSizes['12']};
  gap: 14px;

  .highlight {
    font-family: ${fonts.accent};
    font-size: ${textSizes['14']};
    font-weight: 500;
  }

  ${breakpoints.tablet} {
    font-size: ${textSizes['14']};
    min-height: 60px;

    .highlight {
      font-size: ${textSizes['20']};
    }
  }

  ${breakpoints.laptopL} {
    .highlight {
      font-size: ${textSizes['24']};
    }
  }
`;

export const List = styled.ul`
  margin: 0 24px;
  display: flex;
  justify-content: space-between;
`;