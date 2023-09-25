// components
import Page from '@layout/Page';
import DoctorsRatingList from '@widgets/DoctorRatingList';
import HealthIndexChart from '@widgets/HealthIndexChart';
import DoctorCureRate from '@widgets/DoctorCureRate';

const DashboardG = () => {
    return (
        <Page title="Dashboard">
            <div key="doctors-rating">
                <DoctorsRatingList type="tabs"/>
            </div>
            <div key="health-index">
                <HealthIndexChart variant="both"/>
            </div>
            <div key="cure-rate">
                <DoctorCureRate/>
            </div>
        </Page>
    )
}

export default DashboardG;