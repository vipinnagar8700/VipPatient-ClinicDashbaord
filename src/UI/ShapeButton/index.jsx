// components
import {Badge} from '@ui/Badge/style';

// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, light, flex, colors} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

const bg = theme('theme', {
    light: light.bodyBg,
    dark: dark.highlight
})

export const Button = styled.button`
  width: 40px;
  aspect-ratio: 1;
  background-color: ${bg};
  color: ${colors.gray};
  ${flex.col}
  ${flex.center}
  position: relative;
  transition: color var(--transition), background-color var(--transition);
  
  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }
  
  .badge {
    position: absolute;
  }
  
  &.square {
    border-radius: 8px;
    .badge {
        top: -6px;
        right: -6px;
    }
  }
  
  &.round {
    border-radius: 50%;
    .badge {
        top: 0;
        right: 0;
    }
  }
`

const ShapeButton = ({hasNotification, icon, handler, label, shape, ...props}) => {
    return (
        <Button className={shape} onClick={handler} aria-label={label} ref={props.ref} {...props}>
            <i className={`icon-${icon}`}></i>
            {hasNotification && <Badge className="badge" color="yellow" />}
        </Button>
    )
}

ShapeButton.propTypes = {
    hasNotification: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    handler: PropTypes.func,
    label: PropTypes.string.isRequired,
    shape: PropTypes.oneOf(['round', 'square']).isRequired
}

export default ShapeButton;