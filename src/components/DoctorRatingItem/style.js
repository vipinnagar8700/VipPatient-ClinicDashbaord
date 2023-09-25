import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {effects, colors, light, flex, breakpoints} from '@styles/vars';

const hover = theme('theme', {
    light: colors.light_gray,
    dark: light.text
})

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`

export const Content = styled.div`
  border-bottom: ${theme('theme', {
    light: effects.dashedLight,
    dark: effects.dashedDark
  })};
  margin: 0 22px;
  padding: 20px 0;
  transition: border-color var(--transition);
  ${flex.col};
  
  ${breakpoints.laptop} {
    ${flex.between};
    flex-direction: row;

    ${Main} {
      margin-bottom: 0;
    }
  }
`

export const Rating = styled.div`
  display: flex;
  ${flex.between}
  line-height: 1;

  .block {
    display: flex;
    gap: 8px;

    .num {
      font-weight: 500;
    }
  }

  ${breakpoints.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

export const Wrapper = styled.div`
  margin: 2px;
  gap: 14px 20px;
  font-size: 0.875rem;
  line-height: 1.4;
  flex-wrap: wrap;
  border-radius: 8px;
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover, &.current {
    background-color: ${hover};

    & > div {
      border-color: transparent;
    }
  }

  &:last-of-type {
    & > div {
      border-bottom: none;
    }
  }

  ${breakpoints.tablet} {
    ${props => props.responsive && `
        ${Content} {
            display: flex;
            ${flex.between};
    
            ${Main} {
                margin-bottom: 0;
            }
        }
        
        ${Rating} {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
        }
    `}
  }
`