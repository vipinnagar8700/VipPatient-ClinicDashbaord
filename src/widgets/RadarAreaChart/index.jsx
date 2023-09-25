// styling
import styled from 'styled-components/macro';
import {colors, fonts, textSizes, light, dark, flex, breakpoints} from '@styles/vars';

// components
import Widget from '@components/Widget';
import Navigator from '@ui/Navigator';
import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Text, Tooltip} from 'recharts';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useTheme} from 'styled-components';
import usePeriodNav from '@hooks/usePeriodNav';
import useWindowSize from '@hooks/useWindowSize';

const Container = styled.div`
  ${flex.col};
  gap: 14px;
  justify-content: flex-end;
  height: 100%;

  .chart {
    height: 250px;
    flex-grow: 1;
    padding: 24px 24px 0;
  }

  .navigator {
    margin: 0 2px 2px;
  }
  
  ${breakpoints.mobileL} {
    .chart {
      height: 300px;
    }
  }
`;

const RadarAreaChart = () => {
    const {periods} = usePeriodNav();
    const {index, navigate} = useArrayNav(periods);
    const {theme} = useTheme();
    const {width} = useWindowSize();

    const data = [
        {
            type: 'diagnostics',
            value: [40, 54, 65]
        },
        {
            type: 'checkup',
            value: [70, 22, 46]
        },
        {
            type: 'tests',
            value: [18, 41, 60]
        },
        {
            type: 'consultation',
            value: [70, 25, 67]
        },
        {
            type: 'injury',
            value: [30, 70, 50]
        },
        {
            type: 'viruses',
            value: [40, 19, 80]
        }
    ]

    function renderPolarAngleAxis({payload, x, y, cx, cy, ...rest}) {
        return (
            <Text
                {...rest}
                verticalAnchor="middle"
                textAnchor="middle"
                y={y + (y - cy) / 9}
                x={x + (x - cx) / 9}
                fill={theme === 'light' ? light.text : dark.text}
            >
                {payload.value}
            </Text>
        );
    }

    return (
        <Widget name="RadarAreaChart">
            <Container>
                <div className="chart">
                    <ResponsiveContainer height="100%" width="100%">
                        <RadarChart data={data} outerRadius={width < 414 ? 80: 110} height={250}>
                            <PolarGrid stroke={theme === 'light' ? colors.light_gray : colors.dark}/>
                            <PolarAngleAxis dataKey="type"
                                            tick={props => renderPolarAngleAxis(props)}
                                            style={{
                                                textTransform: 'uppercase',
                                                fontFamily: fonts.accent,
                                                fontSize: textSizes['10'],
                                            }}
                                            cx="50%"
                                            cy="50%"
                            />
                            <Radar dataKey={`value[${index}]`}
                                   strokeWidth={4}
                                   stroke={colors.azure}
                                   fill={colors.azure}
                                   fillOpacity={0.1}
                                   activeDot={{r: 4, fill: colors.azure, stroke: colors.azure}}
                            />
                            <Tooltip content={<ChartTooltip />} cursor={false}/>
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                <Navigator handler={navigate} text={periods[index]} style={{textTransform: 'capitalize'}}/>
            </Container>
        </Widget>
    )
}

export default RadarAreaChart;