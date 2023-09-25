// styled components
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, option, Box, Stack } from '@mui/material';
// components\
import { useFormik } from "formik";
import * as yup from 'yup';
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';
// styled components

import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import useNotistack from '@hooks/useNotistack';
import Cookies from 'js-cookie';
import { AddPatientapi, GetSinglePAtient, UpdatePatientData } from '@components/Api/AllApi';
import { useParams } from 'react-router';





const PersonalInformation = ({ type }) => {
  const [selectedoption, setselectedoption] = useState('');

  // const handleChange = (event) => {
  //     setselectedoption(event.target.value);
  // };

  const { notify } = useNotistack('Your changes have been successfully saved.', 'success');




  const [value, setValue] = useState('1');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };


  let { p_id } = useParams()
  // end of validation
  const [pre, setpre] = useState(false)

  const { id, name, mname, lname, prefername, dob, phone, state, address, address2, pincode, city, email, registry_id, social_security, img, gender, emergency, referring_doc, doctor_state, doctor_phone, doc_license } = pre;
  console.log(id, name, mname, lname, prefername, dob, phone, state, address, address2, pincode, city, email, registry_id, social_security, img, gender, emergency, referring_doc, doctor_state, doctor_phone, doc_license)
  useEffect(() => {

    const GetData = GetSinglePAtient(p_id)
    if (GetData) {
      GetData.then((data) => {
        console.log(data?.result, "PAtientDATATATA")
        setpre(data?.result)
      })
    }


  }, [])




  const handleUpdate = (e) => {
    e.preventDefault();

    try {

      const result = UpdatePatientData(id, name, mname, lname, prefername, dob, phone, state, address, address2, pincode, city, email, registry_id, social_security, img, gender, emergency, referring_doc, doctor_state, doctor_phone, doc_license
      );

      result.then((data) => {
        console.log(data, "thtrtrer;ojgsrdbehx");
        alert(data.message);

      })
      console.log(result, "Data Updated Successfully");
      //   history.push("/dashboard_a");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };




  return (




    <Container>
      <Grid container spacing={2} mt={2}>
        <div className="wrapper">
          <Container>
            <form >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                  <TextField placeholder="First Name" size="small" fullWidth value={name} onChange={(e) => {
                    setpre({
                      ...pre, name: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Middle Name</InputLabel>
                  <TextField id={`${type}ProfileMiddleName`} title="Middle Name" size="small" fullWidth value={mname} onChange={(e) => {
                    setpre({
                      ...pre, mname: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" placeholder="Last Name" fullWidth value={lname} onChange={(e) => {
                    setpre({
                      ...pre, lname: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Preferred Name</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" name="PreferName" placeholder="Preferred Name" fullWidth value={prefername} onChange={(e) => {
                    setpre({
                      ...pre, prefername: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Email" size="small" placeholder="Email" fullWidth value={email} onChange={(e) => {
                    setpre({
                      ...pre, email: e.target.value
                    })
                  }} />

                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Gender</InputLabel>

                  <select
                    style={{
                      maxWidth: '100%', // Use a percentage for maximum width
                      padding: '10px',
                      fontSize: '15px',
                      borderRadius: '4px',
                      minWidth: '100px', // Use a minimum width that fits your content
                      width: '100%', // Use a percentage for width
                    }}
                    labelId="dropdown-label"
                    fullWidth
                    value={gender}
                    onChange={(e) => {
                      setpre({
                        ...pre,
                        gender: e.target.value,
                      });
                    }}
                    size="small"
                    name="Gender"
                  >
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                  <TextField id={`${type}ProfileLastName`} title="Pincode" name="Pincode" size="small" placeholder="Pincode" fullWidth value={pincode} onChange={(e) => {
                    setpre({
                      ...pre, pincode: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                  <TextField id={`${type}ProfileStreet`} title="Street" name="Address" size="small" placeholder="Street" fullWidth value={address} onChange={(e) => {
                    setpre({
                      ...pre, address: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Address2</InputLabel>
                  <TextField id={`${type}ProfileAddress1`} title="Address Line 1" name="Address2" size="small" placeholder="Address Line 2" fullWidth value={address2} onChange={(e) => {
                    setpre({
                      ...pre, address2: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                  <TextField id={`${type}ProfileAddress1`} title="City" name="City" size="small" placeholder="City" fullWidth value={city} onChange={(e) => {
                    setpre({
                      ...pre, city: e.target.value
                    })
                  }} />


                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>State</InputLabel>

                  <select id="patient_add_referringDoctorState" style={{ maxWidth: '100%', // Use a percentage for maximum width
                      padding: '10px',
                      fontSize: '15px',
                      borderRadius: '4px',
                      minWidth: '100px', // Use a minimum width that fits your content
                      width: '100%', }} labelId="dropdown-label"
                    fullWidth
                    size='small'
                    value={state} onChange={(e) => {
                      setpre({
                        ...pre, state: e.target.value
                      })
                    }}
                    name="State" class="form-control">
                    <option value="">Choose State</option>
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
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Emergency Contact</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="Emergency Contact" size="small" placeholder="Emergency Contact" name='Emergency' fullWidth value={emergency} onChange={(e) => {
                    setpre({
                      ...pre, emergency: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="Referring Doc" size="small" placeholder="Referring Doc" fullWidth name='Referring_Doctor' value={referring_doc} onChange={(e) => {
                    setpre({
                      ...pre, referring_doc: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor License #</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="Referring Doc License" size="small" placeholder="Referring Doc License" fullWidth name="Doctor_license" value={doc_license} onChange={(e) => {
                    setpre({
                      ...pre, doc_license: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doctor State</InputLabel>
                  {/* <TextField id={`${type}ProfileAddress2`} title="Referring Doctor State" size="small" onChange={handleChange} onBlur={handleBlur} placeholder="Referring Doctor State" fullWidth value={values.Doctor_State} name="Doctor_State" /> */}
                  <select id="patient_add_referringDoctorState" style={{  maxWidth: '100%', // Use a percentage for maximum width
                      padding: '10px',
                      fontSize: '15px',
                      borderRadius: '4px',
                      minWidth: '100px', // Use a minimum width that fits your content
                      width: '100%', }} labelId="dropdown-label"
                    fullWidth
                    size='small'
                    value={doctor_state} onChange={(e) => {
                      setpre({
                        ...pre, doctor_state: e.target.value
                      })
                    }}
                    class="form-control">
                    <option value="">Choose State</option>
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
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Referring Doc Phone #</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="Referring Doc Phone" size="small" placeholder="Referring Doc Phone" fullWidth name="Doctor_phone" value={doctor_phone} onChange={(e) => {
                    setpre({
                      ...pre, doctor_phone: e.target.value
                    })
                  }} />

                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Social Security #</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="Social Security" size="small" placeholder="Social Security" fullWidth name="SocialSecurity" value={social_security} onChange={(e) => {
                    setpre({
                      ...pre, social_security: e.target.value
                    })
                  }} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>
                    OMMU Registry ID</InputLabel>
                  <TextField id={`${type}ProfileAddress2`} title="OMMU Registry ID" size="small" placeholder="OMMU Registry ID" fullWidth name="Registry_id" value={registry_id} onChange={(e) => {
                    setpre({
                      ...pre, registry_id: e.target.value
                    })
                  }} />
                </Grid>

                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Birth Date</InputLabel>
                  <TextField id={`${type}ProfileBirthday`} title="Birthday" size="small" placeholder="Birth Date" name="BirthDate" fullWidth customInput={<Input as={DateInput} id={`${type}ProfileBirthday`} />} value={dob} onChange={(e) => {
                    setpre({
                      ...pre, dob: e.target.value
                    })
                  }} />
                </Grid>


                <Grid item xs={6}>
                  <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                  <TextField id="patientProfilePhone" title="Phone" size="small" value={phone} onChange={(e) => {
                    setpre({
                      ...pre, phone: e.target.value
                    })
                  }} placeholder="Phone" name="Phone" fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="clinicLogo">My Avatar</InputLabel>

                  <Stack direction='row'>
                    <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setpre({ ...pre, img: e.target.files[0] })}
                      />
                    </Box>

                    <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>
                      {pre.img && (
                        <img
                          style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                          src={`https://medical.studiomyraa.com/public/uploads/images/${pre.img}`}
                          alt="Clinic Logo"
                        />
                      )}
                    </Box>
                  </Stack>


                </Grid>
                <Grid item sx={6} mt={2}>
                  <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} onClick={handleUpdate} handler={notify} type="submit" bgcolor="success" variant="contained">Save Patient</button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      </Grid>
    </Container>
  )
}

PersonalInformation.propTypes = {
  type: PropTypes.oneOf(['patient']).isRequired
}

export default PersonalInformation;
