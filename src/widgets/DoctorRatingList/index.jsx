// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import ScrollContainer from '@components/ScrollContainer';
import PeriodNav from '@components/PeriodNav';
import Tab from 'react-bootstrap/Tab';
import DoctorRatingItem from '@components/DoctorRatingItem';

// hooks
import useContentHeight from '@hooks/useContentHeight';
import {useRef, useState, useEffect} from 'react';
import usePeriodNav from '@hooks/usePeriodNav';

// data placeholder
import {doctors} from '@db/doctors';

const DoctorsRatingList = () => {
    const [current, setCurrent] = useState(usePeriodNav().period);
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const height = useContentHeight(headerRef);

    useEffect(() => {
        contentRef.current.scrollTop = 0;
    }, [current]);

    const List = ({period}) => {
        return (
            <>
                {
                    doctors.map(doctor => <DoctorRatingItem key={doctor.id} data={doctor} period={period}/>)
                }
            </>
        )
    }

    return (
        <Widget name="DoctorsRatingList" mobile={600}>
            <WidgetHeader title="Doctors rating" flex="column" style={{paddingBottom: 4}} elRef={headerRef}>
                <PeriodNav current={current} handler={setCurrent} />
            </WidgetHeader>
            <WidgetBody style={{padding: 0}}>
                <ScrollContainer height={height}>
                    <div className="track" ref={contentRef}>
                        <Tab.Container activeKey={current} transition={true}>
                            <Tab.Content>
                                <Tab.Pane eventKey="year">
                                    <List period="year"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="month">
                                    <List period="month"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="week">
                                    <List period="week"/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </ScrollContainer>
            </WidgetBody>
        </Widget>
    )
}

export default DoctorsRatingList;