import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import MYCalendar from "./Calender";




export default function BasicCalendar() {
    return (<MYCalendarCalendar defaultView={"week"} 
        formats={{dayHeaderFormat:(date)=> moment(date).format("dddd @ DD")}}
        views={['month', 'week', 'day']} date={moment("2022-10-10").toDate()} />)
}