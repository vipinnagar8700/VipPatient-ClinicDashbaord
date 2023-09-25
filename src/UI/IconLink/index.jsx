// styling
import styled from 'styled-components/macro';
import {colors, textSizes} from '@styles/vars';
import {darken} from 'polished';

// utils
import PropTypes from 'prop-types';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${textSizes['14']};
  color: ${colors.blue};
  line-height: 1;
  transition: color var(--transition);
  width: fit-content;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover, &:focus {
    color: ${darken(0.1, colors.blue)};
  }

  .icon {
    font-size: ${textSizes['12']};
    color: ${colors.gray};
  }
`

const IconLink = ({href = '#', title}) => {
    return (
        <Link href={href}>
            <i className="icon icon-link"></i>
            <span>{title}</span>
        </Link>
    )
}

IconLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string
}

export default IconLink;