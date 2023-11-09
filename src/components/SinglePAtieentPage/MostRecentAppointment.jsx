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
import { AddSecurityGroup, GetBilling, GetBillingCancel, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData, inpatient } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box } from '@mui/material';




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



const MostRecentAppointment = () => {
    const [Sec, setSec] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    let { p_id } = useParams()
    // alert(p_id)



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


    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await inpatient(p_id);
                console.log(data, "get_clinic_appointment_inpatient!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "Security Data")

    const columns = [
        {
            name: 'Date/Time',
            selector: row => row.start_date,
            sortable: true,
        },
        {
            name: 'Type',
            selector: row => row.appointment_type,
            sortable: true,
        },
        {
            name: 'Clinic Location',
            selector: row => row.location,
            sortable: true,
        },
        {
            name: 'Doctor Seen',
            selector: row => row.is_confirmed,
            sortable: true,
        },
        {
            name: 'Cancelled?',
            selector: row => row.is_cancelled,
            sortable: true,
        },



    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        start_date :item?.start_date || '',
        name: item?.created_at || '',
        location: item?.location?.[0]?.name || '',
        appointment_type: item?.appointment_type?.[0]?.name || '',
        is_confirmed: item?.status || '',
        is_cancelled: item?.is_cancelled || ''  }));

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


    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleSendMessage = () => {
        AddSecurityGroup(subject)
            .then((result) => {
                // Handle the result, if needed
                console.log('API response:', result);
                alert(result.messege)
                setCount(count + 1)
            })
            .catch((error) => console.log('error', error));
    };


    const handleDelete = (id) => {
        let DeleteData = deleteSecurity(id)

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

    const handleUpdate = (e) => {

        e.preventDefault();

        try {
            console.log(id, name, "qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateSecurity(id, name
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                alert(data.messege);
                setCount(count + 1)
                // Navigate('/dashboard_a')
                setshowpau(false);

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };



    return (
        <>

            <Card sx={{ minWidth: 670, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                <CardContent>

                    <Card sx={{ minWidth: 605, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Most Recent Appointment
                            </Typography>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                {PatientSData.length} total Recent Appointment found
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

export default MostRecentAppointment;
