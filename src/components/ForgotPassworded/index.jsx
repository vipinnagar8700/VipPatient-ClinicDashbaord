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
import { Link } from 'react-router-dom';




const ForgotPassworded = () => {
  const [email, setEmail] = useState('');

  const handleSendLink = () => {
    // Your API endpoint
    const apiUrl = `${Url}/api/send-reset-password-email`;

    // Prepare the request headers
    const myHeaders = new Headers();
    // myHeaders.append(
    //   'Cookie',
    //   'relief_session=eyJpdiI6IjlLN3oxZkNHRm9lSzZNbDVKM3ZzZFE9PSIsInZhbHVlIjoicU9OVlBQSHBOeENDVEtCTSs5Y2l5cTRRci9naUlHMno0REpiN3JvNlhnSUFFaVlLU3VLdERwbVNISkZZeHRKb2c5ZW5WdkFGNUZNVmpUalVCeTRyTlB6UUlwbS9hM21WMkZuYXFMd21DVlNHUzVpOThvak1TalEzRlVXSFhna1giLCJtYWMiOiI2N2E3NDdlYTRmMjcxZTE0NWZmZWVmMjQyOThmZTY1ZTliNDc0OTI3YTRmMjk1NmQyNWRiODRjZmQ0YjY0ODg3IiwidGFnIjoiIn0%3D'
    // );

    // Prepare the request body
    const formdata = new FormData();
    formdata.append('email', email);

    // Prepare the request options
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    // Make the API call
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Check if the API call was successful
        if (result.success) {
          // alert('Password changed successfully!');
        } else {
          // If there was an error in the API response, show the error message
          alert(result.message || 'Failed to send password reset link!');
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
                    Forgot Password?
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Enter your email to get a password reset link
                  </Typography>

                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="email" placeholder="Enter a valid email address" value={email} // Use the state variable as the value
                    onChange={(e) => setEmail(e.target.value)} // Update the state variable
                  />
                </Grid>


                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <button style={{ width: '150px', backgroundColor: 'red', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} onClick={handleSendLink}>
                    Send link
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

export default ForgotPassworded;
