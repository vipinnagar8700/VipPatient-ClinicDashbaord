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
import { AddSecurityGroup, GetBilling, GetBillingCancel, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box } from '@mui/material';
import { useSnackbar } from 'notistack';



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



const SecurityGroups = () => {
    const { enqueueSnackbar } = useSnackbar();
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
    //     handleDeleteInvoice()
    // }, [])

    const handleDeleteInvoice = (id) => {
        setshowpau(true);
        let EditData = editSecurityData(id);
        console.log(EditData)
        if (EditData) {
            EditData.then((data) => {
                console.log(data.result?.[0], "HHHHHHHHHHHHHHHHHHHHHHHHHHH")
                setSec(data.result?.[0])
            })
        }
    };
    console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

    let name = Sec && Sec?.name;
    console.log(name, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
    let id = Sec && Sec?.id;


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GettSecurityData();
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "Security Data")

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },


        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>

                    <button style={{ width: '110px', backgroundColor: '#FED961', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                        <Link to="#">
                            Permission
                        </Link>

                    </button>
                    <button style={{ width: '110px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

                        <Link to="#" onClick={() => handleDeleteInvoice(row.id)}    >
                            Edit
                        </Link>

                    </button>
                    <button style={{ width: '110px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

                        <Link to="#" onClick={e => handleDelete(row.id)}>
                            Delete
                        </Link>

                    </button>
                </>
            ),
            button: true,
            minWidth: '1100px',
        },
    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        name: item?.name || '',
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

    const handleSendMessage = (e) => {
        e.preventDefault()
        AddSecurityGroup(subject)
            .then((result) => {
                // Handle the result, if needed
                console.log('API response:', result);
                // alert(result.messege)
                enqueueSnackbar(result.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
            })
            .catch((error) => {
                // Handle errors (e.g., show an error message)
                enqueueSnackbar(error, "error to Add data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            });
    };


    const handleDelete = (id) => {
        let DeleteData = deleteSecurity(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result);
                enqueueSnackbar("Data Successfully Deleted!", {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
            })
                .catch((error) => {
                    // Handle errors (e.g., show an error message)
                    enqueueSnackbar(error, "error to Delete data!", {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                });
        }

    }

    const handleUpdate = (e) => {

        e.preventDefault();

        try {
            console.log(id, name, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateSecurity(id, name
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                // alert(data.messege);
                enqueueSnackbar(data.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
                // Navigate('/dashboard_a')
                setshowpau(false);

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            enqueueSnackbar(error, "error to Updated data!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
    };



    return (
        <>
            {
                showpa &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: "-25%", left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Add Security Group</Box>
                            <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    value={subject}
                                    onChange={handleSubjectChange}
                                // Add any other props you want to customize the TextField
                                />

                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} onClick={handleSendMessage} variant="contained" color="success" sx={{ width: '100%' }}>Save Changes</button>
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
                <Box sx={{ zIndex: "9999999", position: "fixed", top: "-25%", left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Update Security Group</Box>
                            <Box onClick={handleClosesu} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    value={name} onChange={(e) => {
                                        setSec({
                                            ...Sec, name: e.target.value
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
            <Card sx={{ minWidth: 970, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                        Security Groups
                    </Typography>
                    <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }} onClick={() => { setshowpa(true) }}>
                        <Link to="#">Add Security Group</Link>
                    </button>
                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                {PatientSData.length} total invoices found
                            </Typography>
                            <div className="Order Page">
                                <DataTableExtensions {...tableData} export={false} print={false}>
                                    <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                                </DataTableExtensions>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </>
    );
};

export default SecurityGroups;
