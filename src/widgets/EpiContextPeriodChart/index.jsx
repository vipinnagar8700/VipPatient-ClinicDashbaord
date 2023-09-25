// styling
import {rgba} from 'polished';
import {colors, dark, light} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import PeriodNav from '@components/PeriodNav';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import CartesianChart from '@components/CartesianChart';

// hooks
import {useState, useRef} from 'react';
import usePeriodNav from '@hooks/usePeriodNav';
import useContentHeight from '@hooks/useContentHeight';
import {useTheme} from 'styled-components';

// data placeholder
import {year, month, week} from '@db/epi_period';

const EpiContextPeriodChart = () => {
    const {theme} = useTheme();
    const [current, setCurrent] = useState(usePeriodNav().period);
    const headerRef = useRef(null);
    const height = useContentHeight(headerRef);

    const chartElems = [
        {
            dataKey: 'cured',
            type: "monotone",
            stroke: colors.peach,
            strokeWidth: 3,
            fill: 'none',
            activeDot: {r: 4, fill: colors.peach, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.peach, .7)})`
            }
        },
        {
            dataKey: 'sick',
            type: "monotone",
            stroke: colors.green,
            strokeWidth: 3,
            fill: theme === 'light' ? 'url(#epi_sick_light)' : 'url(#epi_sick_dark)',
            fillOpacity: .2,
            activeDot: {r: 4, fill: colors.green, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 6px ${rgba(colors.green, .7)})`
            }
        }
    ];

    const getCurrentData = () => {
        switch (current) {
            default:
            case 'year':
                return year;
            case 'month':
                return month;
            case 'week':
                return week;
        }
    }
    const data = getCurrentData();

    return (
        <Widget name="EpiContextPeriodChart">
            <WidgetHeader title="Epidemiological context" flex={'column'} margin={1} elRef={headerRef}>
                <PeriodNav current={current} handler={setCurrent} />
            </WidgetHeader>
            <WidgetBody style={{padding: 0, overflowY: 'hidden'}} height={height}>
                <div style={{minHeight: 265, height: '100%'}}>
                    <CartesianChart variant="area"
                                    id="epiContextPeriod"
                                    data={data}
                                    height={265}
                                    elems={chartElems}>
                        <defs>
                            <linearGradient id="epi_sick_light" x1="0.00146484" y1="-0.544678" x2="0.00146484" y2="226" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#04E762"/>
                                <stop offset="1" stopColor="#04E762" stopOpacity="0.01"/>
                            </linearGradient>
                            <linearGradient id="epi_sick_dark" x1="0.00195312" y1="-0.544617" x2="0.00195312" y2="226" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#04E762"/>
                                <stop offset="1" stopColor="#04E762" stopOpacity="0.01"/>
                            </linearGradient>
                        </defs>
                    </CartesianChart>
                </div>
                <Legend overlay={true}>
                    <LegendItem color="green" legend="sick" />
                    <LegendItem color="orange" legend="cured" />
                </Legend>
            </WidgetBody>
        </Widget>
    )
}

export default EpiContextPeriodChart;