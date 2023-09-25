// styled components
import { StyledEvent, EventModal } from './style';

// components
import ModalWindow from '@components/ModalWindow';

// utils
import moment from 'moment';
import PropTypes from 'prop-types';

// hooks
import { useTheme } from 'styled-components';
import { useState } from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { AllAppointmentDetails } from '@components/Api/AllApi';
import { useEffect } from 'react';

const Event = ({ event, variant }) => {
    console.log(event, "I got it")
    const [Post, setPost] = useState(false)
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();



    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await AllAppointmentDetails();
                console.log(data?.result, "Appointment Data");
                setPost(data?.result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])


    console.log(Post, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIiiiiiiii")

    let isEnded = moment(Post?.[0]?.end_date).isBefore(moment());
    console.log(isEnded)
    const isDesktop = useWindowSize().width >= 1280;

    const getTakenSlots = () => {
        const duration = moment.duration(moment(Post?.[0]?.end_date).diff(moment(Post?.[0]?.start_date)));
        return Math.ceil(duration.asMinutes() / 30);
    }

    const datetimeString = Post?.[0]?.end_date;
    const dateObject = new Date(datetimeString);

    // Get the hours and minutes as separate variables
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    // Determine whether it's AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format and format the time as hh:mm AM/PM
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    console.log(formattedTime); // Output: "01:00 PM"



    const Title = () => <span className="event-title" style={{ direction: 'ltr' }}>{formattedTime} {Post?.[0]?.patient?.[0]?.name}{Post?.[0]?.patient?.[0]?.lname}</span>;

    return (
        <StyledEvent className={`event event-${variant} ${isEnded ? 'isEnded' : ''}`}
            type={event.type}
            mode={theme}
            slots={getTakenSlots()}>
            {event.type !== 'available' ? <Title /> : <i className="icon icon-plus-circle" />}
            <span className="overlay" />
            {
                !isDesktop && event.type !== 'disabled' && (
                    <ModalWindow visibilityHandler={setOpen} isVisible={open}>
                        <EventModal>
                            <div className="block">
                                <span className="label">Event:</span>
                                <span className="value">{event.name}</span>
                            </div>
                            <div className="block">
                                <span className="label">Start:</span>
                                <span className="value">
                                    <span>{moment(event.start).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.start).format('HH:mm A')}</span>
                                </span>
                            </div>
                            <div className="block">
                                <span className="label">End:</span>
                                <span className="value">
                                    <span>{moment(event.end).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.end).format('HH:mm A')}</span>
                                </span>
                            </div>
                        </EventModal>
                    </ModalWindow>
                )
            }
            <div className="cover">
                <i className="icon icon-circle-minus-regular" />
            </div>
        </StyledEvent>
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['day', 'week', 'month']).isRequired
}

export default Event;