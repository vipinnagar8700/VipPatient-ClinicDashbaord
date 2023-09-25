// components
import Page from '@layout/Page';
import UserList from '@components/Messenger/UsersList';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Messenger from '@components/Messenger';

// hooks
import {useState} from 'react';

const PatientMessenger = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    return (
        <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
            <Page title="Messages">
                <div key="contacts-list">
                    <UserList variant="patient" user={selectedTab} onUserSelect={setSelectedTab} setModal={setOpenModal} />
                </div>
                <div key="messenger">
                    {
                        smallScreen ?
                            <ModalWindow isVisible={openModal} visibilityHandler={handleModalClose}>
                                <Messenger variant="patient" user={selectedTab}/>
                            </ModalWindow>
                            :
                            <Messenger variant="patient" user={selectedTab}/>
                    }
                </div>
            </Page>
        </Tab.Container>
    );
}

export default PatientMessenger;