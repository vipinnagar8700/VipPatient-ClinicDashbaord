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
import { ADDClinicShedule, AddSecurityGroup, DeleteCLinicShedule, GEtSingleCliniocShedule, GetAllUSers, GetBilling, GetBillingCancel, GetClinicShedule, GetEmployess, GettSecurityData, UPdateCLincicShedule, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, MenuItem, Select } from '@mui/material';




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



const ClinicUserAvalibility = () => {
    const [Sec, setSec] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)
    const [post, setPost] = useState(false);
    const [selectedName, setSelectedName] = useState('');
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
        let EditData = GEtSingleCliniocShedule(id);
        console.log(EditData)
        if (EditData) {
            EditData.then((data) => {
                console.log(data, "HHHHHHHHHHHHHHHHHHHHHHHHHHH1")
                setSec(data.result)
            })
        }
    };
    console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

    let dotw = Sec && Sec?.dotw;
    let doctor_id = Sec && Sec?.doctor_id;
    let start = Sec && Sec?.start;
    let stop = Sec && Sec?.stop;
    console.log(dotw, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
    let id = Sec && Sec?.id;


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetClinicShedule();
                console.log(data, "This Is all Billing Data!111111111111111111111111");
                setPatientSData(data?.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "Security Data")

    const columns = [
        {
            name: 'Day of Week',
            selector: row => row.dotw,
            sortable: true,
        },
        {
            name: 'Avalibility',
            selector: row => row.start + row.stop,
            sortable: true,
        },


        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>


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
            minWidth: '600px',
        },
    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        dotw: item?.dotw || '',
        start: item?.start || '',
        stop: item?.stop || '',
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


    const [DoctorID, setDoctorID] = useState('');
    const [Day, setDay] = useState('');
    const [Start, setStart] = useState('');
    const [Stop, setStop] = useState('');

    const handleDoctorIDChange = (event) => {
        setDoctorID(event.target.value);
    };
    const handleDayChange = (event) => {
        setDay(event.target.value);
    };
    const handleStartChange = (event) => {
        setStart(event.target.value);
    };
    const handleStopChange = (event) => {
        setStop(event.target.value);
    };

    const handleSendMessage = () => {
        ADDClinicShedule(DoctorID, Day, Start, Stop)
            .then((result) => {
                // Handle the result, if needed
                console.log('API response:', result);
                alert(result.messege)
                setCount(count + 1)
            })
            .catch((error) => console.log('error', error));
    };


    const handleDelete = (id) => {
        let DeleteData = DeleteCLinicShedule(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result);
                alert(result)
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
            console.log(id,dotw,doctor_id,start,stop)
            const result = UPdateCLincicShedule(id,dotw,doctor_id,start,stop
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


    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };

    useEffect(() => {

        const ALLDOC = GetAllUSers()
        if (ALLDOC) {
            ALLDOC.then((data) => {
                console.log(data?.result, "ALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLlll")
                setPost(data?.result)
            })
        }




    }, [])




    console.log(post, "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhhhh")

    return (
        <>
            {
                showpa &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Add Availability</Box>
                            <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <InputLabel htmlFor="name">DOTW</InputLabel>
                                <Select
                                    value={Day}
                                    onChange={handleDayChange}
                                    fullWidth
                                    size="small"
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        Select a day
                                    </MenuItem>
                                    <MenuItem value="Sunday">
                                        Sunday
                                    </MenuItem>
                                    <MenuItem value="Monday">
                                        Monday
                                    </MenuItem>
                                    <MenuItem value="Tuesday">
                                        Tuesday
                                    </MenuItem>
                                    <MenuItem value="Wednesday">
                                        Wednesday
                                    </MenuItem>
                                    <MenuItem value="Thrusday">
                                        Thrusday
                                    </MenuItem>

                                    <MenuItem value="Friday">
                                        Friday
                                    </MenuItem>
                                    <MenuItem value="Saturday">
                                        Saturday
                                    </MenuItem>
                                </Select>
                                <InputLabel htmlFor="name">Doctor</InputLabel>
                                <Select
                                    // value={selectedDay}
                                    onChange={handleDoctorIDChange}
                                    fullWidth
                                    size="small"
                                // displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        Select a Doctor
                                    </MenuItem>
                                    {
                                        post && post.map((data, index) => {
                                            return (
                                                <MenuItem key={index} value={data.id}>
                                                    {data.name}
                                                </MenuItem>

                                            )

                                        })
                                    }


                                </Select>
                                <InputLabel htmlFor="name"> Start Times </InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    type="time"
                                    value={Start}
                                    onChange={handleStartChange}
                                // Add any other props you want to customize the TextField
                                />
                                <InputLabel htmlFor="name"> Stop Times </InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    type="time"
                                    value={Stop}
                                    onChange={handleStopChange}
                                // Add any other props you want to customize the TextField
                                />

                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} onClick={handleSendMessage} variant="contained" color="success" sx={{ width: '100%' }}>Add Hours</button>
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
                            <Box>Update Avalibility</Box>
                            <Box onClick={handleClosesu} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <InputLabel htmlFor="name">DOTW</InputLabel>
                                <Select
                                    value={dotw} onChange={(e) => {
                                        setSec({
                                            ...Sec, dotw: e.target.value
                                        })
                                    }}
                                    fullWidth
                                    size="small"
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        Select a day
                                    </MenuItem>
                                    <MenuItem value="Sunday">
                                        Sunday
                                    </MenuItem>
                                    <MenuItem value="Monday">
                                        Monday
                                    </MenuItem>
                                    <MenuItem value="Tuesday">
                                        Tuesday
                                    </MenuItem>
                                    <MenuItem value="Wednesday">
                                        Wednesday
                                    </MenuItem>
                                    <MenuItem value="Thrusday">
                                        Thrusday
                                    </MenuItem>

                                    <MenuItem value="Friday">
                                        Friday
                                    </MenuItem>
                                    <MenuItem value="Saturday">
                                        Saturday
                                    </MenuItem>
                                </Select>

                                <InputLabel htmlFor="name">Doctor</InputLabel>
                                <Select
                                    // value={selectedDay}
                                    value={doctor_id} onChange={(e) => {
                                        setSec({
                                            ...Sec, doctor_id: e.target.value
                                        })
                                    }}
                                    fullWidth
                                    size="small"
                                // displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        Select a Doctor
                                    </MenuItem>
                                    {
                                        post && post.map((data, index) => {
                                            return (
                                                <MenuItem key={index} value={data.id}>
                                                    {data.name}
                                                </MenuItem>

                                            )

                                        })
                                    }


                                </Select>
                                <InputLabel htmlFor="name"> Start Times </InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    type="time"
                                    value={start} onChange={(e) => {
                                        setSec({
                                            ...Sec, start: e.target.value
                                        })
                                    }}
                                // Add any other props you want to customize the TextField
                                />
                                <InputLabel htmlFor="name"> Stop Times </InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    type="time"
                                    value={stop} onChange={(e) => {
                                        setSec({
                                            ...Sec, stop: e.target.value
                                        })
                                    }}
                                // Add any other props you want to customize the TextField
                                />
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} variant="contained" color="success" onClick={handleUpdate} sx={{ width: '100%' }}>Save Changes</button>
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
                        Clinic User Avalibility
                    </Typography>
                    <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }} onClick={() => { setshowpa(true) }}>
                        <Link to="#">Add Hours</Link>
                    </button>
                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                {PatientSData.length} total Avalibilities found
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

export default ClinicUserAvalibility;
