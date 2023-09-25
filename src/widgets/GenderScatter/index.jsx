// styling
import {colors, light, textSizes, fonts, dark} from '@styles/vars';
import {rgba} from 'polished';

// styled components
import {Navbar} from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import {CartesianGrid, Scatter, ScatterChart, Tooltip, ResponsiveContainer, YAxis, XAxis} from 'recharts';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useTheme} from 'styled-components';

// utils
import {addZero} from '@utils/numbers';

// data placeholder
import {y2020, y2021, y2022} from '@db/scatter';

const GenderScatter = () => {
    const {theme} = useTheme();
    const periods = ['2020', '2021', '2022'];
    const {index, navigate} = useArrayNav(periods);

    const currentData = () => {
        switch (periods[index]) {
            default:
            case '2020':
                return y2020
            case '2021':
                return y2021
            case '2022':
                return y2022
        }
    }

    const data = currentData();

    const tickStyle = {
        fontSize: textSizes['10'],
        fontFamily: fonts.accent,
        fill: theme === 'light' ? light.text : dark.text,
    }

    return (
        <Widget name="GenderScatter" mobile={500}>
            <WidgetNav title="Patients by gender" handler={navigate}/>
            <Navbar as="div" style={{flexGrow: 'unset'}}>
                <Legend>
                    <LegendItem color="azure" legend="men"/>
                    <LegendItem color="peach" legend="women"/>
                    <LegendItem color="teal" legend="children"/>
                </Legend>
            </Navbar>
            <WidgetBody style={{padding: 0, overflow: 'hidden'}}>
                <ResponsiveContainer id="genderScatter" width="100%" height="100%">
                    <ScatterChart margin={false} data={data}>
                        <CartesianGrid stroke={theme === 'light' ? colors.light_gray : colors.dark}
                                       strokeDasharray="3 3"
                                       strokeLinecap="square"
                                       horizontal={true}
                                       width="100%"
                                       height="100%"
                        />
                        <YAxis type="number"
                               tickCount={10}
                               tickLine={false}
                               padding={{top: 55, bottom: 55}}
                               axisLine={false}
                               dx={-10}
                               style={tickStyle}
                        />
                        <XAxis type="category"
                               tickCount={12}
                               tickLine={false}
                               padding={{left: 24, right: 24}}
                               axisLine={false}
                               dy={-12}
                               mirror={true}
                               tickFormatter={tick => addZero(tick + 1)}
                               style={tickStyle}
                        />
                        <Scatter dataKey="men"
                                 fill={colors.azure}
                                 style={{
                                     filter: `drop-shadow(0 0 6px ${rgba(colors.azure, .5)})`
                                 }}/>
                        <Scatter dataKey="women"
                                 fill={colors.peach}
                                 style={{
                                     filter: `drop-shadow(0 0 6px ${rgba(colors.peach, .5)})`
                                 }}/>
                        <Scatter dataKey="children"
                                 fill={colors.teal}
                                 style={{
                                     filter: `drop-shadow(0 0 6px ${rgba(colors.teal, .5)})`
                                 }}/>
                        <Tooltip cursor={false} content={<ChartTooltip/>}/>
                    </ScatterChart>
                </ResponsiveContainer>
            </WidgetBody>
        </Widget>
    )
}

export default GenderScatter;