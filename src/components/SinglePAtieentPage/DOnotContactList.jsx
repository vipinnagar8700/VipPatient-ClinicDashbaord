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
import { ADDDOContactList, AddSecurityGroup, DeleteDOContactList, GetBilling, GetBillingCancel, GetSingleDOContactList, GetSinglePAtient, GettSecurityData, UpdateDOContactList, UpdateSecurity, deleteSecurity, editSecurityData, getDOContactList } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar } from '@mui/material';
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



const DOnotContactList = () => {
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


  // useEffect(() => {
  //   handleDeleteInvoice()
  // }, [])

  const handleDeleteInvoice = (p_id) => {
    setshowpau(true);
    let EditData = GetSingleDOContactList(p_id);
    console.log(EditData)
    if (EditData) {
      EditData.then((data) => {
        console.log(data?.result, "HHHHHHHHHHHHHHHHHHHHHHHHHHH")
        setSec(data?.result)
      })
    }
  };
  console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

  let fname = Sec && Sec?.fname;
  let lname = Sec && Sec?.lname;
  let relationship = Sec && Sec?.relationship;
  console.log(fname, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
  let id = Sec && Sec?.id;
  let { p_id } = useParams()
  // alert(p_id)

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await getDOContactList(p_id);
        console.log(data, "This Is all Billing Data!");
        setPatientSData(data.result || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOooo")

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
      name: 'Name',
      selector: row => row.fname + row.lname,
      sortable: true,
    },
    {
      name: 'Relationship',
      selector: row => row.relationship,
      sortable: true,
    },



    {
      name: 'Actions',
      sortable: true,
      cell: (row) => (
        <>


          <button style={{ width: '70px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

            <Link to="#" onClick={() => handleDeleteInvoice(row.id)}    >
              Edit
            </Link>

          </button>
          <button style={{ width: '70px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

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
    fname: item?.fname || '',
    lname: item?.lname || '',
    relationship: item?.relationship || '',
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


  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Relationship, setRelationship] = useState('');

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleRelationship = (event) => {
    setRelationship(event.target.value);
  };

  const handleSendMessage = () => {
    const DATATA = ADDDOContactList(p_id,FirstName, LastName, Relationship)
    if (DATATA) {
      DATATA.then((result) => {
        // Handle the result, if needed
        console.log('API response:', result.messege);
        alert(result.messege)
        setCount(count + 1)
        setshowpa(false);

      })
        .catch((error) => console.log('error', error));
    }
  };


  const handleDelete = (id) => {
    let DeleteData = DeleteDOContactList(id)

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

  const handleUpdate = (e) => {

    e.preventDefault();

    try {
      console.log(id, fname, lname, relationship, "qqqqqqqqqqqqqqqqqqqqqqqq")
      const result = UpdateDOContactList(id, fname, lname, relationship,
      );

      result.then((data) => {
        console.log(data, "thtrtrer;ojgsrdbehx");
        alert(data.messege);
        setCount(count + 1)
        // Navigate('/dashboard_a')
        setshowpau(false);

      })
      console.log(result, "Data Updated Successfully");
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };



  return (
    <>
      {
        showpa &&
        <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
          <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Add Security Group</Box>
              <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <InputLabel htmlFor="name">First Name</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={FirstName}
                  onChange={handleFirstName}
                // Add any other props you want to customize the TextField
                />
                <InputLabel htmlFor="name">Last Name</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={LastName}
                  onChange={handleLastName}
                // Add any other props you want to customize the TextField
                />
                <InputLabel htmlFor="name">Relationship</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={Relationship}
                  onChange={handleRelationship}
                // Add any other props you want to customize the TextField
                />

                <Grid container>
                  <Grid item xs={12}>
                    <Stack mt={1}>
                      <button
                        type="button" // Set the type to "button" to prevent form submission
                        p={2}
                        style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }}
                        onClick={handleSendMessage}
                        variant="contained"
                        color="success"
                        sx={{ width: '100%' }}
                      >
                        Save Changes
                      </button>
                    </Stack>
                  </Grid>
                </Grid>

                {/* Add more TextField components for other input fields */}
              </form>

            </Box>

          </Box>
        </Box>
      }
      {
        showpau &&
        <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
          <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>Update Security Group</Box>
              <Box onClick={handleClosesu} sx={{ fontWeight: 900 }}>x</Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <form>
                <InputLabel htmlFor="name">First Name</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={fname} onChange={(e) => {
                    setSec({
                      ...Sec, fname: e.target.value
                    })
                  }}
                // Add any other props you want to customize the TextField
                />
                <InputLabel htmlFor="name">Last Name</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={lname} onChange={(e) => {
                    setSec({
                      ...Sec, lname: e.target.value
                    })
                  }}
                // Add any other props you want to customize the TextField
                />
                <InputLabel htmlFor="name">Relationship</InputLabel>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size='small'
                  value={relationship} onChange={(e) => {
                    setSec({
                      ...Sec, relationship: e.target.value
                    })
                  }}
                // Add any other props you want to customize the TextField
                />

                <Grid container>
                  <Grid item xs={12}>
                    <Stack mt={1}>
                      <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} onClick={handleUpdate} variant="contained" color="success" sx={{ width: '100%' }}>Save Changes</button>
                    </Stack>
                  </Grid>

                </Grid>


                {/* Add more TextField components for other input fields */}
              </form>
            </Box>

          </Box>
        </Box>
      }
      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Do-Not-Contact (DNC)<br />
                View, add and delete DNC entries.
              </Typography>
              <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '170px', color: 'white', marginBottom: 4 }} onClick={() => { setshowpa(true) }}>
                <Link to="#">Add Entry</Link>
              </button>
              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total Entry found
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
  );
};



export default DOnotContactList