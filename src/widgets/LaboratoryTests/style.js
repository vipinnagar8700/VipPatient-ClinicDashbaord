import styled from 'styled-components/macro';
import {flex} from '@styles/vars';

export const Wrapper = styled.div`
  display: flex;
  ${flex.between}
  gap: 12px;
`

export const Main = styled.div`
  gap: 6px;
  display: flex;
  align-items: flex-end;
  .h3 {
    max-width: 290px;
  }
`

export const Test = styled.div`
  ${flex.col};
  gap: 6px;
`;

export const Footer = styled(Wrapper)`
  margin-top: 16px;
  gap: 0;
  
  .wrapper {
    display: flex;
    gap: 20px;
  }
`