import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, breakpoints, flex, light} from '@styles/vars';

export const Header = styled.div`
  margin-bottom: 20px;
  ${flex.col};
  gap: 20px;
  
  .wrapper {
    padding: 20px 24px 0;
    ${flex.col};
    gap: 20px;
    
    .navigator {
      background-color: ${theme('theme', {
        light: light.highlight,
        dark: dark.highlight
      })};
    }
  }
  
  ${breakpoints.tablet} {
    .wrapper {
      flex-direction: row;
        ${flex.between};
      
      .navigator {
        width: 250px;
      }
    }
  }
`;

export const List = styled.div`
  padding: 0 24px 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: minmax(0, 1fr);
  
  ${breakpoints.laptopL} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;