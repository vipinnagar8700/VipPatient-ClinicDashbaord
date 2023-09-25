// components
import Page from '@layout/Page';
import PatientCalendar from '@widgets/PatientCalendar';

// utils
import {useState} from 'react';

const PatientAppointments = () => {
    const [currentView, setView] = useState('day');

    let pageTitle = '';
    switch (currentView) {
        case 'week':
            pageTitle = 'Available Appointments Time';
            break;
        case 'month':
            pageTitle = 'Appointments Schedule';
            break;
        default:
            pageTitle = 'Your appointments';
            break;
    }

    return (
        <Page title={pageTitle}>
            <PatientCalendar current={currentView} handler={setView}/>
        </Page>
    )
}

export default PatientAppointments;