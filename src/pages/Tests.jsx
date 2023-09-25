// components
import Page from '@layout/Page';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import PatientsTests from '@widgets/PatientsTests';

const Tests = () => {
    return (
        <>
        <Sidebar/>
        <Panel/>
        <Page title="Medical Test Results">
            <PatientsTests/>
        </Page>
        </>
        
    )
}

export default Tests;