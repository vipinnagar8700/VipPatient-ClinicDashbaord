// styling
import styled from 'styled-components/macro';
import {colors, flex, textSizes} from '@styles/vars';

// utils
import PropTypes from 'prop-types';
import {colorTypes} from '@constants/colors';

const Wrapper = styled.button`
  display: flex;
  ${flex.center};
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: ${textSizes['14']};
  gap: 10px;
  background-color: ${props => colors[colorTypes.find(item => item.cat === props.reminder).color]};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const Reminder = ({reminder, handler}) => {
    const {text, type} = reminder;
    return (
        <Wrapper className="reminder" onClick={handler} reminder={type}>
            <i className="icon icon-clock"></i>
            <span>{text}</span>
        </Wrapper>
    )
}

Reminder.propTypes = {
    reminder: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    handler: PropTypes.func
}

export default Reminder;