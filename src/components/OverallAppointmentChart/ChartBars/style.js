import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light, flex, fonts, textSizes} from '@styles/vars';
import mask from '@assets/bar_mask.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  margin: 20px -24px 0;
  padding: 0 24px;
  user-select: none;
`;

export const Bar = styled.div`
  ${flex.col};
  align-items: center;
  gap: 20px;
  font-family: ${fonts.accent};
  font-size: ${textSizes['10']};
  text-transform: uppercase;
  height: fit-content;
  
  ${props => props.masked && `
    &:first-of-type {
        align-items: flex-start;
    }
    
    &:last-of-type {
        align-items: flex-end;
    }
    
    .track {
        mask: url(${mask}) no-repeat center center / contain;
     }
  `}
  
  .track {
    background-color: ${theme('theme', {
      light: props => props.masked ? light.bodyBg : light.highlight,
      dark: dark.highlight,
    })};
    height: 228px;
    width: ${props => props.masked ? 4 : 8}px;
    border-radius: 4px;
    display: flex;
    flex-direction: column-reverse;
    gap: ${props => props.masked ? 0 : 8}px;
  }
`;