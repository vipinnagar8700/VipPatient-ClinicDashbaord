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
import Cookies from "js-cookie";
// Retrieve the data from LocalStorage
const dataFromLocalStorage = localStorage.getItem("clinic");

// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);
console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

const ValueID = parsedData?.id;
const ClinicID = parsedData?.clinic_id;
console.log(ValueID, "This IS Clinic Single ID")
console.log(ClinicID, "This IS Clinic  ID")
const CancelAppointmentReport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [smallScreen, setSmallScreen] = useState(window.matchMedia('(max-width: 1038.98px)').matches);
    const [patientSData, setPatientSData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // New state for filtered data
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
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
        fetch(`${Url}/api/cancel_appointment_report`, {
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
                doctor_id: selectedDoctor,
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result, "99999999999999999999999999999");
                // Update the 'filteredData' state with the fetched data
                setFilteredData(result?.result || []);
            })
            .catch(error => console.log('error', error));
    };

    const columns = [
        // ...existing columns...
        {
            name: 'Appointment Time',
            selector: (row) => row.StartTime,
            sortable: true,
        },
        {
            name: 'Appointment w/',
            selector: (row) => row.DoctorName,
            sortable: true,
        },
        {
            name: 'Patient Name',
            selector: (row) => row.PatientName,
            sortable: true,
        },
        {
            name: 'Appointment Type',
            selector: (row) => row.AppointmentType,
            sortable: true,
        },
        {
            name: 'Patient DOB',
            selector: (row) => row.DOB,
            sortable: true,
        },
        {
            name: 'Patient Phone #',
            selector: (row) => row.phone,
            sortable: true,
        },
    ];

    const data = filteredData.map((item) => ({
        id: item?.id || '',
        PatientName: item?.patient?.[0]?.name || '',
        DOB: item?.patient?.[0]?.dob || '',
        phone: item?.patient?.[0]?.phone || '',
        DoctorName: item?.doctor?.[0]?.name || '',
        StartTime: item?.start_date, // Include the start time
        AppointmentType: item?.appointment_type?.[0]?.name || '',
        created_at: item?.created_at || '',
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
            <Page title="Cancel Appointment Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Cancel Appointment Report
                            </Typography>
                            <Stack direction='row' spacing={4} sx={{ alignItems: 'center' }}>
                                <TextField
                                    size='small'
                                    type='datetime-local'
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
                                    <MenuItem value="">
                                        Select a Doctor
                                    </MenuItem>
                                    {post && post.map((data, index) => (
                                        <MenuItem key={index} value={data.id}>
                                            {data.name}
                                        </MenuItem>
                                    ))}
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
                                        total Cancel Appointment Report found
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

export default CancelAppointmentReport;
