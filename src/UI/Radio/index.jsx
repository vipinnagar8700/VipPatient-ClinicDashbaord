// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, flex, light, dark} from '@styles/vars';

const color = theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg,
})

const Wrapper = styled.div`
  input {
    display: none;

    & + label {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 10px;
      cursor: pointer;
      transition: background-color var(--transition);
      ${flex.col};
      ${flex.center};
      background-color: ${colors.light_gray};
      color: ${color};

      &:hover, &:focus {
        background-color: ${colors.green};
      }

      .icon {
        margin-top: 2px;
      }
    }

    &:checked + label {
      background-color: ${colors.green};
    }
  }
`

const Radio = ({ name, id, checked, onChange }) => {
    return (
        <Wrapper>
            <input type="radio" name={name} id={id} defaultChecked={checked} onChange={onChange}/>
            <label htmlFor={id}>
                <i className="icon icon-check"></i>
            </label>
        </Wrapper>
    )
}

export default Radio;