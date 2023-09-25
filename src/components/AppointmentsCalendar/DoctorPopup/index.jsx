// styled components
import { Container } from './style';

// components
import ShapeButton from '@ui/ShapeButton';
import Btn from '@ui/Btn';
import ModalWindow from '@components/ModalWindow';
import { Autocomplete, InputLabel, Select, TextField, Typography, Button, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from '@mui/material';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Url from '../../../url/Allurl'
import useContentHeight from '@hooks/useContentHeight';
import { GetTypeAppointment } from '@components/Api/AllApi';


const DoctorPopup = ({ name, open, handler, elemsHeight }) => {
    const [type, setType] = useState(''); // Initialize with appropriate values
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [note, setNote] = useState('');
    const [appointmentColor, setAppointmentColor] = useState('');
    const [pro, setPro] = useState({ name: 'Pending' });
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
    const dataFromLocalStorage = localStorage.getItem("provider");

    // Parse the JSON data back to an object
    const parsedData = JSON.parse(dataFromLocalStorage);

    // Now, "parsedData" will contain the full object with all the properties that were originally present in the `data` object
    console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

    const ValueID = parsedData.id;
    const ClinicID = parsedData.company_id;


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


    const handleSubmit = (event) => {
        let token = Cookies.get("clinic");
        console.log(token, "This Is token for all Api's");
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("id", "70");
        formdata.append("type_id", type);
        formdata.append("start_date", startDate);
        formdata.append("end_date", startDate);
        formdata.append("note", note);
        formdata.append("appointment_color", appointmentColor);
        formdata.append("status", pro.name);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/update_appointment_inprovider`, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "anjkhgdchjm");
                alert(json.messege)
                window.reload()

            })
            .catch((e) =>
                console.log(e)
            );

    };











    useEffect(() => {
        GetAllTypeAppointmentData();
    }, [count]);



    const GetAllTypeAppointmentData = () => {
        let TyoeData = GetTypeAppointment()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result)
                setTTT(data.result)
            })
        }
    }





    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };












    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (id) => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <ModalWindow isVisible={open} visibilityHandler={handler}>
            <Container className={open ? 'visible' : ''} top={elemsHeight}>
                {/* <Form onSubmit={(event) => handleSubmit(event)} >

                    <Typography>Patient Nagar</Typography>
                    <InputLabel sx={{ margin: 1 }}>Select Status</InputLabel>
                    <select style={{ width: '100%', padding: 10 }} onChange={(e) => {
                        setpro({
                            ...pro, name: e.target.value
                        })
                    }}
                        labelId="dropdown-label"
                        fullWidth
                        size='small'
                        required
                    >

                        <option value="Pending">Pending</option>
                        <option value="Seen">Seen</option>
                        <option value="Cancel">Cancel</option>
                        <option value="Not-Show">Not-Show</option>


                    </select>



                    <InputLabel sx={{ margin: 1 }}>Type</InputLabel>
                    <select style={{ width: '100%', padding: 10 }}
                        labelId="dropdown-label"
                        fullWidth
                        size='small'
                        value={type}
                        required
                    >
                        {
                            ttt && ttt?.map((data) => {
                                return (

                                    <option value={data.id}>{data.name}{data.length}</option>
                                )
                            })
                        }

                    </select>

                    <InputLabel sx={{ margin: 1 }}>Appointment Date/Time</InputLabel>
                    <TextField
                        // onChange={handleDateChange}
                        value={startDate}
                        required

                        type="date-local"

                        placeholder="Select Start Date"
                        fullWidth size="small"
                    />

                    <InputLabel sx={{ margin: 1 }}>Appointment End Date/Time</InputLabel>
                    <TextField
                        required
                        value={endDate}

                        type="date-local"

                        placeholder="Select End Date"
                        fullWidth size="small"
                    />

                    <InputLabel sx={{ margin: 1 }}>Notes</InputLabel>
                    <TextField size="small" value={note} fullWidth required />

                    <InputLabel sx={{ margin: 1 }}>Appointment Color</InputLabel>
                    <TextField
                        size="small"
                        value={appointmentColor}
                        fullWidth
                        required

                        type="color"

                        placeholder="#RRGGBB"
                    />
                </Form> */}
                <Form onSubmit={handleSubmit}>
                    <Typography>Patient Nagar</Typography>
                    <InputLabel sx={{ margin: 1 }}>Select Status</InputLabel>
                    <select
                        style={{ width: '100%', padding: 10 }}
                        onChange={(e) => {
                            setPro({
                                ...pro,
                                name: e.target.value
                            });
                        }}
                        labelId="dropdown-label"
                        fullWidth
                        size='small'
                        required
                    >
                        <option value="pending">pending</option>
                        <option value="seen">seen</option>
                        <option value="cancel">cancel</option>
                        <option value="not-show">not-show</option>
                    </select>

                    <InputLabel sx={{ margin: 1 }}>Type</InputLabel>
                    <select
                        style={{ width: '100%', padding: 10 }}
                        labelId="dropdown-label"
                        fullWidth
                        size='small'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        {
                            ttt && ttt?.map((data) => {
                                return (

                                    <option value={data.id}>{data.name}{data.length}</option>
                                )
                            })
                        }
                    </select>

                    <InputLabel sx={{ margin: 1 }}>Appointment Date/Time</InputLabel>
                    <TextField
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        type="datetime-local"
                        placeholder="Select Start Date"
                        fullWidth
                        size="small"
                    />

                    <InputLabel sx={{ margin: 1 }}>Appointment End Date/Time</InputLabel>
                    <TextField
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        type="datetime-local"
                        placeholder="Select End Date"
                        fullWidth
                        size="small"
                    />

                    <InputLabel sx={{ margin: 1 }}>Notes</InputLabel>
                    <TextField
                        size="small"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        fullWidth
                        required
                    />

                    <InputLabel sx={{ margin: 1 }}>Appointment Color</InputLabel>
                    <TextField
                        size="small"
                        value={appointmentColor}
                        onChange={(e) => setAppointmentColor(e.target.value)}
                        fullWidth
                        required
                        type="color"
                        placeholder="#RRGGBB"
                    />

                    <Stack direction='row' sx={{ justifyContent: 'space-between', gap: 5, marginTop: '20px' }} gap={4} mt={2}>
                        <button
                            style={{ backgroundColor: 'red', padding: 10, color: 'white', borderRadius: 3 }}
                            onClick={() => window.location.reload()}
                        >
                            Cancel
                        </button>

                        <button style={{ marginLeft: '20px', backgroundColor: 'green', padding: 10, color: 'white', borderRadius: 3 }} type='submit'>Save Change</button>
                    </Stack>
                </Form>


            </Container>
        </ModalWindow>
    )
}

export default DoctorPopup;