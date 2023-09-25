// styled components
import { StyledForm } from '@widgets/UserSettings/style';
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, MenuItem, Box, Stack, } from '@mui/material';
// components
import DropFiles from '@components/DropFiles';
import Btn from '@ui/Btn';
import CustomSelect from '@ui/Select';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';

// utils
import PropTypes from 'prop-types';
import countryList from 'react-select-country-list';
import { City } from 'country-state-city';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import { ProfileApi, UpdateProfileData } from '@components/Api/AllApi';
import LabeledFormInput from '@ui/LabeledFormInput';
import { useNavigate } from 'react-router-dom';



const Form = ({ type }) => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [editProfile, setEditProfile] = useState(false);
    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [cities, setCities] = useState([]);



    console.log(editProfile, "EditProfileData!");

    let { name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, doc_license, signature } = editProfile;
    console.log(name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, doc_license, signature, 'EEEEEEEEEEEEEEE')


    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results)
            console.log(res.results, "This Is profileDatas")
        })

    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            let imageDataToUpdate = null;  // Pehle to koi image update nahi karenge

            if (editProfile.img) {
                // Agar nayi image select hui hai, to nayi image ki update karein
                imageDataToUpdate = editProfile.img;
            }
            let SignatureDataToUpdate = null;  // Pehle to koi image update nahi karenge

            if (editProfile.signature) {
                // Agar nayi image select hui hai, to nayi image ki update karein
                SignatureDataToUpdate = editProfile.signature;
            }

            const result = UpdateProfileData(name, mname, lname, email, address, address2, city, dob, phone, pincode, state, doc_license, SignatureDataToUpdate, imageDataToUpdate, gender, about
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                alert(data.message);
                navigate('/Clinic-Dashboard')

            })
            console.log(result, "Data Updated Successfully");
            //   history.push("/dashboard_a");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };



    return (
        <div className="wrapper">

            <Container>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                        <TextField placeholder="First Name" size="small" value={name} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, name: e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Middle Name(optional)</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Middle Name" size="small" value={mname} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, mname: e.target.value
                            })
                        }} placeholder="Middle Name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" value={lname} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, lname: e.target.value
                            })
                        }} placeholder="Last Name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" value={email} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, email: e.target.value
                            })
                        }} placeholder="Email" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                        <select placeholder={editProfile.state} style={{
                            maxWidth: '100%', // Use a percentage for maximum width
                            padding: '10px',
                            fontSize: '15px',
                            borderRadius: '4px',
                            minWidth: '100px', // Use a minimum width that fits your content
                            width: '100%',
                        }}
                            value={editProfile.state}  // Set the value to the state value from editProfile
                            onChange={(e) => {
                                setEditProfile({
                                    ...editProfile,
                                    state: e.target.value
                                });
                            }}
                            size='small'
                            name="state"
                            class="form-control"
                            InputLabelProps={{ style: { color: 'blue' } }} >
                            <option value="">{editProfile.state}</option>
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
                        <TextField id={`${type}ProfileLastName`} title="Pincode" size="small" value={city} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, city: e.target.value
                            })
                        }} placeholder="Pincode" fullWidth />

                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Pincode" size="small" value={pincode} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, pincode: e.target.value
                            })
                        }} placeholder="Pincode" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                        <TextField id={`${type}ProfileStreet`} title="Street" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address: e.target.value
                            })
                        }} placeholder="Street" value={address} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address1</InputLabel>
                        <TextField id={`${type}ProfileAddress1`} title="Address Line 1" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address2: e.target.value
                            })
                        }} placeholder="Address Line 1" value={address2} fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Date of Birth</InputLabel>
                        <TextField
                            id="profileBirthday"
                            title="Birthday"
                            size="small"
                            placeholder="Birthday"
                            value={dob}  // Convert the format here
                            onChange={(e) =>
                                setEditProfile({
                                    ...editProfile,
                                    dob: e.target.value,  // Update dob directly
                                })
                            }
                            fullWidth
                            type="date"  // Use the type attribute for a date input
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>About</InputLabel>
                        <TextField id={`${type}ProfileBirthday`} title="about" size="small" placeholder="about" value={about} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, about
                                    : e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Licence Number</InputLabel>
                        <TextField id={`${type}ProfileBirthday`} title="doc_license" size="small" placeholder="Birthday" value={doc_license} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, doc_license: e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="clinicLogo">My Avatar</InputLabel>

                        <Stack direction='row'>
                            <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setEditProfile({ ...editProfile, img: e.target.files[0] })}
                                />
                            </Box>

                            <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>
                                {editProfile.img && (
                                    <img
                                        style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={`https://medical.studiomyraa.com/public/uploads/images/${editProfile.img}`}
                                        alt="Clinic Logo"
                                    />
                                )}
                            </Box>
                        </Stack>


                    </Grid>
                    <Grid item xs={6}>
                        <InputLabel htmlFor="clinicLogo">My Signature</InputLabel>
                        <Stack direction='row'>
                            <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setEditProfile({ ...editProfile, signature: e.target.files[0] })}
                                />
                            </Box>

                            <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>

                                {
                                    editProfile.signature && (
                                        <img
                                            style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                            src={`https://medical.studiomyraa.com/public/uploads/images/${editProfile.signature}`}
                                            alt="Clinic Logo"
                                        />
                                    )
                                }
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Gender</InputLabel>

                        <select placeholder={editProfile.gender} style={{
                            maxWidth: '100%',
                            padding: '10px',
                            fontSize: '15px',
                            borderRadius: '4px',
                            minWidth: '100px',
                            width: '100%',
                        }}
                            value={editProfile.gender}  // Set the value to the state value from editProfile
                            onChange={(e) => {
                                setEditProfile({
                                    ...editProfile,
                                    gender: e.target.value
                                });
                            }}
                            size='small'
                            name="gender"
                            class="form-control"
                            InputLabelProps={{ style: { color: 'blue' } }} >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>



                    </Grid>
                    {type === 'patient' && (
                        <>

                            <Grid item xs={6}>
                                <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                <TextField id="patientProfilePhone" title="Phone" onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, phone: e.target.value
                                    })
                                }} size="small" placeholder="Phone" value={phone} fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                            </Grid>
                        </>
                    )}
                    <Grid item sx={6}>
                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} handler={notify} onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

Form.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default Form;