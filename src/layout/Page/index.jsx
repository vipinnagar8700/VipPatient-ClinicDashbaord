// styled components
import {Content, ContentTitle, Controls, Wrapper, Widgets} from './style';
import {QtyBadge} from '@ui/Badge/style';
import {ControlWrapper} from '@components/GlobalSettingsControls/style';

// components
import {Helmet} from 'react-helmet';
import {
    ContrastControl,
    FullscreenControl,
    LayoutControl,
    ScaleControl,
    ThemeControl,
    DirectionControl
} from '@components/GlobalSettingsControls';
import Grid from '@layout/Grid';
import {motion} from 'framer-motion';

// utils
import PropTypes from 'prop-types';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import useMobileDetect from 'use-mobile-detect-hook';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useRef, useEffect} from 'react';

const Page = ({title, children, hasBadge, hasTitle = true, qty}) => {
    const pageRef = useRef(null);
    const device = useMobileDetect();
    const {width} = useWindowSize();
    const isTablet = width > 767.98;

    // get the current location from the router
    const {pathname} = useLocation();
    // detect if the current location is dashboard
    const isDashboard = pathname.includes('dashboard');
    // modify the path to get corresponding layout from the store
    const layoutKey = pathname.replace('/', '');
    const layouts = useSelector(state => state['layout'].layout);
    const current = layouts[layoutKey];

    useEffect(() => {
        if (pageRef.current) {
            pageRef.current.scrollTop = 0;
        }
    }, [pathname]);

    return (
        <Content ref={pageRef}>
            <Helmet>
                <title>{`VIP Patient | ${title}`}</title>
            </Helmet>
            <Widgets>
                <Wrapper as={motion.div}
                         initial={{opacity: 0}}
                         whileInView={{opacity: 1}}
                         transition={{duration: .4}}
                         viewport={{once: true}}>
                    {
                        hasTitle && (
                            <ContentTitle>
                                {title} {hasBadge && qty && qty > 0 && <QtyBadge>+{qty}</QtyBadge>}
                            </ContentTitle>
                        )
                    }
                    {
                        isTablet &&
                        <Controls>
                            {
                                device.isDesktop() && (
                                    <>
                                        {/* {
                                            isDashboard && (
                                                <ControlWrapper>
                                                    <LayoutControl/>
                                                </ControlWrapper>
                                            )
                                        }
                                        <ControlWrapper>
                                            <FullscreenControl/>
                                        </ControlWrapper> */}
                                    </>
                                )
                            }
                            {/* <ControlWrapper>
                                <ContrastControl/>
                            </ControlWrapper>
                            <ControlWrapper>
                                <ThemeControl/>
                            </ControlWrapper>
                            <ControlWrapper>
                                <DirectionControl/>
                            </ControlWrapper>
                            <ControlWrapper>
                                <ScaleControl/>
                            </ControlWrapper> */}
                        </Controls>
                    }
                </Wrapper>
                {current ? <Grid id={layoutKey} layouts={current} desktop={device.isDesktop()}>{children}</Grid> : children}
            </Widgets>
        </Content>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    hasBadge: PropTypes.bool,
    hasTitle: PropTypes.bool,
    qty: PropTypes.number,
}

export default Page;