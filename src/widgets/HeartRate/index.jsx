// styling
import {colors} from '@styles/vars';

// styled components
import {Header, Main} from './style';

// components
import Widget from '@components/Widget';
import Cardiogram from 'react-cardiogram';

const HeartRate = () => {
    return (
        <Widget name="HeartRate">
            <Header>
                <i className="icon icon-heart"></i>
                <span className="h1">94</span>
                <span className="text">bpm</span>
            </Header>
            <Main>
                <Cardiogram color={colors.absolute_red}
                            beatFrequency={1500}
                            density={1}
                            scale={30}
                            height={278}
                />
            </Main>
        </Widget>
    )
}

export default HeartRate;