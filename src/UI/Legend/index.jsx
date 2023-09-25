// styled components
import {List} from './style';

// utils
import PropTypes from "prop-types";

const Legend = ({children, overlay}) => {
    return <List overlay={overlay}>{children}</List>
}

Legend.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    overlay: PropTypes.bool,
}

export default Legend;