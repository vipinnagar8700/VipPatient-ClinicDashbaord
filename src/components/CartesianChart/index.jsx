// styling
import {colors} from '@styles/vars';
import {StyledTooltip} from '@components/Chart/Tooltip';

// components
import {LineChart, Line, ResponsiveContainer, CartesianGrid, AreaChart, Area, Tooltip} from 'recharts';

// hooks
import {useTheme} from 'styled-components';
import {useLayoutEffect, useState} from 'react';
import useWindowSize from '@hooks/useWindowSize';

// utils
import {generateGridPoints} from '@utils/recharts';

const CartesianChart = ({variant, id, data, elems, ...props}) => {
    const {width} = useWindowSize();
    const {theme} = useTheme();
    const [points, setPoints] = useState([]);
    const isTablet = width >= 768;

    // generate grid points based on the container width
    useLayoutEffect(() => {
        setPoints(generateGridPoints(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    // custom tooltip
    const renderTooltip = (props) => {
        const {active, payload} = props;
        if (active && payload && payload.length) {
            return (
                <StyledTooltip className="multiple">
                    {payload.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="color" style={{background: item.stroke}} />
                            <div className="value">{item.value}</div>
                        </div>
                    ))}
                </StyledTooltip>
            );
        }
        return null;
    }

    return (
        <ResponsiveContainer height={isTablet ? '100%' : props.height} width="100%" id={id}>
            {
                variant === 'line' ?
                    <LineChart margin={false} data={data} {...props}>
                        <defs>
                            <linearGradient id="dark"
                                            x1="0.00669497"
                                            y1="1"
                                            x2="0.00669497"
                                            y2="327.445"
                                            gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colors.dark} stopOpacity="0.2"/>
                                <stop offset="0.512299" stopColor={colors.dark}/>
                                <stop offset="0.99905" stopColor={colors.dark} stopOpacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="light"
                                            x1="0.00385257"
                                            y1="1"
                                            x2="0.00385257"
                                            y2="328.377"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor={colors.light_gray} stopOpacity="0.2"/>
                                <stop offset="0.504355" stopColor={colors.light_gray}/>
                                <stop offset="0.99905" stopColor={colors.light_gray} stopOpacity="0.2"/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke={`url(#${theme === 'dark' ? 'dark' : 'light'})`}
                                       strokeDasharray="6"
                                       strokeLinecap="square"
                                       horizontal={false}
                                       verticalPoints={points}
                                       width="100%"
                                       height="100%"
                        />
                        {
                            elems.map(el => {
                                return <Line key={el.dataKey} {...el} />
                            })
                        }
                        <Tooltip cursor={false} content={renderTooltip} />
                    </LineChart>
                    :
                    <AreaChart margin={{ top: 5 }} data={data} {...props}>
                        <defs>
                            <linearGradient id="dark"
                                            x1="0.00669497"
                                            y1="1"
                                            x2="0.00669497"
                                            y2="327.445"
                                            gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor={colors.dark} stopOpacity="0.2"/>
                                <stop offset="0.512299" stopColor={colors.dark}/>
                                <stop offset="0.99905" stopColor={colors.dark} stopOpacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="light"
                                            x1="0.00385257"
                                            y1="1"
                                            x2="0.00385257"
                                            y2="328.377"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor={colors.light_gray} stopOpacity="0.2"/>
                                <stop offset="0.504355" stopColor={colors.light_gray}/>
                                <stop offset="0.99905" stopColor={colors.light_gray} stopOpacity="0.2"/>
                            </linearGradient>
                            {props.children}
                        </defs>
                        <CartesianGrid stroke={`url(#${theme === 'dark' ? 'dark' : 'light'})`}
                                       strokeDasharray="6"
                                       strokeLinecap="square"
                                       horizontal={false}
                                       verticalPoints={points}
                                       width="100%"
                                       height="100%"
                        />
                        {
                            elems.map(el => {
                                return <Area key={el.dataKey} {...el} />
                            })
                        }
                        <Tooltip cursor={false} content={renderTooltip} />
                    </AreaChart>
            }
        </ResponsiveContainer>
    )
}

export default CartesianChart;