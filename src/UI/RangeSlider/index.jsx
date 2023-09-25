// components
import Slider from '@mui/material/Slider';

// utils
import PropTypes from 'prop-types';

const RangeSlider = ({value, min, max, step, label, onChange, style, ...props}) => {
    return (
        <Slider
            value={value}
            min={min}
            max={max}
            step={step}
            aria-label={label}
            valueLabelDisplay="off"
            onChange={onChange}
            sx={style}
            {...props}
        />
    );
}

RangeSlider.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RangeSlider;