// components
import Page from '@layout/Page';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import UserSettings from '@widgets/UserSettings';

const Settings = () => {
    return (
        <>
        <Sidebar/>
        <Panel/>
        <Page title="Settings">
            <UserSettings/>
        </Page>
        </>
        
    );
}

export default Settings;