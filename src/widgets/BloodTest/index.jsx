// styling
import {light, dark, textSizes, fonts, colors, flex} from '@styles/vars';
import styled from 'styled-components/macro';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import ReactSpeedometer from 'react-d3-speedometer';

// hooks
import {useTheme} from 'styled-components';
import useWindowSize from '@hooks/useWindowSize';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  ${flex.center};

  .speedometer {
    width: 100%;

    text {
      font-weight: 400 !important;
      font-family: ${fonts.accent};

      &.current-value {
        display: none;
      }
    }
  }
`;

const BloodTest = () => {
    const {theme} = useTheme();
    const {width} = useWindowSize();

    const sizes = () => {
        switch (true) {
            case width < 414:
                return { width: 232, height: 120 };
            case width >= 414 && width < 1800:
                return { width: 300, height: 160 };
            default:
                case width >= 1800:
                return { width: 400, height: 220 };
        }
    }

    return (
        <Widget name="BloodTest">
            <WidgetHeader title="Blood test speed"/>
            <WidgetBody style={{flexGrow: 1}}>
                <Wrapper>
                    <ReactSpeedometer
                        value={251}
                        maxValue={1000}
                        needleColor={light.text}
                        needleTransitionDuration={2000}
                        needleHeightRatio={0.8}
                        segments={80}
                        startColor={colors.green}
                        endColor={colors.red}
                        ringWidth={60}
                        textColor={theme === 'light' ? light.text : dark.text}
                        labelFontSize={textSizes['10']}
                        maxSegmentLabels={10}
                        valueFormat={'~s'}
                        forceRender={true}
                        width={sizes().width}
                        height={sizes().height}
                    />
                </Wrapper>
            </WidgetBody>
        </Widget>
    )
}

export default BloodTest;