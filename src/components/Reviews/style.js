import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, light, dark, flex, textSizes, breakpoints} from '@styles/vars';

const bodyBg = theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
})

export const ReviewsHeader = styled.div`
  padding: 22px;
  margin: 2px 2px 0;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight
  })};

  &.patient {
    background-color: transparent;
    ${flex.col};
    gap: 14px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  ${flex.between};

  &.main {
    ${flex.col};
    gap: 20px;
    align-items: stretch;

    ${breakpoints.mobileL} {
      .avatar {
        width: 60px;
      }
    }

    ${breakpoints.tablet} {
      flex-direction: row;
      align-items: center;

      .navigator {
        width: 240px;
      }
    }
  }

  .title {
    font-weight: 500;
    color: ${theme('theme', {
      light: light.text,
      dark: '#fff'
    })};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .info {
    ${flex.col};
    gap: 4px;

    &_subtitle {
      font-size: ${textSizes['12']};
    }

    &_rating {
      ${breakpoints.tablet} {
        font-size: ${textSizes['26']};
      }
    }

    &_name {
      color: ${colors.blue};
      font-size: ${textSizes['14']};
    }
  }
`;

export const ReviewsContent = styled.div`
  padding: 24px;
  ${flex.col};
  gap: 24px;
`;

export const ReviewMain = styled.div`
  background-color: ${bodyBg};
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 20px;
    width: 8px;
    height: 8px;
    background-color: ${bodyBg};
    transform: rotate(-45deg);
  }

  .text {
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .styled-rating {
    margin-top: 4px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 10px;
  line-height: 1;
  border-radius: 8px;
  min-height: 40px;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  transition: box-shadow var(--transition);

  &:hover {
    box-shadow: ${theme('theme', {
      light: `0 0 0 2px #A2C0D4`,
      dark: `0 0 0 2px ${colors.dark}`
    })};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }

  .icon {
    color: ${colors.gray};

    &-close {
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;
      opacity: ${props => (props.query !== '' ? 1 : 0)};
    }
  }

  input {
    font-size: ${textSizes['14']};
    width: 100%;
  }
`;

export const NavItem = styled.div`
  @media screen and (min-width: 640px) {
    .doctor-rating {
      .container {
        flex-direction: row;
        ${flex.between};

        .rating {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
      }
    }
  }

  @media screen and (min-width: 1039px) {
    .doctor-rating {
      .container {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        .rating {
          width: 100%;
          flex-direction: row;
          ${flex.between};
        }
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .doctor-rating {
      .container {
        flex-direction: row;
        ${flex.between};

        .rating {
          flex-direction: column;
          align-items: flex-start;
          width: fit-content;
        }
      }
    }
  }
`;