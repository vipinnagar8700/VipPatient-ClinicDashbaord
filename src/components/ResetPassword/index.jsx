import React, { useEffect, useState } from 'react';
import {
    Container,
    Card,
    Grid,
    Box,
    Typography,
    TextField,
    Checkbox,
    Button,
    Divider,
} from '@mui/material';
import Doctor from '../../assets/avatars/happy-doctor-holding-clipboard-with-patients.jpg'
import Url from 'url/Allurl';
import { useNavigate } from 'react-router';
import { Link, useParams } from 'react-router-dom';




const ResetPasswordPage = () => {
    const navigate = useNavigate()

    let { token } = useParams()
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSaveChange = () => {
        const apiUrl = `${Url}/api/reset-password/${token}`;

        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');

        const formdata = new FormData();
        formdata.append('password', password);
        formdata.append('password_confirmation', passwordConfirmation);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };

        fetch(apiUrl, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // Check if the API call was successful
                if (result.success) {
                    // alert('Password changed successfully!');
                } else {
                    // If there was an error in the API response, show the error message
                    alert(result.message || 'Failed to Save  new password!');
                    navigate('/Login');
                }
            })
            .catch((error) => {
                console.log('error', error);
                alert('An error occurred. Please try again later.');
            });
    };

    
    return (
        <Box sx={{ margin: '90px 190px' }}>
            <Card sx={{ border: 0 }}  >
                <Grid container alignItems="center">
                    <Grid item lg={6}>
                        <Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={Doctor} alt="Main Image" className="image" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Card sx={{ border: 0, px: 4, py: 10 }}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12}>
                                    <Typography sx={{ fontSize: 17, fontWeight: 900 }}>
                                        Change Password?
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }}>
                                        Enter your New Passowrd
                                    </Typography>

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField fullWidth label="New Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update the state variable
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Confirm New Password" value={passwordConfirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value)}// Update the state variable
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <button style={{ width: '150px', backgroundColor: 'red', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} onClick={handleSaveChange}>
                                        Save Change
                                    </button>
                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Typography variant="body2" fontWeight="bold">
                                        <Link to="/Login" > or Login </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

            </Card>
        </Box>

    );
};

export default ResetPasswordPage;
