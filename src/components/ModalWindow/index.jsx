// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, flex, light} from '@styles/vars';

// components
import Modal from '@mui/material/Modal';

// hooks
import {useEffect} from 'react';

// utils
import PropTypes from 'prop-types';

export const ModalContent = styled.div`
  padding: 24px;
  background-color: ${theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg,
  })};
  ${flex.col};
  border-radius: 8px;
  gap: 16px;
`;

const ModalWindow = ({isVisible, visibilityHandler, children}) => {
    const html = document.documentElement;
    useEffect(() => {
        isVisible ? html.classList.add('no-scroll') : html.classList.remove('no-scroll');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible]);

    return (
        <Modal open={isVisible}
               onClose={() => visibilityHandler(false)}
               sx={{
                   zIndex: 2000000,
                   padding: '24px',
                   maxHeight: '100vh',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center'
               }}
               componentsProps={{
                   backdrop: {
                       transitionDuration: 500,
                       sx: {
                           backgroundColor: 'rgba(0, 0, 0, 0.7)'
                       }
                   }
               }}
               closeAfterTransition>
            <>
                {children}
            </>
        </Modal>
    )
}

ModalWindow.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    visibilityHandler: PropTypes.func.isRequired,
}

export default ModalWindow;