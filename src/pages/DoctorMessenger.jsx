// components
import Page from '@layout/Page';
import UserList from '@components/Messenger/UsersList';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';

// hooks
import { useState } from 'react';
import Messenger from '@components/Messenger';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const DoctorMessenger = () => {
    const [activeList, setActiveList] = useState('patients');
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
        <>
            <Sidebar />
            <Panel />
            <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
                <Page title="Recent Talks">
                    <div key="contacts-list">
                        <UserList variant="doctor"
                            user={selectedTab}
                            onUserSelect={setSelectedTab}
                            setModal={setOpenModal}
                            activeList={activeList}
                            setActiveList={setActiveList}
                        />
                    </div>
                    <div key="messenger">
                        {
                            smallScreen ?
                                <ModalWindow isVisible={openModal} visibilityHandler={handleModalClose}>
                                    <Messenger variant="doctor" user={selectedTab} />
                                </ModalWindow>
                                :
                                <Messenger variant="doctor" user={selectedTab} />
                        }
                    </div>
                </Page>
            </Tab.Container>
        </>

    );
}

export default DoctorMessenger;