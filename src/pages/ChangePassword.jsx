// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import ConfirmedDiagnosesList from '@widgets/ConfirmedDiagnoses/List';
import PeriodNav from '@components/PeriodNav';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// utils
import PropTypes from 'prop-types';

// hooks
import usePeriodNav from '@hooks/usePeriodNav';
import useArrayNav from '@hooks/useArrayNav';

// data placeholder
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { confirmed } from '@db/confirmed';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { InputLabel, Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import DoctorMessenger from '@pages/DoctorMessenger';
import { ChangePasswordPatient, SingleProductProvider } from '@components/Api/AllApi';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';





const ChangePassword = ({ nav }) => {
    const { period, periods, setPeriod } = usePeriodNav();
    const { index, navigate } = useArrayNav(periods);

    const columns = [

        {
            name: 'Date/Time',
            selector: 'director',
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'IP Address',
            selector: 'genres',
            sortable: true,
            cell: d => <span>{d.genres.join(', ')}</span>,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'User Agent',
            selector: 'year',
            sortable: true,
            minWidth: '70px',
            maxWidth: '100%',
        },
    ];


    const data = [
        {
            title: 'Beetlejuice',
            year: '1988',
            genres: [
                'Comedy',
                'Fantasy',
            ],
            director: 'Tim Burton',
        },
    ];


    const tableData = {
        columns,
        data,
    };

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'currentPassword') {
            setCurrentPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword === confirmNewPassword) {
            ChangePasswordPatient({ current_password: currentPassword, password: newPassword, password_confirmation: confirmNewPassword })
                .then((response) => {
                    // Handle the API response here, display success or error message
                    // For example:
                    if (response.status === "Success") {
                        alert(response.message);
                    } else {
                        alert(response.message);
                        setErrorMessage('Failed to change password. Please try again.');
                    }
                })
                .catch((error) => {
                    console.log('Error:', error);
                    setErrorMessage('An error occurred. Please try again later.');
                });
        } else {
            setErrorMessage('Passwords do not match.');
        }
    };


    return (
        <>
        <Sidebar/>
        <Panel/>
        
        

        <Box mt={2}>
            <Widget name="ChangePassword" mt={2}>
                <Box mt={3}>
                    <Card sx={{ maxWidth: 1145 }}>
                        <Card sx={{ maxWidth: 1100, maxHeight: 40, margin: 3, padding: 1 }} >
                            <div role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" to="/settings/ChangePassword">
                                        Change Password
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                    >
                                        Two Factor Authentication
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="text.primary"
                                        to="#"
                                        aria-current="page"
                                    >
                                        Login History
                                    </Link>
                                </Breadcrumbs>
                            </div>
                        </Card>


                    </Card>
                </Box>
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 645, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>

                            <div className="Order Page">
                                <form style={{ marginTop: 8 }}>
                                    <Typography my={3}>Change Account Password</Typography>
                                    <InputLabel>Current Password</InputLabel>
                                    <TextField
                                        sx={{ marginTop: 1 }}
                                        size="small"
                                        fullWidth
                                        type="text"
                                        name="currentPassword"
                                        value={currentPassword}
                                        onChange={handleChange}
                                    />
                                    <InputLabel>New Password</InputLabel>
                                    <TextField
                                        sx={{ marginTop: 1 }}
                                        size="small"
                                        fullWidth
                                        type="text"
                                        name="newPassword"
                                        value={newPassword}
                                        onChange={handleChange}
                                    />
                                    <InputLabel>Confirm New Password</InputLabel>
                                    <TextField
                                        sx={{ marginTop: 1 }}
                                        size="small"
                                        fullWidth
                                        type="text"
                                        name="confirmNewPassword"
                                        value={confirmNewPassword}
                                        onChange={handleChange}
                                    />
                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                    <button
                                        style={{
                                            backgroundColor: 'green',
                                            margin: 1,
                                            marginTop: 20,
                                            borderRadius: 6,
                                            color: 'white',
                                            width: '120px',
                                            height: 40,
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </CardContent>

                    </Card>

                </WidgetBody>
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 645, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>

                            <div className="Order Page">
                                <form style={{ marginTop: 8 }}>
                                    <Typography my={3}>Two Factor Authentication</Typography>
                                    <Typography my={3}>More than 93% of all stolen patient EMR data is due to compromised clinic accounts. Two factor authentication (2FA) prevents that by requiring access to your phone.
                                    </Typography>
                                    <Typography my={3}>Please fill out the form to get started on securing your account!</Typography>
                                    <InputLabel  >Phone Number</InputLabel>
                                    <TextField sx={{ marginTop: 1 }} size="small" fullWidth />
                                    <button style={{ backgroundColor: 'green', margin: 1, marginTop: 20, borderRadius: 6, color: 'white', width: '120px', height: 40 }}>Continue</button>
                                </form>

                            </div>
                        </CardContent>

                    </Card>

                </WidgetBody>
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 645, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>

                            <div className="Order Page">
                                <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                    Login History
                                </Typography>
                                <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                    <CardContent>

                                        <div className="Order Page">
                                            <DataTableExtensions
                                                {...tableData}
                                            >
                                                <DataTable
                                                    noHeader
                                                    defaultSortField="id"
                                                    defaultSortAsc={false}
                                                    pagination
                                                    highlightOnHover
                                                />
                                            </DataTableExtensions>
                                        </div>

                                    </CardContent>

                                </Card>

                            </div>
                        </CardContent>

                    </Card>

                </WidgetBody>
            </Widget>
        </Box>
        </>

    )
}

ChangePassword.propTypes = {
    nav: PropTypes.oneOf(['arrows', 'tabs']).isRequired
}

export default ChangePassword;