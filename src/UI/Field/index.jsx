// styling
import styled from 'styled-components/macro';
import {colors, dark, light, textSizes} from '@styles/vars';
import theme from 'styled-theming';

// utils
import PropTypes from 'prop-types';

export const Input = styled.input`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${textSizes['14']};
  ${theme('theme', {
    light: `
    background-color: ${light.highlight};
   `,
    dark: `
    background-color: ${dark.highlight};
   `
  })};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${colors.error};
  }

  &:hover {
    box-shadow: ${theme('theme', {
      light: `0 0 0 2px #A2C0D4`,
      dark: `0 0 0 2px ${colors.dark}`
    })};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }
`

const Field = ({type = 'text', placeholder, value, handler, id, className}) => {
    return <Input type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={handler}
                  id={id}
                  className={className || ''}
    />
}

Field.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'search']),
    placeholder: PropTypes.string
}

export default Field;