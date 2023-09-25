// styling
import styled from 'styled-components/macro';

// components
import Rating from 'react-rating'
import {ReactComponent as Filled} from '@assets/filledrating.svg';
import {ReactComponent as Empty} from '@assets/emptyrating.svg';

// hooks
import {useTheme} from '@mui/material/styles';

const StyledRating = styled(Rating)({
    display: 'flex !important',
    gap: 4,
    marginTop: '-8px',
    '& svg.empty': {
        color: '#A2C0D4',
    },
    '& svg.filled': {
        color: '#7ED321',
    }
});

const CustomRating = ({value}) => {
    const direction = useTheme().direction;

    return (
        <StyledRating
            className="styled-rating"
            initialRating={value}
            direction={direction}
            emptySymbol={<Empty className="empty"/>}
            fullSymbol={<Filled className="filled"/>}
            readonly />
    )
}

export default CustomRating;