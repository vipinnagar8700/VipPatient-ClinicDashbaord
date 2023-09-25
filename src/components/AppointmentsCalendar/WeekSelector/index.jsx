// components
import CustomSelect from '@ui/Select';

// hooks
import {useState} from 'react';

// utils
import {getWeekArray} from '@utils/dates';
import moment from 'moment/moment';

const WeekSelector = ({date, setter}) =>{
    const options = getWeekArray().map((item, i) => {
        return {
            value: i,
            label: `${item.startLong} - ${item.endLong}`,
        }
    });

    const [selected, setSelected] = useState(options[moment(date).week() - 1]);

    const handleWeekChange = e => {
        setSelected(e);
        setter(moment(date).week(e.value + 1).startOf('week').toDate());
    }

    return <CustomSelect variant="basic" options={options} value={selected} changeHandler={handleWeekChange}/>
}

export default WeekSelector;