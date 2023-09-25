// styling
import {colors} from '@styles/vars';

// styled components
import {Total, List} from '@widgets/PaymentsOverview/style';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import LabeledProgress from '@ui/LabeledProgress';

// hooks
import useArrayNav from '@hooks/useArrayNav';

// utils
import {getWeekArray} from '@utils/dates';
import moment from 'moment';

const PaymentsOverview = () => {
    const week1 = moment().week() - 1, week2 = moment().week() - 2, week3 = moment().week() - 3;
    const weeks = [week1, week2, week3];
    const {index, navigate} = useArrayNav(weeks);

    const goal = 300;
    const normalise = value => (value / (goal / 100));

    const data = {
        [week1]: {
            sun: 124.87,
            mon: 81.12,
            tue: 155,
            wed: 268.14,
            thu: 120,
            fri: 20.11,
            sat: 69.96
        },
        [week2]: {
            sun: 204.11,
            mon: 20.58,
            tue: 104,
            wed: 55.32,
            thu: 302.80,
            fri: 89.11,
            sat: 0
        },
        [week3]: {
            sun: 84.19,
            mon: 120.90,
            tue: 23.87,
            wed: 90.80,
            thu: 150.31,
            fri: 47.19,
            sat: 167.96
        }
    }

    const calculateTotal = (data) => {
        let total = 0;
        for (let key in data) {
            total += data[key];
        }
        return total.toFixed(2);
    }

    const setText = (selected) => {
        const weeksOfYear = getWeekArray();
        if (selected === week1) {
            return 'last week';
        } else {
            for (let i = 0; i < weeksOfYear.length; i++) {
                if (weeksOfYear[i].week === selected) {
                    return `${weeksOfYear[i].startShort} - ${weeksOfYear[i].endShort}`;
                }
            }
        }
    };

    return (
        <Widget name="PaymentsOverview">
            <WidgetNav title="Payments" handler={navigate}/>
            <WidgetBody sidePadding={true} style={{justifyContent: 'space-between'}}>
                <Total>
                    <span className="highlight">€ {calculateTotal(data[weeks[index]])}</span> was
                    earned {setText(weeks[index])}
                </Total>
                <List>
                    {
                        Object.keys(data[weeks[index]]).map(key => {
                            const value = data[weeks[index]][key];
                            return (
                                <LabeledProgress key={key}
                                                 label={key}
                                                 value={normalise(value)}
                                                 barHeight={188}
                                                 color={value < 50 ? colors.red : colors.purple}
                                />
                            )
                        })
                    }
                </List>
            </WidgetBody>
        </Widget>
    );
}

export default PaymentsOverview;