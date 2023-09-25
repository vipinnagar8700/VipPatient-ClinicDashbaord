// styling
import {colors, light, dark} from '@styles/vars';

// styled components
import Labels from '@components/Chart/Labels';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Navigator from '@ui/Navigator';
import CartesianChart from '@components/CartesianChart';
import LegendList from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useTheme} from 'styled-components'
import useWindowSize from '@hooks/useWindowSize';

// utils
import moment from 'moment';
import {getMonthArray} from '@utils/dates';

// data placeholder
import {y2019, y2020, y2021, y2022} from '@db/gender';
import {rgba} from 'polished';

const PatientsGenderLineChart = () => {
    const isMobile = useWindowSize().width < 768;
    const {theme} = useTheme();
    const periods = ['2019', '2020', '2021', '2022'];
    const {index, navigate} = useArrayNav(periods);

    // common line props
    const common = {
        type:"monotone",
        strokeWidth: 3,
        dot: false
    }

    const chartElems = [
        {
            ...common,
            dataKey: "men",
            stroke: colors.azure,
            activeDot: {r: 4, fill: colors.azure, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.azure, .5)})`
            }
        },
        {
            ...common,
            dataKey: "women",
            stroke: colors.peach,
            activeDot: {r: 4, fill: colors.peach, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.peach, .5)})`
            }
        }
    ];

    const currentData = () => {
        switch (periods[index]) {
            case '2019':
                return y2019
            case '2020':
                return y2020
            case '2021':
                return y2021
            default:
            case '2022':
                return y2022
        }
    }

    const data = currentData();

    return (
        <Widget name="PatientsGenderLineChart" mobile={400}>
            <WidgetHeader title="Patients gender" flex="column">
                <Navigator handler={navigate} text={periods[index]} style={{margin: '0 -22px 0'}} />
            </WidgetHeader>
            <WidgetBody style={{padding: 0, overflow: 'hidden'}}>
                <Labels>
                    {
                        getMonthArray().map(({month}) => (
                            <div key={moment(month).format('MMM')}>
                                {isMobile ? moment(month).month() + 1 : moment(month).format('MMM')}
                            </div>
                        ))
                    }
                </Labels>
                <CartesianChart variant="line" id="patientsGender" data={data} elems={chartElems} />
                <LegendList overlay={true}>
                    <LegendItem color="azure" legend="men" />
                    <LegendItem color="peach" legend="women" />
                </LegendList>
            </WidgetBody>
        </Widget>
    )
}

export default PatientsGenderLineChart;