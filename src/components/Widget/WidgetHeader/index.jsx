// styled components
import {Header} from '../style';

// utils
import PropTypes from 'prop-types';

const WidgetHeader = ({title, children, sidePadding = false, flex = 'row', elRef, ...props}) => {
    return (
        <Header className={props.className ? props.className : ''}
                sidePadding={sidePadding} flex={flex} ref={elRef} style={props.style}>
            <h2 className="title">{title}</h2>
            {children}
        </Header>
    )
}

WidgetHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    sidePadding: PropTypes.bool,
    flex: PropTypes.oneOf(['row', 'column'])
}

export default WidgetHeader;