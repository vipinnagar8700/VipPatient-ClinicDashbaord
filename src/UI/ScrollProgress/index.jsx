// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import {colors, dark} from '@styles/vars';

// animation
import { motion, useScroll, useSpring } from 'framer-motion';

const Track = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${theme('theme', {
        light: colors.light_gray,
        dark: dark.highlight,
    })};
    z-index: 10000000;
  
  .bar {
    height: 4px;
    background-color: ${colors.blue};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform-origin: 0;
  }
`;

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Track>
            <motion.div className="bar" style={{ scaleX }} />
        </Track>
    );
}

export default ScrollProgress;