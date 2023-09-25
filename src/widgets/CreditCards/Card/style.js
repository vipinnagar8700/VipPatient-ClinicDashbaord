import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, colors, textSizes, breakpoints} from '@styles/vars';

export const CardItem = styled.div`
  display: flex;
  ${flex.between};
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 24px;

  .media {
    display: none;
  }

  ${breakpoints.mobileL} {
    .media {
      width: 100px;
      height: 64px;
      padding: 15px 20px;
      border-radius: 4px;
      border: ${theme('theme', {
        light: `1px solid ${colors.light_gray}`,
        dark: `1px solid ${colors.dark}`,
      })};
      ${flex.col};
      ${flex.center};
    }

    .main {
      flex-grow: 1;
    }
  }
  
  ${breakpoints.tablet} {
    .media {
      display: none;
    }
  }
  
  ${breakpoints.laptop} {
    .media {
        display: flex;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

export const TextButton = styled.button`
  font-size: ${textSizes['12']};
  color: ${colors.blue};
  transition: opacity var(--transition);

  &:hover {
    opacity: .7;
  }
`