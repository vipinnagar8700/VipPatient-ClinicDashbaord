// components
import Page from '@layout/Page';
import DoctorsList from '@widgets/DoctorsList';

const StaffList = () => {
    return (
        <Page title="Medical staff">
            <DoctorsList variant="staff" />
        </Page>
    )
}

export default StaffList;