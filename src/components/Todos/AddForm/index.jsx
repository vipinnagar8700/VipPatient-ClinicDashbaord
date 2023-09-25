// styled components
import {Form, BtnWrapper, InputWrapper} from './style';

// components
import CustomSelect from '@ui/Select';
import Field from '@ui/Field';
import Btn from '@ui/Btn';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';

// utils
import {useDispatch} from 'react-redux';
import {addTodo, toggleCollapse} from '@store/features/todos';
import {tasksOptions} from '@constants/options';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const AddForm = ({isVisible, visibilityHandler, variant}) => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const timestamp = Date.now();

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const handleCategoryChange = e => {
        setCategory(e);
    }

    const resetForm = () => {
        setTask('');
        setCategory(null);
        visibilityHandler(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (task !== '' && category !== null) {
            const id = nanoid(5);
            dispatch(addTodo({
                id,
                name: task,
                timestamp,
                label: category.value,
                expanded: false
            }));
            setTimeout(() => dispatch(toggleCollapse({id})), 300);
            resetForm();
        }
    }

    return (
        <Collapse in={isVisible}>
            <Grow in={isVisible} timeout={700}>
                <Form onSubmit={e => handleSubmit(e)} variant={variant}>
                    <InputWrapper>
                        <Field placeholder="Task"
                               value={task}
                               handler={handleTaskChange}
                               className="field"
                        />
                        <CustomSelect variant="basic"
                                      placeholder="Category"
                                      options={tasksOptions}
                                      value={category}
                                      changeHandler={handleCategoryChange}/>
                    </InputWrapper>
                    <BtnWrapper>
                        <Btn text="Add" type="submit" className="success"/>
                        <Btn text="Cancel" className="error" handler={() => resetForm()}/>
                    </BtnWrapper>
                </Form>
            </Grow>
        </Collapse>
    )
}

export default AddForm;