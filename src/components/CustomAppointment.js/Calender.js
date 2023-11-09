import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import List from '@mui/material/List';
import { Box, Container, InputLabel, ListItemText, Stack, Typography, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from 'react';
import { AllAppointmentDetails, GetAllUSers, GetLocation, GetSingleAppp, GetTypeAppointment } from '@components/Api/AllApi';
import './style.css'
import DoctorPopup from '@components/AppointmentsCalendar/DoctorPopup';
import Url from 'url/Allurl';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';


const localizer = momentLocalizer(moment);

export default function MYCalendar() {
    const { enqueueSnackbar } = useSnackbar();

    const [hh, sethh] = useState(false)
    const [hhA, sethhA] = useState(false)
    const [hhB, sethhB] = useState(false)
    const [count, setCount] = useState(0)
    const [ttt, setTTT] = useState(false)
    const [events, setEvents] = useState([]);
    const [post, setPost] = useState([]);
    const [view, setView] = useState('month'); // Default view is 'month'
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    useEffect(() => {
        GetAllTypeAppointmentData();
        GetAllLocationtData()
        GetAllUserData()
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
    const GetAllLocationtData = () => {
        let TyoeData = GetLocation()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result, "00000000000000000000000000000000000000000000000")
                sethhA(data.result)
            })
        }
    }

    const GetAllUserData = () => {
        let TyoeData = GetAllUSers()
        if (TyoeData) {
            TyoeData.then((data) => {
                console.log(data.result, "!@#$%^&*()_")
                sethhB(data.result)
            })
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AllAppointmentDetails();
                const formattedEvents = data?.result.map((event) => ({
                    id: event.id,
                    title: event?.patient?.[0].name,
                    start: new Date(event.start_date),
                    end: new Date(event.end_date),
                }));
                setEvents(formattedEvents);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [count]);





    const closePopup = () => {
        setSelectedEvent(null);
    };



    const { type_id, note, status, start_date, end_date, id, appointment_color, doctor_id, clinic_location_id } = hh;


    const editpopup = (eventId) => {
        setSelectedEvent(eventId);
        setIsModalOpen(true);
        GetSingleAppp(eventId)
            .then((data) => {
                // Handle the fetched data here, e.g., set it to a state variable
                console.log(data?.result, "Additional event data");
                sethh(data?.result)
            })
            .catch((error) => {
                console.error("Error fetching additional event data:", error);
            });
        // Set modal state to true to open the modal
        closePopup()

    }

    const handleSubmit = (e) => {
        let token = Cookies.get("clinic");
        console.log(token, "This Is token for all Api's");
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("id", id);
        formdata.append("type_id", type_id);
        formdata.append("start_date", start_date);
        formdata.append("end_date", end_date);
        formdata.append("note", note);
        formdata.append("appointment_color", appointment_color);
        formdata.append("status", status);
        formdata.append("clinic_location_id", clinic_location_id);
        formdata.append("doctor_id", doctor_id);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/update_appointment_inclinic`, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "anjkhgdchjm");
                enqueueSnackbar(json.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
                closePopup()
            })
            .catch((e) =>
            enqueueSnackbar(e, "error to Make Appointment!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            })
            )

    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="custom_cal">
            <div>
                <button onClick={() => handleViewChange('month')}>Month</button>
                <button onClick={() => handleViewChange('week')}>Week</button>
                <button onClick={() => handleViewChange('day')}>Day</button>
            </div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '500px' }}
                views={['month', 'week', 'day']}
                defaultView={view}
                onSelectEvent={handleSelectEvent}
            />

            {selectedEvent && (
                <div className="event-popup" style={{ position: 'absolute', top: '40%', left: '50%', padding: 20, borderRadius: 7, background: 'white', zIndex: 9999, height: 200, overflow: 'scroll' }}>
                    <Stack direction="row" sx={{ justifyContent: "end" }}>
                        <Box>
                            <button style={{ backgroundColor: 'red', padding: 6, justifyContent: 'end', color: "white", borderRadius: 7 }} onClick={closePopup}>X</button>

                        </Box>
                    </Stack>

                    {events
                        .filter((appointment) =>
                            moment(appointment.start).isSame(selectedEvent.start, 'day') &&
                            moment(appointment.start).isSame(selectedEvent.start, 'hour') &&
                            moment(appointment.start).isSame(selectedEvent.start, 'minute')
                        )
                        .map((appointment) => (
                            <List key={appointment.id}>
                                <Stack direction="row">

                                    <Box>


                                        <ListItemText primary={`Start Date: ${moment(appointment.start).format('YYYY-MM-DD HH:mm')}`} />

                                    </Box>
                                    <Box>
                                        <ListItemText primary={`End Date: ${moment(appointment.end).format('YYYY-MM-DD HH:mm')}`} />



                                    </Box>
                                    <Box>

                                        <ListItemText primary={`Patient Name :${appointment.title}`} />


                                    </Box>
                                    <Box>
                                        <EditIcon sx={{ color: "green", marginLeft: 4 }} onClick={() => editpopup(appointment.id)} />

                                    </Box>
                                </Stack>
                            </List>
                        ))}

                </div>
            )}
            {isModalOpen && (
                <>
                    <Box sx={{ position: "absolute", top: '15%', backgroundColor: 'white', borderRadius: 3, padding: 1, zIndex: 999 }}>
                        <Container >

                            <form >
                                <Typography>Patient Nagar</Typography>
                                <InputLabel sx={{ margin: 1 }}>Select Status</InputLabel>
                                <select
                                    style={{ width: '100%', padding: 10 }}
                                    value={status}
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            status: e.target.value
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
                                    value={type_id}
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            type_id: e.target.value
                                        });
                                    }}
                                    size='small'
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
                                <InputLabel sx={{ margin: 1 }}>Clinic Location</InputLabel>

                                <select
                                    style={{ width: '100%', padding: 10 }}
                                    labelId="dropdown-label"
                                    fullWidth
                                    value={clinic_location_id}
                                    onChange={(e) => {
                                        sethhA({
                                            ...hhA,
                                            clinic_location_id: e.target.value
                                        });
                                    }}
                                    size='small'
                                    required
                                >

                                    {
                                        hhA && hhA?.map((data) => {
                                            return (

                                                <option value={data.id}>{data.name}{data.length}</option>
                                            )
                                        })
                                    }
                                </select>
                                <InputLabel sx={{ margin: 1 }}>Clinic Doctors</InputLabel>

                                <select
                                    style={{ width: '100%', padding: 10 }}
                                    labelId="dropdown-label"
                                    fullWidth
                                    value={doctor_id}
                                    onChange={(e) => {
                                        sethhA({
                                            ...hhA,
                                            doctor_id: e.target.value
                                        });
                                    }}
                                    size='small'
                                    required
                                >

                                    {
                                        hhB && hhB?.map((data) => {
                                            return (

                                                <option value={data.id}>{data.name}{data.length}</option>
                                            )
                                        })
                                    }
                                </select>

                                <InputLabel sx={{ margin: 1 }}>Appointment Date/Time</InputLabel>
                                <TextField
                                    required
                                    value={start_date}
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            start_date: e.target.value
                                        });
                                    }}
                                    type="datetime-local"
                                    placeholder="Select Start Date"
                                    fullWidth
                                    size="small"
                                />

                                <InputLabel sx={{ margin: 1 }}>Appointment End Date/Time</InputLabel>
                                <TextField
                                    required
                                    value={end_date}
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            end_date: e.target.value
                                        });
                                    }}
                                    type="datetime-local"
                                    placeholder="Select End Date"
                                    fullWidth
                                    size="small"
                                />

                                <InputLabel sx={{ margin: 1 }}>Notes</InputLabel>
                                <TextField
                                    size="small"
                                    fullWidth
                                    value={note}
                                    required
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            note: e.target.value
                                        });
                                    }}
                                />

                                <InputLabel sx={{ margin: 1 }}>Appointment Color</InputLabel>
                                <TextField
                                    size="small"
                                    fullWidth
                                    required
                                    value={appointment_color}
                                    onChange={(e) => {
                                        sethh({
                                            ...hh,
                                            appointment_color: e.target.value
                                        });
                                    }}
                                    type="color"
                                    placeholder="#RRGGBB"
                                />

                                <Stack direction='row' sx={{ justifyContent: 'space-between', gap: 5, marginTop: '20px' }} gap={4} mt={2}>
                                    <button
                                        style={{ backgroundColor: 'red', padding: 10, color: 'white', borderRadius: 3 }}
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button style={{ marginLeft: '20px', backgroundColor: 'green', padding: 10, color: 'white', borderRadius: 3 }} type='submit' onClick={handleSubmit}>Save Change</button>
                                </Stack>
                            </form>


                        </Container>
                    </Box>
                </>
            )}
        </div>
    );
}
