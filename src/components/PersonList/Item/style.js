import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, breakpoints, flex, light, textSizes, fonts} from '@styles/vars';

export const Block = styled.div`
  display: flex;
  gap: 20px;

  .main {
    ${flex.col}
    justify-content: space-between;

    .name {
      font-weight: 500;
    }

    .age {
      font-size: ${textSizes['14']};
    }
  }

  .wrapper {
    flex-grow: 1;
  }

  @media screen and (min-width: 666.98px) {
    flex-grow: 1;
    &.actions {
      justify-content: flex-end;
    }

    .wrapper {
      flex-grow: unset;
    }
  }
`;

export const Wrapper = styled.div`
  ${flex.col}
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight
  })};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${theme('theme', {
      light: light.bodyBg,
      dark: dark.bodyBg
    })};
  }
  
  .overview {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main {
    width: calc(100% - 40px);

    .department {
      font-size: ${textSizes['14']};
      margin-top: 2px;
    }
  }

  .rating, .booked {
    ${flex.col};
    gap: 7px;
    font-size: ${textSizes['12']};
    font-family: ${fonts.accent};
  }
  
  .styled-rating {
    margin-top: -5px;
  }
  
  .contacts {
    display: flex;
    gap: 20px;
  }

  button {
    transition: background-color var(--transition), color var(--transition);

    &.booking {
      font-size: ${textSizes['14']};
      font-family: ${fonts.accent};
      border-radius: 20px;
      padding: 12px 16px;
      color: ${theme('theme', {
        light: colors.blue,
        dark: '#fff'
      })};
      
      &:hover, &:focus {
        color: #fff;
      }
    }
  }

  button:not(.reminder) {
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg
    })};

    &:hover, &:focus {
      background-color: ${colors.blue};
    }
  }

  @media screen and (min-width: 666.98px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    button.reminder {
      order: 3;
      width: 100%;
    }
    
    &.doctor, &.staff {
      justify-content: space-between;
      ${Block} {
        width: 100%;
      }
    }
  }
  
  ${breakpoints.tablet} {
    &.doctor .avatar {
      width: 60px;
    }
  }

  ${breakpoints.laptop} {
    align-items: center;
    gap: 20px;
    button.reminder {
      order: unset;
      width: fit-content;
    }

    &.doctor, &.staff {
      justify-content: space-between;
      gap: 40px;
      ${Block} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${Block} {
      &.actions {
        flex-grow: unset;
      }
    }
  }
  
  ${breakpoints.desktop} {
    .booked {
      width: 275px;
    }
  }
`;