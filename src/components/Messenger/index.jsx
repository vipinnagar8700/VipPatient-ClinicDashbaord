// components
import Widget from '@components/Widget';
import Tab from 'react-bootstrap/Tab';
import SelectPlaceholder from '@ui/SelectPlaceholder';
import Main from '@components/Messenger/Main';



const Messenger = ({ variant, user }) => {


    return (
        <Tab.Content as={Widget} name="Messenger" mobile={600}>
            {
                user === '' ?
                    <SelectPlaceholder text="Select a patient to start messaging" />
                    :
                    <Main variant={variant} user={user} />
            }
        </Tab.Content>
    )
}

export default Messenger;