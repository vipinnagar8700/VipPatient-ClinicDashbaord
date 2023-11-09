// styling
import styled from 'styled-components/macro';
// styled components
import { Form, BtnWrapper, InputWrapper } from '../../components/Todos/AddForm/style';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// components
import CustomSelect from '@ui/Select';
import Field from '@ui/Field';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
// utils

import { useDispatch } from 'react-redux';
import { addTodo, toggleCollapse } from '@store/features/todos';
import { tasksOptions } from '@constants/options';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import { Navbar } from '@components/Widget/style';
import Btn from '@ui/Btn'
import { useSnackbar } from 'notistack';
import TodosLegend from '@components/Todos/TodosLegend';
import AddForm from '@components/Todos/AddForm';
import DnDLayout from '@components/Todos/DnDLayout';
import ScrollContainer from '@components/ScrollContainer';
// hooks
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import useContentHeight from '@hooks/useContentHeight';
import { InputLabel, TextField, FormControl, MenuItem, Paper, Typography, Select } from '@mui/material';
import { BookAppointment, GetAllUSers, GetEmployess, GetLocation, GetPatientAppointment, GetTypeAppointment } from '@components/Api/AllApi';
import Autocomplete from '@mui/material/Autocomplete';
import Cookies from 'js-cookie';
import Url from 'url/Allurl';
const Footer = styled.div`
  padding: 2px 24px 22px 24px;
`;

const TasksList = () => {
    const { enqueueSnackbar } = useSnackbar();
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
    console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

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



    const handleSubmit = (event) => {
        let token = Cookies.get("clinic");
        console.log(token, "This Is token for all Api's");
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        console.log(selectedPatientId, "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
        formdata.append("patient_id", selectedPatientId);
        formdata.append("doctor_id", employeeId);
        formdata.append("clinic_id", ClinicID);
        formdata.append("clinic_location_id", clinicLocation);
        formdata.append("type_id", type);
        formdata.append("start_date", startDate);
        formdata.append("end_date", endDate);
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
                console.log(json, "anjkhgdchjm");
                // alert()
                enqueueSnackbar(json.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                window.location.reload()
            })
            .catch((e) => console.log(e));

    };








    useEffect(() => {
        GetAllTypeAppointmentData();
        getPatientData();
        GetLoca();
        GetEmp();
    }, [patientName]);


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
    const GetAllTypeAppointmentData = () => {
        let TyoeData = GetTypeAppointment()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result)
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
                console.log(data.result)
                setGetLoc(data.result)
            })
        }
    }

    const GetEmp = () => {
        let TyoeData = GetAllUSers()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result)
                setGetEmp(data.result)
            })
        }
    }



    return (
        <Widget name="TasksList" mobile={600}>


            <Form onSubmit={handleSubmit} >
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



                <button style={{ width: '100%', height: 40, marginTop: 15, backgroundColor: 'green', color: 'white', borderRadius: 4 }}>Create Appointment</button>

            </Form>
        </Widget>
    )
}

export default TasksList;