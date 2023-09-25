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
import { useState } from 'react';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const PatientReviews = () => {
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



    const columns = [
        {
            name: 'Order ID',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Date/Time',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Provider',
            selector: 'genres',
            sortable: true,
            cell: d => <span>{d.genres.join(', ')}</span>,
        },
        {
            name: 'Amount',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Last Updated',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Action',
            selector: 'year',
            sortable: true,
        },
    ];


    const data = [
        {
            title: 'Beetlejuice',
            year: '1988',
            genres: [
                'Comedy',
                'Fantasy',
            ],
            director: 'Tim Burton',
        },
        {
            id: 2,
            title: 'The Cotton Club',
            year: '1984',
            runtime: '127',
            genres: [
                'Crime',
                'Drama',
                'Music',
            ],
            director: 'Francis Ford Coppola',
        }];


    const tableData = {
        columns,
        data,
    };

    return (
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
        <Sidebar/>
        <Panel/>
            <Page title="My Order">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                My Order
                            </Typography>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                    0 total orders found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions
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

export default PatientReviews;