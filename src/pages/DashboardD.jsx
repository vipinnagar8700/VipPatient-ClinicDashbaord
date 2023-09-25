// components
import Page from '@layout/Page';
import TaskScheduler from '@widgets/TaskScheduler';
import PatientsGenderLineChart from '@widgets/PatientsGenderLineChart';
import RadarAreaChart from '@widgets/RadarAreaChart';
import BloodTest from '@widgets/BloodTest';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const DashboardD = () => {
    return (
        <>
        <Sidebar/>
        <Panel/>
         <Page title="Dashboard">
            <div key="scheduler">
                <TaskScheduler/>
            </div>
            <div key="gender">
                <PatientsGenderLineChart/>
            </div>
            <div key="radar">
                <RadarAreaChart/>
            </div>
            <div key="blood">
                <BloodTest/>
            </div>
        </Page>
        </>
       
    )
}

export default DashboardD;