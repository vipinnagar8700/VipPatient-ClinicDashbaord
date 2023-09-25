// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';

// styled components
import { SettingsHeader } from '@widgets/UserSettings/style';
import { Divider } from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// utils
import PropTypes from 'prop-types';
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi } from '@components/Api/AllApi';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    FirstName: yup.string().required('First Name is required'),
    Email: yup.string().email('Invalid email').required('Email is required'),
    Phone: yup.string().required('Phone is required'),
    password: yup.string().required('Password is required'),
    MiddleName: yup.string( ),
    LastName: yup.string('Last Name is required'),
    PreferName: yup.string('Prefer Name is required'),
    BirthDate: yup.string().required('Date of Birth is required'),
});


const AddPatientEnrolMentLink = ({ type }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
const navigate = useNavigate()
    // const handleChange = (event) => {
    //     setSelectedMenuItem(event.target.value);
    // };

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation




    const HandleClick = async (values) => {
        console.log(
            "Data That we Add",
            values.FirstName,
            values.Email,
            values.Phone,
            values.password,
            values.MiddleName,
            values.LastName,
            values.PreferName,
            values.BirthDate
        );

        const token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            try {
                const patientAddData = await AddPatientapi(values);
                console.log(patientAddData.messege, "Patient Add Data");
                alert(patientAddData.messege);
                navigate('/Clinic-Dashboard')
            } catch (error) {
                alert("API Error Occurred");
            }
        } else {
            alert("Token is missing");
        }
    };

    const {
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
    } = useFormik({
        initialValues: {
            FirstName: "",
            Email: "",
            Phone: "",
            password: "",
            MiddleName: "",
            LastName: "",
            PreferName: "",
            BirthDate: "",
        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    
    return (

        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                    <TextField placeholder="First Name" size="small" value={values.FirstName} fullWidth onChange={handleChange} onBlur={handleBlur} name="FirstName" />
                    {
                        touched.FirstName && errors.FirstName && <div style={{ color: "red" }}>{errors.FirstName}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Middle Name</InputLabel>
                    <TextField id={`${type}ProfileMiddleName`} title="Middle Name" size="small" name="MiddleName" value={values.MiddleName} onChange={handleChange} onBlur={handleBlur} placeholder="Middle Name" fullWidth />
                    {
                        touched.MiddleName && errors.MiddleName && <div style={{ color: "red" }}>{errors.MiddleName}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                    <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="LastName" value={values.LastName} placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} fullWidth />
                    {
                        touched.LastName && errors.LastName && <div style={{ color: "red" }}>{errors.LastName}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Preferred Name</InputLabel>
                    <TextField id={`${type}ProfileLastName`} title="PreferName" size="small" name="PreferName" placeholder="Preferred Name" value={values.PreferName} onChange={handleChange} onBlur={handleBlur} fullWidth />
                    {
                        touched.PreferName && errors.PreferName && <div style={{ color: "red" }}>{errors.PreferName}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                    <TextField id={`${type}ProfileLastName`} title="Email" size="small" value={values.Email} name="Email" placeholder="Email" fullWidth onChange={handleChange} onBlur={handleBlur} />
                    {
                        touched.Email && errors.Email && <div style={{ color: "red" }}>{errors.Email}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Password</InputLabel>
                    <TextField id={`${type}ProfileLastName`} title="Password" size="small" value={values.password} name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} fullWidth />
                    {
                        touched.password && errors.password && <div style={{ color: "red" }}>{errors.password}</div>
                    }
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Birth Date</InputLabel>
                    <TextField
                        id={`${type}ProfileBirthday`}
                        title="Birthday"
                        size="small"
                        type="date"  // Add this line to set the input type to "date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Birth Date"
                        name="BirthDate"
                        value={values.BirthDate}
                        fullWidth
                        InputProps={{
                            inputProps: {
                                max: new Date().toISOString().split("T")[0],  // Set max date to today
                            },
                        }}
                    />

                    {
                        touched.BirthDate && errors.BirthDate && <div style={{ color: "red" }}>{errors.BirthDate}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                    <TextField id="patientProfilePhone" title="Phone" size="small" placeholder="Phone" name="Phone" onChange={handleChange} onBlur={handleBlur} value={values.Phone} fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                    {
                        touched.Phone && errors.Phone && <div style={{ color: "red" }}>{errors.Phone}</div>
                    }
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <button style={{ width: '180px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} type="submit" bgcolor="success" >Send Enrollment Link</button>
                </Grid>
            </Grid>

        </form>

    )
}

AddPatientEnrolMentLink.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddPatientEnrolMentLink;