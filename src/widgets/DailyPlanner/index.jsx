// styled components
import {AddButton} from '@widgets/DailyPlanner/style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import AddForm from '@components/Todos/AddForm';
import TodosLegend from '@components/Todos/TodosLegend';
import DnDLayout from '@components/Todos/DnDLayout';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import useContentHeight from '@hooks/useContentHeight';

const DailyPlanner = () => {
    const todos = useSelector(state => state['todos'].todos);
    const [isFormVisible, setFormVisible] = useState(false);

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    useEffect(() => {
        listRef.current.scrollTo(0, 0);
    }, [isFormVisible]);

    return (
        <Widget name="DailyPlanner" mobile={600}>
            <WidgetHeader title="Daily Planner" style={{paddingBottom: 18}} elRef={headerRef}>
                <AddButton onClick={() => setFormVisible(true)}
                           className={isFormVisible ? 'disabled' : ''}
                           aria-label="Add new task"
                >
                    +
                </AddButton>
            </WidgetHeader>
            <WidgetBody>
                <ScrollContainer height={height}>
                    <div className="track" ref={listRef} style={{overflowY: isFormVisible? 'hidden' : 'auto'}}>
                        <AddForm isVisible={isFormVisible} visibilityHandler={setFormVisible} />
                        {todos.length !== 0 ? <DnDLayout variant="planner" /> : null}
                    </div>
                </ScrollContainer>
                <div ref={footerRef}>
                    <TodosLegend />
                </div>
            </WidgetBody>
        </Widget>
    )
}

export default DailyPlanner;