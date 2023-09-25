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
import { AddCertificate, AddSecurityGroup, DeleteCertificate, GetAllUSers, GetBilling, GetBillingCancel, GetExaminationData, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData, getCertificate } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, Select, MenuItem, Collapse, Checkbox } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';
import ExamForm from './ExamForm';


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



const Examinations = () => {
  const [Sec, setSec] = useState(false)
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
  const [count, setCount] = useState(0)
  const [CertificateDate, setCertificateDate] = useState('');
  const [CertificateExpiry, setCertificateExpiry] = useState('');
  const [Diagnoses, setDiagnoses] = useState('');
  const [Notes, setNotes] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState('');
  const [post, setPost] = useState([])

  const [InternalNotes, setInternalNotes] = useState('');

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
    handleDeleteInvoice()
  }, [])

  const handleDeleteInvoice = (id) => {
    setshowpau(true);
    let EditData = editSecurityData(id);
    console.log(EditData)
    if (EditData) {
      EditData.then((data) => {
        console.log(data.result?.[0], "HHHHHHHHHHHHHHHHHHHHHHHHHHH")
        setSec(data.result?.[0])
      })
    }
  };
  console.log(Sec, "AHGFSXDCFVGBHJNKMLJHGFDSDFGVHBNJ")

  let name = Sec && Sec?.name;
  console.log(name, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
  let id = Sec && Sec?.id;
  let { p_id } = useParams()


  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetExaminationData(p_id);
        console.log(data, "This Is all Examination Data!");
        setPatientSData(data.result || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "Security Data")

  // alert(p_id)
  const [AS, setSA] = useState(false)

  useEffect(() => {

    const SinglePAtientDta = GetSinglePAtient(p_id);
    if (SinglePAtientDta) {
      SinglePAtientDta.then((data) => {
        console.log(data.result, "KJHGFDSDFGHJKL")
        setSA(data.result)
      })
    }
  }, [])


  const columns = [
    {
      name: 'Options',
      selector: row => row.certificate_date,
      sortable: true,
    },
    {
      name: 'Exam Date',
      selector: row => row.certificate_expiry
      ,
      sortable: true,
    },
    {
      name: 'Last Updated',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Exam Type',
      selector: row => row.status,
      sortable: true,
    },



    // {
    //   name: 'Actions',
    //   sortable: true,
    //   cell: (row) => (
    //     <>


    //       <button style={{ width: '170px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

    //         <Link to={`/Single-Patient-Manage-order/${row.id}`} onClick={() => handleDeleteInvoice(row.id)}    >
    //          Manage Orders (0)
    //         </Link>

    //       </button>
    //       <button style={{ width: '30px', backgroundColor: 'red', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

    //         <Link to="#" onClick={e => handleDelete(row.id)}>
    //          X
    //         </Link>

    //       </button>
    //     </>
    //   ),
    //   button: true,
    //   minWidth: '200px',
    // },
  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    certificate_date: item?.start || '',
    certificate_expiry: item?.updated_at || '',
    status: item?.type || '',
  }));

  const tableData = {
    columns,
    data,
  };


  const CalnceData = () => {

  }
  const [open, setOpen] = useState(false);

  const [showpa, setshowpa] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloses = () => {
    setshowpa(false);
  };


  const [openu, setOpenu] = useState(false);

  const [showpau, setshowpau] = useState(false)
  const handleOpenu = () => {
    setOpenu(true);
  };
  const handleClosesu = () => {
    setshowpau(false);
  };



  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent page refresh

    AddCertificate(
      p_id,
      CertificateDate,
      CertificateExpiry,
      Diagnoses,
      Notes,
      InternalNotes,
      selectedDoctorId
    )
      .then((result) => {
        // Handle the result, if needed
        console.log('API response:', result.MESSAGE);
        alert(result.MESSAGE);
        setCount(count + 1);
      })
      .catch((error) => console.log('error', error));
  };



  const handleDelete = (id) => {
    let DeleteData = DeleteCertificate(id)

    if (DeleteData) {
      DeleteData.then((result) => {
        // Handle the result if needed (e.g., show a success message)
        console.log(result);
        alert("Data Successfully Deleted!")
        setCount(count + 1)
      })
        .catch((error) => {
          // Handle errors (e.g., show an error message)
          console.error('Error deleting data:', error);
        });
    }

  }




  useEffect(() => {


    const GETALLDOCTRATA = GetAllUSers()
    if (GETALLDOCTRATA) {
      GETALLDOCTRATA.then((data) => {
        console.log(data?.result, 'LLLLLLLLLLLLLLLLLLLLLLLl')
        setPost(data?.result)
      })
    }
  }, [])




  return (
    <>


      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Examinations
              </Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Prior Exams
              </Typography>

              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total  Exiting Prior Exams found
                  </Typography>
                  <div className="Order Page">
                    <DataTableExtensions {...tableData}  export={false} print={false}>
                      <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                    </DataTableExtensions>
                  </div>
                </CardContent>
              </Card>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
      <ExamForm/>

    </>
  );
};







export default Examinations