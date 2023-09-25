// styled components
import {Container, Title} from './style';

// components
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import {PatternFormat} from 'react-number-format';

// hooks
import {useState} from 'react';
import {useDispatch} from 'react-redux';

// actions
import {addCard} from '@store/features/cards';

const Form = ({isVisible, handler}) => {
    const initialState = {
        title: 'Name',
        number: '',
        expiration: '',
        cvv: ''
    };

    const [state, setState] = useState(initialState);

    const dispatch = useDispatch();

    const handleReset = () => {
        setState(initialState);
        handler(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCard(state));
        handleReset();
    }

    return (
        <Collapse in={isVisible}>
            <Grow in={isVisible}>
                <Container as="form" onSubmit={handleSubmit} onReset={handleReset}>
                    <div className="header_wrapper">
                        <Title>
                            <label htmlFor="title">
                                <i className="icon icon-pen"></i>
                            </label>
                            <input className="h3"
                                   type="text"
                                   id="title"
                                   defaultValue="Name"
                                   maxLength={20}
                                   onChange={e => setState({...state, title: e.target.value})}/>
                        </Title>
                        <div className="header_wrapper-btns">
                            <button type="reset">
                                <i className="icon icon-ban-regular" />
                            </button>
                            <button type="submit">
                                <i className="icon icon-check"></i>
                            </button>
                        </div>
                    </div>
                    <div className="inputs_wrapper">
                        <div className="block block--number">
                            <label htmlFor="number">Card number</label>
                            <PatternFormat id="number"
                                           placeholder="0000 0000 0000 0000"
                                           format="#### #### #### ####"
                                           value={state.number}
                                           onChange={(e) => setState({...state, number: e.target.value})}/>
                        </div>
                        <div className="block">
                            <label htmlFor="expiration">Exp.</label>
                            <PatternFormat id="expiration"
                                           placeholder="MM/YY"
                                           format="##/##"
                                           value={state.expiration}
                                           onChange={(e) => setState({...state, expiration: e.target.value})}/>
                        </div>
                        <div className="block">
                            <label htmlFor="cvv">CVV:</label>
                            <PatternFormat format={'###'}
                                           id="cvv"
                                           placeholder="000"
                                           value={state.cvv}
                                           onChange={(e) => setState({...state, cvv: e.target.value})}/>
                        </div>
                    </div>
                </Container>
            </Grow>
        </Collapse>
    )
}

export default Form;