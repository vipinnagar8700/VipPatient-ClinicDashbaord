// styled components
import {DateInputWrapper} from './style';
import {Input} from '@ui/Field';

// components
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

// utils
import {useRef, useState} from 'react';

const DateInput = ({id}) => {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const today = new Date();
    const customInputRef = useRef(null);
    const buttonRef = useRef(null);

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                open={open}
                value={value}
                maxDate={today}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                onClose={() => setOpen(false)}
                PopperProps={{anchorEl: customInputRef.current}}
                PaperProps={{className: 'date-picker'}}
                renderInput={({
                                  ref,
                                  inputProps,
                                  disabled,
                                  onChange,
                                  value
                              }) => (
                    <DateInputWrapper ref={ref}>
                        <Input
                            id={id}
                            value={value && value.toISOString()}
                            onChange={onChange}
                            disabled={disabled}
                            ref={customInputRef}
                            placeholder="MM/DD/YYYY"
                            {...inputProps}
                            onClick={() => setOpen(true)}
                        />
                        <i className="icon icon-calendar" ref={buttonRef} onClick={() => setOpen(true)}/>
                    </DateInputWrapper>
                )}
            />
        </LocalizationProvider>
    )
}

export default DateInput;