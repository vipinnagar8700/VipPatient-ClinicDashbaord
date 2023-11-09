// components
import Page from '@layout/Page';
import Statistics from '@widgets/Statistics';
import PaymentsHistory from '@widgets/PaymentsHistory';
import RecentTests from '@widgets/RecentTests';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { Grid } from '@mui/material';
import PatientCalendar from '@widgets/PatientCalendar';
import { useState } from 'react';
import PatientsGenderLineChart from '@widgets/PatientsGenderLineChart';
import EventsCompactCalendar from '@widgets/EventsCompactCalendar';
import HealthIndexChart from '@widgets/HealthIndexChart';
import { useEffect } from 'react';
import { GetAllPatientData, GetAppointmtentREwie } from '@components/Api/AllApi';
import ClinicActivity from './ClinicActivity';
import UpcommingAppointment from './UpcommingAppointment';

const DashboardK = () => {

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


    const [PatientData, setPatientData] = useState(false)
    const [AppointmentRequestData, setAppointmentRequestData] = useState(false)


    useEffect(() => {
        let TotalPatientData = GetAllPatientData()
        if (TotalPatientData) {
            TotalPatientData.then((data) => {
                console.log(data, "Total Active Patient!")
                setPatientData(data?.result || '')
            })
        }
        let TotalAppointmentRequest = GetAppointmtentREwie()
        if (TotalAppointmentRequest) {
            TotalAppointmentRequest.then((data) => {
                console.log(data, "  Total Appointment Request!")
                setAppointmentRequestData(data?.result || '')
            })
        }

    }, [])


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title=" Clinic Dashboard">
                <Grid container >
                    <Grid items xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-cause">
                            <Statistics data={{ type: 'cause', value: PatientData.length, text: 'Total Active Patients' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-teeth">
                            <Statistics data={{ type: 'teeth', value: '5', text: 'Today Valid Certifications' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: '5', text: 'Certifications Expiring soon' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-cause">
                            <Statistics data={{ type: 'cause', value: '2', text: 'Total Appointments Today' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-teeth">
                            <Statistics data={{ type: 'teeth', value: '0', text: 'Unread Messages' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: '0', text: 'New Tasks' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: '0', text: 'New Appointment Requests' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: '0', text: 'New Appointment Requests' }} />
                        </div>
                    </Grid>
                    <Grid items  xs={12} sm={6} md={4}>
                        <div style={{ margin: '4px' }} key="stat-heart">
                            <Statistics data={{ type: 'heart', value: AppointmentRequestData.length, text: 'New Appointment Requests' }} />
                        </div>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid items xs={12} sm={6} md={3}>

                        <div style={{ margin: '4px' }} key="events-compact">
                            <EventsCompactCalendar />
                        </div>
                    </Grid>
                    <Grid items xs={12} sm={6} md={9}>

                        <div style={{ margin: '4px' }} key="health-index">
                            <HealthIndexChart variant="both" />
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid items sx={12} md={6}>

                        <div style={{ margin: '4px' }} key="events-compact">
                            <ClinicActivity />
                        </div>
                    </Grid>
                    <Grid items sx={12} md={6}>

                        <div style={{ margin: '4px' }} key="health-index">
                            <UpcommingAppointment />
                        </div>
                    </Grid>
                </Grid>

                {/* <div key="payments-history">
                <PaymentsHistory variant="compact"/>
            </div>
            <div key="recent-tests">
                <RecentTests/>
            </div> */}
            </Page>
        </>

    )
}

export default DashboardK;