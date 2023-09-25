import { Typography, Box, Stack } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { Image } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import UserImg from '../../assets/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital.jpg'
import { useEffect } from 'react';
import { GetMedicalNecessity } from '@components/Api/AllApi';
import { useParams } from 'react-router';
import { useState } from 'react';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Patient ID : ', 159, 6.0, 24, 4.0),
  createData('Patient Name :', 237, 9.0, 37, 4.3),
  createData('Patient DOB (MM/DD/YYYY):', 262, 16.0, 24, 6.0),
  createData('Patient Phone Number:', 305, 3.7, 67, 4.3),
  createData('Patient Email:', 356, 16.0, 49, 3.9),
  createData('Healthcare Practitioner: ', 159, 6.0, 24, 4.0),
  createData('Profession:', 237, 9.0, 37, 4.3),
  createData('License Number:', 262, 16.0, 24, 6.0),
  createData('Consultation & Business Address:', 305, 3.7, 67, 4.3),
  createData('Phone Number:', 356, 16.0, 49, 3.9),
  createData('Email Address:', 356, 16.0, 49, 3.9),
  createData('Daily quantity of marijuana to be used by the patient: mg/day'),
  createData('The period of use is: 6 months, 27 days'),
];


const MedicalNecessityLetter = () => {

  const handleGeneratePDF = () => {
    const element = document.getElementById('pdf-content'); // Give an ID to the container that holds your content
    const opt = {
      margin: 10,
      filename: 'medical_document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(element).set(opt).save();
  };
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  let { p_id } = useParams()

  const [Nes, setNes] = useState(false)


  useEffect(() => {
    let MedicalNes = GetMedicalNecessity(p_id)
    if (MedicalNes) {
      MedicalNes.then((data) => {
        console.log(data, "Medical Necessity!")
        setNes(data?.result)
      })
    }
  })

  return (
    <div>
      <Box>
        <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
          Medical Necessity Letter
        </Typography>

        <Grid sx={{ flexGrow: 1, }} justifyContent="center" container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              <Grid item p={3}>
                <button style={{ width: 200, backgroundColor: 'skyblue', color: "white", height: 40, borderRadius: 8 }} onClick={handleGeneratePDF}>Print Medical Document</button>
              </Grid>
            </Grid>

          </Grid>
          {
            Nes && Nes.map((data, index) => {
              return (

                <Box key={index} id="pdf-content" sx={{ minWidth: 640, maxWidth: 650, justifyContent: 'center',overflow:'scroll' }}>
                  <img src={UserImg} />

                  <Typography sx={{ fontSize: 16, fontWeight: 'bold' }} mt={3}>
                    Medical Document Authorizing the use of Cannabis for Medical Purposes
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }} mt={1} mb={3}>
                    The maximum quantity of cannabis a patient may possess may not exceed 30 times the daily amount prescribed, or 150 grams (whichever is lesser) as per the Access to Cannabis for Medical Purposes Regulations (ACMPR)
                  </Typography>

                  <Box sx={{ border: '2px solid gray' }}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              {/* <TableCell align="right">{row.calories}</TableCell> */}
                              {/* <TableCell align="right">{row.fat}</TableCell> */}
                              {/* <TableCell align="right">{row.carbs}</TableCell> */}
                              <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Typography sx={{ fontSize: 13, fontWeight: 300 }} mt={1} mb={3}>
                    By signing this document, the health care practitioner is attesting that the information contained in this document is correct and complete.
                  </Typography><br />
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt={1} mb={3}>
                    Health Care Practitioner's Signature
                  </Typography><br />
                  <Box>

                  </Box><br />
                  <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt={1} mb={3}>
                    James Hook
                  </Typography><br />
                  <Typography sx={{ fontSize: 13, fontWeight: 300 }} mt={1} mb={3}>
                    Date Signed: October 16, 2023
                  </Typography><br />
                </Box>
              )
            })
          }


        </Grid>

      </Box>
    </div>
  )
}

export default MedicalNecessityLetter