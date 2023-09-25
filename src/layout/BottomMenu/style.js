import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, textSizes, flex} from '@styles/vars';
import {ModalContent} from '@components/ModalWindow';

export const Container = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme('theme', {
    light: colors.blue,
    dark: '#2a2f32',
  })};
  border-radius: 4px 4px 0 0;
  padding: 10px 20px;

  button {
    font-size: ${textSizes['20']};
    color: #fff;
    transition: none;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    ${flex.center};

    &[aria-label="Home"] {
      background: #fff;
      color: ${colors.blue};
      border-radius: 8px;
    }
  }
`

export const MenuModal = styled(ModalContent)`
  padding: 36px 24px;
  ${flex.col};
  gap: 8px;
`;