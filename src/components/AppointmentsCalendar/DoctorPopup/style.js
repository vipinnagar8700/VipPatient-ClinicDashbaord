import styled from 'styled-components/macro';
import {flex, breakpoints, light, colors, textSizes, fonts} from '@styles/vars'
import theme from 'styled-theming';
import dashed from '@assets/dashed.svg'
import dashed_dark from '@assets/dashed_dark.svg'

const bg = theme('theme', {
    light: '#fff',
    dark: '#2a2f32'
});

export const Container = styled.div`
  position: absolute;
  background: ${bg};
  box-shadow: 0 1px 16px rgba(20, 46, 110, 0.4);
  border-radius: 8px;
  padding: 20px;
  top: calc(50% + ${props => props.top}px - 40px);
  left: 50%;
  transform: translate(-50%, calc(-50% - ${props => props.top / 2}px));
  width: 260px;
  transition: opacity var(--transition);
  opacity: 0;
  visibility: hidden;
  margin-left: 32px;
  
  ${breakpoints.tablet} {
    margin-left: 42px;
    top: calc(50% + ${props => props.top}px - 60px);
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  .header {
    display: flex;
    ${flex.between};
    gap: 20px;

    .user .user-option {
      display: flex;
      align-items: center;
      gap: 20px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;
      }
    }
  }

  .main {
    height: 80px;
    background: ${theme('theme', {
        light: `url(${dashed})`,
        dark: `url(${dashed_dark})`
    })};
    position: relative;
    padding-top: 25px;
    ${flex.col};
    gap: 6px;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 20px;
      background: ${theme('theme', {
          light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 100%)',
            dark: 'linear-gradient(180deg, rgba(42, 47, 50, 0.5) 0%, #2a2f32 100%)'
      })};
    }

    &:before {
      top: 0;
      transform: rotate(180deg);
    }

    &:after {
      bottom: 0;
    }

    .track {
      height: 8px;
      position: relative;
      border-radius: 4px;
      background-color: ${theme('theme', {
        light: light.bodyBg,
        dark: light.text
      })};

      span {
        position: absolute;
        height: 8px;
        border-radius: 4px;
        background-color: ${colors.blue};
        top: 0;

        &:first-of-type {
          width: 20%;
          left: 0;
        }

        &:last-of-type {
          width: 15%;
          right: 10%;
        }
      }
    }

    .hours {
      display: flex;
      ${flex.between};
      margin: 0 -10px;

      span {
        width: 16px;
        height: 20px;
        border-radius: 8px;
        background: ${bg};
        font-size: ${textSizes['10']};
        font-family: ${fonts.accent};
        display: flex;
        ${flex.center};
      }
    }
  }

  ${breakpoints.tablet} {
    width: 374px;

    .header {
      .user .user-option span {
        max-width: 200px;
      }
    }
  }
`;