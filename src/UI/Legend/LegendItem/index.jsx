// styled components
import {ListItem} from '../style';
import {LegendBadge} from '@ui/Badge/style';

// utils
import PropTypes from 'prop-types';

const LegendItem = ({color, legend}) => {
    return (
        <ListItem>
            <LegendBadge color={color} /> {legend}
        </ListItem>
    )
}

LegendItem.propTypes = {
    color: PropTypes.string.isRequired,
    legend: PropTypes.string.isRequired
}

export default LegendItem;