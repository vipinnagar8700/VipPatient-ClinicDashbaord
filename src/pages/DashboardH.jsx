// components
import Page from '@layout/Page';
import EventsCompactCalendar from '@widgets/EventsCompactCalendar';
import EpiContextAreaChart from '@widgets/EpiContextAreaChart';
import RadarAreaChart from '@widgets/RadarAreaChart';
import HealthIndexChart from '@widgets/HealthIndexChart';
import DiagnosesDonut from '@widgets/DiagnosesDonut';

const DashboardH = () => {
    return (
        <Page title="Dashboard">
            <div key="events-compact">
                <EventsCompactCalendar />
            </div>
            <div key="epi-context-area">
                <EpiContextAreaChart />
            </div>
            <div key="radar">
                <RadarAreaChart />
            </div>
            <div key="health-index-compact">
                <HealthIndexChart variant="health" />
            </div>
            <div key="diagnoses-donut">
                <DiagnosesDonut variant="wide" />
            </div>
        </Page>
    )
}

export default DashboardH;