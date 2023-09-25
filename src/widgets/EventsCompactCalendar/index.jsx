// styled components
import {EventsCalendar, Container, Popup, Backdrop} from '@widgets/EventsCompactCalendar/style';

// components
import Widget from '@components/Widget';
import Calendar from 'react-calendar';
import Timestamp from '@ui/Timestamp';
import Grow from '@mui/material/Grow';
import CloseBtn from '@components/ModalWindow/CloseBtn';

// hooks
import {useState, useRef} from 'react';

// utils
import {nanoid} from 'nanoid';
import moment from 'moment';
import { Typography } from '@mui/material';

const EventsCompactCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const popupRef = useRef(null);

    const events = [
        {
            date: moment(),
            title: 'Medical conference',
        },
        {
            date: moment(),
            title: 'Enterprise meeting',
        },
        {
            date: moment().add(3, 'hours'),
            title: 'Meeting with Anna Smith',
        },
        {
            date: moment().add(2, 'days').add(1, 'hours'),
            title: 'Visit gym',
        },
        {
            date: moment().add(2, 'days').add(2, 'hours'),
            title: 'Prepare for presentation',
        }
    ]

    const hasEvents = date => events.filter(event => moment(event.date).isSame(date, 'day')).length > 0;

    const drawPopup = date => {
        const eventsOnDate = events.filter(event => moment(event.date).isSame(date, 'day'));
        return eventsOnDate.map(event => {
            return (
                <div key={nanoid(5)}>
                    <Timestamp date={date} time={true} />
                    <h3>{event.title}</h3>
                </div>
            )
        });
    }

    const config = {
        as: Calendar,
        locale: 'en-US',
        navigationLabel: ({date}) => `${moment(date).format('MMMM, YYYY')}`,
        navigationAriaLabel: 'Current month',
        prevLabel: <i className="icon icon-chevron-left"/>,
        nextLabel: <i className="icon icon-chevron-right"/>,
        prev2Label: null,
        next2Label: null,
        nextAriaLabel: 'Next month',
        prevAriaLabel: 'Previous month',
        tileContent: ({date}) => hasEvents(date) ? <span className="bar"/> : null,
        tileClassName: ({date}) => hasEvents(date) ? 'active' : null,
        onClickDay: (value) => {
            setSelectedDate(value);
            setPopupVisible(true);
        },
    }

    return (
        <Widget name="EventsCompactCalendar">
            <Container>
                <Typography m={1} sx={{fontSize:22,fontWeight:600}}>Quick Calender</Typography>
                <EventsCalendar {...config} />
                <Backdrop>
                    {
                        selectedDate &&
                        <Grow in={popupVisible} timeout={300} style={{transformOrigin: '0 0 0'}}>
                            <Popup ref={popupRef}>
                                {drawPopup(selectedDate)}
                                <CloseBtn handler={() => setPopupVisible(false)}/>
                            </Popup>
                        </Grow>
                    }
                </Backdrop>
            </Container>
        </Widget>
    )
}

export default EventsCompactCalendar;