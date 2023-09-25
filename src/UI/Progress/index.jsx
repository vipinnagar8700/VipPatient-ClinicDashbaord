// styling
import {dark, colors} from '@styles/vars';

// components
import LinearProgress from '@mui/material/LinearProgress';

// hooks
import {useTheme} from 'styled-components';

// utils
import PropTypes from 'prop-types';

const Progress = ({color = colors.blue, value, style = {}}) => {
    const {theme} = useTheme();

    return <LinearProgress className="progressbar"
                           variant="determinate"
                           aria-label={value}
                           value={value}
                           sx={{
                               backgroundColor: theme === 'light' ? '#E4EAF0' : dark.highlight,
                               height: 6,
                               borderRadius: 2,
                               ...style,

                               '& .MuiLinearProgress-bar': {
                                   backgroundColor: color,
                                   borderRadius: 2,
                               }
                           }}/>
}

Progress.propTypes = {
    color: PropTypes.string,
    value: PropTypes.number.isRequired,
    style: PropTypes.object,
}

export default Progress;