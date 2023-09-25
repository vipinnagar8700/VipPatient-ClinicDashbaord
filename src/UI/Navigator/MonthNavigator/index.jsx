// components
import Navigator from '@ui/Navigator';

// utils
import PropTypes from 'prop-types';

const MonthNavigator = ({state, handler, loop = true}) => {

    const navigate = e => {
        const direction = e.currentTarget.dataset.direction;
        let current = state.number;

        if (direction === 'prev') {
            current !== 0 ? current-- : current = 11;
        } else {
            current !== 11 ? current++ : current = 0;
        }
        handler(prevState => {
            return {...prevState, number: current}
        });

        let currentMonth = new Date().getMonth(),
            prevMonth = currentMonth - 1,
            nextMonth = currentMonth + 1;

        let label = '';
        const dateObj = new Date(2022, current, 1);

        if (current === currentMonth) {
            label = 'This month'
        } else if (current === prevMonth) {
            label = 'Previous month';
        } else if (current === nextMonth) {
            label = 'Next month';
        } else {
            label = dateObj.toLocaleString('en-US', {month: 'long'})
        }
        handler(prevState => {
            return {...prevState, label: label}
        });
    }

    return (
        <Navigator handler={navigate}
                   text={state.label}
                   prevDisabled={!loop && state.number === 0}
                   nextDisabled={!loop && state.number === new Date().getMonth()}
        />
    )
}

MonthNavigator.propTypes = {
    state: PropTypes.shape(
        {
            number: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired,
    handler: PropTypes.func.isRequired
}

export default MonthNavigator;