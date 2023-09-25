// styles
import 'react-big-calendar/lib/css/react-big-calendar.css'

// styled components
import { Container, Header, StyledCalendar, Footer } from './style';
import { Container as Tabs, Item, Button } from '@ui/TabNav/style';

// components
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Event from '@components/AppointmentsCalendar/Event';
import TimeSlot from '@components/AppointmentsCalendar/TimeSlot';
import DailyToolbar from '@components/AppointmentsCalendar/DailyToolbar';
import DailyNavigation from '@components/AppointmentsCalendar/DailyNavigation';
import WeeklyNavigation from '@components/AppointmentsCalendar/WeeklyNavigation';
import WeekSelector from '@components/AppointmentsCalendar/WeekSelector';
import MonthlyNavigation from '@components/AppointmentsCalendar/MonthlyNavigation';
import MonthSelector from '@components/AppointmentsCalendar/MonthSelector';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import DoctorPopup from '@components/AppointmentsCalendar/DoctorPopup';

// utils
import moment from 'moment';
import PropTypes from 'prop-types';
import { colorTypes } from '@constants/colors';
import { doctorsOptions } from '@constants/options';

// hooks
import { useState, useRef, useEffect } from 'react';
import useWindowSize from '@hooks/useWindowSize';

// data placeholder
import { events, disabled } from '@db/calendar_appointments';
import CustomSelect from '@ui/Select';
import { GetAppointmtentREwie } from '@components/Api/AllApi';

const AppointmentsCalendar = ({ viewChangeHandler, current, type }) => {
    const width = useWindowSize().width;
    const localizer = momentLocalizer(moment);

    const footerRef = useRef(null);
    const headerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(headerRef.current.offsetHeight + footerRef.current.offsetHeight);
    }, [headerRef, footerRef]);

    const options = doctorsOptions();
    const [selectedDoctor, setSelectedDoctor] = useState(options[0]);

    const [popupOpen, setPopupOpen] = useState(false);

    const [post, setPost] = useState(false)

    useEffect(() => {

        const AppShed = GetAppointmtentREwie();
        if (AppShed) {
            AppShed.then((data) => {
                console.log(data, "App ShedulerA")
                setPost(data?.result, "App ShedulerA")
            })
        }


    }, [])


    const getDayFormat = () => {
        switch (true) {
            case width < 768:
                return 'D';
            case width < 1600:
                return 'ddd, D';
            default:
                return 'dddd D MMMM';
        }
    }

    const [currentDate, setCurrentDate] = useState(moment().toDate());
    const views = ['month', 'week', 'day'];
    const Navigation = () => {
        return (
            <Tabs className="tabs">
                {
                    views.map(view => {
                        return (
                            <Item key={view}>
                                <Button className={current === view ? 'active' : null}
                                    onClick={() => viewChangeHandler(view)}>
                                    {view}
                                </Button>
                            </Item>
                        )
                    })
                }
            </Tabs>
        )
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

    const handleDayClick = (date) => {
        setCurrentDate(date);
        viewChangeHandler('day');
    }

    const config = {
        as: Calendar,
        localizer: localizer,
        startAccessor: 'start',
        endAccessor: 'end',
        views: views,
        view: current,
        date: currentDate,
        onView: viewChangeHandler,
        onNavigate: handleNavigation,
        onDrillDown: (date) => handleDayClick(date),
        events: type === 'doctor' ? events['doctor'] : current === 'day' ? events['patient'].general : events['patient'].disabled,
        backgroundEvents: type === 'doctor' ? disabled : [],
        min: moment().startOf('year').set({ hour: 9, minute: 30 }).toDate(),
        max: moment().endOf('year').set({ hour: 16, minute: 30 }).toDate(),
        timeslots: 1,
        step: 30,
        formats: {
            dayHeaderFormat: width < 414 ? 'dddd, MMM DD' : 'dddd, MMMM DD',
            dayFormat: getDayFormat(),
            timeGutterFormat: 'HH:mm',
        },
        components: {
            toolbar: ({ label, date }) =>
                <Header ref={headerRef} view={current}>
                    {current === 'day' &&
                        <DailyToolbar label={type === 'doctor' ? label : 'Daily appointments scheduler'} />}
                    <Navigation />
                    {current === 'day' && <DailyNavigation onNavigate={handleNavigation} date={date} label={label} />}
                    {current === 'week' && (
                        <>

                            <WeekSelector date={date} setter={setCurrentDate} />
                            {/* <DocSelect /> */}
                            <WeeklyNavigation date={date} setter={setCurrentDate} />
                        </>
                    )}
                    {current === 'month' && (
                        <>
                            <MonthSelector date={date} setter={setCurrentDate} />
                            <MonthlyNavigation date={date} setter={setCurrentDate} />
                        </>
                    )}
                </Header>,
            event: ({ event }) => <Event event={event} variant={current} />,
            timeSlotWrapper: (props) => TimeSlot(props, 30, 1, true),
        },
        className: `calendar-${current} calendar-${type}`,
        messages: {
            showMore: (total) => `+ ${total}`,
        },
        popup: true,
        selectable: type === 'patient' && current !== 'day',
        onSelectSlot: type === 'patient' && current !== 'day' && (() => setPopupOpen(true))
    }

    return (
        <>
            <Container>
                <StyledCalendar {...config} />
                {
                    type === 'patient' && current !== 'day' &&
                    <DoctorPopup elemsHeight={height} name={selectedDoctor.label || null} open={popupOpen}
                        handler={setPopupOpen} />
                }
            </Container>
            <Footer ref={footerRef}>
                <Legend>
                    {
                        colorTypes.map(({ cat, color, label }) => {
                            return (
                                <LegendItem key={cat} color={color} legend={label} />
                            )
                        })
                    }
                </Legend>
            </Footer>
        </>
    )
}

AppointmentsCalendar.propTypes = {
    type: PropTypes.oneOf(['doctor', 'patient']).isRequired,
}

export default AppointmentsCalendar;