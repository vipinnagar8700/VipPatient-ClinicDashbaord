import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, light, dark, textSizes, breakpoints, colors} from '@styles/vars';

export const SettingsHeader = styled.div`
  ${flex.col};
  margin-bottom: 24px;
  gap: 24px;

  .wrapper {
    padding: 24px 24px 0;

    .title {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }
  }

  ${breakpoints.landscapeS} {
    .wrapper {
      display: flex;
      ${flex.between};

      .title {
        margin-bottom: 0;
      }

      .nav {
        max-width: 300px;
      }
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  margin-bottom: 24px;

  ${breakpoints.landscapeS} {
    grid-template-columns: 1fr 1fr;
  }
`

export const StyledForm = styled.form`
  .dropzone {
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: 120px;
    margin: 0 auto 24px;
    background-color: ${theme('theme', {
      light: light.highlight,
      dark: dark.highlight
    })};
    ${flex.col};
    ${flex.center};
    font-size: ${textSizes['18']};
    cursor: pointer;
    border: 2px dashed transparent;
    transition: border-color var(--transition);

    .icon {
      opacity: 0.5;
    }

    &:hover, &:focus, &.active {
      border-color: ${theme('theme', {
        light: colors.light_gray,
        dark: colors.dark
      })};
    }

    .hint {
      display: none;
    }
  }

  ${breakpoints.tablet} {
    button[type='submit'] {
      max-width: 200px;
      margin: 0 auto;
    }

    .dropzone {
      width: 200px;
    }
  }

  ${breakpoints.laptopL} {
    .wrapper {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: 350px minmax(0, calc(100% - 350px));
    }

    button[type='submit'] {
      margin: 0 0 0 auto;
    }

    .dropzone {
      width: 350px;
      padding: 20px;
      margin-bottom: 0;

      .icon {
        font-size: ${textSizes['32']};
      }

      .hint {
        display: block;
        margin-top: 20px;
        font-size: ${textSizes['14']};
        opacity: 0.5;
        text-align: center;
      }
    }
  }
`;