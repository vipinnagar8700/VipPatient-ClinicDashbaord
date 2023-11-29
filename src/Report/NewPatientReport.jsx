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
import { InputLabel, TextField, Box,Stack } from '@mui/material';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import DoctorCureRate from '@widgets/DoctorCureRate';




const NewPatientReport = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    const columns = [
        {
            name: 'Appointment Time',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Appointment w/',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Patient Name',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Appointment Type',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Patient DOB',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Patient Phone #',
            selector: 'director',
            sortable: true,
        },




    ];

    const data = [
        {
            title: 'Beetlejuice',
            year: '1988',
            genres: ['Comedy', 'Fantasy'],
            director: 'Tim Burton',
        },
        {
            id: 2,
            title: 'The Cotton Club',
            year: '1984',
            runtime: '127',
            genres: ['Crime', 'Drama', 'Music'],
            director: 'Francis Ford Coppola',
        },
    ];

    const tableData = {
        columns,
        data,
    };


    return (
        <>
        <Sidebar/>
        <Panel/>
            <Page title="New Patient Report">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                           

                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                <DoctorCureRate /> 
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </Page>
        </>
    );
};

export default NewPatientReport;
