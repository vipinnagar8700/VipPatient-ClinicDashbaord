// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { Grid, InputLabel, Stack, Link, Paper, MenuItem } from '@mui/material';
import { useState } from 'react';
import { GetBillingInvoice, GetPatientAppointment } from '@components/Api/AllApi';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Sidebar from '@layout/Sidebar';
import { useNavigate } from 'react-router';
// components
import { useSnackbar } from 'notistack';




const CreateInvoice = () => {
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });
    const [invoiceTitle, setInvoiceTitle] = useState('');
    const [invoiceDate, setInvoiceDate] = useState('');
    const [clinicId, setClinicId] = useState('');
    const [description, setDescription] = useState([]);
    const [amount, setAmount] = useState([]);
    const [open, setOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);

    const [patientName, setPatientName] = useState('');
    const [optionsData, setOptions] = useState([]);

    const handleInputFocus = () => {
        setOpen(true);
    };

    const handleInputBlur = () => {
        setOpen(false);
    };
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        let token = Cookies.get('clinic');

        GetBillingInvoice(invoiceTitle, invoiceDate, selectedPatientId, description, amount, token)
            .then((data) => {
                // Handle the response from the API, if needed
                console.log('API response:', data.messege);
                enqueueSnackbar(data.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
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
    };


    useEffect(() => {
        getPatientData()
    }, [patientName])


    const getPatientData = async () => {
        if (patientName) {
            try {
                // Get the clinic ID from where it's available, or define it properly
                const Filerpatient = await GetPatientAppointment(patientName);
                console.log(Filerpatient, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIii");
                if (Filerpatient) {
                    // Here, we check if Filerpatient is an object with a "then" function (i.e., a Promise).
                    if (typeof Filerpatient.then === 'function') {
                        // If it's a Promise, we use "await" to get the resolved data.
                        const data = await Filerpatient;
                        console.log(data.results, "AAAAAAAAAAAAAA");
                        setFilteredOptions(data.results)
                    } else {
                        console.log(Filerpatient.results?.[0]?.name, "AAAAAAAAAAAAAA");
                        setFilteredOptions(Filerpatient.results)
                        console.log(Filerpatient.results, "UUUUUUUUUUUUUUUuu")
                    }
                }
            } catch (error) {
                console.error('Error fetching patient data:', error);
                setOptions([]);
            }
        } else {
            setOptions([]);
        }
    };
    return (
        <div>
            <Sidebar />
            <panel />
            <Page title="Create Invoice">
                <div key="balance">
                    <form onSubmit={handleSubmit}>
                        <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                            <CardContent>

                                <Grid container >
                                    <Grid items xs={6} sm={4} md={3} m={2}>
                                        <Stack>
                                            <InputLabel>Invoice Title</InputLabel>
                                            <TextField size="small" name="invoiceTitle" fullWidth value={invoiceTitle} onChange={(e) => setInvoiceTitle(e.target.value)} />

                                        </Stack>
                                    </Grid>
                                    <Grid items xs={6} sm={4} md={4} m={2}>
                                        <Stack>

                                            <InputLabel>Invoice Date</InputLabel>
                                            <TextField
                                                size="small"
                                                fullWidth
                                                name="invoiceDate"
                                                type="date" // Use type="date" for date picker input
                                                value={invoiceDate}
                                                onChange={(e) => setInvoiceDate(e.target.value)}
                                            />

                                        </Stack>
                                    </Grid>
                                    <Grid items xs={6} sm={4} md={4} m={2}>
                                        <Stack>

                                            <InputLabel>Search Patient Name</InputLabel>
                                            <Autocomplete
                                                size="small"
                                                options={filteredOptions}
                                                getOptionLabel={(option) => option.name}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} />}
                                                onInputChange={(event, newValue) => setPatientName(newValue)}
                                                onChange={(event, newValue) => {
                                                    if (newValue) {
                                                        setSelectedPatientId(newValue.id); // Update selectedPatientId with the ID of the selected option
                                                        getPatientData(newValue.id); // Call getPatientData with the selected option's ID
                                                    } else {
                                                        setSelectedPatientId(null); // Clear selectedPatientId if no option is selected
                                                    }
                                                }}
                                            />
                                            {/* <TextField
    size="small"
    fullWidth
    name="patientName"
    value={patientName}
    onChange={(e) => setPatientName(e.target.value)}
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
    renderInput={(params) => <TextField {...params} label="Select A Patient" />}
/>
{open && filteredOptions.length > 0 && (
    <Paper square>
        {filteredOptions.map((option, index) => (
            <MenuItem
                style={{ padding: 7, position: 'fixed', minWidth: '200px' }}
                key={index}
                value={option.id}
                onClick={() => {
                    setPatientName(option.name); // Update the TextField value with the selected option's name
                    setOpen(false); // Close the dropdown
                    alert(option.id); // Show an alert with the selected option's ID
                }}
            >
                <Typography value={option.id} sx={{ color: 'white' }}>
                    {option.name}
                </Typography>
            </MenuItem>
        ))}
    </Paper>
)} */}

                                        </Stack>
                                    </Grid>
                                </Grid>
                                <Box sx={{ display: 'flex', gap: 20 }}>



                                </Box>


                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                            <CardContent>
                                <Grid container >
                                    <Grid items xs={6}>
                                        <Typography sx={{ fontSize: 18, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                            Line Items
                                        </Typography>
                                    </Grid>


                                </Grid>
                                <Grid container gap={4}>
                                    <Grid items xs={5}>
                                        <InputLabel>Description</InputLabel>
                                        <TextField value={description.join(', ')}
                                            onChange={(e) => setDescription(e.target.value.split(','))} name="description" size="small" fullWidth />
                                    </Grid>

                                    <Grid items xs={5}>

                                        <InputLabel>Amount ($)</InputLabel>
                                        <TextField size="small" name="amount" value={amount.join(', ')}
                                            onChange={(e) => setAmount(e.target.value.split(','))} fullWidth />
                                    </Grid>
                                    <Grid items xs={1}>

                                        {/* <InputLabel>Action</InputLabel> */}
                                        {/* <button style={{ backgroundColor: 'red', width: '20px', height: 35, borderRadius: 6, color: 'white' }}>
                                            X
                                        </button> */}
                                    </Grid>

                                </Grid>
                                <div style={{ marginTop: 13 }}>
                                    <button type="submit" style={{ backgroundColor: 'green', width: '120px', height: 40, borderRadius: 6, color: 'white' }}>
                                        Create Invoice
                                    </button>
                                </div>



                            </CardContent>

                        </Card>
                    </form>

                </div>

            </Page >
        </div >
    )
}

export default CreateInvoice