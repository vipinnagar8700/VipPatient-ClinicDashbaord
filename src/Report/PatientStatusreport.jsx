import React, { useState, useEffect } from 'react';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, Box, Stack, MenuItem, Select, Button } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { GEtReportClinicSheduleToday, GetAllUSers } from '@components/Api/AllApi';
import Url from 'url/Allurl';
import Cookies from 'js-cookie';
// Retrieve the data from LocalStorage
const dataFromLocalStorage = localStorage.getItem("clinic");

// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);
console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

const ValueID = parsedData?.id;
const ClinicID = parsedData?.clinic_id;
console.log(ValueID, "This IS Clinic Single ID")
console.log(ClinicID, "This IS Clinic  ID")



const PatientStatusreport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [smallScreen, setSmallScreen] = useState(window.matchMedia('(max-width: 1038.98px)').matches);
    const [patientSData, setPatientSData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // New state for filtered data
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedDoctor1, setSelectedDoctor1] = useState('');
    const [post, setPost] = useState([]); // State to hold doctor data

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        setSmallScreen(window.matchMedia('(max-width: 1038.98px)').matches);
    });

    useEffect(() => {
        const getTodayClinic = GEtReportClinicSheduleToday();
        if (getTodayClinic) {
            getTodayClinic.then((data) => {
                console.log(data?.data, "Clinic Schedule")
                setPatientSData(data.data || []);
            });
        }
    }, []);
    const dateTimeString = "2023-07-17T12:14:58.000000Z";

    // Extract date and time components
    const datePart = dateTimeString.slice(0, 10); // Extract "YYYY-MM-DD"
    const timePart = dateTimeString.slice(11, 16); // Extract "HH:MM"

    // Create a formatted date-time string for datetime-local input
    const formattedDateTime = `${datePart}T${timePart}`;
    useEffect(() => {
        const allDoc = GetAllUSers();
        if (allDoc) {
            allDoc.then((data) => {
                console.log(data?.result, "ALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLlll");
                setPost(data?.result);
            });
        }
    }, []);
    const filterResults = () => {
        // Implement the API call here with the filter criteria (startDate, endDate, selectedDoctor)
        // Update the 'filteredData' state with the fetched data
        let token = Cookies.get("clinic")
        console.log(token, "This Is token for all Api's")
        // Example API call (make sure to replace this with your actual API endpoint and logic)
        fetch(`${Url}/api/Patient_Status_Report`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clinic_id: ClinicID,
                start_date: startDate,
                end_date: endDate,
                has_exam: selectedDoctor,
                has_certificate: selectedDoctor1,
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result, "99999999999999999999999999999");
                // Update the 'filteredData' state with the fetched data
                setFilteredData(result?.data || []);
            })
            .catch(error => console.log('error', error));
    };

    const columns = [
        // ...existing columns...
        {
            name: 'Patient Email',
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Patient Name',
            selector: (row) => row.DoctorName,
            sortable: true,
        },
        {
            name: 'Patient Prefer Name',
            selector: (row) => row.prefername,
            sortable: true,
        },
        {
            name: 'Has Exam',
            selector: (row) => row.AppointmentType,
            sortable: true,
        },
        {
            name: 'Has Certificate',
            selector: (row) => row.DOB,
            sortable: true,
        },
        {
            name: 'Has Intake',
            selector: (row) => row.phone,
            sortable: true,
        },
    ];

    const data = filteredData.map((item) => ({
        id: item?.id || '',
        email: item?.email || '',
        DOB: item?.status || '',
        phone: item?.has_intake || '',
        DoctorName: item?.name || '',
        StartTime: item?.has_certificate, // Include the start time
        AppointmentType: item?.has_exam || '',
        created_at: item?.created_at || '',
        prefername: item?.prefername || '',
        updated_at: item?.updated_at || '',
    }));


    const tableData = {
        columns,
        data, // Use filteredData if available, otherwise use all data
    };



    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Patient Status Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Patient Status Report
                            </Typography>
                            <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
                                <TextField
                                    size='small'
                                    type='date'
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                                <TextField
                                    size='small'
                                    type='datetime-local'
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                                <Select
                                    sx={{ width: 200 }}
                                    size="small"
                                    value={selectedDoctor}
                                    onChange={(e) => setSelectedDoctor(e.target.value)}
                                >

                                    <MenuItem value='1' > 1
                                    </MenuItem>
                                    <MenuItem value='0' > 0
                                    </MenuItem>
                                </Select>
                                <Select
                                    sx={{ width: 200 }}
                                    size="small"
                                    value={selectedDoctor1}
                                    onChange={(e) => setSelectedDoctor1(e.target.value)}
                                >

                                    <MenuItem value='1' > 1
                                    </MenuItem>
                                    <MenuItem value='0' > 0
                                    </MenuItem>
                                </Select>
                                <button
                                    style={{ backgroundColor: '#31C22C', borderRadius: 8, width: '180px', height: 40, color: 'white' }}
                                    onClick={filterResults}
                                >
                                    Filter Results
                                </button>
                            </Stack>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        total Patient Status Report found
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
                </div>
            </Page>
        </>
    );
};



export default PatientStatusreport;
