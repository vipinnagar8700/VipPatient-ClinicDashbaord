// components
import Navigator from '@ui/Navigator';

// utils
import moment from 'moment/moment';

const MonthlyNavigation = ({date, setter}) => {
    const calendarMonth = moment(date).month();
    const currentMonth = moment().month();

    const handleMonthNavigation = e => {
        if (e.currentTarget.dataset.direction === 'prev') {
            setter(moment(date).subtract(1, 'month').toDate());
        } else {
            setter(moment(date).add(1, 'month').toDate());
        }
    }

    let label;
    if (currentMonth === calendarMonth) label = 'This month';
    else if (currentMonth + 1 === calendarMonth) label = 'Next month';
    else if (currentMonth - 1 === calendarMonth) label = 'Last month';
    else label = `${moment(date).format('MMMM')}`;

    return (
        <Navigator handler={handleMonthNavigation}
                   text={label}
                   prevDisabled={calendarMonth === 0}
                   nextDisabled={calendarMonth === 11}/>
    )
}

export default MonthlyNavigation;