import styled from 'styled-components/macro';
import {textSizes, colors} from '@styles/vars';

export const Footer = styled.div`
  padding: 24px;

  .search {
    position: relative;

    input {
      padding-right: 36px;
      width: 100%;
    }

    button {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      line-height: 1;
      font-size: ${textSizes['12']};
      color: ${colors.error};
      transition: opacity var(--transition);
      opacity: 0;
      visibility: hidden;

      &:hover, &:focus {
        opacity: .5;
      }

      &.visible {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;