// styled components
import {Container, Item, Button} from '@ui/TabNav/style';

// utils
import {nanoid} from "nanoid";
import PropTypes from "prop-types";

const NavButton = ({state, filter, handler}) => {
    const isActive = state.value === filter.value;
    return (
        <Button className={isActive ? 'active' : ''}
                onClick={() => handler({value: filter.value, label: filter.label})}
        >
            {filter.label}
        </Button>
    )
}

const GenderNav = ({state, handler}) => {
    const options = [
        {
            value: 'all',
            label: 'all'
        },
        {
            value: 'male',
            label: 'Men'
        },
        {
            value: 'female',
            label: 'Women'
        }
    ];

    return (
        <Container as="ul" className="gender">
            {
                options.map(item => {
                    return (
                        <Item key={nanoid(3)}>
                            <NavButton state={state} filter={item} handler={handler} />
                        </Item>
                    )
                })
            }
        </Container>
    )
}

GenderNav.propTypes = {
    state: PropTypes.object.isRequired,
    handler: PropTypes.func.isRequired
}

export default GenderNav;