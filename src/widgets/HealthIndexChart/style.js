import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, textSizes, breakpoints, flex} from '@styles/vars';

export const HealthIndexChartWrapper = styled.div`
  height: 100%;
  ${flex.col};
  justify-content: space-between;

  .total {
    display: flex;
    gap: 40px;
    margin: -4px 24px 0;
    position: relative;

    &_block {
      font-size: ${textSizes['12']};

      .counter {
        position: absolute;
        top: 0;
        left: 0;
      }

      .spacer {
        opacity: 0;
      }

      .hidden {
        display: none;
      }

      &--cured .h1 {
        color: ${colors.azure};
      }

      &--sick {
        position: relative;

        .h1 {
          color: ${colors.peach};
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: ${theme('theme', {
            light: '#A2C0D4',
            dark: '#383D40',
          })};
          position: absolute;
          top: 0;
          left: -20px;
        }
      }
    }

    ${breakpoints.tablet} {
      .total_block {
        font-size: ${textSizes['14']};

        .hidden {
          display: inline;
        }
      }
    }

    ${breakpoints.laptop} {
      .total_block {
        font-size: ${textSizes['16']};
      }
    }
  }
`;