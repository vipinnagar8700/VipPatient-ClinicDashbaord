// styling
import styled from 'styled-components/macro';
import {colors, flex} from '@styles/vars';

// assets
import search_light from '@assets/search_light.json';
import search_dark from '@assets/search_dark.json';
import cards from '@assets/cards.json';

// components
import {AnimatePresence, motion} from 'framer-motion';
import Lottie from 'lottie-react';

// utils
import PropTypes from 'prop-types';
import {fadePresence} from '@constants/framer';

// hooks
import {useTheme} from 'styled-components';

const Wrapper = styled(motion.div)`
  ${flex.col};
  ${flex.center};
  padding: 24px;
  gap: 48px;
  height: 100%;
  flex-grow: 1;
  ${props => props.variant === 'cards' && `margin-top: -40px;`}

  .search, .cards {
    max-height: 300px;
    display: flex;
    width: fit-content;
  }
  
  .cards {
    margin-top: -24px;
  }
  
  p {
    margin-top: -100px;
    color: ${colors.gray};
  }
`;

const NoDataPlaceholder = ({variant = 'search'}) => {
    const {theme} = useTheme();
    return (
        <AnimatePresence>
            <Wrapper {...fadePresence} initial={{opacity: 0}} variant={variant}>
                {
                    variant === 'search' ? (
                        <Lottie className={variant}
                                animationData={theme === 'light' ? search_light : search_dark}
                                loop={false}
                                style={{width: 300}}
                        />
                    ) : <Lottie className={variant} animationData={cards} loop={false}/>
                }
                {variant === 'cards' && <p>You did not archive any cards yet</p>}
            </Wrapper>
        </AnimatePresence>
    )
}

NoDataPlaceholder.propTypes = {
    variant: PropTypes.oneOf(['cards', 'search'])
}

export default NoDataPlaceholder;