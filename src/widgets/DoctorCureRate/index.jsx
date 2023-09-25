// styling
import {rgba} from 'polished';
import {colors, light, dark} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import CustomSelect from '@ui/Select';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import CartesianChart from '@components/CartesianChart';

// hooks
import {useState} from 'react';
import {useTheme} from 'styled-components';

// utils
import {doctorsOptions} from '@constants/options';

// data placeholder
import {data} from '@db/cure';

const DoctorCureRate = () => {
    const {theme} = useTheme();
    const options = doctorsOptions();
    const [selectedDoctor, setSelectedDoctor] = useState(options[0]);

    const chartData = data.find(item => item.id === selectedDoctor.value).stats;

    const common = {
        type: 'monotone',
        strokeWidth: 3,
        activeDot: {r: 4},
        fillOpacity: .8
    }

    const chartElems = [
        {
            ...common,
            dataKey: 'cured',
            stroke: colors.teal,
            fill: theme === 'light' ? 'url(#cure_light)' : 'url(#cure)',
            activeDot: {r: 5, fill: colors.teal, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 4px ${rgba(colors.teal, .5)})`
            }
        },
        {
            ...common,
            dataKey: 'sick',
            stroke: colors.red,
            fill: 'none',
            activeDot: {r: 5, fill: colors.red, stroke: theme === 'light' ? light.widgetBg : dark.widgetBg, strokeWidth: 2},
            style: {
                filter: `drop-shadow(0 0 4px ${rgba(colors.red, .5)})`
            }
        }
    ]

    return (
        <Widget name="DoctorCureRate">
            <WidgetHeader title="Cure rate" flex="column">
                <CustomSelect options={options} value={selectedDoctor} variant="user" changeHandler={e => setSelectedDoctor(e)} />
            </WidgetHeader>
            <WidgetBody style={{padding: 0, overflowY: 'hidden'}}>
                <CartesianChart id="DoctorCureRate" data={chartData} elems={chartElems} variant="area" height={265}>
                    <defs>
                        <linearGradient id="cure_light" x1="0" y1="-0.5" x2="0" y2="240" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#53F5E8"/>
                            <stop offset="1" stopColor="#29E7CD" stopOpacity="0.01"/>
                        </linearGradient>
                        <linearGradient id="cure" x1="1.83382" y1="-0.5" x2="1.83382" y2="238.857" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#53F5E8"/>
                            <stop offset="1" stopColor="#171819"/>
                        </linearGradient>
                    </defs>
                </CartesianChart>
                <Legend overlay={true}>
                    <LegendItem color="red" legend="sick" />
                    <LegendItem color="teal" legend="cured" />
                </Legend>
            </WidgetBody>
        </Widget>
    )
}

export default DoctorCureRate;