// styled components
import {List, Block, Text} from "./style";

// components
import Progress from '@ui/Progress';

// utils
import PropTypes from 'prop-types';
import {confirmedPalette} from '@styles/vars';

const ListItem = ({data, period}) => {
    const {label} = data;
    const progress = data[period].progress,
        goal = data[period].goal;
    const normalise = value => (value / (goal / 100));

    return (
        <li>
            <Block>
                <Text>
                    <span className="num">{progress}</span> of
                    <span className="num">{goal}</span>
                </Text>
                <span className="label">{label}</span>
            </Block>
            <div className="confirmed_list-item_visualizer">
                <Progress color={confirmedPalette[label]} value={normalise(progress)} />
            </div>
        </li>
    )
}

const ConfirmedDiagnosesList = ({data, period, short = false}) => {
    return (
        <List>
            {
                data.map(item => {
                    const {label} = item;
                    if (short && label === 'diabetes') return null;
                    else {
                        return (
                            <ListItem key={label} data={item} period={period} />
                        )
                    }
                })
            }
        </List>
    )
}

ConfirmedDiagnosesList.propTypes = {
    data: PropTypes.array.isRequired,
    short: PropTypes.bool
}

export default ConfirmedDiagnosesList;