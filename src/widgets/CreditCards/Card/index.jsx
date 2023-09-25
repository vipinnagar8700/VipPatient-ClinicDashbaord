// styled components
import {CardItem, TextButton, Actions} from './style';

// components
import Radio from '@ui/Radio';
import Collapse from '@mui/material/Collapse';

// hooks
import {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

// utils
import {setArchived, removeCard, setTitle, setMain} from '@store/features/cards';
import PropTypes from 'prop-types';

// assets
import visa from '@assets/visa.svg'
import mc from '@assets/mastercard.svg'

const Card = ({data}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {type, title, id, main, archived} = data;
    const [isEditing, setEditing] = useState(false);
    const titleInput = useRef(null);
    const dispatch = useDispatch();

    const editHandler = () => {
        setEditing(true);
        titleInput.current.focus();
    }

    const cancelEditHandler = () => {
        setEditing(false);
        titleInput.current.value = title;
    }

    const saveEditHandler = () => {
        const value = titleInput.current.value;
        if (value.length > 0) {
            setEditing(false);
            dispatch(setTitle({id: id, title: value}));
        } else {
            cancelEditHandler();
        }
    }

    const toggleArchived = () => {
        setCollapsed(true);
        setTimeout(() => dispatch(setArchived({id})), 300);
    }

    const removeCardHandler = () => {
        setCollapsed(true);
        setTimeout(() => dispatch(removeCard({id})), 300);
    }

    return (
        <Collapse in={!collapsed}>
            <CardItem>
                <div className="media">
                    <img src={type === 'visa' ? visa : mc} alt="media"/>
                </div>
                <div className="main">
                    <input className="h3"
                           type="text"
                           value={title}
                           readOnly={!isEditing}
                           ref={titleInput}
                           onBlur={saveEditHandler}
                           maxLength="20"
                    />
                    <Actions>
                        {
                            !archived ?
                                <>
                                    {!isEditing ?
                                        <TextButton onClick={editHandler}>Edit</TextButton>
                                        :
                                        <>
                                            <TextButton onClick={saveEditHandler}>Save</TextButton>
                                            <TextButton onClick={cancelEditHandler}>Cancel</TextButton>
                                        </>
                                    }
                                    {
                                        !main &&
                                        <TextButton onClick={toggleArchived}>Archive</TextButton>
                                    }
                                </>
                                :
                                <>
                                    <TextButton onClick={toggleArchived}>Restore</TextButton>
                                    <TextButton onClick={removeCardHandler}>Delete</TextButton>
                                </>
                        }
                    </Actions>
                </div>
                {
                    !archived && <Radio id={id} name="main" checked={main} onChange={() => dispatch(setMain({id}))}/>
                }
            </CardItem>
        </Collapse>
    )
}

Card.propTypes = {
    data: PropTypes.any
}

export default Card;