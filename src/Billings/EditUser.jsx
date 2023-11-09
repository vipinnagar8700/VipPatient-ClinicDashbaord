// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, option, Box } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import { useSnackbar } from 'notistack';
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
import { AddPatientapi, CreateNewUser, GetSingleClinicUser, updateUserData } from '@components/Api/AllApi';
import { useParams } from 'react-router';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const schema = yup.object().shape({
    Username: yup.string().required(),
    Name: yup.string().required(),
    Email: yup.string().required(),
    Phone: yup.string().required(),
    Password: yup.string().required(),
    LastName: yup.string().required(),
    Prefix: yup.string().required(),
    State: yup.string().required(),
    Signature: yup.string().required(),
    DoctorLicense: yup.string().required(),
    SecurityGroup: yup.string().required(),
    AppointmentColor: yup.string().required(),
    SecurityRole: yup.string().required(),
});

const EditUser = ({ type }) => {
    const [selectedoption, setSelectedoption] = useState('');
    const [AA, setAA] = useState(false)
    const { enqueueSnackbar } = useSnackbar();
    // const handleChange = (event) => {
    //     setSelectedoption(event.target.value);
    // };

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    let { id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state } = AA;
    console.log(id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state, "ALLLLLLLLLLLL USER GVCxdfcgvhbjndsedrfctgvhbj")


    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.Username, values.Name, values.Email, values.Phone, values.Password, values.Prefix, values.LastName, values.SecurityGroup, values.DoctorLicense, values.Signature, values.State, values.AppointmentColor, values.SecurityRole);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = CreateNewUser(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data);
                    enqueueSnackbar("User Successfully Added!", {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                });
            } else {
                enqueueSnackbar("error to Delete data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } else {
            enqueueSnackbar("error to Delete data!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }

    };
    const {
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
            Username: '',
            Email: '',
            Phone: '',
            Password: '',
            Name: '',
            LastName: '',
            Prefix: '',
            City: '',
            State: '',
            DoctorLicense: '',
            SecurityGroup: '',
            Signature: '',
            AppointmentColor: '',
            SecurityRole: '',
        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    let { p_id } = useParams();
    //   alert(p_id)

    useEffect(() => {
        let EditTemplateed = GetSingleClinicUser(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setAA(data.result)
            })
        }
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = updateUserData(p_id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state);

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                enqueueSnackbar("Data Successfully Updated!", {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            enqueueSnackbar(error, "error to Updated data!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
    };


    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Edit User">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >



                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Username</InputLabel>
                                                        <TextField placeholder="User Name" size="small" value={username} onChange={(e) => {
                                                            setAA({
                                                                ...AA, username: e.target.value
                                                            })
                                                        }} fullWidth name="Username" />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Prefix</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} title="Prefix" size="small" name="Prefix" value={prefix} onChange={(e) => {
                                                            setAA({
                                                                ...AA, prefix: e.target.value
                                                            })
                                                        }} placeholder="Prefix" fullWidth />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="First Name" size="small" name="Name" placeholder="First Name" value={name} onChange={(e) => {
                                                            setAA({
                                                                ...AA, name: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="LastName" placeholder="Last Name" value={lname} onChange={(e) => {
                                                            setAA({
                                                                ...AA, lname: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                                        <TextField title="Phone" size="small" name="Phone" placeholder="Phone" value={phone} onChange={(e) => {
                                                            setAA({
                                                                ...AA, phone: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" name="Email" placeholder="Email" value={email} onChange={(e) => {
                                                            setAA({
                                                                ...AA, email: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Password</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="Password" size="small" name="Password" placeholder="Password" value={password} onChange={(e) => {
                                                            setAA({
                                                                ...AA, password: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Security Group</InputLabel>

                                                        <select
                                                            labelId="dropdown-label" placeholder={AA.security_group} style={{
                                                                maxWidth: '100%', // Use a percentage for maximum width
                                                                padding: '10px',
                                                                fontSize: '15px',
                                                                borderRadius: '4px',
                                                                minWidth: '100px', // Use a minimum width that fits your content
                                                                width: '100%',
                                                            }}
                                                            value={AA.security_group}  // Set the value to the state value from editProfile
                                                            fullWidth onChange={(e) => {
                                                                setAA({
                                                                    ...AA, security_group: e.target.value
                                                                })
                                                            }}
                                                            size='small'
                                                            name="SecurityGroup"
                                                        >
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Other">Other</option>
                                                        </select>


                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Security Roles</InputLabel>

                                                        <select style={{
                                                            maxWidth: '100%', // Use a percentage for maximum width
                                                            padding: '10px',
                                                            fontSize: '15px',
                                                            borderRadius: '4px',
                                                            minWidth: '100px', // Use a minimum width that fits your content
                                                            width: '100%',
                                                        }}
                                                            labelId="dropdown-label"
                                                            fullWidth value={role} onChange={(e) => {
                                                                setAA({
                                                                    ...AA, role: e.target.value
                                                                })
                                                            }}
                                                            size='small'
                                                            name="SecurityRole"
                                                        >
                                                            <option value="clinic_admin">Administrator</option>
                                                            <option value="clinic_user">General User</option>
                                                        </select>


                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>License Number</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="DoctorLicense" name="DoctorLicense" size="small" value={doc_license} onChange={(e) => {
                                                            setAA({
                                                                ...AA, doc_license: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>


                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Default Appointment Color</InputLabel>
                                                        <TextField id={`${type}ProfileAddress1`} title="AppointmentColor" name="AppointmentColor" size="small" value={prefix} onChange={(e) => {
                                                            setAA({
                                                                ...AA, prefix: e.target.value
                                                            })
                                                        }} placeholder="AppointmentColor" fullWidth />



                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                                                        <select id="patient_add_referringDoctorState" labelId="dropdown-label"
                                                            fullWidth style={{
                                                                maxWidth: '100%', // Use a percentage for maximum width
                                                                padding: '10px',
                                                                fontSize: '15px',
                                                                borderRadius: '4px',
                                                                minWidth: '100px', // Use a minimum width that fits your content
                                                                width: '100%',
                                                            }} value={state} onChange={(e) => {
                                                                setAA({
                                                                    ...AA, state: e.target.value
                                                                })
                                                            }}
                                                            size='small'
                                                            name="State" class="form-control">
                                                            <option value="">Choose State</option>
                                                            <option value="AL">Alabama</option>
                                                            <option value="AK">Alaska</option>
                                                            <option value="AZ">Arizona</option>
                                                            <option value="AR">Arkansas</option>
                                                            <option value="CA">California</option>
                                                            <option value="CO">Colorado</option>
                                                            <option value="CT">Connecticut</option>
                                                            <option value="DE">Delaware</option>
                                                            <option value="DC">District Of Columbia</option>
                                                            <option value="FL">Florida</option>
                                                            <option value="GA">Georgia</option>
                                                            <option value="HI">Hawaii</option>
                                                            <option value="ID">Idaho</option>
                                                            <option value="IL">Illinois</option>
                                                            <option value="IN">Indiana</option>
                                                            <option value="IA">Iowa</option>
                                                            <option value="KS">Kansas</option>
                                                            <option value="KY">Kentucky</option>
                                                            <option value="LA">Louisiana</option>
                                                            <option value="ME">Maine</option>
                                                            <option value="MD">Maryland</option>
                                                            <option value="MA">Massachusetts</option>
                                                            <option value="MI">Michigan</option>
                                                            <option value="MN">Minnesota</option>
                                                            <option value="MS">Mississippi</option>
                                                            <option value="MO">Missouri</option>
                                                            <option value="MT">Montana</option>
                                                            <option value="NE">Nebraska</option>
                                                            <option value="NV">Nevada</option>
                                                            <option value="NH">New Hampshire</option>
                                                            <option value="NJ">New Jersey</option>
                                                            <option value="NM">New Mexico</option>
                                                            <option value="NY">New York</option>
                                                            <option value="NC">North Carolina</option>
                                                            <option value="ND">North Dakota</option>
                                                            <option value="OH">Ohio</option>
                                                            <option value="OK">Oklahoma</option>
                                                            <option value="OR">Oregon</option>
                                                            <option value="PA">Pennsylvania</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="RI">Rhode Island</option>
                                                            <option value="SC">South Carolina</option>
                                                            <option value="SD">South Dakota</option>
                                                            <option value="TN">Tennessee</option>
                                                            <option value="TX">Texas</option>
                                                            <option value="UT">Utah</option>
                                                            <option value="VT">Vermont</option>
                                                            <option value="VI">Virgin Islands</option>
                                                            <option value="VA">Virginia</option>
                                                            <option value="WA">Washington</option>
                                                            <option value="WV">West Virginia</option>
                                                            <option value="WI">Wisconsin</option>
                                                            <option value="WY">Wyoming</option>
                                                        </select>



                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Appointment Email Signature</InputLabel>
                                                        <TextField id={`${type}ProfileAddress2`} type='file' title="Signature Contact" onChange={(e) => {
                                                            setAA({
                                                                ...AA, signature: e.target.files[0]
                                                            })
                                                        }} size="small" placeholder="Signature Contact" name='Signature' fullWidth />

                                                    </Grid>






                                                    <Grid mb={5} item sx={6} mt={2}>
                                                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} type="submit" bgcolor="success" onClick={handleUpdate} variant="contained">Save Changes</button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Container>
                                    </div>
                                </Grid>
                            </Container>

                        </Widget>
                    </Box>
                </div>

            </Page>
        </>

    )
}

EditUser.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditUser;