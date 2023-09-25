// components
import {Wrapper} from '@ui/Navigator/style';

// utils
import moment from 'moment/moment';

const DailyNavigation = ({onNavigate, label, date}) => {
    const handleDayNavigation = e => {
        if (e.currentTarget.dataset.direction === 'prev') {
            onNavigate('PREV', date)
        } else {
            onNavigate('NEXT', date)
        }
    }

    const startOfYear = moment(date).startOf('year').format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD'),
        endOfYear = moment(date).endOf('year').format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD');

    return (
        <Wrapper className="navigator navigator--daily">
            <div className="arrows">
                <button onClick={handleDayNavigation} data-direction="prev" disabled={startOfYear} aria-label="Previous date">
                    <i className="icon icon-chevron-left"/>
                </button>
                <button onClick={handleDayNavigation} data-direction="next" disabled={endOfYear} aria-label="Next date">
                    <i className="icon icon-chevron-right"/>
                </button>
            </div>
            <div className="label">{label}</div>
        </Wrapper>
    )
}

export default DailyNavigation;