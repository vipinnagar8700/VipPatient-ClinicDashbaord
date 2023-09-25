// styling
import styled from 'styled-components/macro';
import {flex, textSizes, breakpoints} from '@styles/vars';

// styled components
import {Footer} from '@components/Messenger/style';
import ShapeButton from '@ui/ShapeButton';

// hooks
import {useRef} from 'react';
import {useDispatch} from 'react-redux';

// utils
import PropTypes from 'prop-types';
import moment from 'moment';
import {nanoid} from 'nanoid';

// actions
import {addMessage} from '@store/features/messenger';

const InputFooter = styled(Footer)`
  padding: 15px 24px 20px;
  form {
    display: flex;
    ${flex.between};
    gap: 8px;

    input {
      height: 40px;
      max-width: calc(100% - 48px);

      &::placeholder {
        font-size: ${textSizes['14']};;
      }
    }
    
    ${breakpoints.tablet} {
        input::placeholder {
            font-size: ${textSizes['18']};
        }
    }
  }
`;

const Input = ({db, id, elRef}) => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            sender: 'current',
            message: inputRef.current.value,
            date: moment().valueOf(),
            read: false,
            id: nanoid(),
        };

        if (inputRef.current.value !== '') {
            dispatch(addMessage({db, id, message}));
            inputRef.current.value = '';
            inputRef.current.blur();
        }
    }

    return (
        <InputFooter ref={elRef}>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder="Type a message..." spellCheck={true} />
                <ShapeButton shape="round" icon="paper-plane" label="Send" type="submit"/>
            </form>
        </InputFooter>
    )
}

Input.propTypes = {
    db: PropTypes.oneOf(['doctor', 'patient']).isRequired,
    id: PropTypes.string.isRequired
}

export default Input;