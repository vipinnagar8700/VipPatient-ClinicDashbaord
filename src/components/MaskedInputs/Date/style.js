import styled from 'styled-components/macro';
import {colors} from '@styles/vars';
import theme from 'styled-theming';

export const DateInputWrapper = styled.div`
  position: relative;
  cursor: pointer;

  input {
    width: 100%;

    &::placeholder {
      text-transform: uppercase;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 14px;
    color: ${theme('theme', {
      light: '#A2C0D4',
      dark: colors.gray,
    })};
    transition: color var(--transition);

    &:hover, &:focus {
      color: ${colors.blue};
    }
  }
`;