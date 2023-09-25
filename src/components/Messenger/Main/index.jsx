// styled components
import { Container, Animation } from '@components/Messenger/style';

// components
import Header from '@components/Messenger/Header';
import Message from '@components/Messenger/Message';
import Input from '@components/Messenger/Input';
import Lottie from 'lottie-react';
import GroupSeparator from '@ui/GroupSeparator';
import Tab from 'react-bootstrap/Tab';
import ScrollContainer from '@components/ScrollContainer';

// utils
import moment from 'moment';

// hooks
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useContentHeight from '@hooks/useContentHeight';

// assets
import typing from '@assets/typing.json';
import VidocallMain from '../Header/App';

const Main = ({ user }) => {
    console.log(user, "KKKKKKKKKKK")
    const variant = 'patient'
    const doctor = useSelector(state => state['messenger']['doctor']);
    const patient = useSelector(state => state['messenger']['patient']);
    const db = variant === 'patient' ? patient : doctor;
    const currentUser = user && db.find(item => item.id === user);
    // console.log(currentUser, "AAAA")
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);



    return (
        <Container>
            {
                user && <Header variant={variant} user={user} elRef={headerRef} />
            }
            {/* < VidocallMain user={user} /> */}


        </Container>
    )
}

export default Main;