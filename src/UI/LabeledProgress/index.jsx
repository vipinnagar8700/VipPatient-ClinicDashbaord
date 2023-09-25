// styling
import styled from 'styled-components/macro';

// components
import Progress from '@ui/Progress';
import {flex, textSizes} from '@styles/vars';

const ListItem = styled.li`
  ${flex.col}
  gap: 12px;
  align-items: center;
  .label {
    font-size: ${textSizes['10']};
    text-transform: uppercase;
  }
  
  .progressbar {
    height: ${props => props.barHeight}px;
    width: 6px;
    .MuiLinearProgress-bar {
      transform: translateY(${props => 100 - props.value}%) !important;
    }
  }
`

const LabeledProgress = ({label, value, barHeight = 75, color}) => {
    return (
        <ListItem value={value} barHeight={barHeight}>
            <Progress value={value} color={color} />
            <span className="label">{label}</span>
        </ListItem>
    );
}

export default LabeledProgress;