// components
import CustomSelect from '@ui/Select';

// hooks
import {useState} from 'react';

// utils
import {getMonthArray} from '@utils/dates';
import moment from 'moment/moment';

const MonthSelector = ({date, setter}) => {
    const options = getMonthArray().map(item => {
        return {
            value: item.month,
            label: item.formatted
        }
    });

    const [selected, setSelected] = useState(options[moment(date).month()]);

    const handleMonthChange = e => {
        setSelected(e);
        const month =  moment(e.value).month();
        setter(moment(date).set({month: month, date: 1}));
    }

    return <CustomSelect variant="basic" options={options} value={selected} changeHandler={handleMonthChange}/>
}

export default MonthSelector;