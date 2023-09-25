import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {effects, flex} from '@styles/vars';

export const List = styled.div`
  ${flex.col};
  gap: 20px;
  height: 100%;
  overflow-y: auto;
  padding: 0 24px;
`;

export const ListItem = styled.div`
  padding-bottom: 20px;
  &:not(:last-of-type) {
    border-bottom: ${theme('theme', {
      light: effects.dashedLight,
      dark: effects.dashedDark,
    })};
  }
  direction: ltr;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;

  ${flex.between}
  .h3 {
    max-width: 280px;
    margin-top: 8px;
    text-align: left;
  }
`

export const Footer = styled.div`
  gap: 20px;
  display: flex;
  margin-top: 16px;
`