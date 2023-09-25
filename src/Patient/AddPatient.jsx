// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
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
import AddPatientEnrolMentLink from './PatientEnrolmentLink';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    FirstName: yup.string().required( 'First Name is required field'),
    Email: yup.string().required(),
    Phone: yup.string().required(),
    password: yup.string().required(),
    MiddleName: yup.string().required('Middle Name is required field'),
    LastName: yup.string().required('Last Name is required field'),
    BirthDate: yup.string().required('Date of Birth is required field'),
    PreferName: yup.string().required('Prefer Name is required field'),
    Gender: yup.string().required(),
    Address: yup.string().required('Address line 1 is required field'),
    Address2: yup.string().required('Address line 2 is required field'),
    City: yup.string().required(),
    State: yup.string().required(),
    Pincode: yup.string().required(),
    Emergency: yup.string().required(),
    Referring_Doctor: yup.string().required('Referring Doctor is required field'),
    Doctor_license: yup.string().required('Doctor license is required field'),
    Doctor_State: yup.string().required('Doctor State is required field'),
    Doctor_phone: yup.string().required('Doctor phone is required field'),
    SocialSecurity: yup.string().required('Social Security is required field'),
    Registry_id: yup.string().required('Registry Id is required field'),
})



const AddPatient = ({ type }) => {
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



    const HandleClick = (values) => {
        console.log("Data That we Add", values.FirstName, values.Email, values.Phone, values.password, values.MiddleName, values.LastName, values.PreferName, values.BirthDate, values.Gender, values.Address, values.Address2, values.City, values.State, values.Pincode, values.Emergency, values.Referring_Doctor, values.Doctor_license, values.Doctor_State, values.Doctor_phone, values.SocialSecurity, values.Registry_id);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = AddPatientapi(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data.messege);
                    alert(data.messege)
                    navigate('/Clinic-Dashboard')
                });
            } else {
                alert("Api's Error OCCUR");
            }
        } else {
            alert("Token is missing");
        }

    };

    const {
        setFieldValue,
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        isValid,
        dirty,
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
            Gender: "",
            Address: "",
            Address2: "",
            City: "",
            State: "",
            Pincode: "",
            Emergency: "",
            Referring_Doctor: "",
            Doctor_license: "",
            Doctor_State: "",
            Doctor_phone: "",
            Doctor_State: "",
            SocialSecurity: "",
            Registry_id: "",
        },
        validationSchema: schema,
        validateOnMount: true,
        onSubmit: HandleClick
    });




    return (
        <>
        <Sidebar/>
        <Panel/>
         <Page title="Add New Patient">
            <div key="balance">
                <Box mt={2}>
                    <Widget >


                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                    <Tab label="In Office Enrollment" value="1" />
                                    <Tab label="Email Patient Enrollment Link" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Container>
                                    <Grid container spacing={2} mt={2}>
                                        <div className="wrapper">
                                            <Container>
                                                <form onSubmit={handleSubmit}>
                                                    <Grid container spacing={2}>

                                                        
                                                        <Grid item xs={12} md={6} >
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
                                                            <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="PreferName" placeholder="Preferred Name" value={values.PreferName} onChange={handleChange} onBlur={handleBlur} fullWidth />
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
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Gender</InputLabel>

                                                            <Select
                                                                labelId="dropdown-label"
                                                                fullWidth onChange={handleChange} onBlur={handleBlur}
                                                                value={values.Gender}
                                                                size='small'
                                                                name="Gender"
                                                            ><MenuItem value="">
                                                                    <em>Choose Gender</em>
                                                                </MenuItem>
                                                                <MenuItem value="Male">Male</MenuItem>
                                                                <MenuItem value="Female">Female</MenuItem>
                                                                <MenuItem value="Other">Other</MenuItem>
                                                            </Select>
                                                            {
                                                                touched.Gender && errors.Gender && <div style={{ color: "red" }}>{errors.Gender}</div>
                                                            }

                                                        </Grid>

                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                                                            <TextField id={`${type}ProfileLastName`} title="Pincode" name="Pincode" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Pincode" value={values.Pincode} fullWidth />
                                                            {
                                                                touched.Pincode && errors.Pincode && <div style={{ color: "red" }}>{errors.Pincode}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                                                            <TextField id={`${type}ProfileStreet`} title="Street" name="Address" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Street" fullWidth value={values.Address} />
                                                            {
                                                                touched.Address && errors.Address && <div style={{ color: "red" }}>{errors.Address}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Address2</InputLabel>
                                                            <TextField id={`${type}ProfileAddress1`} title="Address Line 1" name="Address2" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Address Line 1" fullWidth value={values.Address2} />
                                                            {
                                                                touched.Address2 && errors.Address2 && <div style={{ color: "red" }}>{errors.Address2}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                                                            <TextField id={`${type}ProfileAddress1`} title="City" name="City" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="City" fullWidth value={values.City} />
                                                            {
                                                                touched.City && errors.City && <div style={{ color: "red" }}>{errors.City}</div>
                                                            }


                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                                                            <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                                fullWidth onChange={handleChange} onBlur={handleBlur}
                                                                value={values.State}
                                                                size='small'
                                                                name="State" class="form-control">
                                                                <MenuItem value="">Choose State</MenuItem>
                                                                <MenuItem value="AL">Alabama</MenuItem>
                                                                <MenuItem value="AK">Alaska</MenuItem>
                                                                <MenuItem value="AZ">Arizona</MenuItem>
                                                                <MenuItem value="AR">Arkansas</MenuItem>
                                                                <MenuItem value="CA">California</MenuItem>
                                                                <MenuItem value="CO">Colorado</MenuItem>
                                                                <MenuItem value="CT">Connecticut</MenuItem>
                                                                <MenuItem value="DE">Delaware</MenuItem>
                                                                <MenuItem value="DC">District Of Columbia</MenuItem>
                                                                <MenuItem value="FL">Florida</MenuItem>
                                                                <MenuItem value="GA">Georgia</MenuItem>
                                                                <MenuItem value="HI">Hawaii</MenuItem>
                                                                <MenuItem value="ID">Idaho</MenuItem>
                                                                <MenuItem value="IL">Illinois</MenuItem>
                                                                <MenuItem value="IN">Indiana</MenuItem>
                                                                <MenuItem value="IA">Iowa</MenuItem>
                                                                <MenuItem value="KS">Kansas</MenuItem>
                                                                <MenuItem value="KY">Kentucky</MenuItem>
                                                                <MenuItem value="LA">Louisiana</MenuItem>
                                                                <MenuItem value="ME">Maine</MenuItem>
                                                                <MenuItem value="MD">Maryland</MenuItem>
                                                                <MenuItem value="MA">Massachusetts</MenuItem>
                                                                <MenuItem value="MI">Michigan</MenuItem>
                                                                <MenuItem value="MN">Minnesota</MenuItem>
                                                                <MenuItem value="MS">Mississippi</MenuItem>
                                                                <MenuItem value="MO">Missouri</MenuItem>
                                                                <MenuItem value="MT">Montana</MenuItem>
                                                                <MenuItem value="NE">Nebraska</MenuItem>
                                                                <MenuItem value="NV">Nevada</MenuItem>
                                                                <MenuItem value="NH">New Hampshire</MenuItem>
                                                                <MenuItem value="NJ">New Jersey</MenuItem>
                                                                <MenuItem value="NM">New Mexico</MenuItem>
                                                                <MenuItem value="NY">New York</MenuItem>
                                                                <MenuItem value="NC">North Carolina</MenuItem>
                                                                <MenuItem value="ND">North Dakota</MenuItem>
                                                                <MenuItem value="OH">Ohio</MenuItem>
                                                                <MenuItem value="OK">Oklahoma</MenuItem>
                                                                <MenuItem value="OR">Oregon</MenuItem>
                                                                <MenuItem value="PA">Pennsylvania</MenuItem>
                                                                <MenuItem value="PR">Puerto Rico</MenuItem>
                                                                <MenuItem value="RI">Rhode Island</MenuItem>
                                                                <MenuItem value="SC">South Carolina</MenuItem>
                                                                <MenuItem value="SD">South Dakota</MenuItem>
                                                                <MenuItem value="TN">Tennessee</MenuItem>
                                                                <MenuItem value="TX">Texas</MenuItem>
                                                                <MenuItem value="UT">Utah</MenuItem>
                                                                <MenuItem value="VT">Vermont</MenuItem>
                                                                <MenuItem value="VI">Virgin Islands</MenuItem>
                                                                <MenuItem value="VA">Virginia</MenuItem>
                                                                <MenuItem value="WA">Washington</MenuItem>
                                                                <MenuItem value="WV">West Virginia</MenuItem>
                                                                <MenuItem value="WI">Wisconsin</MenuItem>
                                                                <MenuItem value="WY">Wyoming</MenuItem>
                                                            </Select>
                                                            {
                                                                touched.State && errors.State && <div style={{ color: "red" }}>{errors.State}</div>
                                                            }


                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Emergency Contact</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="Emergency Contact" onChange={handleChange} onBlur={handleBlur} size="small" placeholder="Emergency Contact" name='Emergency' fullWidth value={values.Emergency} />
                                                            {
                                                                touched.Emergency && errors.Emergency && <div style={{ color: "red" }}>{errors.Emergency}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="Referring Doc" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Referring Doc" fullWidth value={values.Referring_Doctor} name='Referring_Doctor' />
                                                            {
                                                                touched.Referring_Doctor && errors.Referring_Doctor && <div style={{ color: "red" }}>{errors.Referring_Doctor}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor License #</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="Referring Doc License" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Referring Doc License" fullWidth value={values.Doctor_license} name="Doctor_license" />
                                                            {
                                                                touched.Doctor_license && errors.Doctor_license && <div style={{ color: "red" }}>{errors.Doctor_license}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor State</InputLabel>
                                                            {/* <TextField id={`${type}ProfileAddress2`} title="Referring Doctor State" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Referring Doctor State" fullWidth value={values.Doctor_State} name="Doctor_State" /> */}
                                                            <Select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                                fullWidth onChange={handleChange} onBlur={handleBlur}
                                                                value={values.Doctor_State} name="Doctor_State"
                                                                size='small'
                                                                class="form-control">
                                                                <MenuItem value="">Choose State</MenuItem>
                                                                <MenuItem value="AL">Alabama</MenuItem>
                                                                <MenuItem value="AK">Alaska</MenuItem>
                                                                <MenuItem value="AZ">Arizona</MenuItem>
                                                                <MenuItem value="AR">Arkansas</MenuItem>
                                                                <MenuItem value="CA">California</MenuItem>
                                                                <MenuItem value="CO">Colorado</MenuItem>
                                                                <MenuItem value="CT">Connecticut</MenuItem>
                                                                <MenuItem value="DE">Delaware</MenuItem>
                                                                <MenuItem value="DC">District Of Columbia</MenuItem>
                                                                <MenuItem value="FL">Florida</MenuItem>
                                                                <MenuItem value="GA">Georgia</MenuItem>
                                                                <MenuItem value="HI">Hawaii</MenuItem>
                                                                <MenuItem value="ID">Idaho</MenuItem>
                                                                <MenuItem value="IL">Illinois</MenuItem>
                                                                <MenuItem value="IN">Indiana</MenuItem>
                                                                <MenuItem value="IA">Iowa</MenuItem>
                                                                <MenuItem value="KS">Kansas</MenuItem>
                                                                <MenuItem value="KY">Kentucky</MenuItem>
                                                                <MenuItem value="LA">Louisiana</MenuItem>
                                                                <MenuItem value="ME">Maine</MenuItem>
                                                                <MenuItem value="MD">Maryland</MenuItem>
                                                                <MenuItem value="MA">Massachusetts</MenuItem>
                                                                <MenuItem value="MI">Michigan</MenuItem>
                                                                <MenuItem value="MN">Minnesota</MenuItem>
                                                                <MenuItem value="MS">Mississippi</MenuItem>
                                                                <MenuItem value="MO">Missouri</MenuItem>
                                                                <MenuItem value="MT">Montana</MenuItem>
                                                                <MenuItem value="NE">Nebraska</MenuItem>
                                                                <MenuItem value="NV">Nevada</MenuItem>
                                                                <MenuItem value="NH">New Hampshire</MenuItem>
                                                                <MenuItem value="NJ">New Jersey</MenuItem>
                                                                <MenuItem value="NM">New Mexico</MenuItem>
                                                                <MenuItem value="NY">New York</MenuItem>
                                                                <MenuItem value="NC">North Carolina</MenuItem>
                                                                <MenuItem value="ND">North Dakota</MenuItem>
                                                                <MenuItem value="OH">Ohio</MenuItem>
                                                                <MenuItem value="OK">Oklahoma</MenuItem>
                                                                <MenuItem value="OR">Oregon</MenuItem>
                                                                <MenuItem value="PA">Pennsylvania</MenuItem>
                                                                <MenuItem value="PR">Puerto Rico</MenuItem>
                                                                <MenuItem value="RI">Rhode Island</MenuItem>
                                                                <MenuItem value="SC">South Carolina</MenuItem>
                                                                <MenuItem value="SD">South Dakota</MenuItem>
                                                                <MenuItem value="TN">Tennessee</MenuItem>
                                                                <MenuItem value="TX">Texas</MenuItem>
                                                                <MenuItem value="UT">Utah</MenuItem>
                                                                <MenuItem value="VT">Vermont</MenuItem>
                                                                <MenuItem value="VI">Virgin Islands</MenuItem>
                                                                <MenuItem value="VA">Virginia</MenuItem>
                                                                <MenuItem value="WA">Washington</MenuItem>
                                                                <MenuItem value="WV">West Virginia</MenuItem>
                                                                <MenuItem value="WI">Wisconsin</MenuItem>
                                                                <MenuItem value="WY">Wyoming</MenuItem>
                                                            </Select>
                                                            {
                                                                touched.Doctor_State && errors.Doctor_State && <div style={{ color: "red" }}>{errors.Doctor_State}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doc Phone #</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="Referring Doc Phone" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Referring Doc Phone" fullWidth value={values.Doctor_phone} name="Doctor_phone" />
                                                            {
                                                                touched.Doctor_phone && errors.Doctor_phone && <div style={{ color: "red" }}>{errors.Doctor_phone}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>Social Security #</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="Social Security" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Social Security" fullWidth value={values.SocialSecurity} name="SocialSecurity" />
                                                            {
                                                                touched.SocialSecurity && errors.SocialSecurity && <div style={{ color: "red" }}>{errors.SocialSecurity}</div>
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <InputLabel htmlFor={`${type}ProfileBirthday`}>
                                                                OMMU Registry ID</InputLabel>
                                                            <TextField id={`${type}ProfileAddress2`} title="OMMU Registry ID" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="OMMU Registry ID" fullWidth value={values.Registry_id} name="Registry_id" />
                                                            {
                                                                touched.Registry_id && errors.Registry_id && <div style={{ color: "red" }}>{errors.Registry_id}</div>
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
                                                            <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit" bgcolor="success" variant="contained">Create Patient</button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Container>
                                        </div>
                                    </Grid>
                                </Container>
                            </TabPanel>
                            <TabPanel value="2">
                                <Container>
                                    <Grid container spacing={2} mt={2}>
                                        <AddPatientEnrolMentLink />
                                    </Grid>
                                </Container>
                            </TabPanel>
                        </TabContext>

                    </Widget>
                </Box>
            </div>

        </Page>
        </>
       
    )
}

AddPatient.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddPatient;