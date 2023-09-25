// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import useElementScroll from '@hooks/useElementScroll';
import {useRef} from 'react';

const Scroller = styled.div`
  height: calc(100% - ${props => props.height}px);
  position: relative;
  flex-grow: 1;

  &.has-overflow {
    &:before, &:after {
      content: '';
      display: block;
      height: ${props => props.size === 'small' ? 40 : 80}px;
      position: absolute;
      width: 100%;;
      background: ${theme('theme', {
        light: 'linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)',
        dark: 'linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)'
      })};
      left: 0;
      z-index: 300;
      transition: height var(--transition);
    }

    &:before {
      top: 0;
      transform: scaleY(-1);
    }

    &:after {
      bottom: 0;
    }

    &.is-top:before,
    &.is-bottom:after {
      height: 0;
    }
  }

  .track {
    height: 100%;
    overflow-y: auto;
  }
`;

const ScrollContainer = ({children, height, size}) => {
    const ref = useRef(null);
    const isOverflown = useElementScroll(ref);

    return (
        <Scroller className={isOverflown ? 'is-top has-overflow' : ''} height={height} ref={ref} size={size}>
            {children}
        </Scroller>
    );
}

export default ScrollContainer;