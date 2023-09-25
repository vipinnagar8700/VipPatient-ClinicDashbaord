// styled components
import {Wrapper} from './style';

// utils
import PropTypes from "prop-types";

const Navigator = ({text, handler, prevDisabled, nextDisabled, ...props}) => {
    return (
        <Wrapper className="navigator" {...props}>
            <button className={prevDisabled ? 'disabled' : ''} onClick={handler} data-direction="prev" aria-label="Previous">
                <i className="icon icon-chevron-left"></i>
            </button>
            <span className="label">{text}</span>
            <button className={nextDisabled ? 'disabled' : ''} onClick={handler} data-direction="next" aria-label="Next">
                <i className="icon icon-chevron-right"></i>
            </button>
        </Wrapper>
    )
}

Navigator.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    prevDisabled: PropTypes.bool,
    nextDisabled: PropTypes.bool
}

export default Navigator;