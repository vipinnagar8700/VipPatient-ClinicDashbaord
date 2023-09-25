// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import {Tab} from 'react-bootstrap'
import TabNav from "@ui/TabNav";
import TabNavItem from '@ui/TabNav/TabNavItem';
import AppointmentItem from '@components/AppointmentItem';
import ScrollContainer from '@components/ScrollContainer';

// utils
import {nanoid} from 'nanoid';

// hooks
import useContentHeight from '@hooks/useContentHeight';
import {useRef} from 'react';

// data placeholder
import {appointments} from '@db/appointments';

const PatientAppointmentsHistory = () => {
    const periods = ['year', 'month', 'week'];
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const height = useContentHeight(headerRef);

    const handleTabChange = () => {
        contentRef.current.scrollTop = 0;
    }

    return (
        <Widget name="PatientAppointmentsHistory" mobile={600}>
            <Tab.Container defaultActiveKey="year" transition={true}>
                <WidgetHeader title="Previous appointments" elRef={headerRef}>
                    <TabNav>
                        {periods.map(period => <TabNavItem key={nanoid(5)} eventKey={period} title={period} handler={handleTabChange} />)}
                    </TabNav>
                </WidgetHeader>
                <WidgetBody>
                    <ScrollContainer height={height}>
                        <div className="track" ref={contentRef}>
                            <Tab.Content>
                                {
                                    periods.map(period => <Tab.Pane key={nanoid(5)} eventKey={period}>
                                        {
                                            appointments.map(item => <AppointmentItem key={item.id} data={item} variant="patient" />)
                                        }
                                    </Tab.Pane>)
                                }
                            </Tab.Content>
                        </div>
                    </ScrollContainer>
                </WidgetBody>
            </Tab.Container>
        </Widget>
    )
}

export default PatientAppointmentsHistory;