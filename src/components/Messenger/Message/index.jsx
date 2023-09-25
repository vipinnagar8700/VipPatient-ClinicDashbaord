// styled components
import {MessageContainer} from '@components/Messenger/Message/style';

// components
import Waveform from '@components/Waveform';

// hooks
import {useTheme} from 'styled-components';

// utils
import PropTypes from 'prop-types';
import moment from 'moment';
import {nanoid} from 'nanoid';

const Message = ({data, senderName}) => {
    const {message, date, sender, media, audio} = data;
    const {theme} = useTheme();
    const displayName = sender === 'current' ? 'You' : senderName;

    return (
        <MessageContainer sender={sender} hasAudio={audio}>
            <span className="metadata">
                {`${displayName}, `} {moment(date).format('hh:mm A')}
            </span>
            <div className="content">
                {message}
                {media && <img src={media} alt="placeholder"/>}
                {audio && <Waveform src={audio} id={nanoid(5)} theme={theme}/>}
            </div>
        </MessageContainer>
    )
}

Message.propTypes = {
    data: PropTypes.object.isRequired,
    senderName: PropTypes.string.isRequired
}

export default Message;