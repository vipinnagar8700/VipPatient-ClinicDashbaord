import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { AddCertificate, AddICDCode, AddSecurityGroup, DeleteCertificate, DeleteICDCode, GetAllUSers, GetBilling, GetBillingCancel, GetICDCODE, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData, getCertificate } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, Select, MenuItem } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';




const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  minWidth: 800,
  bgcolor: 'background.paper',
  border: '1px solid #f3f3f3',
  boxShadow: 24,
  p: 4,
  backgroundColor: "red",
  maxWidth: "100%",
  minWidth: "500px",
};



const ICDCode = () => {
  const [Sec, setSec] = useState(false)
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
  const [count, setCount] = useState(0)
  const [Code, setCode] = useState('');
  const [CertificateExpiry, setCertificateExpiry] = useState('');
  const [Diagnoses, setDiagnoses] = useState('');
  const [Notes, setNotes] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [post, setPost] = useState([])

  const [InternalNotes, setInternalNotes] = useState('');

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedTab('');
  };

  window.addEventListener('resize', () => {
    if (smallScreen) {
      handleModalClose();
    }
  });






  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetICDCODE(p_id);
        console.log(data, "This Is all GetICDCODE Data!");
        setPatientSData(data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "Security Data")

  let { p_id } = useParams()
  // alert(p_id)
  const [AS, setSA] = useState(false)

  useEffect(() => {

    const SinglePAtientDta = GetSinglePAtient(p_id);
    if (SinglePAtientDta) {
      SinglePAtientDta.then((data) => {
        console.log(data.result, "KJHGFDSDFGHJKL")
        setSA(data.result)
      })
    }
  }, [])


  const columns = [
    {
      name: 'Created',
      selector: (row) => {
        const createdAt = new Date(row.created_at);
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        return createdAt.toLocaleString('en-US', options);
      },
      sortable: true,
    },
    {
      name: 'Code',
      selector: row => row.certificate_expiry
      ,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.status,
      sortable: true,
    },



    {
      name: 'Actions',
      sortable: true,
      cell: (row) => (
        <>



          <button style={{ width: '80px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

            <Link to="#" onClick={e => handleDelete(row.id)}>
              Delete
            </Link>

          </button>
        </>
      ),
      button: true,
      minWidth: '200px',
    },
  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    created_at: item?.created_at || '',
    certificate_expiry: item?.icd_code || '',
    status: item?.description || '',
  }));

  const tableData = {
    columns,
    data,
  };


  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent page refresh

    AddICDCode(p_id,
      Code)
      .then((result) => {
        // Handle the result, if needed
        console.log('API response:', result.MESSAGE);
        alert(result.MESSAGE);
        setCount(count + 1);
      })
      .catch((error) => console.log('error', error));
  };



  const handleDelete = (id) => {
    let DeleteData = DeleteICDCode(id)

    if (DeleteData) {
      DeleteData.then((result) => {
        // Handle the result if needed (e.g., show a success message)
        console.log(result);
        alert("Data Successfully Deleted!")
        setCount(count + 1)
      })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
          console.error('Error deleting data:', error);
        });
    }

  }




  useEffect(() => {


    const GETALLDOCTRATA = GetAllUSers()
    if (GETALLDOCTRATA) {
      GETALLDOCTRATA.then((data) => {
        console.log(data?.result, 'LLLLLLLLLLLLLLLLLLLLLLLl')
        setPost(data?.result)
      })
    }
  }, [])


  return (
    <>


      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                ICD Codes
              </Typography>

              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total  ICD Codes found
                  </Typography>
                  <div className="Order Page">
                    <DataTableExtensions {...tableData}  export={false} print={false}>
                      <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                    </DataTableExtensions>
                  </div>
                </CardContent>
              </Card>

            </CardContent>
          </Card>
        </Grid>
        <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
          <CardContent>
            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
              Add New Code
            </Typography>


            <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
              <CardContent>
                <Box sx={{ mt: 2 }}>
                  <form onSubmit={handleSendMessage}>
                    {/* Your other form elements */}
                    <InputLabel htmlFor="name">ICD10 Code Search</InputLabel>

                    <TextField
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      value={Code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <Grid container>
                      <Grid item xs={12}>
                        <Stack mt={1}>
                          <button
                            p={2}
                            style={{
                              width: '150px',
                              backgroundColor: '#2BAA27',
                              height: '40px',
                              borderRadius: 4,
                              color: 'white',
                              fontWeight: 400,
                            }}

                            variant="contained"
                            color="success"
                            sx={{ width: '100%' }}
                          >
                            Save Changes
                          </button>
                        </Stack>
                      </Grid>
                    </Grid>
                  </form>

                </Box>
              </CardContent>
            </Card>

          </CardContent>
        </Card>
      </Grid>

    </>
  );
};








export default ICDCode