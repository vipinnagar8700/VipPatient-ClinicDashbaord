// styling
import styled from 'styled-components/macro';

// components
import {Badge} from '@ui/Badge/style';

// assets
import placeholder from '@assets/placeholder.jpg'

// utils
import PropTypes from 'prop-types';

const Container = styled.div`
  width: ${props => `${props.size}px`};
  aspect-ratio: 1 / 1;
  position: relative;
  
  .indicator {
    position: absolute;
    right: -6px;
    top: -6px;
    z-index: 2;
  }
`
const Img = styled.picture`
  img {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
`

const Avatar = ({avatar, alt, size, online = false}) => {
    return (
        <Container size={size ? size : 40} className="avatar">
            <Img>
                <source srcSet={avatar ? avatar.webp : placeholder} type="image/webp"/>
                <source srcSet={avatar ? avatar.jpg : placeholder} type="image/jpeg"/>
                <img src={avatar ? avatar.jpg : placeholder} alt={alt} width="100%" height="100%"/>
            </Img>
            {online ? <Badge color="green" className="indicator" /> : null}
        </Container>
    )
}

Avatar.propTypes = {
    avatar: PropTypes.object,
    alt: PropTypes.string.isRequired,
    online: PropTypes.bool,
    size: PropTypes.number
}

export default Avatar;