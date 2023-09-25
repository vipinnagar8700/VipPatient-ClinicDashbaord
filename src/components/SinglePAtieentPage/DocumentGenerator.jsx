import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ADDDOContactList, AddSecurityGroup, DeleteDOContactList, GetAllTemplate, GetBilling, GetBillingCancel, GetSingleDOContactList, GetSinglePAtient, GettSecurityData, UpdateDOContactList, UpdateSecurity, deleteSecurity, editSecurityData, getDOContactList } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, Checkbox, Select, MenuItem } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';
import Item from '@components/PersonList/Item';




const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  minWidth: 800,
  bgcolor: 'background.paper',
  border: '1px solid #f3f3f3',
  boxShadow: 24,
  p: 4,
  backgroundColor: "red",
  maxWidth: "100%",
  minWidth: "500px",
};



const DocumentGenerator = () => {
  const [Sec, setSec] = useState(false)
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
  const [count, setCount] = useState(0)

  window.addEventListener('resize', () => {
    if (smallScreen) {
    }
  });

  const [pre, setpre] = useState(false)
  useEffect(() => {
    const GEtDATAA = GetAllTemplate()
    if (GEtDATAA) {
      GEtDATAA.then((data) => {
        console.log(data?.result, "HHHHHHHHHHHHHHHHHHHHHHh")
        setpre(data?.result)
      })
    }
  }, [])



  return (
    <>
      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 17, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Generate Document
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Template
              </Typography>

              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Select fullWidth size='small'>
                    {
                      pre && pre.map((data, index) => {
                        return (
                          <MenuItem key={index} value={data.id}>
                            {data.template_name}
                          </MenuItem>
                        )
                      })
                    }

                  </Select>
                  <Typography mt={2} sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    <Checkbox /> Send rendered document as a message to the patient?

                  </Typography>
                  <button style={{ backgroundColor: 'green', padding: 10, color: 'white', borderRadius: 7 }}>Generate Document</button>

                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </>
  );
};



export default DocumentGenerator