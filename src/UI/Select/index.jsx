// styled components
import {Basic, Minimal, User} from './style';

// utils
import PropTypes from 'prop-types';
import {components} from 'react-select';

// hooks
import {useEffect, useState} from 'react';

const CustomSelect = ({label, options, variant, value, changeHandler, placeholder}) => {
    // automatically select the first option if no placeholder is provided
    useEffect(() => {
        if (!placeholder && value === null) {
            changeHandler(options[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [uniqueId] = useState(
        () => 'select_' + Math.random().toFixed(5).slice(2),
    );

    const Control = ({children, ...props}) => (
        <components.Control {...props}>
            {children}
            <i className={`icon icon-${variant === 'minimal' ? 'caret' : 'chevron'}-down`}></i>
        </components.Control>
    );

    const commonProps = {
        classNamePrefix: 'Select',
        inputId: label,
        isSearchable: variant !== 'user',
        options: options,
        value: value,
        onChange: changeHandler,
        placeholder: placeholder,
        openMenuOnFocus: true,
        components: {
            Control: Control,
            Menu: (props) => <components.Menu {...props} className="menu">
                {props.children}
            </components.Menu>
        },
        id: uniqueId,
        blurInputOnSelect: true,
        className: `select-${variant}`
    }

    switch (variant) {
        default:
        case 'basic': {
            return <Basic {...commonProps} />;
        }
        case 'minimal': {
            return <Minimal {...commonProps} />;
        }
        case 'user': {
            return <User {...commonProps} />;
        }
    }
}

CustomSelect.propTypes = {
    options: PropTypes.any,
    variant: PropTypes.oneOf(['minimal', 'basic', 'user']).isRequired,
    value: PropTypes.any,
    changeHandler: PropTypes.func,
    placeholder: PropTypes.string
}

export default CustomSelect;