import styled from 'styled-components/macro';
import {colors, flex} from '@styles/vars';

import dotted from '@assets/dotted.svg';

export const MapChartWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .mask {
    mask-image: url(${dotted});
    mask-size: 30px 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    svg {
      height: 100%;
      width: auto;
    }
  }

  .total {
    ${flex.col};
    position: absolute;
    left: 0;
    bottom: 0;

    .num {
      color: ${colors.pink};
    }
  }

  path[aria-checked='true'] {
    fill: ${colors.pink};
    transition: fill var(--transition);
  }
`;