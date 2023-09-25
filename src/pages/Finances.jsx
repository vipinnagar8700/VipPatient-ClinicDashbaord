// components
import Page from '@layout/Page';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import Balance from '@widgets/Balance';


const Finances = () => {
    return (
        <>
        <Sidebar/>
        <Panel/>
        <Page title="Intake Form">
            <div key="balance">
                <Balance/>
            </div>
        </Page>
        </>
        
    )
}

export default Finances;