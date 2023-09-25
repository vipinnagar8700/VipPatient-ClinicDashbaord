// components
import Page from '@layout/Page';
import PatientAppointmentsHistory from '@widgets/PatientAppointmentsHistory';
import PatientOverallAppointments from '@widgets/PatientOverallAppointments';
import RadarAreaChart from '@widgets/RadarAreaChart';
import DiagnosesDonut from '@widgets/DiagnosesDonut';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const DashboardB = () => {
    return (
        <>
            <Sidebar />
<Panel/>
            <Page title="Basic Patient Dashboard">
                <div key="patient-app-history">
                    <PatientAppointmentsHistory />
                </div>
                <div key="patient-overall-appointments">
                    <PatientOverallAppointments />
                </div>
                <div key="radar">
                    <RadarAreaChart />
                </div>
                <div key="diagnoses-donut">
                    <DiagnosesDonut variant="basic" />
                </div>
            </Page>
        </>

    );
}

export default DashboardB;