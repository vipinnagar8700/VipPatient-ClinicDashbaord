import Page from '@layout/Page'
import UserSettings from '@widgets/UserSettings'
import React from 'react'
// styled components
import { SettingsHeader } from '@widgets/UserSettings/style';
import { Divider } from '@components/Widget/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import TabNav from '@ui/TabNav';
import TabNavItem from '@ui/TabNav/TabNavItem';
// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Typography, Tab, } from '@mui/material';
// components

// utils
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import { ProfileApi, UpdateManageClinicProfile, UpdateProfileData } from '@components/Api/AllApi';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import SecurityLocation from 'ManageClinic/SecondaryLocation';
import AppointmentType from 'ManageClinic/AppoitnmentType';
import Overview from './Overview';
import Charts from './Charts';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';



const PatientSinglePage = ({ type }) => {

    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [value, setValue] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [editProfile, setEditProfile] = useState(false);
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);



    console.log(editProfile, "EditProfileData!");

    let { clinic_name, img, email, phone, timezone } = editProfile;
    console.log(clinic_name, img, email, phone, timezone, 'EEEEEEEEEEEEEEE')



    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results?.clinic?.[0])
            console.log(res.results?.clinic?.[0], "This Is profileDatas")
        })

    }, [])
    const hint = 'Drag Logo here or click to select file';

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
                alert(data.message);
                // navigate('/dashboard_a'); // Make sure to import the 'navigate' function if using React Router or a similar library
            }).catch((error) => {
                console.error("Error occurred while updating data:", error);
            });
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };


    return (
    
    
        <>
            <Sidebar />
            <Panel />
            <Page title="Patient Profile">
                <Widget >

                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                                <Tab label="Overview" value="0" />
                                <Tab label="Chart" value="1" />
                            </TabList>
                        </Box>
                        <TabPanel value="0">
                            <Grid container spacing={2}>
                                <Overview />
                            </Grid>
                        </TabPanel>
                        <TabPanel value="1">
                            <Grid container spacing={2}>
                                <Charts />
                            </Grid>
                        </TabPanel>
                    </TabContext>



                </Widget>
            </Page>
        </>

    )
}





export default PatientSinglePage