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
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddPatientapi, CreateNewUser, GetSingleAppointmentType, GetSingleSecondaryLocation, UpdateAppointmentType, UpdateSecondaryLocation } from '@components/Api/AllApi';
import { useNavigate, useParams } from 'react-router';
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

const EditAppointmentType = ({ type }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
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
        let EditTemplateed = GetSingleAppointmentType(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
                setAA(data.result)
            })
        }
    }, [])

    console.log(AA, "HHHHHHHHHHHHHHHHHHHHHh")
    const { name, length } = AA;

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
                    enqueueSnackbar("Data Successfully Updated!", {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                });
            } else {
                enqueueSnackbar( "error to Updated data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } else {
            enqueueSnackbar( "error to Updated data!", {
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
            console.log(p_id, name, length, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateAppointmentType(p_id, name, length);

            result.then((data) => {
                console.log(data.messege, "thtrtrer;ojgsrdbehx");
                // alert(data.messege);
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
            <Page title="Edit Appointment Type">
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
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Name</InputLabel>
                                                        <TextField placeholder="Name" size="small" value={name} onChange={(e) => {
                                                            setAA({
                                                                ...AA, name: e.target.value
                                                            })
                                                        }} fullWidth name="name" />

                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Length (in Minutes)</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} type='number' title="Length" size="small" name="length" value={length} onChange={(e) => {
                                                            setAA({
                                                                ...AA, length: e.target.value
                                                            })
                                                        }} placeholder="LocationPhoneNumber" fullWidth />

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

EditAppointmentType.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default EditAppointmentType;