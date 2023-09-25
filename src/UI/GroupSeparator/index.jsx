// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {effects, fonts, textSizes, dark, light} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

const Separator = styled.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${theme('theme', {
        light: effects.dashedLight,
        dark: effects.dashedDark
    })};
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`

const SeparatorText = styled.span`
  text-transform: uppercase;
  padding: 0 6px;
  position: relative;
  z-index: 2;
  margin-left: 17px;
  font-size: ${textSizes['10']};
  font-weight: 500;
  font-family: ${fonts.accent};
  background-color: ${theme('theme', {
    light: light.widgetBg,
    dark: dark.widgetBg
  })};
})
`

const GroupSeparator = ({text}) => {
    return (
        <Separator className="separator">
            <SeparatorText>{text}</SeparatorText>
        </Separator>
    )
}

GroupSeparator.propTypes = {
    text: PropTypes.string.isRequired
}

export default GroupSeparator;