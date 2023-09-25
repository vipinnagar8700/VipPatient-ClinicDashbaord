// assets
import logo from '@assets/logo.svg'
import NewLogo from '@assets/VIPfinal.png'

// styling
import styled from 'styled-components/macro';
import { colors, fonts, textSizes, breakpoints } from '@styles/vars';
import theme from 'styled-theming';

// components
import { NavLink } from 'react-router-dom';

// utils
import PropTypes from 'prop-types';

const Img = styled.img`
  width: 180px;
  height: 30px;
  will-change: transform;
  transition: transform var(--transition);
`

const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover, &:focus {
    Img {
      transform: scale(1.2);
    }
  }
`

const Text = styled.span`
  font-weight: 700;
  font-family: ${fonts.accent};
  font-size: ${textSizes['24']};

  .highlight {
    color: ${theme('theme', {
  light: colors.blue,
  dark: 'inherit'
})};
  }

  ${breakpoints.tablet} {
    font-size: ${textSizes['32']};
  }
`

const Logo = ({ compact }) => {
  return (
    <Wrapper as={NavLink} to="/Clinic-Dashboard" className="logo">
      <Img src={NewLogo} alt="Relief" />
      {/* {
                !compact ?
                    // <Text>
                    //     Relief<span className="highlight">EHR</span>
                    // </Text>
                    : null
            } */}
    </Wrapper>
  )
}

Logo.propTypes = {
  compact: PropTypes.bool
}

export default Logo;