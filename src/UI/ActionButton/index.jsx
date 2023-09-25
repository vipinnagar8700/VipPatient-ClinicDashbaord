// styling
import styled from 'styled-components/macro';
import {textSizes, light, colors, flex, breakpoints} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

const Button = styled.button`
  display: flex;
  ${flex.center};
  gap: 8px;
  border-radius: 20px;
  font-size: ${textSizes['14']};
  height: 40px;
  width: 40px;
  color: ${light.text};
  transition: color var(--transition), background-color var(--transition);

  .icon {
    color: ${colors.gray};
    transition: color var(--transition);
  }

  .text {
    display: none;
  }

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  ${breakpoints.mobileL} {
    width: fit-content;
    padding: 0 16px;
    .text {
      display: block;
    }
  }
`

const ActionButton = ({handler, user = 'doctor'}) => {
    const options = {
        icon: user === 'doctor' ? 'painmap' : 'plus-circle',
        text: user === 'doctor' ? 'Case history' : 'Make an appointment',
    }
    return (
        <Button className="btn-action" onClick={handler}>
            <i className={`icon icon-${options.icon}`}></i> <span className="text">{options.text}</span>
        </Button>
    )
}

ActionButton.propTypes = {
    handler: PropTypes.func,
    user: PropTypes.oneOf(['doctor', 'patient'])
}

export default ActionButton;