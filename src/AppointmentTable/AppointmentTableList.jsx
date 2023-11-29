// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSnackbar } from 'notistack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { Autocomplete, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

// hooks
import { useState } from 'react';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { GetAllUSers, GetAppointmtentREwie, GetEmployess, GetLocation, GetPatientAppointment, GetTypeAppointment } from '@components/Api/AllApi';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import useContentHeight from '@hooks/useContentHeight';
import Cookies from 'js-cookie';
import { Form } from 'react-bootstrap';
import Url from 'url/Allurl';






const AppointmentDataList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [selectedTab, setSelectedTab] = useState('');
    // const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const [open, setOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const [patientName, setPatientName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [clinicLocation, setClinicLocation] = useState('');
    const [type, setType] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [note, setNote] = useState('');
    const [appointmentColor, setAppointmentColor] = useState('');
    const todos = useSelector(state => state['todos'].todos);
    const [isFormVisible, setFormVisible] = useState(false);
    const [optionsData, setOptions] = useState([]);
    const [count, setCount] = useState(0)
    const [ttt, setTTT] = useState(false)
    const [GetLoc, setGetLoc] = useState(false)
    const [GetEmpl, setGetEmp] = useState(false)
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);
    const dataFromLocalStorage = localStorage.getItem("clinic");

    // Parse the JSON data back to an object
    const parsedData = JSON.parse(dataFromLocalStorage);

    // Now, "parsedData" will contain the full object with all the properties that were originally present in the `data` object
    // console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

    const ValueID = parsedData.id;
    const ClinicID = parsedData.clinic_id;


    const [task, setTask] = useState('');
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const timestamp = Date.now();

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const handleCategoryChange = e => {
        setCategory(e);
    }

    const resetForm = () => {
        setTask('');
        setCategory(null);
    }
    const [selectedId, setSelectedId] = useState(null); // I


    const handleSubmit = (event, id) => {
        let token = Cookies.get("clinic");
        // console.log(token, "This Is token for all Api's");
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        // console.log(selectedPatientId, "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        formdata.append("patient_id", selectedPatientId);
        formdata.append("doctor_id", employeeId);
        formdata.append("clinic_id", ClinicID);
        formdata.append("clinic_location_id", clinicLocation);
        formdata.append("type_id", type);
        formdata.append("start_date", startDate);
        formdata.append("end_date", startDate);
        formdata.append("note", note);
        formdata.append("appointment_color", appointmentColor);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/clinic_appointment`, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json, "anjkhgdchjm");
                enqueueSnackbar(json.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                handleAcceptAppointment(id)
            })
            .catch((error) => {
                // Handle errors (e.g., show an error message)
                enqueueSnackbar(error, "error to Update data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            });

    };


    const handleAcceptAppointment = (id) => {
        let token = Cookies.get("clinic");
        // console.log(token, "This Is token for all Api's");

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);



        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("status", "complete");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/accept_appointment`, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json, "anjkhgdchjm");
                enqueueSnackbar(json.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                // window.location.reload()
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








    useEffect(() => {
        GetAllTypeAppointmentData();
        getPatientData();
        GetLoca();
        GetEmp();
    }, [patientName, count]);


    const getPatientData = async () => {
        if (patientName) {
            try {
                // Get the clinic ID from where it's available, or define it properly
                const Filerpatient = await GetPatientAppointment(patientName);
                // console.log(Filerpatient, "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIii");

                if (Filerpatient) {
                    // Here, we check if Filerpatient is an object with a "then" function (i.e., a Promise).
                    if (typeof Filerpatient.then === 'function') {
                        // If it's a Promise, we use "await" to get the resolved data.
                        const data = await Filerpatient;
                        // console.log(data.results, "AAAAAAAAAAAAAA");
                        setFilteredOptions(data.results)
                    } else {
                        // console.log(Filerpatient.results?.[0]?.name, "AAAAAAAAAAAAAA");
                        setFilteredOptions(Filerpatient.results)
                        // console.log(Filerpatient.results, "UUUUUUUUUUUUUUUuu")
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
    const GetAllTypeAppointmentData = () => {
        let TyoeData = GetTypeAppointment()
        if (TyoeData) {
            TyoeData.then((data) => {
                // console.log(data.result)
                setTTT(data.result)
            })
        }
    }


    const handleChange = (event) => {
        setPatientName(event.target.value);
    };

    const handleInputFocus = () => {
        setOpen(true);
    };

    const handleInputBlur = () => {
        setOpen(false);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    const GetLoca = () => {
        let TyoeData = GetLocation()
        if (TyoeData) {
            TyoeData.then((data) => {
                // console.log(data.result)
                setGetLoc(data.result)
            })
        }
    }

    const GetEmp = () => {
        let TyoeData = GetAllUSers()
        if (TyoeData) {
            TyoeData.then((data) => {
                // console.log(data.result)
                setGetEmp(data.result)
            })
        }
    }





    const [post, setPost] = useState([])
    useEffect(() => {
        const ALLAPPOINTMENTREW = GetAppointmtentREwie();

        if (ALLAPPOINTMENTREW) {
            ALLAPPOINTMENTREW.then((data) => {
                // console.log(data, "i")
                // console.log(data?.result, "j")
                setPost(data?.result)
            })
        }
    }, [])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (id) => {
        setSelectedId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            name: 'Request Date',
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
            name: 'Patient',
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: 'Preferences',
            selector: (row) => `${row.day} (\n Notes - ${row.notes})`,


            sortable: true,
        },
        {
            name: 'Status',
            selector: (row) => row.status,
            sortable: true,
        },

        {
            name: 'Action',
            cell: (row) => (
                <>

                    <button
                        style={{
                            width: '210px',
                            height: '35px',
                            borderRadius: 4,
                            color: 'white',
                            fontWeight: 600,
                            backgroundColor: row.status === 'complete' ? '#BF1E2E' : '#2BAA27',
                        }}
                        sx={{ fontWeight: 300 }}
                        disabled={row.status === 'complete'}
                        onClick={() => row.status !== 'complete' && openModal(row.id)}
                    >
                        <Link >
                            {row.status === 'complete' ? 'Completed' : 'Create Appointment'}
                        </Link>
                    </button>


                </>
            ),
            button: true,
            minWidth: '350px',
            sortable: true,
        },
    ];


    const data = post.map((item) => ({
        id: item?.id || '',
        created_at: item?.created_at || '',
        day: item?.day || '',
        notes: item?.notes || '',
        status: item?.status || '',
        name: item?.patient?.[0]?.name || '',
    }));


    const tableData = {
        columns,
        data,
    };

    return (
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
            <Sidebar />
            <Panel />

            <Dialog sx={{ zIndex: 999, overflow: 'scroll' }} open={isModalOpen} onClose={closeModal}>
                <DialogTitle>Create Appointment</DialogTitle>
                <DialogContent sx={{ overflow: 'scroll' }} >

                    <Form onSubmit={(event) => handleSubmit(event, selectedId)} >
                        <InputLabel sx={{ margin: 1 }}>Patient search</InputLabel>

                        <Autocomplete
                            size="small"
                            required
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


                        <InputLabel sx={{ margin: 1 }}>Select Employee</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            fullWidth
                            size='small'
                            required
                            value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}
                        >
                            {
                                GetEmpl && GetEmpl?.map((data) => {
                                    return (
                                        <MenuItem value={data.id}>{data.name}</MenuItem>
                                    )
                                })
                            }


                        </Select>

                        <InputLabel sx={{ margin: 1 }}>Clinic location</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            fullWidth
                            size='small'
                            required
                            value={clinicLocation}
                            onChange={(e) => setClinicLocation(e.target.value)}
                        >
                            {
                                GetLoc && GetLoc?.map((data) => {
                                    return (

                                        <MenuItem value={data.id}>{data.city}</MenuItem>
                                    )
                                })
                            }
                        </Select>

                        <InputLabel sx={{ margin: 1 }}>Type</InputLabel>
                        <Select
                            labelId="dropdown-label"
                            fullWidth
                            size='small'
                            value={type}
                            required
                            onChange={(e) => setType(e.target.value)}
                        >
                            {
                                ttt && ttt?.map((data) => {
                                    return (

                                        <MenuItem value={data.id}>{data.name}{data.length}</MenuItem>
                                    )
                                })
                            }

                        </Select>

                        <InputLabel sx={{ margin: 1 }}>Appointment Date/Time</InputLabel>
                        <TextField
                            // onChange={handleDateChange}
                            value={startDate}
                            required
                            onChange={(e) => {
                                const inputDate = e.target.value;
                                setStartDate(inputDate);
                            }}
                            type="datetime-local"

                            placeholder="Select Start Date"
                            fullWidth size="small"
                        />

                        <InputLabel sx={{ margin: 1 }}>Appointment End Date/Time</InputLabel>
                        <TextField
                            required
                            value={endDate}
                            onChange={(e) => {
                                const inputDate = e.target.value;
                                setEndDate(inputDate)
                            }}
                            type="datetime-local"

                            placeholder="Select End Date"
                            fullWidth size="small"
                        />

                        <InputLabel sx={{ margin: 1 }}>Notes</InputLabel>
                        <TextField size="small" value={note} onChange={(e) => setNote(e.target.value)} fullWidth required />

                        <InputLabel sx={{ margin: 1 }}>Appointment Color</InputLabel>
                        <TextField
                            size="small"
                            value={appointmentColor}
                            onChange={(e) => setAppointmentColor(e.target.value)}
                            fullWidth
                            required

                            // You can add the "type" attribute with a value of "color" to provide a color picker input.
                            type="color"

                            // You can set a placeholder to provide a hint to users about the expected format or color value.
                            placeholder="#RRGGBB"  // Replace with the format you prefer.
                        />



                        <button style={{ width: '100%', height: 40, marginTop: 15, backgroundColor: 'skyblue', color: 'white', borderRadius: 4 }}>Create Appointment</button>

                    </Form>
                </DialogContent>
                <DialogActions>
                    <button style={{ padding: 4, backgroundColor: 'red', color: "white" }} onClick={closeModal} color="primary">
                        Cancel
                    </button>

                </DialogActions>
            </Dialog>



            <Page title="Appointment Requests">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Appointment Requests
                            </Typography>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {post.length} total Appointment requests found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions export={false} print={false}
                                            {...tableData}
                                        >
                                            <DataTable
                                                noHeader
                                                defaultSortField="id"
                                                defaultSortAsc={false}
                                                pagination
                                                highlightOnHover
                                            />
                                        </DataTableExtensions>
                                    </div>

                                </CardContent>

                            </Card>
                        </CardContent>

                    </Card>
                </div>

            </Page>

        </>


    )
}

export default AppointmentDataList;