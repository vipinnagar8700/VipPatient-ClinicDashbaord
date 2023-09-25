import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DeleteTemplate, GetAllTemplate } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const DocumentBuilder = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [tempData, setTempData] = useState([]);
    const [count,setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });


    const handleDelete = (id) => {
        let DeleteData = DeleteTemplate(id)
        alert("Data Successfully Deleted!")
        setCount(count + 1)
        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result);
                alert("Data Successfully Deleted!")
            })
                .catch((error) => {
                    // Handle errors (e.g., show an error message)
                    console.error('Error deleting data:', error);
                });
        }

    }

    const columns = [
        {
            name: 'Template Name',
            selector: (row) => row.template_name,
            sortable: true,
            minWidth: '200px',
        },
        {
            name: 'Last Updated',
            selector: (row) => row.updated_at,
            selector: (row) => {
                const createdAt = new Date(row.updated_at);
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
            minWidth: '200px',
        },
        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>
                    <button style={{ width: '50px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }}>
                        <Link to={`/Edit-Template/${row.id}`}>
                            Edit
                        </Link>
                    </button>
                    <button style={{ marginLeft: 3, width: '50px', backgroundColor: '#DD382B', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }}>
                        <Link to="#" onClick={e => handleDelete(row.id)}>
                            Delete
                        </Link>
                    </button>
                </>
            ),
            button: true,
            minWidth: '200px',
        },
    ];

    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllTemplate();
                console.log(data, "This Is all Template Data!");
                setTempData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);





    const data = tempData.map((item) => ({
        id: item?.id || '',
        template_name: item?.template_name || '',
        template: item?.template || '',
        created_at: item?.created_at || '',
        updated_at: item?.updated_at || '',
    }));

    const tableData = {
        columns,
        data,
    };

    return (
        <>
        <Sidebar/>
        <Panel/>
            <Page title="Document Builder">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Document Builder
                            </Typography>
                            <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }}>
                                <Link to="/Create-Template">Create Template</Link>
                            </button>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {`${data.length} total template found`}
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions {...tableData} print={false} export={false}>
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

export default DocumentBuilder;
