import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, textSizes, colors, fonts, light, dark, breakpoints} from '@styles/vars';

export const PaymentItem = styled.div`
  ${flex.col};
  padding: 24px;
  gap: 24px;

  h3 {
    font-family: ${fonts.body};
  }

  .main {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    .general {
      ${flex.col};
      gap: 12px;

      .timestamp {
        font-size: ${textSizes['12']};
        color: ${colors.secondary};
        font-family: ${fonts.accent};
      }
    }

    .amount {
      font-weight: 700;
      font-size: ${textSizes['14']};

      &--expense {
        color: ${colors.red};
      }

      &--income {
        color: ${colors.green};
      }
    }
  }
`;

export const Additional = styled.div`
  display: flex;
  ${flex.between};
  padding: 20px;
  border-radius: 8px;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight,
  })};

  .main {
    gap: 20px;

    &_info {
      ${flex.col};
      gap: 4px;
    }
  }
  
  .avatar {
    display: none;
  }

  button {
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg,
    })};

    &:hover, &:focus {
      background-color: ${colors.blue};
    }
  }
  
  ${breakpoints.mobileL} {
    .avatar {
        display: block;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  overflow-y: auto;
`;