// styled components
import {ButtonWrapper, Container, Label} from './style';

// components
import ShapeButton from '@ui/ShapeButton';
import {Badge} from '@ui/Badge/style';

const Emergency = () => {
    return (
        <Container>
            <ButtonWrapper>
                <ShapeButton as="a" icon="microphone" label="Emergency help" shape="square" href="tel:911" />
                <Badge className="indicator" color="red"/>
            </ButtonWrapper>
            <Label>Emergency</Label>
        </Container>
    )
}

export default Emergency;