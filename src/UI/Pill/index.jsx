// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark, flex, light, textSizes, fonts} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

export const Button = styled.button`
  ${flex.center}
  font-size: ${textSizes['12']};
  padding: 4px 8px;
  border-radius: 8px;
  color: ${colors.blue};
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  min-height: 20px;
  gap: 4px;
  color: ${colors.blue};
  transition: color var(--transition), background-color var(--transition);
  font-family: ${fonts.accent};

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }

  &.active {
    color: ${theme('theme', {
      light: colors.blue,
      dark: light.bodyBg
    })};
    background-color: ${theme('theme', {
      light: light.highlight,
      dark: light.text
    })};
  }
`

const Pill = ({text, handler, icon, style, className}) => {
    return (
        <Button className={className ? `pill ${className}` : 'pill'} onClick={handler} style={style}>
            {icon ? <i className={`icon-${icon}`}></i> : null} {text}
        </Button>
    )
}

Pill.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func,
    icon: PropTypes.string,
    style: PropTypes.object
}

export default Pill;