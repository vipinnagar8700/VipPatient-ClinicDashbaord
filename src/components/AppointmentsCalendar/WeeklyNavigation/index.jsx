// components
import Navigator from '@ui/Navigator';

// utils
import moment from 'moment/moment';

const WeeklyNavigation = ({date, setter}) => {
    const calendarWeek = moment(date).week();
    const currentWeek = moment().week();

    const handleWeekNavigation = e => {
        if (e.currentTarget.dataset.direction === 'prev') {
            setter(moment(date).subtract(1, 'week').startOf('week').toDate());
        } else {
            setter(moment(date).add(1, 'week').startOf('week').toDate());
        }
    }

    const firstWeek = moment(date).startOf('year').week(),
        lastWeek = moment(date).endOf('year').week();

    let label;
    if (currentWeek === calendarWeek) label = 'This week';
    else if (currentWeek + 1 === calendarWeek) label = 'Next week';
    else if (currentWeek - 1 === calendarWeek) label = 'Last week';
    else label = 'Week ' + calendarWeek;

    return (
        <Navigator handler={handleWeekNavigation}
                   text={label}
                   prevDisabled={calendarWeek === firstWeek}
                   nextDisabled={calendarWeek === lastWeek}/>
    )
}

export default WeeklyNavigation;