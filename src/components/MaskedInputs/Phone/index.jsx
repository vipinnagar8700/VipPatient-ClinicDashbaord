// components
import Field from '@ui/Field';
import {PatternFormat} from 'react-number-format';

const Phone = ({id, placeholder}) => {
    return (
        <Field as={PatternFormat} id={id} placeholder={placeholder} format="+1 (###) ### ## ##"/>
    );
}

export default Phone;