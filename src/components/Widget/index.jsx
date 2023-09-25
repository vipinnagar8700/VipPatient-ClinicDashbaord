// styled components
import {Container} from './style';

// components
import {motion} from 'framer-motion';

// utils
import PropTypes from 'prop-types';

// hooks
import {useInterfaceContext} from '@contexts/interfaceContext';

const Widget = ({name, children, style, shadow = false, ...props}) => {
    const {direction} = useInterfaceContext();
    return (
        <Container as={motion.div}
                   data-widget={name}
                   initial={{opacity: 0}}
                   whileInView={{opacity: 1}}
                   transition={{duration: .4}}
                   viewport={{once: true}}
                   style={style}
                   className={shadow ? 'shadow' : ''}
                   dir={direction}
                   mobile={props.mobile}
        >
            {children}
        </Container>
    )
}

Widget.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.object,
    shadow: PropTypes.bool
}

export default Widget;