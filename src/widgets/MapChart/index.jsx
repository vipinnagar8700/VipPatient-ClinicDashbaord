// styling
import {colors, light} from '@styles/vars';

// styled components
import {MapChartWrapper} from './style';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import {VectorMap} from '@south-paw/react-vector-maps';
import {StyledTooltip} from '@components/Chart/Tooltip';
import CountUp from 'react-countup';

// hooks
import useArrayNav from '@hooks/useArrayNav';
import {useTheme} from 'styled-components';
import {useState, useEffect} from 'react';

// utils
import {numFormatter} from '@utils/numbers';

// assets
import world from '@assets/world.json';

const MapChart = () => {
    const {theme} = useTheme();
    const diseases = ['Ebola', 'Coronavirus', 'Malaria'];
    const {index, navigate} = useArrayNav(diseases);
    const [currentData, setCurrentData] = useState(null);

    const data = [
        {
            total: 12658,
            countries: ['ca', 'au', 'ua', 'pl', 'it', 'fr', 'de', 'es', 'us', 'cn', 'in']
        },
        {
            total: 3525138,
            countries: ['md', 'ch', 'ca', 'us', 'jp', 'sw', 'no', 'se', 'fi', 'dk']
        },
        {
            total: 25812,
            countries: ['pl', 'fr', 'mn', 'gb']
        }
    ]

    useEffect(() => {
        setCurrentData(data[index]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const [hovered, setHovered] = useState(null);
    const [tooltip, setTooltip] = useState({
        hovered: hovered,
        isVisible: false,
        x: 0,
        y: 0,
    });

    const showTooltip = (e) => {
        const country = e.target.attributes.name.value;

        if (country === 'Russia') {
            setHovered('Russia [terrorist state]');
        } else {
            setHovered(country);
        }
    }

    const hideTooltip = () => {
        setHovered(null);
    }

    const handleMouseMove = (e) => {
        setTooltip((prev) => ({
            ...prev,
            x: e.nativeEvent.offsetX + 5,
            y: e.nativeEvent.offsetY + 5,
            isVisible: true,
        }));
    }

    const tooltipStyle = {
        visibility: hovered ? 'visible' : 'hidden',
        opacity: hovered ? 1 : 0,
        top: tooltip.y,
        left: tooltip.x,
        position: 'absolute',
        transition: 'opacity var(--transition)',
    };

    return (
        <Widget name="MapChart" mobile={300}>
            <WidgetNav title={`${diseases[index]} epidemic`} handler={navigate}/>
            <WidgetBody>
                <MapChartWrapper>
                    <div className="total">
                        <CountUp formattingFn={numFormatter} end={currentData?.total} duration={2} className="num h1"/>
                        <span>patients worldwide</span>
                    </div>
                    <div className="mask" onMouseMove={handleMouseMove}>
                        <VectorMap {...world}
                                   layerProps={{
                                       fill: theme === light ? colors.gray : light.text,
                                       onMouseEnter: showTooltip,
                                       onMouseLeave: hideTooltip,
                                   }}
                                   checkedLayers={currentData?.countries}
                                   className="map"
                        />
                    </div>
                    <StyledTooltip style={tooltipStyle}>{hovered}</StyledTooltip>
                </MapChartWrapper>
            </WidgetBody>
        </Widget>
    )
}

export default MapChart;