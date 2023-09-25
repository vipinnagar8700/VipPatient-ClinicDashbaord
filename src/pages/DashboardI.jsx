// components
import Page from '@layout/Page';
import DailyPlanner from '@widgets/DailyPlanner';
import MapChart from '@widgets/MapChart';
import EpiContextPeriodChart from '@widgets/EpiContextPeriodChart';
import RecoveryRate from '@widgets/RecoveryRate';
import DailyAppointmentChart from '@widgets/DailyAppointmentChart';

const DashboardI = () => {
    return (
        <Page title="Dashboard">
            <div key="planner">
                <DailyPlanner />
            </div>
            <div key="map">
                <MapChart />
            </div>
            <div key="daily-app-chart">
                <DailyAppointmentChart />
            </div>
            <div key="epi-context">
                <EpiContextPeriodChart />
            </div>
            <div key="recovery-rate">
                <RecoveryRate />
            </div>
        </Page>
    )
}

export default DashboardI;