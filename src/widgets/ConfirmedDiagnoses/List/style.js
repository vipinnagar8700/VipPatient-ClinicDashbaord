import styled from 'styled-components/macro';
import {flex, textSizes, fonts} from '@styles/vars';

export const List = styled.ul`
  gap: 22px;
  margin-top: 20px;
  ${flex.col}
`

export const Block = styled.div`
  display: flex;
  ${flex.between}
  margin-bottom: 7px;
  font-size: ${textSizes['14']};
`

export const Text = styled.div`
  display: flex;
  gap: 4px;
  font-family: ${fonts.accent};
  
  .num {
    font-weight: 500;
  }
  & + .label {
    text-transform: capitalize;
  }
`