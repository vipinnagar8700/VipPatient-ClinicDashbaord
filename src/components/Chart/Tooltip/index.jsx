// styling
import styled from 'styled-components/macro';
import {light, textSizes, fonts, flex} from '@styles/vars';

export const StyledTooltip = styled.div`
  font-family: ${fonts.accent};
  font-size: ${textSizes['10']};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${light.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${flex.center}
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  
  &.multiple {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: auto;
    
    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      
      .color {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%) rotate(-45deg);
    width: 8px;
    height: 8px;
    background-color: ${light.text};
    display: ${props => props.arrow ? 'block' : 'none'};
  }
`;

const ChartTooltip = ({active, payload, tooltip, arrow = false, multi = false, ...props}) => {
    if (multi) {
        if (!active || !tooltip) return null
        for (const item of payload)
            if (item.dataKey === tooltip)
                return <StyledTooltip arrow={arrow}>{item.value}</StyledTooltip>
        return null
    } else {
        if (!active || !payload[0]) return null
        return (
            <StyledTooltip arrow={arrow}> {payload[0].value} {props.right && payload[0].dataKey}</StyledTooltip>
        )
    }
}

export default ChartTooltip;
