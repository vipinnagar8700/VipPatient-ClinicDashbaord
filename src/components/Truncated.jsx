// components
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

// utils
import PropTypes from 'prop-types';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const Truncated = ({className, text, lines = 1}) => {
    return (
        <ResponsiveEllipsis className={className} text={text} maxLine={lines} ellipsis="..." trimRight basedOn="letters" />
    )
}

Truncated.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    lines: PropTypes.number
}

export default Truncated;