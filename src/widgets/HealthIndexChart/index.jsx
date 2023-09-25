// styling
import {colors, light, dark} from '@styles/vars';

// styled components
import {HealthIndexChartWrapper} from '@widgets/HealthIndexChart/style';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import {ScatterChart, Scatter, ResponsiveContainer, Tooltip, Cell} from 'recharts';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import ChartTooltip from '@components/Chart/Tooltip';
import CountUp from 'react-countup';

// utils
import PropTypes from 'prop-types';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import usePeriodNav from '@hooks/usePeriodNav';
import {useTheme} from 'styled-components';

// data placeholder
import {y2020, y2021, y2022} from '@db/health';

const HealthIndexChart = ({variant}) => {
    const {theme} = useTheme();
    const {periods} = usePeriodNav();
    const {index, navigate} = useArrayNav(periods);

    const averages = [
        {cured: 75.08, sick: 45.27},
        {cured: 84.51, sick: 33.12},
        {cured: 67.14, sick: 48.65},
    ]

    const getCurrentData = () => {
        switch (index) {
            default:
            case 0:
                return y2020;
            case 1:
                return y2021;
            case 2:
                return y2022;
        }
    }
    const data = getCurrentData();

    const CustomScatterShape = ({cx, cy, fill, ...props}) => {
        const isDominant = variant === 'both' ? props.dom === props.dataKey : props.dataKey === 'cured';

        return (
            <svg width="10" height="222" viewBox="0 0 10 222" x={cx} y={cy} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                {
                    isDominant &&
                    <path opacity="0.5" d="M5 28.3799V220.38"
                          stroke={`url(#scatter_${props.dataKey})`} strokeWidth="2"
                          strokeLinecap="round"/>
                }
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                      fill={fill}/>
                <defs>
                    <linearGradient id="scatter_cured" x1="5.5" y1="220.38" x2="5.5" y2="28.3799"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme === 'light' ? light.widgetBg : dark.widgetBg}/>
                        <stop offset="1" stopColor={colors.azure}/>
                    </linearGradient>
                    <linearGradient id="scatter_sick" x1="5.5" y1="220.38" x2="5.5" y2="28.3799"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme === 'light' ? light.widgetBg : dark.widgetBg}/>
                        <stop offset="1" stopColor={colors.peach}/>
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    return (
        <Widget name="HealthIndexChart">
            <WidgetNav sx={{fontSize:22,fontWeight:600}} title="Clinic Growth" handler={navigate}/>
            <WidgetBody style={{padding: 0, overflow: 'hidden'}}>
                <HealthIndexChartWrapper>
                    <div className="total">
                        <div className="total_block total_block--cured">
                            <span className="spacer h1">{averages[index].cured}</span>
                            <CountUp className="counter h1" end={averages[index].cured} duration={2} decimals={2} />
                            <span><span className="hidden">New</span> Patients</span>
                        </div>
                        {
                            variant === 'both' && (
                                <div className="total_block total_block--sick">
                                    <span className="spacer h1">{averages[index].sick}</span>
                                    <CountUp className="counter h1" end={averages[index].sick} duration={2} decimals={2} />
                                    <span><span className="hidden">New</span> Certificates</span>
                                </div>
                            )
                        }
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                        <ScatterChart margin={false} data={data}>
                            {
                                variant === 'both' &&
                                <Scatter dataKey="sick" shape={CustomScatterShape}>
                                    {data.map((entry, i) => {
                                        return (
                                            <Cell key={`cell-${i}`}
                                                  fill={colors.peach}
                                                  dom={entry.sick > entry.cured ? 'sick' : 'cured'}
                                                  dataKey="sick"/>
                                        )
                                    })}
                                </Scatter>
                            }
                            <Scatter dataKey="cured" shape={CustomScatterShape}>
                                {data.map((entry, i) => {
                                    return (
                                        <Cell key={`cell-${i}`}
                                              fill={colors.azure}
                                              dom={entry.cured > entry.sick ? 'cured' : 'sick'}
                                              dataKey="cured"/>
                                    )
                                })}
                            </Scatter>
                            <Tooltip cursor={false} content={<ChartTooltip right/>}/>
                        </ScatterChart>
                    </ResponsiveContainer>
                    <Legend overlay={true}>
                        <LegendItem color="azure" legend="New Patients"/>
                        {variant === 'both' && <LegendItem color="peach" legend="New Certificates"/>}
                    </Legend>
                </HealthIndexChartWrapper>
            </WidgetBody>
        </Widget>
    )
}

HealthIndexChart.propTypes = {
    variant: PropTypes.oneOf(['health', 'both']).isRequired
}

export default HealthIndexChart;