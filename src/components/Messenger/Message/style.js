import styled from 'styled-components/macro';
import {dark, breakpoints, flex, fonts, light, textSizes} from '@styles/vars';
import theme from 'styled-theming';

export const MessageContainer = styled.div`
  margin: ${props => props.sender === 'current' ? '0 24px 0 auto' : '0 auto 0 24px'};
  ${flex.col};
  gap: 8px;
  max-width: 60%;
  width: fit-content;
  padding-bottom: 20px;

  .metadata {
    font-family: ${fonts.accent};
    font-size: ${textSizes['12']};
    text-align: ${props => props.sender === 'current' ? 'right' : 'left'};
  }

  .content {
    border-radius: 8px;
    padding: ${props => props.hasAudio ? '20px' : '10px'};
    background-color: ${theme('theme', {
      light: props => props.sender !== 'current' ? light.bodyBg : light.highlight,
      dark: props => props.sender !== 'current' ? dark.bodyBg : dark.highlight,
    })};
    gap: 10px;
    width: fit-content;
    word-break: break-word;
    overflow: hidden;
    will-change: transform;
    line-height: 1.5;
    font-size: ${textSizes['14']};

    img {
      border-radius: 4px;
    }

    .wave {
      display: none;
    }

    ${breakpoints.tablet} {
      font-size: ${textSizes['16']};

      .wave {
        display: block;
        min-width: 200px;
      }
    }
  }
`;