// components
import Widget from "@components/Widget";
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import LegendList from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import {useTheme} from 'styled-components';
import {useState} from 'react';

const data = [
    {
        new: 400,
        returned: 700,
    },
    {
        new: 300,
        returned: 540,
    },
    {
        new: 645,
        returned: 400,
    },
    {
        new: 328,
        returned: 590,
    },
    {
        new: 500,
        returned: 250,
    },
    {
        new: 280,
        returned: 440,
    }
]

const PatientsPace = () => {
    const [tooltip, setTooltip] = useState(null)
    const {theme} = useTheme();
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    return (
        <Widget name="PatientsPace" shadow={true}>
            <WidgetHeader title="Patients pace" />
            <WidgetBody style={{padding: 0, overflow: 'hidden'}}>
                <ResponsiveContainer height={isMobile ? 116 : '100%'}>
                    <AreaChart data={data} margin={false}>
                        <defs>
                            <linearGradient id="new"
                                            x1="374"
                                            y1="118"
                                            x2="374"
                                            y2="0.363342"
                                            gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.00548986" stopColor="white" stopOpacity={0.05}/>
                                <stop offset="1" stopColor="#7ED321" stopOpacity={0.05}/>
                            </linearGradient>
                            <linearGradient id="returned"
                                            x1="315.382"
                                            y1="75.7344"
                                            x2="315.382"
                                            y2="2.03396"
                                            gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#171819" stopOpacity="0.01"/>
                                <stop offset="1" stopColor="#29E7CD" stopOpacity="0.7"/>
                            </linearGradient>
                        </defs>
                        <Area dataKey="new"
                              type="monotone"
                              stroke="#7ED321"
                              strokeWidth={3}
                              fill={theme === 'dark' ? 'url(#new)' : 'none'}
                              activeDot={{r: 4, fill: '#7ED321', stroke: '#7ED321', strokeWidth: 2}}
                              onMouseOver={() => setTooltip('new')}
                        />
                        <Area dataKey="returned"
                              type="monotone"
                              stroke="#29E7CD"
                              strokeWidth={3}
                              fill={theme === 'dark' ? 'url(#returned)' : 'none'}
                              activeDot={{r: 4, fill: '#29E7CD', stroke: '#29E7CD', strokeWidth: 2}}
                              onMouseOver={() => setTooltip('returned')}
                        />
                        <Tooltip cursor={false} content={<ChartTooltip tooltip={tooltip} multi={true} />} />
                    </AreaChart>
                </ResponsiveContainer>
                <LegendList overlay={true}>
                    <LegendItem color="green" legend="New patients" />
                    <LegendItem color="teal" legend="Returned patients" />
                </LegendList>
            </WidgetBody>
        </Widget>
    )
}

export default PatientsPace;