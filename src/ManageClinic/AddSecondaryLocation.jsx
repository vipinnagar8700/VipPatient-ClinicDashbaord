// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import { useSnackbar } from 'notistack';
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
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi, AddSecurityLocation, CreateNewUser } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    LocationName: yup.string().required(),
    LocationPhoneNumber: yup.string().required(),
    AddressLine: yup.string().required(),
    AddressLine1: yup.string().required(),
    City: yup.string().required(),
    PostalCode: yup.string().required(),
    AdditionalInstructions: yup.string().required(),
    State: yup.string().required(),
});

const AddSecondaryLoaction = ({ type }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
const navigate = useNavigate()
const { enqueueSnackbar } = useSnackbar();

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.LocationName, values.LocationPhoneNumber, values.AddressLine, values.AddressLine1, values.State, values.City, values.PostalCode, values.AdditionalInstructions);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = AddSecurityLocation(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data.messege);
                    enqueueSnackbar(data.messege, {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                });
            } else {
                enqueueSnackbar( "error to add data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } else {
            enqueueSnackbar( "error to add data!", {
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
            LocationName: '',
            LocationPhoneNumber: '',
            AddressLine: '',
            AddressLine1: '',
            State: '',
            City: '',
            PostalCode: '',
            AdditionalInstructions: '',

        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    return (
        <>
        <Sidebar/>
        <Panel/>
        <Page title="Create Location">
            <div key="balance">
                <Box mt={2}>
                    <Widget >
                        <Container>
                            <Grid container spacing={2} mt={2} mb={7}>
                                <div className="wrapper">
                                    <Container>
                                        <form onSubmit={handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Location Name</InputLabel>
                                                    <TextField placeholder="LocationName" size="small" value={values.LocationName} fullWidth onChange={handleChange} onBlur={handleBlur} name="LocationName" />
                                                    {
                                                        touched.LocationName && errors.LocationName && <div style={{ color: "red" }}>{errors.LocationName}</div>
                                                    }
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Location Phone Number</InputLabel>
                                                    <TextField id={`${type}ProfilePrefix`} title="LocationPhoneNumber" size="small" name="LocationPhoneNumber" value={values.LocationPhoneNumber} onChange={handleChange} onBlur={handleBlur} placeholder="LocationPhoneNumber" fullWidth />
                                                    {
                                                        touched.LocationPhoneNumber && errors.LocationPhoneNumber && <div style={{ color: "red" }}>{errors.LocationPhoneNumber}</div>
                                                    }
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Address Line</InputLabel>
                                                    <TextField id={`${type}ProfileLastName`} title="AddressLine" size="small" name="AddressLine" placeholder="AddressLine" value={values.AddressLine} onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                    {
                                                        touched.AddressLine && errors.AddressLine && <div style={{ color: "red" }}>{errors.AddressLine}</div>
                                                    }
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Address Line2</InputLabel>
                                                    <TextField id={`${type}ProfileLastName`} title="AddressLine1" size="small" name="AddressLine1" value={values.AddressLine1} placeholder="AddressLine1" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                    {
                                                        touched.AddressLine1 && errors.AddressLine1 && <div style={{ color: "red" }}>{errors.AddressLine1}</div>
                                                    }
                                                </Grid>
                                                

                                                <Grid item xs={6}>
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
                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                                                    <TextField title="City" size="small" name="City" value={values.City} placeholder="City" onChange={handleChange} onBlur={handleBlur} fullWidth />
                                                    {
                                                        touched.City && errors.City && <div style={{ color: "red" }}>{errors.City}</div>
                                                    }
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Postal Code</InputLabel>

                                                    <TextField id={`${type}ProfileLastName`} title="PostalCode" name="PostalCode" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="PostalCode" value={values.PostalCode} fullWidth />
                                                    {
                                                        touched.PostalCode && errors.PostalCode && <div style={{ color: "red" }}>{errors.PostalCode}</div>
                                                    }

                                                </Grid>
                                                <Grid item xs={6}>
                                                    <InputLabel htmlFor={`${type}ProfileBirthday`}>Additional Instructions</InputLabel>
                                                    <TextField id={`${type}ProfileLastName`} title="AdditionalInstructions" name="AdditionalInstructions" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="AdditionalInstructions" value={values.AdditionalInstructions} fullWidth />

                                                    {
                                                        touched.AdditionalInstructions && errors.AdditionalInstructions && <div style={{ color: "red" }}>{errors.AdditionalInstructions}</div>
                                                    }

                                                </Grid>









                                                <Grid item sx={6} mt={2}>
                                                    <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} disabled={!isValid || !dirty} type="submit" bgcolor="success" variant="contained">Save Changes</button>
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

AddSecondaryLoaction.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddSecondaryLoaction;