// styled components
import {RangePickerWrapper} from '@widgets/UpcomingAppointments/style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import AppointmentItem from '@components/AppointmentItem';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import ScrollContainer from '@components/ScrollContainer';

// utils
import moment from 'moment';

// hooks
import {useState, useRef} from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
import {upcoming} from '@db/upcoming';

const UpcomingAppointments = () => {
    const [visible, setVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(moment());
    const anchorRef = useRef(null);
    const headerRef = useRef(null);
    const height = useContentHeight(headerRef);

    const appointments = (date) => upcoming.filter(appointment => {
        return moment(appointment.date).isSame(date, 'day');
    }).sort((a, b) => {
        return moment(a.date).diff(moment(b.date));
    });

    return (
        <Widget name="UpcomingAppointments" mobile={500}>
            <WidgetHeader title="Upcoming appointments" style={{paddingBottom: 19}} flex="column" elRef={headerRef}>
                <RangePickerWrapper>
                    <div className="row" ref={anchorRef}>
                        <div className="display" onClick={() => setVisible(true)}>
                            <span>{selectedDate.format('MMMM DD, YYYY')}</span>
                        </div>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            open={visible}
                            value={selectedDate}
                            onChange={(newValue) => {
                                setSelectedDate(newValue);
                                setVisible(false);
                            }}
                            PopperProps={{anchorEl: anchorRef.current}}
                            PaperProps={{className: 'date-picker'}}
                            onClose={() => setVisible(false)}
                            disablePast={true}
                            renderInput={({
                                              ref,
                                              inputProps,
                                              disabled,
                                              onChange,
                                              value
                                          }) => (
                                <div className="input" ref={ref}>
                                    <input
                                        value={value && value.toISOString()}
                                        onChange={onChange}
                                        disabled={disabled}
                                        placeholder="MM/DD/YYYY"
                                        {...inputProps}
                                        type="hidden"
                                    />
                                </div>
                            )}
                            shouldDisableDate={(day) => {
                                return appointments(day).length === 0;
                            }}
                        />
                    </LocalizationProvider>
                </RangePickerWrapper>
            </WidgetHeader>
            <WidgetBody>
                <ScrollContainer height={height}>
                    <div className="track">
                        {
                            appointments(selectedDate).length > 0 ?
                                appointments(selectedDate).map(appointment => (
                                    <AppointmentItem key={appointment.id} data={appointment} animated={true}/>
                                )) : <NoDataPlaceholder/>
                        }
                    </div>
                </ScrollContainer>
            </WidgetBody>
        </Widget>
    )
}

export default UpcomingAppointments;