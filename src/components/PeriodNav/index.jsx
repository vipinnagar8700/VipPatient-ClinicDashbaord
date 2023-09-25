// styled components
import {Container, Item, Button} from '@ui/TabNav/style';

// hooks
import usePeriodNav from '@hooks/usePeriodNav';

// utils
import {nanoid} from 'nanoid';

const PeriodNav = ({current, handler}) => {
    const {periods} = usePeriodNav();

    return (
        <Container>
            {
                periods.map(p =>
                    <Item key={nanoid(4)}>
                        <Button className={current === p && 'active'} onClick={() => handler(p)}>{p}</Button>
                    </Item>
                )
            }
        </Container>
    )
}

export default PeriodNav;