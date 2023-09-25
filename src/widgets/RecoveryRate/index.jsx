// styling
import styled from 'styled-components/macro';
import {textSizes, flex, colors, fonts} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Navigator from '@ui/Navigator';
import Progress from '@ui/Progress';

// utils
import {getMonthArray} from '@utils/dates';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useEffect} from 'react';

const List = styled.div`
  ${flex.col};
  gap: 18px;
  margin-top: 20px;
`;

const Item = styled.div`
  ${flex.col};
  gap: 10px;
  .info {
    display: flex;
    ${flex.between};
    text-transform: capitalize;
    font-size: ${textSizes['14']};
    &_num {
      font-family: ${fonts.accent};
      font-weight: 500;
    }
  }
`;

const RecoveryRate = () => {
    const months = getMonthArray();
    const currentMonth = new Date().getMonth();
    const {index, setIndex, navigate} = useArrayNav(months);

    useEffect(() => {
        setIndex(currentMonth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const data = [
        {
            label: 'cold',
            values: [25, 74, 80, 52, 71, 38, 66, 89, 44, 15, 94, 80],
            color: colors.green
        },
        {
            label: 'fracture',
            values: [66, 15, 91, 20, 63, 48, 12, 19, 59, 23, 12, 66],
            color: colors.orange
        },
        {
            label: 'acne',
            values: [12, 66, 15, 91, 20, 63, 48, 12, 19, 59, 23, 12],
            color: colors.purple
        },
        {
            label: 'hematoma',
            values: [50, 11, 64, 85, 29, 33, 58, 10, 69, 41, 15, 49],
            color: colors.teal
        },
        {
            label: 'caries',
            values: [91, 20, 63, 48, 64, 85, 29, 33, 66, 15, 91, 20],
            color: colors.azure
        }
    ];

    const handleKeyboardNav = (e) => {
        e.stopPropagation();
        if (e.key === 'ArrowLeft') {
            setIndex(index - 1);
        } else if (e.key === 'ArrowRight') {
           setIndex(index + 1);
        }
    }

    return (
        <Widget name="RecoveryRate" onKeyPress={handleKeyboardNav}>
            <WidgetHeader title="Recovery Rate" />
            <WidgetBody>
                <Navigator text={months[index].formatted}
                           handler={navigate}
                           nextDisabled={currentMonth === index}
                           prevDisabled={index === 0} />
                <List>
                    {
                        data.map(item => {
                            const {label, values, color} = item;
                            return (
                                <Item key={label}>
                                    <Progress label={label} value={values[index]} color={color} />
                                    <div className="info">
                                        <span className="info_num">{values[index]}%</span>
                                        <span>{label}</span>
                                    </div>
                                </Item>
                            )
                        })
                    }
                </List>
            </WidgetBody>
        </Widget>
    );
}

export default RecoveryRate;