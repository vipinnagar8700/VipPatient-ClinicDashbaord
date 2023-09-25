// styling
import styled from 'styled-components/macro';
import {colors} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import LabeledProgress from '@ui/LabeledProgress';
import ScrollContainer from 'react-indiana-drag-scroll';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useRef, useEffect} from 'react';
import {useTheme} from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  overflow-x: scroll;
  padding: 0 24px;
  user-select: none;
`

const DoctorOverallAppointment = () => {
    const {theme} = useTheme();
    const listRef = useRef(null);

    const drawLabels = () => {
        const labels = [];
        for (let i = 0; i < data[index].length; i++) {
            labels.push(`${8 + i}:00`);
        }
        return labels;
    }

    const data = [
        [37, 12, 58, 20, 0, 10, 15, 44, 19, 68, 50],
        [20, 55, 44, 31, 75, 0, 0, 59, 84, 20, 10],
        [80, 50, 30, 60, 40, 20, 50, 65, 85, 0, 40]
    ]

    const {index, navigate} = useArrayNav(data);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTo(0, 0);
        }
    }, [index])

    return (
        <Widget name="DoctorOverallAppointment" shadow={true}>
            <WidgetNav title="Overall Appointment" style={{paddingBottom: 17}} handler={navigate}/>
            <WidgetBody sidePadding={true} style={{paddingBottom: 20}}>
                <List innerRef={listRef} as={ScrollContainer} activationDistance={5} component="ul">
                    {
                        data[index].map((item, i) => {
                            return (
                                <LabeledProgress
                                    key={drawLabels()[i]}
                                    label={drawLabels()[i]}
                                    value={item}
                                    color={theme === 'light' ? colors.azure : colors.blue}/>
                            )
                        })
                    }
                </List>
            </WidgetBody>
        </Widget>
    )
}

export default DoctorOverallAppointment;