// styles
import 'react-big-calendar/lib/css/react-big-calendar.css'

// components
import Widget from 'components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import DailyNavigation from '@components/AppointmentsCalendar/DailyNavigation';
import Event from '@components/AppointmentsCalendar/Event';
import Field from '@ui/Field';
import CustomSelect from '@ui/Select';
import Btn from '@ui/Btn';
import SelectableSlot from '@components/AppointmentsCalendar/SelectableSlot';

// styled components
import {StyledAppointmentsScheduler, Container} from '@widgets/AppointmentsScheduler/style';

// utils
import moment from 'moment/moment';

// hooks
import {useState, useRef, useEffect} from 'react';

// constants
import {colorTypes} from '@constants/colors';

const AppointmentsScheduler = () => {
    const localizer = momentLocalizer(moment);

    const options = () => {
        let options = [];
        colorTypes.forEach(item => {
            options.push({value: item.cat, label: item.label});
        });

        return options;
    }
    const [selectedOption, setSelectedOption] = useState(null);

    const [currentDate, setCurrentDate] = useState(moment().toDate());
    const [title, setTitle] = useState('');
    const [formVisible, setFormVisible] = useState(false);
    const [currentSlot, setCurrentSlot] = useState({start: Date.now(), end: Date.now()});

    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight);
    }, [headerRef]);

    const events = [
        {
            name: 'Ultrasound diagnostics',
            start: moment().set({hour: 13, minute: 30, second: 0}).toDate(),
            end: moment().set({hour: 14, minute: 0, second: 0}).toDate(),
            allDay: false,
            type: 'test'
       }
    ]
    const [eventsList, setEventsList] = useState(events);

    const onSelectSlot = (slotInfo) => {
        setCurrentSlot(slotInfo);
        setFormVisible(true);
    }

    const handleReset = () => {
        setTitle('');
        setSelectedOption(null);
        setFormVisible(false);
    }

    const addNewEvent = e => {
        e.preventDefault();

        if (title !== '' && selectedOption !== null) {
            setEventsList([...eventsList, {
                name: title,
                start: currentSlot.start,
                end: currentSlot.end,
                allDay: false,
                type: selectedOption.value
            }]);
        }
        handleReset();
    }

    const removeEvent = (event) => {
        const newEvents = eventsList.filter(item => item !== event);
        setEventsList(newEvents);
    }

    const handleNavigation = (action, date) => {
        switch (action) {
            case 'NEXT':
                setCurrentDate(moment(currentDate).add(1, 'day').toDate());
                break;
            case 'PREV':
                setCurrentDate(moment(currentDate).subtract(1, 'day').toDate());
                break;
            default:
                setCurrentDate(date);
        }
    }

    const handleOutsideClick = e => {
        if (e.target.classList.contains('backdrop')) {
            setFormVisible(false);
        }
    }

    const config = {
        as: Calendar,
        date: currentDate,
        localizer: localizer,
        startAccessor: 'start',
        endAccessor: 'end',
        defaultView: 'day',
        onNavigate: handleNavigation,
        step: 30,
        timeslots: 1,
        events: eventsList,
        min: moment().set({hour: 9, minute: 0, second: 0}).toDate(),
        max: moment().set({hour: 16, minute: 30, second: 0}).toDate(),
        formats: {
            dayHeaderFormat: 'dddd, MMMM DD',
            timeGutterFormat: 'HH:mm',
        },
        components: {
            toolbar: ({date, label}) => {
                return <DailyNavigation onNavigate={handleNavigation} date={date} label={label}/>
            },
            event: ({event}) => <Event event={event} variant="day"/>,
            timeSlotWrapper: ({children}) => <SelectableSlot>{children}</SelectableSlot>,
        },
        selectable: true,
        onSelectSlot: slotInfo => onSelectSlot(slotInfo),
        onSelectEvent: (event) => {
            removeEvent(event);
        },
    }

    return (
        <Widget name="AppointmentsScheduler">
            <WidgetHeader title="Daily appointments scheduler" elRef={headerRef}/>
            <Container headerHeight={headerHeight}>
                <StyledAppointmentsScheduler {...config} />
                <div className={formVisible ? 'backdrop visible' : 'backdrop'} onClick={handleOutsideClick}>
                    <form className="popup" onSubmit={addNewEvent}>
                        <Field name="title" placeholder="Title" value={title} handler={e => setTitle(e.target.value)}/>
                        <CustomSelect variant="basic"
                                      options={options()}
                                      value={selectedOption}
                                      changeHandler={e => setSelectedOption(e)}
                                      placeholder="Type"/>
                        <div className="footer">
                            <Btn text="Add" type="submit"/>
                            <Btn text="Cancel" type="button" handler={handleReset}/>
                        </div>
                    </form>
                </div>
            </Container>
        </Widget>
    )
}

export default AppointmentsScheduler;