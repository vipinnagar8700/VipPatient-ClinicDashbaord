import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, light, dark, colors, textSizes, effects, breakpoints} from '@styles/vars';

const bg = theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
})

const bar = theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
})

const borderShadow = theme('theme', {
    light: light.shadow,
    dark: dark.shadow
})

const navBg = theme('theme', {
    light: light.highlight,
    dark: dark.highlight
})

export const Container = styled.div`
  box-shadow: ${effects.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${bg};
  overflow: hidden;
  ${flex.col};
  min-height: 182px;
  flex-grow: 1;
  ${props => props.mobile && `height: ${props.mobile}px`};
  // iOS fix
  transform: translate3d(0, 0, 0);
  
  &.shadow {
    &:before, &:after {
      display: block;
    }
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    background: ${borderShadow};
    height: 100%;
    width: 24px;
    z-index: 3;
    filter: blur(1px);
    display: none;
  }

  &:before {
    left: -2px;
    transform: ${props => props.dir === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)'};
  }

  &:after {
    right: -2px;
    transform: rotate(180deg) ${props => props.dir === 'rtl' ? 'scaleX(-1)' : 'scaleX(1)'};
  }
  
  ${breakpoints.tablet} {
    height: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  ${props => props.flex === 'column' ? `flex-direction: column;` : flex.between};
  padding: ${props => !props.sidePadding ? '24px 24px 20px' : '24px 0 20px'};
  flex-wrap: wrap;
  gap: 20px 10px;
  position: relative;
  z-index: 10;

  .title {
    margin: ${props => props.sidePadding ? '0 24px' : '0'};
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &.nav .title {
    max-width: calc(100% - 60px);
    display: block;
  }
`

export const HeaderWrapper = styled.div`
  ${flex.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${navBg};
  }
`

export const Body = styled.div`
  padding: ${props => !props.sidePadding ? '0 24px 24px' : '0 0 24px'};
  height: ${props => props.height ? `calc(100% - ${props.height}px)` : '100%'};
  overflow-y: auto;
  overflow-x: hidden;
  ${flex.col};
  flex-grow: 1;
`

export const Nav = styled.div`
  font-size: ${textSizes['14']};
  display: flex;
  align-items: center;
  color: ${colors.gray};
  margin-right: -9px;

  button {
    opacity: 0.5;
    transition: opacity var(--transition);
    padding: 0 9px;

    &:hover, &:focus {
      opacity: 1;
    }
    
    &.disabled {
      visibility: hidden;
      pointer-events: none;
    }
  }
`

export const Navbar = styled.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${bar};
  flex-grow: 1;
`

export const Divider = styled.div`
  height: 2px;
  background-color: ${bar};
  width: 100%;
`