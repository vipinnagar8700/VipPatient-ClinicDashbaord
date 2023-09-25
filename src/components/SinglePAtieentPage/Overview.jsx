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
import { ADDNotes, AddSecurityGroup, DeleteNotes, GetBilling, GetBillingCancel, GetSingleNotes, GetSinglePAtient, GettSecurityData, UpdateNotes, UpdateSecurity, deleteSecurity, editSecurityData, getNotesData } from '@components/Api/AllApi';
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



const Overview = () => {
    const [Sec, setSec] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)
    const [openu, setOpenu] = useState('');

    const [showpau, setshowpau] = useState('')
    const [open, setOpen] = useState(false);

    const [showpa, setshowpa] = useState('')

    const handleOpen = () => {
        setOpen(true);
    };
    const handleCloses = () => {
        setshowpa(false);
    };

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

    const handleDeleteInvoice = (p_id) => {
        setshowpau(true);
        let EditData = GetSingleNotes(p_id);
        console.log(EditData)
        if (EditData) {
            EditData.then((data) => {
                console.log(data?.result, "HHHHHHHHHHHHHHHHHHHHHHHHHHH")
                setSec(data?.result)
            })
        }
    };
    console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

    let note = Sec && Sec?.note;
    console.log(note, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
    let id = Sec && Sec?.id;


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await getNotesData();
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "Notes")

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



    const handleOpenu = () => {
        setOpenu(true);
    };
    const handleClosesu = () => {
        setshowpau(false);
    };


    const columns = [
        {
            name: 'Date',
            selector: row => row.created_at,
            sortable: true,
        },
        {
            name: 'Notes',
            selector: row => row.note,
            sortable: true,
        },
        {
            name: 'By',
            selector: row => row.DoctorName,
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
        note: item?.note || '',
        created_at: item?.created_at || '',
        DoctorName: item?.doctor?.[0].name || '',
    }));

    const tableData = {
        columns,
        data,
    };


    const CalnceData = () => {

    }




    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleSendMessage = () => {
        const HET = ADDNotes(subject)

        if (HET)
            HET.then((result) => {
                // Handle the result, if needed
                console.log('API response:', result);
                alert(result.messege)
                setCount(count + 1)

                setshowpa(false);
            })
                .catch((error) => console.log('error', error));
    };


    const handleDelete = (id) => {
        let DeleteData = DeleteNotes(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result.result);
                alert(result.result)
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
            console.log(id, note, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateNotes(id, note
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                alert(data.messege);
                setCount(count + 1)
                // Navigate('/dashboard_a')
                handleClosesu()

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
                            <Box>Add Notes</Box>
                            <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form onSubmit={(e) => e.preventDefault()}>
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
                            <Box>Update Note</Box>
                            <Box onClick={handleClosesu} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                    value={note} onChange={(e) => {
                                        setSec({
                                            ...Sec, note: e.target.value
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
                <Grid items xs={4}>
                    <Card>
                        <CardContent>
                            <Avatar src={`https://medical.studiomyraa.com/public/uploads/images/${AS.img}`} sx={{ width: 150, height: 150, mx: 'auto', my: 2 }} />
                            <Typography sx={{ textAlign: 'center', mb: 1, justifyContent: 'center' }}>
                                Patient Overview
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Patient ID: {AS.id}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                DOB: {AS.dob}
                            </Typography><Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                AGE:
                            </Typography><Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                GENDER: {AS.gender}
                            </Typography><Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Patient SINCE: {AS.created_at}
                            </Typography><Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Certified Since:
                            </Typography><Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                OMMU Registry ID: {AS.registry_id}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid items xs={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                OMMU Registry ID: {AS.registry_id}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Email: {AS.email}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Telephone Number: {AS.phone}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 1, fontSize: 13 }}>
                                Most Recent Exam's ICD10 Codes: (code not found)
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 670, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Patient Notes
                            </Typography>
                            <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '170px', color: 'white', marginBottom: 4 }} onClick={() => { setshowpa(true) }}>
                                <Link to="#">Add Notes</Link>
                            </button>
                            <Card sx={{ minWidth: 605, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {PatientSData.length} total Notes found
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
                    <PaymentHistory />
                    <MostRecentAppointment />
                </Grid>
            </Grid>

        </>
    );
};

export default Overview;
