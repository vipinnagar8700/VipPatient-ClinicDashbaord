// styling
import {light, textSizes} from '@styles/vars';

// components
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

// utils
import PropTypes from 'prop-types';

const CustomTooltip = ({title, placement = 'right', children}) => {
    return (
        <Tooltip TransitionComponent={Zoom}
                 TransitionProps={{timeout: 350}}
                 title={title}
                 placement={placement}
                 enterTouchDelay={0}
                 PopperProps={{
                     sx: {
                         '& .MuiTooltip-tooltip': {
                             color: '#fff',
                             backgroundColor: light.text,
                             fontSize: textSizes['10'],
                             boxShadow: '0 1px 8px rgba(65, 77, 85, 0.4)',
                             textTransform: 'uppercase',
                             borderRadius: 8
                         },
                         '& .MuiTooltip-arrow:before': {
                             backgroundColor: light.text,
                         }
                     }
                 }}
                 arrow
        >
            {children}
        </Tooltip>
    )
}

CustomTooltip.propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string.isRequired,
    placement: PropTypes.oneOf([
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
    ]),
    children: PropTypes.node.isRequired
}

export default CustomTooltip;