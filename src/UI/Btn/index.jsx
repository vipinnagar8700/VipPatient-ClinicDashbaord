// styling
import styled from 'styled-components/macro';
import {colors, textSizes, fonts, flex} from '@styles/vars';
import {darken} from 'polished';

// utils
import {motion, AnimatePresence} from 'framer-motion';
import PropTypes from 'prop-types';

const Button = styled.button`
  border-radius: 8px;
  background-color: ${colors.blue};
  color: #fff;
  font-size: ${textSizes['14']};
  font-family: ${fonts.accent};
  height: 40px;
  width: 100%;
  display: flex;
  ${flex.center};
  gap: 8px;
  line-height: 1;
  transition: background-color var(--transition);
  

  &:hover, &:focus {
    background-color: ${darken(0.1, colors.blue)};
  }

  &.success {
    background-color: ${colors.success};

    &:hover, &:focus {
      background-color: ${darken(0.1, colors.success)};
    }
  }

  &.error {
    background-color: ${colors.error};

    &:hover, &:focus {
      background-color: ${darken(0.1, colors.error)};
    }
  }

  &.disabled {
    background-color: ${colors.gray};
    pointer-events: none;
  }
`

const Btn = ({text, handler, type = 'button', isVisible = true, className, icon}) => {
    return (
        <AnimatePresence>
            {
                isVisible && (
                    <Button as={motion.button}
                            className={className ? className : ''}
                            onClick={handler}
                            type={type}
                            initial={false}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: .3}}>
                        {icon && <i className={`icon icon-${icon}`} /> } {text}
                    </Button>
                )
            }
        </AnimatePresence>
    )
}

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string
}

export default Btn;