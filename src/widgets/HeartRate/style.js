import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, flex, fonts, light, textSizes} from '@styles/vars';
import {pulse} from '@styles/keyframes';
import {rgba} from 'polished';

const gridColor = theme('theme', {
    light: rgba(colors.light_gray, .5),
    dark: rgba(colors.dark, .5)
})

export const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.absolute_red};
  margin: 24px 24px 0;
  font-family: ${fonts.accent};

  .h1 {
    line-height: .9;
    margin-right: 8px;
    flex-grow: unset;
  }

  .icon {
    font-size: ${textSizes['20']};
    margin-right: 10px;
    animation: ${pulse} 3s linear infinite;
    transition: all .5s;
    will-change: transform;
  }

  .text {
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 2px;
    font-size: ${textSizes['10']};
    color: ${theme('theme', {
      light: light.text,
      dark: dark.text
    })};
  }
`

export const Main = styled.div`
  height: 100%;
  background-size: 20px 20px;
  background-image: linear-gradient(to right, ${gridColor} 1px, transparent 1px),
  linear-gradient(to bottom, ${gridColor} 1px, transparent 1px);
  position: relative;
  ${flex.col};
  justify-content: center;
  margin-top: -4px;

  &:before, &:after {
    content: '';
    display: block;
    height: 80px;
    position: absolute;
    width: 100%;;
    background: ${theme('theme', {
      light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
      dark: 'linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)'
    })};
    left: 0;
    z-index: 300;
    opacity: .8;
  }

  &:before {
    top: 0;
    transform: scaleY(-1);
  }

  &:after {
    bottom: 0;
  }
`