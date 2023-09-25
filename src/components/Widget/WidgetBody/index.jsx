// styled components
import {Body} from '../style';

// utils
import PropTypes from 'prop-types';

const WidgetBody = ({children, style, sidePadding = false, elRef, ...props}) => {
    return <Body ref={elRef} sidePadding={sidePadding} style={style} {...props}>{children}</Body>
}

WidgetBody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    sidePadding: PropTypes.bool,
    style: PropTypes.any,
}

export default WidgetBody;