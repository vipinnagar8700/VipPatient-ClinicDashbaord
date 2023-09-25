import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light, colors, textSizes, flex} from '@styles/vars';

const color = theme('theme', {
    light: light.widgetBg,
    dark: dark.bodyBg
})

export const Badge = styled.span`
  display: block;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: relative;
  background-color: ${props => colors[props.color]};
  border: 2px solid ${color};
  z-index: 2;
`

export const BasicBadge = styled(Badge)`
  width: 8px;
  height: 8px;
  border: none;
`

export const LegendBadge = styled(Badge)`
  background-color: ${color};
  border: 3.5px solid ${props => {
    let key = props.color;
    return colors[key]
  }};
`

export const QtyBadge = styled.span`
  ${flex.col};
  ${flex.center};
  height: 20px;
  border-radius: 16px;
  background-color: ${colors.yellow};
  font-size: ${textSizes['10']};
  padding: 0 5px;
  font-weight: 400;
  color: #2D353B;
  width: fit-content;
  min-width: 22px;
  position: relative;
  z-index: 2;
`