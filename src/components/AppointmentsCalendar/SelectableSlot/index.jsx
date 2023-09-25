// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {flex, colors, light, dark} from '@styles/vars';

const Wrapper = styled.div`
  .icon {
    position: absolute;
    color: ${colors.blue};
    display: flex;
    ${flex.center};
    width: 100%;
    height: 100%;
    background-color: ${theme('theme', {
      light: light.highlight,
      dark: dark.highlight,
    })};
  }
`;

const SelectableSlot = ({children}) => {
    return (
        <Wrapper>
            <i className="icon icon-plus-circle"/>
            {children}
        </Wrapper>
    )
}

export default SelectableSlot;