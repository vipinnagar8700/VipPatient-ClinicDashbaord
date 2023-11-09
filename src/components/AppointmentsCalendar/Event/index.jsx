import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import useWindowSize from '@hooks/useWindowSize';
import { AllAppointmentDetails } from '@components/Api/AllApi';
import ModalWindow from '@components/ModalWindow';

const Event = ({ event, variant }) => {
    const [appointments, setAppointments] = useState([]);
    const [open, setOpen] = useState(false);
    const [hoveredDay, setHoveredDay] = useState(null);
    const { theme } = useTheme();
    const isDesktop = useWindowSize().width >= 1280;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AllAppointmentDetails();
                console.log(data?.result, "Appointment Data");
                setAppointments(data?.result || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // New state to track which dates have their appointment list expanded
    const [expandedDates, setExpandedDates] = useState({});

    const formattedTime = (datetimeString) => {
        const dateObject = new Date(datetimeString);
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    };

    const groupAppointmentsByDay = () => {
        const groupedAppointments = {};
        appointments.forEach((appointment) => {
            const day = moment(appointment.end_date).format('YYYY-MM-DD');
            if (!groupedAppointments[day]) {
                groupedAppointments[day] = [];
            }
            groupedAppointments[day].push(appointment);
        });
        return groupedAppointments;
    };

    const handleDayMouseEnter = (day) => {
        setHoveredDay(day);
    };

    const handleDayMouseLeave = () => {
        setHoveredDay(null);
    };

    // Function to toggle the appointment list for a date
    const toggleAppointmentList = (day) => {
        setExpandedDates((prevState) => ({
            ...prevState,
            [day]: !prevState[day],
        }));
    };

    const renderAppointments = () => {
        const groupedAppointments = groupAppointmentsByDay();
        return Object.keys(groupedAppointments).map((day) => {
            const appointmentsForDay = groupedAppointments[day];
            const shouldShowBadge = appointmentsForDay.length > 2;

            return (
                <div
                    key={day}
                    className={`event event-${variant} ${shouldShowBadge ? 'has-badge' : ''}`}
                    onMouseEnter={() => handleDayMouseEnter(day)}
                    onMouseLeave={handleDayMouseLeave}
                >
                    <span className="event-title" style={{ direction: 'ltr', color: 'green', fontSize: 12 }}>
                        {formattedTime(appointmentsForDay[0].end_date)} {appointmentsForDay[0].patient[0].name}{' '}
                        {appointmentsForDay[0].patient[0].lname}
                    </span>
                    {shouldShowBadge && (
                        <div
                            className="badge"
                            onClick={() => toggleAppointmentList(day)} // Add onClick to toggle the list
                        >
                            {appointmentsForDay.length}
                        </div>
                    )}
                    {/* Render appointment list if expanded */}
                    {expandedDates[day] && (
                        <div className="appointment-list">
                            {appointmentsForDay.map((appointment, index) => (
                                <div key={index} className="appointment-item">
                                    {/* Display appointment details here */}
                                    <span>{formattedTime(appointment.end_date)}</span>
                                    <span>
                                        {appointment.patient[0].name} {appointment.patient[0].lname}
                                    </span>
                                    {/* Additional appointment details can be added here */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <>
            {renderAppointments()}
            {/* You can add your modal window code here */}
        </>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['day', 'week', 'month']).isRequired,
};

export default Event;
