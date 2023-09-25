import styled from 'styled-components/macro';
import theme from 'styled-theming'
import {colors, effects, flex, textSizes} from '@styles/vars';

export const ListItem = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  .info {
    ${flex.col};
    gap: 4px;
    flex-grow: 1;

    .name {
      font-size: ${textSizes['14']};
    }

    .title {
      font-weight: 500;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  ${flex.between};
  padding-top: 18px;
  border-top: ${theme('theme', {
      light: effects.dashedLight,
        dark: effects.dashedDark,
  })};

  .swiper {
    width: 50px;
  }
  
  .details {
    display: flex;
    align-items: center;
    gap: 30px;

    &_item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: ${props => props.variant === 'patient' && textSizes['14']};
      font-weight: ${props => props.variant !== 'patient' && 500};

      .icon {
        color: ${colors.gray};
        font-size: ${textSizes['16']};

        &-euro {
          font-size: ${textSizes['14']};
        }
      }
    }
  }
`;