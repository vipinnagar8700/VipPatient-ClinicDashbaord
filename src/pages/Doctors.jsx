// components
import Page from '@layout/Page';
import DoctorsList from '@widgets/DoctorsList';

const Doctors = () => {
    return (
        <Page title="Doctors List">
            <DoctorsList variant="doctor"/>
        </Page>
    )
}

export default Doctors;