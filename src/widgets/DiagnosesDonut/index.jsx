// styling
import styled from 'styled-components/macro';
import {flex, light, dark} from '@styles/vars';
import {useTheme} from 'styled-components';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';
import ChartLabel from '@widgets/DiagnosesDonut/ChartLabel';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import useWindowSize from '@hooks/useWindowSize';

// utils
import PropTypes from 'prop-types';

// assets
import rays from '@assets/rays.svg';
import rays_xl from '@assets/rays_xl.svg';

const Content = styled.div`
  min-height: 265px;
  ${flex.col};
  ${flex.between};
  gap: 20px;
  height: 100%;

  .chart {
    position: relative;
    margin: auto 0;

    &-rays {
      .recharts-wrapper .recharts-surface {
        mask: url("${rays}") no-repeat center;
      }
    }

    &-wide {
      .recharts-wrapper .recharts-surface {
        mask: url("${rays_xl}") no-repeat center;
      }
    }
  }
`

const DiagnosesDonut = ({variant}) => {
    const {theme} = useTheme();
    const strokeColor = theme === 'light' ? light.widgetBg : dark.widgetBg;
    const isMobileXs = useWindowSize().width < 413.98;
    let innerRadius, outerRadius = (isMobileXs ? 220 : 265) / 2;
    const chartHeight = isMobileXs ? 240 : 275;
    const periods = ['year', 'month', 'week'];
    const {index, navigate} = useArrayNav(periods);

    const data = [
        {
            name: 'cold',
            color: 'orange',
            value: {
                year: 642,
                month: 456,
                week: 52
            }
        },
        {
            name: 'infection',
            color: 'yellow',
            value: {
                year: 255,
                month: 241,
                week: 33
            }
        },
        {
            name: 'other',
            color: 'purple',
            value: {
                year: 698,
                month: 374,
                week: 92
            }
        }
    ];

    const COLORS = [
        {start: '#FF715B', end: '#FFA15B'},
        {start: '#FDCA40', end: '#FDCA40'},
        {start: '#6665DD', end: '#6610F2'}
    ];

    switch (variant) {
        default:
        case 'basic':
            innerRadius = isMobileXs ? 80 : 100;
            break;
        case 'rays':
            innerRadius = 75;
            break;
        case 'wide':
            innerRadius = 25;
            break;
    }

    const calculate = () => {
        let total = [], percent = [], valuesByPeriod = [];
        periods.forEach((period, i) => {
            total.push(data.map(item => item.value[period]).reduce((a, b) => a + b));
            valuesByPeriod.push(data.map(item => item.value[period]));
            percent.push(valuesByPeriod[i].map(value => (value / (total[i] / 100)).toFixed()));
        });
        return {total, percent};
    }

    return (
        <Widget name="DiagnosesDonut">
            <WidgetNav title="Diagnoses" handler={navigate} style={{paddingBottom: 14}}/>
            <WidgetBody style={{paddingBottom: 22}}>
                <Content>
                    <div className={`chart chart-${variant}`}>
                        <PieChart width={isMobileXs ? 280 : 330} height={chartHeight}>
                            <defs>
                                {data.map((entry, index) => (
                                    <linearGradient key={`gradient${index}`} id={`gradient${index}`}>
                                        <stop
                                            offset="0%"
                                            stopColor={COLORS[index % COLORS.length].start}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor={COLORS[index % COLORS.length].end}
                                        />
                                    </linearGradient>
                                ))}
                            </defs>
                            <Pie
                                data={data}
                                innerRadius={innerRadius}
                                outerRadius={outerRadius}
                                dataKey={`value.${periods[index]}`}
                                stroke={variant === 'basic' ? strokeColor : null}
                                strokeWidth={variant === 'basic' ? 4 : null}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`url(#gradient${index})`}/>
                                ))}
                            </Pie>
                            <Tooltip content={<ChartTooltip/>}/>
                        </PieChart>
                        {
                            variant !== 'wide' &&
                            <ChartLabel periods={periods} values={calculate().total} index={index}/>
                        }
                    </div>
                    <Legend>
                        {
                            data.map(item => (
                                <LegendItem key={item.name} color={item.color} legend={item.name}/>
                            ))
                        }
                    </Legend>
                </Content>
            </WidgetBody>
        </Widget>
    )
}

DiagnosesDonut.propTypes = {
    variant: PropTypes.oneOf(['basic', 'rays', 'wide']).isRequired
}

export default DiagnosesDonut;
