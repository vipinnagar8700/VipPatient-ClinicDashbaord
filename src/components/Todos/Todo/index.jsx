// styled components
import {BasicBadge} from '@ui/Badge/style';
import {ListItemContainer, Content, Main, Label, Secondary} from './list';
import {PlannerItemContainer, Wrapper, TimestampWrapper} from '@components/Todos/Todo/planner';

// components
import Timestamp from '@ui/Timestamp';
import Checkbox from '@ui/Checkbox';
import Collapse from '@mui/material/Collapse';
import {Badge} from '@ui/Badge/style';

// utils
import {toggleComplete} from '@store/features/todos';
import {tasksColors} from '@constants/colors';
import moment from 'moment';

// hooks
import {useDispatch} from 'react-redux';

const Todo = ({data, variant}) => {
    const {id, name, timestamp, complete, label, expanded} = data;
    const dispatch = useDispatch();
    const color = tasksColors.find(({cat}) => cat === label).color;

    const TodoLayout = () => {
        switch (variant) {
            default:
            case 'list':
                return (
                    <ListItemContainer color={color} className="list-item" tabIndex={0}>
                        <Content>
                            <Checkbox variant="square" id={`task-${id}`} checked={complete}
                                      handler={() => dispatch(toggleComplete({id}))}/>
                            <Main>
                                <input type="text" defaultValue={name} readOnly={true} />
                            </Main>
                           
                        </Content>
                        
                    </ListItemContainer>
                    
                )
            case 'planner':
                return (
                    <PlannerItemContainer className="list-item" tabIndex={0}>
                        <Wrapper>
                            <span>{name}</span>
                            <TimestampWrapper>
                                <Badge color={color}/>
                                <Timestamp date={moment(timestamp).toDate()} time={true}/>
                            </TimestampWrapper>
                        </Wrapper>
                        <Checkbox variant="basic" id={`task-${id}`} checked={complete}
                                  handler={() => dispatch(toggleComplete({id}))}/>
                    </PlannerItemContainer>
                )
        }
    }

    return (
        <Collapse in={expanded} timeout={300}>
            <TodoLayout/>
        </Collapse>
    )
}

export default Todo;