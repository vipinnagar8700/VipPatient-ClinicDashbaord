import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {breakpoints, colors, dark, flex, light, textSizes} from '@styles/vars';

export const HeaderContainer = styled.div`
  padding: 20px 24px;
  border-bottom: 2px solid ${theme('theme', {
    light: light.bodyBg,
    dark: '#4A4F54'
  })};
  display: flex;
  ${flex.between};
  gap: 16px;

  .main {
    display: flex;
    align-items: center;
    gap: 20px;

    .title {
      font-size: ${textSizes['16']};
    }

    .avatar {
      display: none;

      ${breakpoints.mobileL} {
        display: block;
      }
    }
  }

  .actions {
    display: flex;
    gap: 20px;

    .btn-action {
      background-color: ${theme('theme', {
        light: light.highlight,
        dark: dark.highlight
      })};

      &:hover, &:focus {
        background-color: ${colors.blue};
      }
    }
  }

  ${breakpoints.tablet} {
    .main .title {
      font-size: ${textSizes['20']};
    }
  }
`;