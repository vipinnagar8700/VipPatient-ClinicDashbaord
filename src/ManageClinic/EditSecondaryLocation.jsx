// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, option, Box } from '@mui/material';
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
import { AddPatientapi, CreateNewUser, GetSingleSecondaryLocation, UpdateSecondaryLocation } from '@components/Api/AllApi';
import { useNavigate, useParams } from 'react-router';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useSnackbar } from 'notistack';


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

const EditSecondaryLoaction = ({ type }) => {
    const [selectedoption, setSelectedoption] = useState('');

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate()
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');


    const [AA, setAA] = useState(false)

    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation
    let { p_id } = useParams();
    //   alert(p_id)

    useEffect(() => {
        let EditTemplateed = GetSingleSecondaryLocation(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setAA(data.result)
            })
        }
    }, [])

    console.log(AA, "HHHHHHHHHHHHHHHHHHHHHh")
    const { name, phone, address1, address2, city, state, postalCode, instruction } = AA;

    const HandleClick = (values) => {
        console.log("Data That we Add", values.LocationName, values.LocationPhoneNumber, values.AddressLine, values.AddressLine1, values.State, values.City, values.PostalCode, values.AdditionalInstructions);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = CreateNewUser(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data);
                    // alert("User Successfully Added!")
                    enqueueSnackbar("User Successfully Added!", {
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


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id, name, phone, address1, address2, state, city, postalCode, instruction, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateSecondaryLocation(p_id, name, phone, address1, address2, state, city, postalCode, instruction,);

            result.then((data) => {
                console.log(data.messege, "thtrtrer;ojgsrdbehx");
                 enqueueSnackbar(data.messege, {
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
            <Page title="Edit Location">
                <div key="balance">
                    <Box mt={2}>
                        <Widget >
                            <Container>
                                <Grid container spacing={2} mt={2} mb={5}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Location Name</InputLabel>
                                                        <TextField placeholder="Name" size="small" value={name} onChange={(e) => {
                                                            setAA({
                                                                ...AA, name: e.target.value
                                                            })
                                                        }} fullWidth name="name" />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Location Phone Number</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} title="LocationPhoneNumber" size="small" name="phone" value={phone} onChange={(e) => {
                                                            setAA({
                                                                ...AA, phone: e.target.value
                                                            })
                                                        }} placeholder="LocationPhoneNumber" fullWidth />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address Line</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine" size="small" name="address1" value={address1} onChange={(e) => {
                                                            setAA({
                                                                ...AA, address1: e.target.value
                                                            })
                                                        }} placeholder="AddressLine" fullWidth />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address Line2</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AddressLine1" size="small" name="address2" placeholder="AddressLine1" value={address2} onChange={(e) => {
                                                            setAA({
                                                                ...AA, address2: e.target.value
                                                            })
                                                        }} fullWidth />

                                                    </Grid>


                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                                                        <select id="patient_add_referringDoctorState" labelId="dropdown-label" style={{
                                                            maxWidth: '100%', // Use a percentage for maximum width
                                                            padding: '10px',
                                                            fontSize: '15px',
                                                            borderRadius: '4px',
                                                            minWidth: '100px', // Use a minimum width that fits your content
                                                            width: '100%',
                                                        }}
                                                            fullWidth value={state} onChange={(e) => {
                                                                setAA({
                                                                    ...AA, state: e.target.value
                                                                })
                                                            }}
                                                            size='small'
                                                            name="state" class="form-control">
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
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                                                        <TextField title="City" size="small" name="city" value={city} onChange={(e) => {
                                                            setAA({
                                                                ...AA, city: e.target.value
                                                            })
                                                        }} placeholder="City" fullWidth />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Postal Code</InputLabel>

                                                        <TextField id={`${type}ProfileLastName`} title="postalCode" name="postalCode" size="small" value={postalCode
                                                        } onChange={(e) => {
                                                            setAA({
                                                                ...AA, postalCode
                                                                    : e.target.value
                                                            })
                                                        }} placeholder="PostalCode" fullWidth />


                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Additional Instructions</InputLabel>
                                                        <TextField id={`${type}ProfileLastName`} title="AdditionalInstructions" name="instruction" size="small" value={instruction} onChange={(e) => {
                                                            setAA({
                                                                ...AA, instruction
                                                                    : e.target.value
                                                            })
                                                        }} placeholder="AdditionalInstructions" fullWidth />



                                                    </Grid>









                                                    <Grid item sx={6} mt={2}>
                                                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
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

EditSecondaryLoaction.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditSecondaryLoaction;