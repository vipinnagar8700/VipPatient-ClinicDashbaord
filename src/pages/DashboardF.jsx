// components
import Page from '@layout/Page';
import PainLocation from '@widgets/PainLocation';
import DailyAppointmentChart from '@widgets/DailyAppointmentChart';
import HepatitisChart from '@widgets/HepatitisChart';
import PaymentsHistory from '@widgets/PaymentsHistory';

const DashboardF = () => {
    return (
        <Page title="Dashboard">
            <div key="pain-location">
                <PainLocation />
            </div>
            <div key="daily-app-chart">
                <DailyAppointmentChart />
            </div>
            <div key="hepatitis">
                <HepatitisChart />
            </div>
            <div key="payments-history">
                <PaymentsHistory variant="large" />
            </div>
        </Page>
    );
}

export default DashboardF;