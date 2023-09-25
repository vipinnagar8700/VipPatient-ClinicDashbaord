// styling
import {colors, light, dark} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import {useTheme} from 'styled-components';

const HepatitisChart = () => {
    const {theme} = useTheme();
    const isSmall = useWindowSize().width < 414;
    const COLORS = [colors.purple, colors.yellow, colors.orange];

    const data = [{value: 200}, {value: 250}, {value: 550}];

    return (
        <Widget name="HepatitisChart">
            <WidgetHeader title="Hepatitis">
                <Legend>
                    <LegendItem color="purple" legend="A"/>
                    <LegendItem color="yellow" legend="B"/>
                    <LegendItem color="orange" legend="C"/>
                </Legend>
            </WidgetHeader>
            <WidgetBody>
                <ResponsiveContainer width="100%" height={isSmall ? 200 : 300}>
                    <PieChart width={isSmall ? 220 : 300} height={isSmall ? 220 : 300}>
                        <Pie
                            data={data}
                            outerRadius={isSmall ? 100 : 125}
                            dataKey="value"
                            strokeWidth={4}
                            stroke={theme === 'light' ? light.widgetBg : dark.widgetBg}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip content={<ChartTooltip/>}/>
                    </PieChart>
                </ResponsiveContainer>
            </WidgetBody>
        </Widget>
    )
}

export default HepatitisChart;