// utils
import {cloneElement} from 'react';
import moment from 'moment';
import {addZero} from '@utils/numbers';

const TimeSlot = (props, step, day, isRender) => {
    const differenceMs = moment() - moment(props.value)
    const isCurrentTimeSlot = (differenceMs / (60 * 1000)) > 0 && (differenceMs / (60 * 1000)) < step;
    let hours = new Date().getHours(),
        minutes = new Date().getMinutes();
    const currentTime = hours + ':' + addZero(minutes);

    let timeIndicator = {}
    let addStyle = {}

    function calculateIndicatorPosition() {
        let minutesFromProps = props.value.getMinutes(),
            indicatorPosition;
        switch (minutesFromProps) {
            default:
            case 0:
                indicatorPosition = minutesFromProps + minutes;
                break;
            case 30:
                indicatorPosition = Math.abs(minutesFromProps - minutes);
                break;
        }
        return indicatorPosition;
    }

    if (isCurrentTimeSlot && isRender) {
        timeIndicator.className = 'current-time'
        timeIndicator.children =
            <span className="time-indicator" style={{top: `${100 / step * calculateIndicatorPosition()}%`}}>
                <span className="label">{currentTime}</span>
            </span>
    }

    return cloneElement(
        props.children,
        {
            style: {...addStyle},
            'data-time': moment(props.value).format('HH:mm'),
            ...timeIndicator
        })
}

export default TimeSlot;