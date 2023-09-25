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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/material';

// hooks
import { useState, useEffect } from 'react';
import { GetAllPatientData } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const ClinicActivity = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllPatientData();
                console.log(data, "This Is all Patinet Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "AAAAAAAAAAAAAAAAA")
    const columns = [
        {
            name: 'Patient Image',
            selector: (row) => row.id,
            sortable: true,
        },

        {
            name: 'Message',
            selector: (row) => row.name,
            sortable: true,
        },


        {
            name: 'Created',
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



    ];


    const data = PatientSData.map((item) => ({
        id: item?.id || '',
        name: item?.name || '',
        mname: item?.mname || '',
        lname: item?.lname || '',
        city: item?.city || '',
        state: item?.state || '',
        created_at: item?.created_at || '',
        updated_at: item?.updated_at || '',
    }));


    const tableData = {
        columns,
        data,
    };

    return (
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
            <div key="balance">
                <Card sx={{ minWidth: 455, '@media screen and (max-width: 555px)': { minWidth: '100%' } }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                            Latest Activity
                        </Typography>
                        <Card sx={{ minWidth: 455, '@media screen and (max-width: 555px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                    {PatientSData.length}  total Latest Activity found
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


        </>


    )
}

export default ClinicActivity