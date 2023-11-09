// components
import Page from '@layout/Page';
import TasksList from '@widgets/TasksList';
import ConfirmedDiagnoses from '@widgets/ConfirmedDiagnoses';
import DiagnosesDonut from '@widgets/DiagnosesDonut';
import RadarAreaChart from '@widgets/RadarAreaChart';
import PatientCalendar from '@widgets/PatientCalendar';
// utils
import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import MYCalendar from '@components/CustomAppointment.js/Calender';





const DashboardC = () => {
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

        <>
            <Sidebar />
            <Panel />
            <Box title="Appointments"  sx={{
                    margin: 3,
                    marginTop: '3%',
                    display: 'flex',
                    flexWrap: 'wrap',  // Allow items to wrap to the next line
                    gap: 5,
                    marginBottom:'5%'
                    // marginRight: 10
                }}>
                <div key="task-list" style={{ flex: '0.2' }}>
                    <TasksList />
                </div>
                <div key="calendar" style={{ flex: '1' }}>
                    <MYCalendar current={currentView} handler={setView} />
                </div>


            </Box>
        </>


    )
}

export default DashboardC;