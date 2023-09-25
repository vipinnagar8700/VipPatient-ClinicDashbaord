// styled components
import {Container} from './style';

// components
import {Nav} from 'react-bootstrap';

// utils
import PropTypes from 'prop-types';

const TabNav = ({children}) => {
    return <Container as={Nav}>{children}</Container>
}

TabNav.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default TabNav;