// components
import Page from '@layout/Page';
import DoctorCalendar from '@widgets/DoctorCalendar';

// utils
import {useState} from 'react';

const DoctorAppointments = () => {
    const [currentView, setView] = useState('day');

    let pageTitle = '';
    switch (currentView) {
        case 'week':
            pageTitle = 'Upcoming Appointments';
            break;
        case 'month':
            pageTitle = 'Appointments Archive';
            break;
        default:
            pageTitle = 'Today appointments';
            break;
    }

    return (
        <Page title={pageTitle} hasBadge={currentView === 'day'} qty={2}>
            <DoctorCalendar current={currentView} handler={setView}/>
        </Page>
    )
}

export default DoctorAppointments;