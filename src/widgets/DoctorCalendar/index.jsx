// components
import Widget from '@components/Widget';
import AppointmentsCalendar from '@components/AppointmentsCalendar';

const DoctorCalendar = ({handler, current}) => {
    return (
        <Widget name="DoctorCalendar">
            <AppointmentsCalendar current={current} viewChangeHandler={handler} type="doctor"/>
        </Widget>
    )
}

export default DoctorCalendar;