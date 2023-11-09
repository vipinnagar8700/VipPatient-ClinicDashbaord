import { Stack, Box, TextField, InputLabel, Grid, Select, MenuItem, } from '@mui/material'

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
import { ADDPatientFiles, AddSecurityGroup, DEeletPatientFiles, EDITPatientFiles, GetAllPatientFiles, GetBilling, GetBillingCancel, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Avatar, FormControlLabel, Checkbox } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';
import Url from 'url/Allurl';




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
}
const VirtualBillingTerminal = () => {


  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const [Sec, setSec] = useState(false)
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
  const [count, setCount] = useState(0)

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedTab('');
  };

  window.addEventListener('resize', () => {
    if (smallScreen) {
      handleModalClose();
    }
  });

  let { p_id } = useParams()



  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetAllPatientFiles(p_id);
        console.log(data, "This Is all Billing Data!");
        setPatientSData(data.result || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "PatientFiles")

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

  const { name, lname, state, city, pincode
    , address, address2, } = AS;

  const handleClick = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const baseUrl = `${Url}/public/uploads/images/`;



  const columns = [
    {
      name: 'Date',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Amount',
      selector: row => row.img,
      sortable: true,
    },
    {
      name: 'Status ',
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
      name: 'Transaction  ID',
      selector: row => row.img,
      sortable: true,
    },



  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    name: item?.name || '',
    img: item?.file || '',
    created_at: item?.created_at || '',
  }));

  const tableData = {
    columns,
    data,
  };


  const CalnceData = () => {

  }
  const [open, setOpen] = useState(false);

  const [showpa, setshowpa] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloses = () => {
    setshowpa(false);
  };


  const [openu, setOpenu] = useState(false);

  const [showpau, setshowpau] = useState(false)

  const handleOpenu = () => {
    setOpenu(true);
  };
  const handleClosesu = () => {
    setshowpau(false);
  };


  const [subject, setSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };


  const [names, setName] = useState('');
  const [fileI, setFileI] = useState(null);
  const [isVisibleToPatient, setIsVisibleToPatient] = useState(false);

  const handleFileChange = (event) => {
    setFileI(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const isPatientVisibleInt = isVisibleToPatient ? 1 : 0;

    ADDPatientFiles(p_id, names, fileI, isVisibleToPatient).then((response) => {
      console.log('API response:', response.messege);
      alert(response.messege)
      handleCloses()
      setCount(count + 1)
      // Handle the API response here, such as displaying a success message or updating UI
    });
  };




  const handleDelete = (id) => {
    let DeleteData = DEeletPatientFiles(id)

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


  return (
    <>
      <Typography sx={{ fontSize: 19, fontWeight: 900 }}>Billing (Virtual Terminal)</Typography>
      <Typography sx={{ fontSize: 13, fontWeight: 400, color: 'red' }}>ALL Transactions are currently processed in Canadian dollars by our parent company. Please understand that the US dollar and Canadian dollar fluctuate on a daily basis. Standard fees will apply.</Typography>
      <Box mt={3} mb={4}>
        <Stack >
          <form>
            <InputLabel>Amount To Charge</InputLabel>
            <TextField sx={{ maxWidth: 200 }} size='small' />
            <Grid container gap={2}>

              <Grid items xs={12} md={5.5}>
                <InputLabel>First name</InputLabel>
                <TextField fullWidth size='small' value={name} onChange={(e) => {
                  setSA({
                    ...AS, name: e.target.value
                  })
                }} />
                <InputLabel>Last name</InputLabel>
                <TextField fullWidth size='small' value={lname} onChange={(e) => {
                  setSA({
                    ...AS, lname: e.target.value
                  })
                }}/>
                <InputLabel>Street Address</InputLabel>
                <TextField fullWidth size='small' value={address}  onChange={(e) => {
                  setSA({
                    ...AS, address: e.target.value
                  })
                }}/>
                <InputLabel>City</InputLabel>
                <TextField fullWidth size='small' value={city} onChange={(e) => {
                  setSA({
                    ...AS, city: e.target.value
                  })
                }}/>
              </Grid>
              <Grid items xs={12} md={5.5}>
                <InputLabel>State</InputLabel>
                <TextField fullWidth size='small' value={state} disabled onChange={(e) => {
                  setSA({
                    ...AS, state: e.target.value
                  })
                }}/>
                <InputLabel>Postal code</InputLabel>
                <TextField fullWidth size='small' value={pincode} onChange={(e) => {
                  setSA({
                    ...AS, pincode: e.target.value
                  })
                }}/>
                <InputLabel>Credit Card Number</InputLabel>
                <TextField fullWidth size='small' />
                <Stack direction="row" sx={{ alignItems: 'center' }} gap={2}>
                  <Box>
                    <InputLabel>Exp Month</InputLabel>
                    <Select
                      labelId="expMonthLabel"
                      label="Exp Month"
                      size="small"
                      defaultValue=""
                      sx={{ maxWidth: 200 }}
                    >
                      <MenuItem value={1}>January</MenuItem>
                      <MenuItem value={2}>February</MenuItem>
                      <MenuItem value={3}>March</MenuItem>
                      <MenuItem value={4}>April</MenuItem>
                      <MenuItem value={5}>May</MenuItem>
                      <MenuItem value={6}>June</MenuItem>
                      <MenuItem value={7}>July</MenuItem>
                      <MenuItem value={8}>August</MenuItem>
                      <MenuItem value={9}>September</MenuItem>
                      <MenuItem value={10}>October</MenuItem>
                      <MenuItem value={11}>November</MenuItem>
                      <MenuItem value={12}>December</MenuItem>

                    </Select>
                  </Box>
                  <Box>
                    <InputLabel>Exp Year</InputLabel>
                    <Select
                      labelId="expYearLabel"
                      label="Exp Year"
                      size="small"
                      sx={{ maxWidth: 100 }}
                      defaultValue=""
                    >
                      {years.map(year => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box>
                    <InputLabel>Cvv</InputLabel>
                    <TextField sx={{ maxWidth: 70 }} size='small' />
                  </Box>
                </Stack>
              </Grid>
              <button style={{ backgroundColor: 'green', color: 'white', borderRadius: 7, padding: 8 }}>Process Payment</button>
            </Grid>

          </form>
        </Stack>
      </Box >


      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Previous Virtual Terminal Transactions
              </Typography>

              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total   Previous Virtual Terminal Transactions found
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
      </Grid>
    </>
  )
}

export default VirtualBillingTerminal