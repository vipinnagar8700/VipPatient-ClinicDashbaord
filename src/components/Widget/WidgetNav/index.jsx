// styled components
import {Nav} from '../style';

// components
import WidgetHeader from '../WidgetHeader';

// utils
import PropTypes from "prop-types";

const WidgetNav = ({title, handler, sidePadding, children, disabled, ...props}) => {
    return (
        <WidgetHeader title={title} sidePadding={sidePadding} style={props.style} className="nav">
            <Nav>
                <button onClick={handler} data-direction="prev" className={disabled ? 'disabled' : ''} aria-label="Previous">
                    <i className="icon icon-chevron-left"/>
                </button>
                <button onClick={handler} data-direction="next" className={disabled ? 'disabled' : ''} aria-label="Next">
                    <i className="icon icon-chevron-right"/>
                </button>
            </Nav>
            {children}
        </WidgetHeader>
    )
}

WidgetNav.propTypes = {
    title: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

export default WidgetNav;