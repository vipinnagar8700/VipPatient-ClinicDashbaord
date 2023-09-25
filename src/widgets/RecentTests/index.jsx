// styling
import styled from 'styled-components/macro';
import {flex} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Navigator from '@ui/Navigator';
import TestItem from '@components/TestItem';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import ScrollContainer from '@components/ScrollContainer';

// utils
import {getYearDaysArray} from '@utils/dates';
import moment from 'moment';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useEffect, useRef} from 'react';
import useContentHeight from '@hooks/useContentHeight';
import useWindowSize from '@hooks/useWindowSize';

// data placeholder
import {patient_tests} from '@db/patient_tests';

const List = styled.div`
  ${flex.col};
  gap: 20px;
`;

const RecentTests = () => {
    const isXS = useWindowSize().width < 414;
    const days = getYearDaysArray();
    const todayIndex = moment().diff(moment().startOf('year'), 'days');
    const {index, setIndex, navigate} = useArrayNav(days);

    const headerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef);

    useEffect(() => {
        setIndex(todayIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todayIndex]);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTo(0, 0);
        }
    }, [index]);

    const tests = patient_tests.filter((test) => {
        const dayIndex = moment(test.date).diff(moment().startOf('year'), 'days');
        return dayIndex === index;
    })

    return (
        <Widget name="RecentTests" mobile={600}>
            <WidgetHeader title="Recent laboratory tests" flex="column" elRef={headerRef}>
                <Navigator text={isXS ? days[index].short : days[index].long} handler={navigate} nextDisabled={index === todayIndex}/>
            </WidgetHeader>
            <WidgetBody>
                <ScrollContainer height={height}>
                    <List className="track" ref={listRef}>
                        {
                            tests.length !== 0 ?
                                tests.map((test) => <TestItem key={test.id} data={test}/>)
                                :
                                <NoDataPlaceholder/>
                        }
                    </List>
                </ScrollContainer>
            </WidgetBody>
        </Widget>
    )
}

export default RecentTests;