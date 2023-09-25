// styled components
import {MonthSelector, CalendarWrapper, StyledCalendar} from '@widgets/TaskScheduler/style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import CustomSelect from '@ui/Select';
import Calendar from 'react-calendar';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Badge} from '@ui/Badge/style';
import Backdrop from '@mui/material/Backdrop';

// utils
import {getMonthArray} from '@utils/dates';
import moment from 'moment';
import {nanoid} from 'nanoid';

// hooks
import {useState, useEffect, useRef} from 'react';

// data placeholder
import {scheduler} from '@db/scheduler';

// constants
import {tasksColors} from '@constants/colors';
import {doctorsOptions} from '@constants/options';

const TaskScheduler = () => {
    const options = doctorsOptions();
    const monthArray = getMonthArray();
    const currentMonth = new Date().getMonth() + 1;
    const [selectedDoctor, setSelectedDoctor] = useState(options[0]);
    const [selectedRange, setSelectedRange] = useState({start: 1, end: 2});
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [swiper, setSwiper] = useState(null);
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        currentMonth === 12 ?
            setSelectedRange({start: currentMonth - 1, end: currentMonth})
            :
            setSelectedRange({start: currentMonth, end: currentMonth + 1});

        setHeight(headerRef.current.offsetHeight + footerRef.current.offsetHeight);
    }, [currentMonth, headerRef, footerRef]);

    const handleNavigation = e => {
        const realIndex = swiper.realIndex;
        if (e.currentTarget.dataset.direction === 'prev') {
            swiper.slidePrev();
            setSelectedRange({
                start: realIndex === 0 ? 11 : realIndex,
                end: realIndex === 0 ? 12 : realIndex + 1,
            })
        } else {
            swiper.slideNext();
            setSelectedRange({
                start: realIndex === 11 ? 1 : realIndex + 1,
                end: realIndex === 11 ? 2 : realIndex + 2,
            })
        }
    }

    const calendarStart = moment().month(selectedRange.start - 1).startOf('month').toDate(),
        calendarEnd = moment().month(selectedRange.end - 1).endOf('month').toDate();

    const docTasks = scheduler.filter(task => task.id === selectedDoctor.value)[0].tasks;

    const hasTasks = date => docTasks.filter(event => moment(event.date).isSame(date, 'day')).length > 0;

    const drawTasks = date => {
        const tasks = docTasks.filter(event => moment(event.date).isSame(date, 'day'));
        return tasks.map(task => {
            const {title, type, date} = task;
            const color = tasksColors.find(color => color.cat === type).color;
            return (
                <div key={nanoid()} className="task">
                    <div>
                        <span className="task_label">Task:</span>
                        <div className="task_header">
                            <Badge color={color}/>
                            {title}
                        </div>
                    </div>
                    <div>
                        <span className="task_label">Date:</span>
                        <div>{moment(date).format('MM.DD.YY, HH:mm A')}</div>
                    </div>
                </div>
            );
        });
    }

    return (
        <Widget name="TaskScheduler">
            <WidgetHeader title="Doctor task scheduler" flex={'column'} elRef={headerRef}>
                <CustomSelect options={options}
                              value={selectedDoctor}
                              variant="user"
                              changeHandler={e => setSelectedDoctor(e)}/>
            </WidgetHeader>
            <WidgetBody style={{display: 'flex', flexDirection: 'column'}}>
                <MonthSelector>
                    <div className="list">
                        <Swiper slidesPerView="auto"
                                spaceBetween={12}
                                loop={true}
                                centeredSlides={true}
                                onSwiper={(swiper) => setSwiper(swiper)}
                                initialSlide={currentMonth - 1}
                        >
                            {monthArray.map(({month}) => {
                                const monthNumber = moment(month).format('M');
                                const monthName = moment(month).format('MMMM');
                                const isSelected = +monthNumber === selectedRange.start || +monthNumber === selectedRange.end;

                                return (
                                    <SwiperSlide key={monthName}
                                                 className={isSelected ? 'list-item active' : 'list-item'}>
                                        {monthName}
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="navigation">
                        <button data-direction="prev" onClick={handleNavigation} aria-label="Previous">
                            <i className="icon icon-chevron-left"/>
                        </button>
                        <button data-direction="next" onClick={handleNavigation} aria-label="Next">
                            <i className="icon icon-chevron-right"/>
                        </button>
                    </div>
                </MonthSelector>
                <CalendarWrapper top={height}>
                    <StyledCalendar as={Calendar}
                                    locale="en-US"
                                    value={[calendarStart, calendarEnd]}
                                    activeStartDate={calendarStart}
                                    minDate={calendarStart}
                                    maxDate={calendarEnd}
                                    showDoubleView={true}
                                    showNavigation={false}
                                    showFixedNumberOfWeeks={false}
                                    tileClassName={({date}) => hasTasks(date) ? 'active' : ''}
                                    tileContent={<span className="bar"/>}
                                    onClickDay={date => {
                                        setSelectedDate(date);
                                        setOpen(true);
                                    }}
                    />
                    <Backdrop open={open} onClick={() => setOpen(false)} sx={{
                        backgroundColor: 'transparent',
                        zIndex: 1000
                    }}>
                        <div className={`popup ${open ? 'visible' : ''}`}>
                            <button className="popup_close" onClick={() => setOpen(false)}>
                                <i className="icon icon-close"/>
                            </button>
                            {selectedDate && hasTasks(selectedDate) && drawTasks(selectedDate)}
                        </div>
                    </Backdrop>
                </CalendarWrapper>
                <div ref={footerRef}>
                    <Legend>
                        {tasksColors.map(({color, cat}) => <LegendItem key={cat} color={color} legend={cat}/>)}
                    </Legend>
                </div>
            </WidgetBody>
        </Widget>
    )
}

export default TaskScheduler;