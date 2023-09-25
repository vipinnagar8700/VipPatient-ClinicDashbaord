// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {light, dark, textSizes, colors, fonts, breakpoints} from '@styles/vars';

// utils
import PropTypes from 'prop-types';

// hooks
import useWindowSize from '@hooks/useWindowSize';

const SearchBarForm = styled.form`
  height: 40px;
  margin: 0 24px;
  border-radius: 8px;
  padding: 0 22px;
  background-color: ${theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  display: flex;
  flex-grow: 1;
  align-items: center;
  
  ${breakpoints.tablet} {
    height: 60px;
    margin: 0 2px;
  }
  
  label {
    font-size: ${textSizes['12']};
    margin-right: 24px;
    color: ${colors.gray};
  }
  
  input {
    width: 100%;
    font-size: ${textSizes['16']};
    font-family: ${fonts.accent};
    &::placeholder {
      color: ${light.text};
    }
  }
  
  button[type="reset"] {
    opacity: 0;
    transition: opacity var(--transition);
    
    &.visible {
        opacity: 1;
    }
  }
`

const SearchBar = ({placeholder, handler, value}) => {
    const window = useWindowSize();
    const isMobile = window.width < 767.98;

    const handleReset = () => handler('');

    return (
        <SearchBarForm action="#" method="get">
            <label className="search_bar-label" htmlFor="widgetSearch">
                <i className="icon icon-search"></i>
            </label>
            <input type="search"
                   id="widgetSearch"
                   value={value}
                   placeholder={!isMobile ? placeholder : 'Search'}
                   onChange={e => handler(e.target.value)} />
            <button className={value !== '' ? 'visible' : ''} type="reset" onClick={handleReset}>
                <i className="icon icon-close" />
            </button>
        </SearchBarForm>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

export default SearchBar;