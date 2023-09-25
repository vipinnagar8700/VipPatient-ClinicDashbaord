import moment from 'moment';

export const getYearDaysArray = () => {
    const year = moment().year();
    const days = [];
    const totalDays = moment().year(moment().year()).endOf('year').diff(moment().year(moment().year()).startOf('year'), 'days') + 1;
    for (let i = 1; i <= totalDays; i++) {
        let date = moment().year(year).dayOfYear(i);
        days.push({
            date: date,
            long: date.format('dddd, MMMM DD'),
            short: date.format('DD/MM/YYYY'),
        });
    }
    return days;
}

export const getMonthArray = () => {
    const year = moment().year();
    const months = [];
    for (let i = 1; i <= 12; i++) {
        let month = moment().year(year).month(i - 1);
        months.push({
            month: month,
            formatted: month.format('MMMM, YYYY')
        });
    }
    return months;
};

export const getWeekArray = () => {
    const year = moment().year();
    const weeks = [];
    const totalWeeks = moment().year(moment().year()).endOf('year').diff(moment().year(moment().year()).startOf('year'), 'weeks') + 1;
    for (let i = 1; i <= totalWeeks; i++) {
        let week = moment().year(year).week(i);

        weeks.push({
            week: i,
            startShort: week.startOf('week').format('MMM, DD'),
            endShort: week.endOf('week').format('MMM, DD'),
            startLong: week.startOf('week').format('MMMM, DD'),
            endLong: week.endOf('week').format('MMMM, DD'),
        });
    }
    return weeks;
}