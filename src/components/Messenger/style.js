import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, textSizes, flex, colors} from '@styles/vars';

const borderColor = theme('theme', {
    light: light.bodyBg,
    dark: '#4A4F54'
});

export const Container = styled.div`
  ${flex.col};
  height: 100%;

  .content {
    padding: 20px 0;
    ${flex.col};
    flex-grow: 1;
    gap: 20px;

    .separator, .group {
      margin-bottom: 20px;
    }
  }
`;

export const Header = styled.div`
  border-bottom: 2px solid ${borderColor};
  padding: 20px 24px 19px;
`;

export const Footer = styled.div`
  padding: 17px 24px 20px;
  border-top: 2px solid ${borderColor};

  .search {
    position: relative;

    input {
      width: 100%;
      padding-right: 36px;
    }

    button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: ${textSizes['14']};
      color: ${colors.blue};
      transition: .2s ease-in-out;
      will-change: transform;
      opacity: 0;

      &:hover, &:focus {
        transform: translateY(-50%) scale(1.2);
      }
      
      &.visible {
        opacity: 1;
      }
    }
  }
`;

export const Animation = styled.div`
  max-width: 80px;
  margin-top: -20px;
`;

export const List = styled.div`
  height: calc(100% - ${props => props.height}px);
  overflow-y: auto;
`;