// styled components
import {Container, MenuModal} from './style';

// components
import {motion} from 'framer-motion';
import ModalWindow from '@components/ModalWindow';
import {ScaleControl, ContrastControl, ThemeControl, DirectionControl} from '@components/GlobalSettingsControls';

// hooks
import {useNavigate} from 'react-router-dom';
import {useSidebarContext} from '@contexts/sidebarContext';
import {useState} from 'react';

const BottomMenu = () => {
    const [open, setOpen] = useState(false);
    const {isSidebarOpen} = useSidebarContext();
    const navigate = useNavigate();

    const buttons = [
        {
            label: 'Emergency call',
            icon: 'microphone-light'
        },
        {
            label: 'Profile',
            icon: 'user-light'
        },
        {
            label: 'Home',
            icon: 'house-solid',
            onClick: () => navigate('/')
        },
        {
            label: 'Notifications',
            icon: 'bell-light'
        },
        {
            label: 'Accessibility settings',
            icon: 'gear-light',
            onClick: () => setOpen(true)
        }
    ]

    return (
        <Container as={motion.div}
            initial={{y: '100%'}}
            animate={{y: isSidebarOpen ? '100%' : 0}}
            transition={{duration: .3, ease: 'linear', type: 'tween'}}
        >
            {
                buttons.map(btn => {
                    const {label, icon, onClick} = btn;
                    return (
                        <button key={label} aria-label={label} onClick={onClick}>
                            <i className={`icon icon-${icon}`}></i>
                        </button>
                    )
                })
            }
            <ModalWindow isVisible={open} visibilityHandler={setOpen}>
                <MenuModal style={{gap: 20}}>
                    <DirectionControl/>
                    <ThemeControl />
                    <ScaleControl />
                    <ContrastControl />
                </MenuModal>
            </ModalWindow>
        </Container>
    )
}

export default BottomMenu;