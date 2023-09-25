import { Typography, Box, Stack, Divider } from '@mui/material'
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
import Florida from '../../assets/florida.png'
import One from '../../assets/AA2.jpg';
import Two from '../../assets/AA1.jpg'

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


const OMMURegistry = () => {

  const handleGeneratePDF = () => {
    const element = document.getElementById('pdf-content'); // Give an ID to the container that holds your content
    const opt = {
      margin: 2,
      filename: 'OMMURegistryDocument.pdf',
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

  return (
    <div>
      <Box>
        <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>
          OMMU Applications Document
        </Typography>

        <Grid sx={{ flexGrow: 1, }} justifyContent="center" container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              <Grid item p={3}>
                <button style={{ width: 200, backgroundColor: 'skyblue', color: "white", height: 40, borderRadius: 8 }} onClick={handleGeneratePDF}>Print OMMU Applications Document</button>
              </Grid>
            </Grid>

          </Grid>
          <Box id="pdf-content" sx={{ minWidth: '100%', maxWidth: '100%', justifyContent: 'center', padding: 2, }}>
            {/* display: 'none',  */}

            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: '100%', maxWidth: '100%',display:'none' }} aria-label="simple table">
                  <Image src={One} />
                  <Image src={Two} />
                  <Box mt={64}>
                    <Stack direction='row' p={4} sx={{ alignItems: 'center' }}>
                      <Typography><Image src={Florida} /></Typography>
                      <Typography ml={5} sx={{ fontSize: 22, fontWeight: 900 }}>Medical Marijuana Use Registry  Patient Identification Card  Qualified Patient Application</Typography>
                    </Stack>
                    <Stack m={2} direction='row' sx={{justifyContent:'space-between'}}>
                      <Typography>[ ]Initial Application</Typography>
                      <Typography>[ ]Renewal Application</Typography>
                      <Typography>[ ]Minor Application</Typography>
                    </Stack>
                    <Box m={2} sx={{ border: '2px solid gray' }}>
                      <Stack direction="row">
                        <Typography p={2} sx={{ border: '1px solid gray' }}>Mail Completed Application to:
                          Office of Medical Marijuana Use
                          PO Box 31313
                          Tampa, FL 33631-3313</Typography>
                        <Typography p={2} sx={{ border: '1px solid gray' }}>Pateint Registry ID # : </Typography>
                      </Stack>

                    </Box>
                    <Typography m={4} sx={{ fontSize: 16, fontWeight: 500 }}>The Department of Health is required by law to provide documentation to the Coalition for Medical Marijuana Research and Eductaion. Patient identifying information will not be provided to the Coalition.</Typography>


                    <Stack mx={2} my={3}>
                      <Divider mx={1} sx={{ border: '2px solid black' }} />
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>1.Qualified Patient ID: 65434567</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>2.Qualified MD/DO License Number: 65434567</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>3.Date Physician Certification issed: 10:13:2002</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>4.Qualified patient's year of birth:1995</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>5.Florida resident: Yes [x] No [ ] If No,What is Qualifying patient's state of permanant residence:</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>6.Qualified Patient's country of residence:</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>7.Gender: Male [ ] female [x]</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>8.Specify Qualify patient's medical condition of the same kind or class as or comparable to those enumerated in Section 381.986(2),(a)-(j),Florida Statutes: 55()</Typography>

                      <Divider mx={1} sx={{ border: '2px solid black' }} />
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>9.Documentation supporting Qualified Physician's opinion that the medical condition is of the same kind or class as the conditions in paragraphs (2)(a)-(j):</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>10.Documentation (Clinical,Medicial,or Scientific data) that establishes the effeciency of marijuana as treatment for the condition :</Typography>
                      <Typography my={3} m={0.3} sx={{ fontSize: 16, fontWeight: 500 }}>See Attached:</Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>
                        Documentation Supporting the qualified physician's opinion  that the benifits of Medicial use of marijuana would likely outweight the potential health risks for the patient.
                      </Typography>
                      <Typography my={3} m={0.3} sx={{ fontSize: 16, fontWeight: 500 }}>See Attached:</Typography>


                      <Typography m={1} sx={{ fontSize: 17, fontWeight: 700 }}>
                        Vipin nagar
                      </Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>
                        Printed Qualified Physician's name
                      </Typography>
                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>
                        Signature of Qualified  Physician's
                      </Typography>

                      <Typography m={0.3} sx={{ fontSize: 14, fontWeight: 500 }}>
                        08-25-2023
                      </Typography>
                      <Typography m={1} sx={{ fontSize: 14, fontWeight: 500 }}>
                        Date
                      </Typography>

                    </Stack>

                  </Box>
                </Table>
              </TableContainer>
            </Box>

          </Box>

        </Grid>

      </Box>
    </div>
  )
}

export default OMMURegistry