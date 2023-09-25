import styled from 'styled-components/macro';
import {colors, breakpoints, flex, textSizes, fonts} from '@styles/vars';

const navItem = `
    display: inline-flex;
    align-items: center;
    text-transform: capitalize;
    font-size: ${textSizes['16']};
    gap: 18px;
    font-family: ${fonts.body};
    .icon {
        color: ${colors.gray};
        transition: color var(--transition);
    }
    &:hover, &:focus,
    &.active {
        .icon {
            color: ${colors.blue};
        }
    }
`

export const Header = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.tablet} {
    button {
      display: none;
    }
  }
`

export const List = styled.ul`
  ${flex.col}
  gap: 24px;
  padding-left: 6px;

  ${breakpoints.tablet} {
    height: 100%;

    .pin-down {
      margin-top: auto;
    }
  }
`

export const MainItem = styled.div`
  ${navItem};
  font-size: large;

  button {
    ${navItem};
    font-size: large;
    transition: none;
  }

  ${breakpoints.tablet} {
    font-size: unset;

    button {
      font-size: unset;
    }
  }
`

export const LinksList = styled.ul`
  ${flex.col}
  gap: 16px;
  margin: 16px 0 0 36px;
  font-size: ${textSizes['16']};

  a {
    transition: color var(--transition);

    &:hover, &:focus {
      color: ${colors.blue};
    }
  }

  ${breakpoints.tablet} {
    font-size: ${textSizes['14']};
  }
`