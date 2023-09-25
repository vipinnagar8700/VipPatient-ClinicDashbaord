// styling
import styled from 'styled-components/macro';
import {flex, colors} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import usePeriodNav from '@hooks/usePeriodNav';
import {useTheme} from 'styled-components';
import {useState} from 'react';

const Container = styled.div`
  ${flex.col};
  ${flex.between};
  height: 100%;
`;

const PatientsRadialBar = () => {
    const [tooltip, setTooltip] = useState(null);
    const {theme} = useTheme();
    const {periods} = usePeriodNav();
    const {index, navigate} = useArrayNav(periods);

    const data = [
        {
            name: '0-9',
            values: [8, 5, 10],
            fill: colors.green,
            label: 'green',
        },
        {
            name: '10-16',
            values: [10, 7, 12],
            fill: colors.peach,
            label: 'peach',
        },
        {
            name: '17-24',
            values: [9, 15, 13],
            fill: colors.azure,
            label: 'azure',
        },
        {
            name: '25-30',
            values: [14, 8, 15],
            fill: colors.purple,
            label: 'purple',
        },
        {
            name: '31-40',
            values: [13, 7, 15],
            fill: colors.pink,
            label: 'pink',
        },
    ];

    return (
        <Widget name="PatientsPolarPie">
            <WidgetNav handler={navigate} title="Patients age" />
            <WidgetBody>
                <Container>
                    <RadialBarChart innerRadius="10%" outerRadius="100%" barSize={8} data={data} width={265} height={265}>
                        <RadialBar
                            minAngle={15}
                            background={{fill: theme === 'light' ? colors.light_gray : colors.dark}}
                            clockWise
                            dataKey={`values[${index}]`}
                            onMouseOver={() => setTooltip(`values[${index}]`)}
                        />
                        <Tooltip cursor={false} content={<ChartTooltip tooltip={tooltip} />} />
                    </RadialBarChart>
                    <Legend>
                        {data.map(item => (
                            <LegendItem key={item.name} color={item.label} legend={item.name} />
                        ))}
                    </Legend>
                </Container>
            </WidgetBody>
        </Widget>
    )
}

export default PatientsRadialBar;