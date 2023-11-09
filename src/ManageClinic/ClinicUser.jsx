import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { GetAllUSers, GetBilling, GetBillingCancel } from '@components/Api/AllApi';

import { useSnackbar } from 'notistack';



const ClinicUser = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
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

  const handleDeleteInvoice = (id) => {
    GetBillingCancel(id)
      .then((response) => {
        // Handle the response here if needed
        console.log('Invoice deleted successfully:', response.messege);
        alert(response.messege)
        setCount(count + 1)
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error deleting invoice:', error);
      });
  };

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetAllUSers();
        console.log(data, "This Is all Billing Data!");
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
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
    },
    {
      name: 'Security Group',
      selector: row => row.security_group,
      sortable: true,
    },
    {
        name: 'Enabled?',
        selector: row => row.account_enabled,
        sortable: true,
      },
      {
        name: 'Appointments',
        selector: row => row.accepts_ppointments,
        sortable: true,
      },
      {
        name: 'Last Login',
        selector: row => row.last_login,
        sortable: true,
      },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Actions',
      sortable: true,
      cell: (row) => (
        <>

          <button style={{ width: '110px', backgroundColor: '#2BAA27', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
            <Link to={`/ManageClinic/EditUser/${row.id}`}>
              Edit
            </Link>

          </button>
          
        </>
      ),
      button: true,
      minWidth: '150px',
    },
  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    name: item?.name || '',
    email: item?.email || '',
    role: item?.role || '',
    security_group
: item?.security_group
|| '',
    status: item?.status || '',
    last_login: item?.last_login || '',
    account_enabled
: item?.account_enabled
|| '',
accepts_ppointments: item?.accepts_ppointments,


  }));

  const tableData = {
    columns,
    data,
  };


  const CalnceData = () => {

  }



  return (
    <>
          <Card sx={{ minWidth: 970,marginLeft:'0px', '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
              Manage Users
              </Typography>
              <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }} >
                <Link to="/ManageClinic/CreateUser">Create User</Link>
              </button>
              <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total invoices found
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
    </>
  );
};

export default ClinicUser;
