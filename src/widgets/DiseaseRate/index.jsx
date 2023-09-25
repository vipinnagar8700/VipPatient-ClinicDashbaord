// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, light, breakpoints} from '@styles/vars';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components//Widget/WidgetBody';
import PeriodNav from '@components/PeriodNav';
import {ResponsiveContainer, Scatter, ScatterChart, ReferenceLine, Cell, Tooltip} from 'recharts';
import CountUp from 'react-countup';
import ChartTooltip from '@components/Chart/Tooltip';

// hooks
import usePeriodNav from '@hooks/usePeriodNav';
import useContentHeight from '@hooks/useContentHeight';
import {useRef, useState} from 'react';
import {useTheme} from 'styled-components';

// data placeholder
import {year, month, week} from '@db/disease';

const Container = styled.div`
  height: 250px;
  position: relative;

  .average {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    .h1 {
      color: ${theme('theme', {
        light: light.text,
        dark: '#fff'
      })};
    }
  }

    ${breakpoints.tablet} {
      height: 100%;
    }
`;

const DiseaseRate = () => {
    const {theme} = useTheme();
    const [current, setCurrent] = useState(usePeriodNav().period);
    const headerRef = useRef();
    const height = useContentHeight(headerRef);
    const average = {
        year: 64.27,
        month: 85.93,
        week: 71.34,
    };

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

    const CustomScatterShape = ({cx, cy, fill, ...props}) => {
        const isDominant = props.dom === props.dataKey;
        return (
            <svg width="10" height="217" viewBox="0 0 10 222" x={cx} y={cy} fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                {
                    isDominant &&
                    <path d="M5 25V215" stroke="url(#dashed)" strokeWidth="4" strokeLinecap="round"
                          strokeDasharray="8 8"/>

                }
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z"
                      fill={isDominant ? fill : 'none'}/>
                <defs>
                    <linearGradient id="dashed" x1="5.30334" y1="179.114" x2="5.30334" y2="63.8445"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme === 'light' ? light.widgetBg : dark.widgetBg}/>
                        <stop offset="1" stopColor={theme === 'light' ? colors.light_gray : colors.dark}/>
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    return (
        <Widget name="DiseaseRate">
            <WidgetHeader title="Disease rate" flex="column" elRef={headerRef}>
                <PeriodNav current={current} handler={setCurrent}/>
            </WidgetHeader>
            <WidgetBody height={height} style={{overflow: 'hidden'}}>
                <Container>
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={false} data={data}>
                            <Scatter dataKey="cured" shape={CustomScatterShape}>
                                {data.map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`}
                                              fill={colors.green}
                                              dom={entry.cured > entry.sick ? 'cured' : 'sick'}
                                              dataKey="cured"/>
                                    )
                                })}
                            </Scatter>
                            <Scatter dataKey="sick" shape={CustomScatterShape}>
                                {data.map((entry, index) => {
                                    return (
                                        <Cell key={`cell-${index}`}
                                              fill={colors.peach}
                                              dom={entry.sick > entry.cured ? 'sick' : 'cured'}
                                              dataKey="sick"/>
                                    )
                                })}
                            </Scatter>
                            <ReferenceLine y={300} stroke={colors.green} strokeWidth={2} strokeDasharray="2 2"/>
                            <Tooltip cursor={false} content={<ChartTooltip/>}/>
                        </ScatterChart>
                    </ResponsiveContainer>
                    <div className="average">
                        <CountUp className="h1" end={average[`${current}`]} duration={1.5} decimals={2} separator="."/>
                        <span>patient disease rate</span>
                    </div>
                </Container>
            </WidgetBody>
        </Widget>
    )
}

export default DiseaseRate;