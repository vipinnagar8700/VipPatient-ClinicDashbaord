// components
import Page from '@layout/Page';
import HeartRate from '@widgets/HeartRate';
import GenderScatter from '@widgets/GenderScatter';
import DailyAppointmentsByDoc from '@widgets/DailyAppointmentsByDoc';
import RecentQuestions from '@widgets/RecentQuestions';

const DashboardE = () => {
    return (
        <Page title="Dashboard">
            <div key="heart-rate">
                <HeartRate />
            </div>
            <div key="gender-scatter">
                <GenderScatter />
            </div>
            <div key="daily-app">
                <DailyAppointmentsByDoc />
            </div>
            <div key="questions">
                <RecentQuestions />
            </div>
        </Page>
    );
}

export default DashboardE;