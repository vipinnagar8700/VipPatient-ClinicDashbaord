// styling
import styled from 'styled-components/macro';
import {flex, textSizes} from '@styles/vars';
import {numFormatter} from '@utils/numbers';
import PropTypes from 'prop-types';
import CustomTooltip from '@ui/CustomTooltip';

const Label = styled.div`
  ${flex.col};
  ${flex.center};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${textSizes['14']};
  user-select: none;

  span {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    will-change: transform;
    transition: transform .5s ease-in-out, opacity .5s ease-in-out;
    visibility: hidden;

    &.visible {
      position: relative;
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }
  }
`;

const ChartLabel = ({periods, values, index}) => {
    return (
        <CustomTooltip title={`Per ${periods[index]}`} placement="top">
            <Label>
                {
                    values.map((value, i) => {
                        const isVisible = i === index;
                        return (
                            <span key={value} className={isVisible ? 'visible h1' : 'h1'}>
                                {numFormatter(value)}
                            </span>
                        )
                    })
                } patients
            </Label>
        </CustomTooltip>
    )
}

ChartLabel.propTypes = {
    values: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired
}

export default ChartLabel;