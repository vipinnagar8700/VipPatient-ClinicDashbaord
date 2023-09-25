import styled from 'styled-components/macro';
import {flex, fonts, textSizes} from '@styles/vars';

const Labels = styled.div`
  text-transform: uppercase;
  margin: 0 24px;
  display: flex;
  ${flex.between}
  font-family: ${fonts.accent};
  font-size: ${textSizes['10']};
`

export default Labels