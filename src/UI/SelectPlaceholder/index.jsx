import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {dark, fonts, light, textSizes, flex} from '@styles/vars';

const Placeholder = styled.div`
  display: flex;
  ${flex.center};
  height: 100%;
  
  p {
    width: fit-content;
    padding: 8px 16px;
    background-color: ${theme('theme', {
      light: light.bodyBg,
      dark: dark.bodyBg
    })};
    border-radius: 16px;
    line-height: 1;
    font-family: ${fonts.accent};
    font-weight: 500;
    font-size: ${textSizes['14']};
  }
`;

const SelectPlaceholder = ({text}) => {
    return (
        <Placeholder>
            <p>{text}</p>
        </Placeholder>
    );
}

export default SelectPlaceholder;