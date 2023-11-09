import Page from '@layout/Page'
import React from 'react'

// components
import Widget from '@components/Widget';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Typography, Tab, } from '@mui/material';
// components

// hooks
import { useState, useEffect } from 'react';
import { ProfileApi, UpdateManageClinicProfile, UpdateProfileData } from '@components/Api/AllApi';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import ClinicUser from './ClinicUser';
import SecurityGroups from './SecurityGroups';
import SecurityLocation from './SecondaryLocation';
import AppointmentType from './AppoitnmentType';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import ClinicUserAvalibility from './ClinicUserAvalibility';
import { useSnackbar } from 'notistack';
import Url from 'url/Allurl';


const ManageClinic = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate();
    const [value, setValue] = useState('1');
    const [count, setCount] = useState(0)

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };



    const [editProfile, setEditProfile] = useState(false);



    console.log(editProfile, "EditProfileData!");

    let { clinic_name, img, email, phone, timezone } = editProfile;
    console.log(clinic_name, img, email, phone, timezone, 'EEEEEEEEEEEEEEE')



    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results?.clinic?.[0])
            console.log(res.results?.clinic?.[0], "This Is profileDatas")
        })

    }, [count])

    const handleUpdate = (e) => {
        e.preventDefault();
        try {
            const result = UpdateManageClinicProfile(
                editProfile.clinic_name,
                editProfile.img,
                editProfile.email,
                editProfile.phone,
                editProfile.timezone,
            );

            result.then((data) => {
                console.log(data, "Data Updated Successfully");
                enqueueSnackbar(data.message, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
                // navigate('/dashboard_a'); // Make sure to import the 'navigate' function if using React Router or a similar library
            }).catch((error) => {
                // Handle errors (e.g., show an error message)
                enqueueSnackbar(error, "error to Update data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            });
        } catch (error) {
            enqueueSnackbar(error, "error to Update data!", {
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
            <Page title="Manage Clinic">
                <Widget >

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                <Tab label="Clinic Information" value="1" />
                                <Tab label="Clinic User" value="2" />
                                <Tab label="Security Groups" value="3" />
                                <Tab label="Clinic User Availability" value="4" />
                                <Tab label="Secondary Location" value="5" />
                                <Tab label="Custom Appointment Type" value="6" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Container>
                                <Grid container spacing={2} mt={2}>
                                    <div className="wrapper">
                                        <Container>
                                            <form onSubmit={handleUpdate}>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicName">Clinic or Company Name</InputLabel>
                                                        <TextField
                                                            id="clinicName"
                                                            size="small"
                                                            value={editProfile.clinic_name}
                                                            onChange={(e) => setEditProfile({ ...editProfile, clinic_name: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicEmail">Clinic Email Address</InputLabel>
                                                        <TextField
                                                            id="clinicEmail"
                                                            size="small"
                                                            value={editProfile.email}
                                                            onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicPhone">Clinic Phone Number</InputLabel>
                                                        <TextField
                                                            id="clinicPhone"
                                                            size="small"
                                                            value={editProfile.phone}
                                                            onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicTimezone">Default Timezone</InputLabel>
                                                        <TextField
                                                            id="clinicTimezone"
                                                            size="small"
                                                            value={editProfile.timezone}
                                                            onChange={(e) => setEditProfile({ ...editProfile, timezone: e.target.value })}
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <InputLabel htmlFor="clinicLogo">Clinic Logo</InputLabel>
                                                        <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 3 }}>
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                onChange={(e) => setEditProfile({ ...editProfile, img: e.target.files[0] })}
                                                            />
                                                        </Box>

                                                    </Grid>
                                                    <Grid item xs={6}>

                                                        <Box sx={{ marginTop: 2, width: 140, height: 140 }}>
                                                            {editProfile.img && (
                                                                <img
                                                                    style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                                                    src={`${Url}/public/uploads/images/${editProfile.img}`}
                                                                    alt="Clinic Logo"
                                                                />
                                                            )}
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <button
                                                            style={{
                                                                width: '150px',
                                                                backgroundColor: '#2BAA27',
                                                                height: '40px',
                                                                borderRadius: 4,
                                                                color: 'white',
                                                                fontWeight: 600
                                                            }}
                                                            type="submit"
                                                            bgcolor="success"
                                                            variant="contained"
                                                        >
                                                            Save Changes
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        </Container>
                                    </div>
                                </Grid>
                            </Container>
                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container spacing={2}>
                                <ClinicUser />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="3">
                            <Grid container spacing={2}>
                                <SecurityGroups />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="4">
                            <Grid container spacing={2}>
                                <ClinicUserAvalibility />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="5">
                            <Grid container spacing={2}>
                                <SecurityLocation />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="6">
                            <Grid container spacing={2}>
                                <AppointmentType />
                            </Grid>
                        </TabPanel>
                    </TabContext>



                </Widget>
            </Page>
        </>

    )
}





export default ManageClinic