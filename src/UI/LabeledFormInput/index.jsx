// styling
import styled from 'styled-components/macro';
import {flex, textSizes} from '@styles/vars';

// components
import Field from '@ui/Field';

// utils
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  ${flex.col};
`

const Label = styled.label`
  font-size: ${textSizes['14']};
  width: '100%';
  margin-bottom: 8px;
`

const LabeledFormInput = ({id, title, type = 'text', placeholder, value = '', customInput}) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{title}</Label>
            {
                customInput ?
                    customInput
                    :
                    <Field type={type} defaultValue={value} id={id} placeholder={placeholder}/>
            }
        </Wrapper>
    )
}

LabeledFormInput.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    customInput: PropTypes.element
}

export default LabeledFormInput;