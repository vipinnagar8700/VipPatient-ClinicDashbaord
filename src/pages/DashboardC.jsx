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
            <Box title="Appointments" sx={{ display: 'flex', marginTop: 3, gap: 5 }}>
                <div key="task-list">
                    <TasksList />
                </div>
                <div key="task-list">
                    <PatientCalendar current={currentView} handler={setView} />
                </div>


            </Box>
        </>


    )
}

export default DashboardC;