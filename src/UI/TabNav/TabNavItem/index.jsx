// styled components
import {Item, Button} from '../style'

// components
import {Nav} from 'react-bootstrap';

// utils
import PropTypes from 'prop-types';

const TabNavItem = ({className, eventKey, title, handler}) => {
    return (
        <Item className={className ? className : ''} as={Nav.Item} onClick={handler}>
            <Button as={Nav.Link} eventKey={eventKey}>{title}</Button>
        </Item>
    )
}

TabNavItem.propTypes = {
    eventKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    handler: PropTypes.func
}

export default TabNavItem;