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
import { GetBilling, GetBillingCancel } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';





const BillingDataTable = () => {
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
        const data = await GetBilling();
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
      name: 'Invoice',
      selector: row => row.invoice_number,
      sortable: true,
    },
    {
      name: 'Invoice Date',
      selector: row => row.invoice_date,
      sortable: true,
    },
    {
      name: 'Patient',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Balance',
      selector: row => row.amount,
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
            <Link to="#">
              View Invoice
            </Link>

          </button>
          <button style={{ width: '110px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600,marginLeft:2 }}  >

            <Link to="#" onClick={() => handleDeleteInvoice(row.id)}>
              Cancel Invoice
            </Link>

          </button>
        </>
      ),
      button: true,
      minWidth: '300px',
    },
  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    invoice_number: item?.invoice_number || '',
    invoice_date: item?.invoice_date || '',
    name: item?.patient?.[0]?.name || '',
    amount: item?.invoice_lineitems?.[0]?.amount || '',
    status: item?.status || '',
  }));

  const tableData = {
    columns,
    data,
  };


  const CalnceData = () => {

  }



  return (
    <>
    <Sidebar/>
    <Panel/>
      <Page title="Billing">
        <div key="balance">
          <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Billing
              </Typography>
              <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '220px', color: 'white', marginBottom: 4 }} >
                <Link to="/Billing-Data-Invoice">Generate New Invoice</Link>
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
        </div>
      </Page>
    </>
  );
};

export default BillingDataTable;
