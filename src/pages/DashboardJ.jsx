// components
import Page from '@layout/Page';
import AppointmentsScheduler from '@widgets/AppointmentsScheduler';
import DiseaseRate from '@widgets/DiseaseRate';
import PatientsRadialBar from '@widgets/PatientsRadialBar';
import PaymentsOverview from '@widgets/PaymentsOverview';
import RadarAreaChart from '@widgets/RadarAreaChart';

const DashboardJ = () => {
    return (
        <Page title="Dashboard">
            <div key="app-scheduler">
                <AppointmentsScheduler />
            </div>
            <div key="disease">
                <DiseaseRate />
            </div>
            <div key="patients-radial">
                <PatientsRadialBar />
            </div>
            <div key="pay-overview">
                <PaymentsOverview/>
            </div>
            <div key="radar">
                <RadarAreaChart/>
            </div>
        </Page>
    );
}

export default DashboardJ;