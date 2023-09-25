import styled from 'styled-components/macro';
import {textSizes, fonts} from '@styles/vars';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${props => props.overlay && `
    position: absolute;
    bottom: 22px;
    left: 24px
  `}
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${fonts.accent};
  font-size: ${textSizes['10']};
`