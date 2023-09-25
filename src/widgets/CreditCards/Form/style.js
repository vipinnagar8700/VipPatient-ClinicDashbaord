import styled from 'styled-components/macro';
import {light, effects, textSizes, dark, breakpoints, flex, colors, fonts} from '@styles/vars';
import theme from 'styled-theming';

export const Container = styled.div`
  margin: 0 2px 24px;
  padding: 24px;
  background-color: ${theme('theme', {
    light: light.text,
    dark: dark.highlight,
  })};
  box-shadow: ${effects.widgetShadow};
  border-radius: 10px;
  will-change: transform;

  ${breakpoints.mobileL} {
    margin: 0 24px 24px;
  }

  label {
    font-size: ${textSizes['14']};
    color: #D8D8D8;
  }

  input:not([id="title"]) {
    border-radius: 8px;
    min-height: 40px;
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg
    })};
    padding: 0 10px;
    text-align: center;
    border: 1px solid transparent;
    color: #fff;
  }

  .header_wrapper {
    display: flex;
    ${flex.between};
    margin-bottom: 20px;
    width: 100%;

    &-btns {
      display: flex;
      gap: 24px;
      line-height: 1;
      font-size: ${textSizes['12']};
      font-family: ${fonts.accent};

      button {
        text-transform: uppercase;
        font-weight: 500;

        &[type="submit"] {
          color: ${colors.green};
        }

        &[type="reset"] {
          color: ${colors.error};
        }
      }
    }
  }

  .inputs_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .block {
      display: flex;
      gap: 20px;
      align-items: center;

      &--number {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        input {
          width: 100%;;
        }
      }

      input {
        &#expiration {
          max-width: 90px;
        }

        &#cvv {
          max-width: 58px;
        }
      }
    }
  }
`

export const Title = styled.div`
  color: ${light.widgetBg};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 160px;
  
  input {
    width: 100%;
  }

  .icon {
    font-size: ${textSizes['14']};
    cursor: pointer;
  }
`