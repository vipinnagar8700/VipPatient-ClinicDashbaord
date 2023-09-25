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
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import LabeledFormInput from '@ui/LabeledFormInput';
import Cookies from 'js-cookie';
import Page from '@layout/Page';
import { AddAppointmentTypedes, AddAppointmentTypeskjtdrmntf, AddPatientapi, AddSecurityLocation, CreateNewUser } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useNavigate } from 'react-router';



const schema = yup.object().shape({
    Name: yup.string().required(),
    Length: yup.string().required(),
});

const AddAppointmentType = ({ type }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState('');

    const navigate = useNavigate()

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    // end of validation



    const HandleClick = (values) => {
        console.log("Data That we Add", values.Name, values.Length);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const PatientAddData = AddAppointmentTypedes(values);
            console.log(PatientAddData, "Patient Add Data");

            if (PatientAddData) {
                PatientAddData.then((data) => {
                    console.log(data.messege);
                    alert(data.messege)
                    navigate('/ManageClinic/Details')
                });
            } else {
                alert("Api's Error OCCUR");
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
        isValid,
        dirty,
    } = useFormik({
        initialValues: {
            Name: '',
            Length: '',

        },
        validationSchema: schema,
        onSubmit: HandleClick,
    });



    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Create Appointment Type">
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
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}> Name</InputLabel>
                                                        <TextField placeholder="Name" size="small" value={values.Name} fullWidth onChange={handleChange} onBlur={handleBlur} name="Name" />
                                                        {
                                                            touched.Name && errors.Name && <div style={{ color: "red" }}>{errors.Name}</div>
                                                        }
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Length</InputLabel>
                                                        <TextField id={`${type}ProfilePrefix`} title="Length" size="small" name="Length" value={values.Length} onChange={handleChange} onBlur={handleBlur} placeholder="Length" fullWidth />
                                                        {
                                                            touched.Length && errors.Length && <div style={{ color: "red" }}>{errors.Length}</div>
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

AddAppointmentType.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default AddAppointmentType;