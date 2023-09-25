import {useState} from 'react';

const usePeriodNav = () => {
    const periods = ['year', 'month', 'week'];
    const [period, setPeriod] = useState(periods[0]);
    const setPeriodIndex = (index) => setPeriod(periods[index]);

    return {period, periods, setPeriod, setPeriodIndex};
}

export default usePeriodNav;