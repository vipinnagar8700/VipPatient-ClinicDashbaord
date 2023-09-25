// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, light, flex} from '@styles/vars'

// utils
import PropTypes from 'prop-types';

const Square = styled.div`
  input {
    display: none;

    &:checked + label span {
      opacity: 1;
    }
  }

  label {
    ${flex.col};
    ${flex.center};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${theme('theme', {
      light: colors.light_gray,
      dark: light.text
    })};
    cursor: pointer;
    transition: var(--transition);
    position: relative;

    span {
      display: block;
      border-radius: 2px;
      background-color: ${colors.blue};
      width: 12px;
      height: 12px;
      transition: opacity var(--transition);
      opacity: 0;
    }
  }
`

const Basic = styled.div`
  input {
    display: none;
    &:checked + label {
      color: ${colors.blue};
    }
  }

  label {
    color: #BBCDD9;
    transition: var(--transition);

    &:hover, &:focus {
      color: ${colors.blue};
    }
  }
`;

const Checkbox = ({variant, handler, checked, id}) => {
    const commonProps = {
        type: 'checkbox',
        id,
        defaultChecked: checked,
        onChange: handler
    }

    const Layout = () => {
        switch (variant) {
            default:
            case 'square':
                return (
                    <Square className="checkbox">
                        <input {...commonProps} />
                        <label htmlFor={id} tabIndex={0}>
                            <span></span>
                        </label>
                    </Square>
                )
            case 'basic':
                return (
                    <Basic>
                        <input {...commonProps} />
                        <label htmlFor={id} tabIndex={0}>
                            <i className="icon icon-check"/>
                        </label>
                    </Basic>
                )
        }
    }

    return <Layout/>
}

Checkbox.propTypes = {
    variant: PropTypes.oneOf(['square', 'basic']).isRequired,
    handler: PropTypes.func,
    checked: PropTypes.bool,
    id: PropTypes.string
}

export default Checkbox;