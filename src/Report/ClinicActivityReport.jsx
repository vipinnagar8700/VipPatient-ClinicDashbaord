import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField, Box, Stack, MenuItem, Select } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { useEffect } from 'react';
import { GEtReportClinicSheduleToday, GetAllUSers } from '@components/Api/AllApi';


const ClinicActivityReport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [post, setPost] = useState(false);
    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });



    useEffect(() => {
        const GetTodayClinic = GEtReportClinicSheduleToday()
        if (GetTodayClinic) {
            GetTodayClinic.then((data) => {
                console.log(data?.data, "Clinic Shedule")
                setPatientSData(data.data || []);
            })
        }
    }, [])

    const columns = [
        {
            name: 'Appointment Time',
            selector: (row) => row.start_date,
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


    const data = PatientSData.map((item) => ({
        id: item?.id || '',
        PatientName: item?.patient?.[0]?.name || '',
        DOB: item?.patient?.[0]?.dob || '',
        phone: item?.patient?.[0]?.phone || '',
        DoctorName: item?.doctor?.[0]?.name || '',
        start_date: item?.start_date || '',
        AppointmentType: item?.appointment_type?.[0]?.name || '',
        created_at: item?.created_at || '',
        updated_at: item?.updated_at || '',
    }));

    const tableData = {
        columns,
        data,
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

    return (
        <>
            <Sidebar />
            <Panel />
            <Page title="Clinic Daily Schedule Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Clinic Daily Schedule Report
                            </Typography>
                            
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                     {PatientSData.length}   total Clinic Daily Schedule Report found
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



export default ClinicActivityReport;
