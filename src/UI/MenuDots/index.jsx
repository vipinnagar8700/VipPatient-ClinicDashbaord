// styling
import styled from 'styled-components/macro';
import {textSizes, light, colors} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

const Button = styled.button`
  font-size: ${textSizes['16']};
  color: ${light.text};
  transition: color var(--transition);
  line-height: 1;
  
  &:hover, &:focus {
    color: ${colors.blue};
  }
`

const MenuDots = ({onClick, onFocus, onBlur}) => {
    return (
        <Button className="dots" aria-label="Open menu" onClick={onClick} onFocus={onFocus} onBlur={onBlur}>
            <i className="icon-dots icon"/>
        </Button>
    )
}

MenuDots.propTypes = {
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

export default MenuDots;