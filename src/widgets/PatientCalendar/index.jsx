// components
import Widget from '@components/Widget';
import AppointmentsCalendar from '@components/AppointmentsCalendar';

const PatientCalendar = ({handler, current}) => {
    return (
        <Widget name="PatientCalendar">
            <AppointmentsCalendar current={current} viewChangeHandler={handler} type="patient"/>
        </Widget>
    )
}

export default PatientCalendar;