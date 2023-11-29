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
import { ADDCERTIFICATEORDER, AddCertificate, AddSecurityGroup, DeleteCertificate, DeleteCertificateOrder, GetAllUSers, GetBilling, GetBillingCancel, GetCertficateOrder, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData, getCertificate } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, Select, MenuItem, Checkbox } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import Widget from '@components/Widget';
// import { Checkbox } from '@mui/icons-material';




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



const ManageOrder = () => {
    const [Sec, setSec] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)
    const [StartDate, setStartDate] = useState('');
    const [EXPIRE, setEXPIRE] = useState('');
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
                const data = await GetCertficateOrder();
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
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
            name: 'Start Date',
            selector: row => row.start_date,
            sortable: true,
        },
        {
            name: 'End Date',
            selector: row => row.expiration
            ,
            sortable: true,
        },
        {
            name: '	# Routes',
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
        start_date: item?.start_date || '',
        expiration: item?.expiration || '',
        status: item?.status || '',
    }));

    const tableData = {
        columns,
        data,
    };


    const handleSendMessage = (event) => {
        event.preventDefault(); // Prevent page refresh

        ADDCERTIFICATEORDER(
            StartDate,
            EXPIRE,
        )
            .then((result) => {
                // Handle the result, if needed
                console.log('API response:', result.MESSAGE);
                alert(result.MESSAGE);
                setCount(count + 1);
            })
            .catch((error) => console.log('error', error));
    };



    const handleDelete = (id) => {
        let DeleteData = DeleteCertificateOrder(id)

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
    const [showFields, setShowFields] = useState(false);
    const [showFieldsA, setshowFieldsA] = useState(false);
    const [showFieldsB, setshowFieldsB] = useState(false);
    const [showFieldsC, setshowFieldsC] = useState(false);
    const [showFieldsD, setshowFieldsD] = useState(false);


    return (
        <>

            <Sidebar />
            <Panel />
            <Page>
                <Widget>

                    <Grid container>

                        <Grid items xs={12}>

                            <Card sx={{ marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                        Manage Orders
                                    </Typography>

                                    <Card sx={{  '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                                {PatientSData.length} total   Manage Orders found
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
                                    Order Details
                                </Typography>


                                <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                    <CardContent>
                                        <Box sx={{ mt: 2 }}>
                                            <form onSubmit={handleSendMessage}>
                                                {/* Your other form elements */}
                                                <InputLabel htmlFor="name">Order Start Date</InputLabel>

                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size="small"
                                                    type="date"
                                                    value={StartDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                />
                                                <InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size="small"
                                                    type="date"
                                                    value={EXPIRE}
                                                    onChange={(e) => setEXPIRE(e.target.value)}
                                                />
                                                <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} />Authorize Delivery Device?

                                                <Typography sx={{ fontSize: 16 }}>Manage Routes</Typography>
                                                <Typography sx={{ fontSize: 13 }}>Please fill out the routes you wish to allow the patient to access.</Typography>
                                                <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} onChange={() => setShowFields(!showFields)}
                                                    checked={showFields} />Enabled
                                                <Typography sx={{ fontSize: 16 }}>Route #1 - Low THC Cannabis (CBD)</Typography>
                                                {showFields && (
                                                    <>
                                                        <InputLabel htmlFor="name">Dosage</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The amount of CBD, in milligrams, for each dose</Typography>
                                                        <InputLabel htmlFor="name">Dosage per day</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The number of doses that the patient should take each day</Typography>
                                                        <InputLabel htmlFor="name">Consumption method</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The method of consumption for this route</Typography>
                                                        <InputLabel htmlFor="name">Notes</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>Additional notes that the MMTC should respect</Typography>
                                                    </>
                                                )}

                                                {/* <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} onChange={() => setshowFieldsA(!showFieldsA)}
                                                    checked={showFieldsA} />Enabled
                                                <Typography sx={{ fontSize: 16 }}>Route #2 - Medical Cannabis (CBD)</Typography>
                                                {showFieldsA && (
                                                    <>

                                                        <InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        /><InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Checkbox onChange={() => setshowFieldsB(!showFieldsB)}
                                                            checked={showFieldsB} />Enabled
                                                        <Typography>Route #3 - Medical Cannabis (THC)</Typography>

                                                        <InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        /><InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        /><InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        /><InputLabel htmlFor="name">Days Until Expiration</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                    </>
                                                )} */}
                                                <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} onChange={() => setshowFieldsB(!showFieldsB)}
                                                    checked={showFieldsB} />Enabled
                                                <Typography sx={{ fontSize: 16 }}>Route #2 - Medical Cannabis (THC)
                                                </Typography>
                                                {showFieldsB && (
                                                    <>
                                                        <InputLabel htmlFor="name">Dosage</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The amount of CBD, in milligrams, for each dose</Typography>
                                                        <InputLabel htmlFor="name">Dosage per day</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The number of doses that the patient should take each day</Typography>
                                                        <InputLabel htmlFor="name">Consumption method</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The method of consumption for this route</Typography>
                                                        <InputLabel htmlFor="name">Notes</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>Additional notes that the MMTC should respect</Typography>
                                                    </>
                                                )}
                                                <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} onChange={() => setshowFieldsC(!showFieldsC)}
                                                    checked={showFieldsC} />Enabled
                                                <Typography sx={{ fontSize: 16 }}>Route #3 - Medical Cannabis (THC)
                                                </Typography>
                                                {showFieldsC && (
                                                    <>
                                                        <InputLabel htmlFor="name">Dosage</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The amount of CBD, in milligrams, for each dose</Typography>
                                                        <InputLabel htmlFor="name">Dosage per day</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The number of doses that the patient should take each day</Typography>
                                                        <InputLabel htmlFor="name">Consumption method</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The method of consumption for this route</Typography>
                                                        <InputLabel htmlFor="name">Notes</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>Additional notes that the MMTC should respect</Typography>
                                                    </>
                                                )}
                                                <Checkbox sx={{ height: 6, width: 6, marginRight: 2, margin: 2 }} onChange={() => setshowFieldsD(!showFieldsD)}
                                                    checked={showFieldsD} />Enabled
                                                <Typography sx={{ fontSize: 16 }}>Route #4 - Medical Cannabis (THC)
                                                </Typography>
                                                {showFieldsD && (
                                                    <>
                                                        <InputLabel htmlFor="name">Dosage</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The amount of CBD, in milligrams, for each dose</Typography>
                                                        <InputLabel htmlFor="name">Dosage per day</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The number of doses that the patient should take each day</Typography>
                                                        <InputLabel htmlFor="name">Consumption method</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>The method of consumption for this route</Typography>
                                                        <InputLabel htmlFor="name">Notes</InputLabel>

                                                        <TextField
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            size="small"
                                                            value={Diagnoses}
                                                            onChange={(e) => setDiagnoses(e.target.value)}
                                                        />
                                                        <Typography sx={{ fontSize: 12 }}>Additional notes that the MMTC should respect</Typography>
                                                    </>
                                                )}
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
                                                                Create Account
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
                </Widget>
            </Page>


        </>
    );
};








export default ManageOrder