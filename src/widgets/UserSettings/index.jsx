// styled components
import {SettingsHeader} from '@widgets/UserSettings/style';
import {Divider} from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import {Tab} from 'react-bootstrap'
import TabNav from '@ui/TabNav';
import TabNavItem from '@ui/TabNav/TabNavItem';
import Form from './Form';

const UserSettings = () => {
    return (
        <Widget >
            <Tab.Container defaultActiveKey="patient" transition={true}>
                <SettingsHeader>
                    <div className="wrapper">
                        <h2 className="title">My Profile</h2>
                        
                    </div>
                    <Divider />
                </SettingsHeader>
                <WidgetBody>
                    <Tab.Content>
                        <Tab.Pane eventKey="patient">
                            <Form type="patient" />
                        </Tab.Pane>
                        
                    </Tab.Content>
                </WidgetBody>
            </Tab.Container>
        </Widget>
    )
}

export default UserSettings;