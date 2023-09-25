// styled components
import {Actions, Header, Input, Label, Search} from './style';

// components
import Logo from '@ui/Logo';
import MenuButton from '@ui/MenuButton';
import ShapeButton from '@ui/ShapeButton';
import {motion} from 'framer-motion';
import CurrentUser from '@layout/Panel/CurrentUser';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePanelScroll from '@hooks/usePanelScroll';
import {useSidebarContext} from '@contexts/sidebarContext';
import {useRef, useEffect} from 'react';

const Panel = () => {
    const {width} = useWindowSize();
    const isMobile = width < 768;
    const isDesktop = width >= 1366;
    const classname = usePanelScroll();
    const {isSidebarOpen} = useSidebarContext();
    const headerRef = useRef(null);

    useEffect(() => {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }, [width]);

    return (
        <Header as={motion.header}
                animate={{y: isSidebarOpen && isMobile ? '-100%' : 0}}
                transition={{duration: .3, ease: 'linear', type: 'tween'}}
                className={classname}
                ref={headerRef}>
            {
                !isDesktop && (
                    <div className="logo-wrapper">
                        <Logo compact={isMobile}/>
                    </div>
                )
            }
            <Search>
                <Input type="search" id="globalSearch" placeholder={width < 414 ? 'Search' : 'Search patients or doctors'}/>
                <Label htmlFor="globalSearch">
                    <i className="icon icon-search"></i>
                </Label>
            </Search>
            {
                isMobile ?
                    <MenuButton/>
                    :
                    <Actions>
                        <ShapeButton shape="square" label="Notification" icon="bell" hasNotification={true}/>
                        {
                            isDesktop ?
                                <CurrentUser/> : <ShapeButton shape="square" label="Profile" icon="user"/>
                        }
                        { width < 1366 && <MenuButton/> }
                    </Actions>
            }
        </Header>
    )
}

export default Panel;