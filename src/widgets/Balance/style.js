import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, flex, textSizes, breakpoints} from '@styles/vars';

export const Wrapper = styled.div`
  margin-bottom: 16px;
  ${flex.col}
  gap: 10px;

  .divider {
    height: 1px;
    background-color: ${theme('theme', {
      light: '#A2C0D4',
      dark: colors.dark
    })};
  }

   ${breakpoints.mobileL} {
    flex-direction: row;
    gap: 20px;

    .divider {
      height: auto;
      width: 1px;
    }
  }
`

export const Block = styled.div`
  ${flex.col}
  gap: 6px;

  .label {
    font-size: ${textSizes['12']};
    color: ${colors.secondary};
  }

  .label, .h1 {
    line-height: 1;
  }
`

export const BalanceInfo = styled.span`
  color: ${props => colors[props.color]};
  line-height: 1;
`