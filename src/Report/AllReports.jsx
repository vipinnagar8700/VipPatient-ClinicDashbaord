import Page from '@layout/Page';
import { Box, Grid, InputLabel, Stack, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const Data = [
    {
        id: '1',
        name: 'Clinic Daily Schedule Report',
        img: '',
        title: 'View and/or print a daily schedule based on the appointments for your clinic or individual employees.',
        link: '/Report/ClinicDailyScheduleReport'
    },
    {
        id: '2',
        name: 'Cancelled Appointments Report',
        img: '',
        title: 'View and/or print a list of appointments that were cancelled within a date range.From Here to the system each day.',
        link: '/Report/CancelAppointmentScheduleReport'
    },
    {
        id: '3',
        name: 'Patient Email Report',
        img: '',
        title: 'View a summary of your email engagement and a history of emails sent to your patients from the EMR.',
        link: '/Report/PatientEmailReport'
    },
    {
        id: '4',
        name: 'Patient Status Report',
        img: '',
        title: 'View a summary of where your patients are at in the process and what they need from you.',
        link: '/Report/PatientStatusReport'
    },
    {
        id: '5',
        name: 'New Patient Report',
        img: '',
        title: 'View a graph of how many new patients are being added to the system each day.',
        link: '/Report/NewPatientReport'
    },
    {
        id: '6',
        name: 'Order Survey Report',
        img: '',
        title: 'View a list of patient order surveys and filter by status to view survey results.   ',
        link: '/Report/OrderSurveyReport'
    },
    {
        id: '7',
        name: 'Clinic Activity Report',
        img: '',
        title: 'View a list of all activity by employees of your clinic.',
        link: '/Report/ClinicActivityReport'
    },
    {
        id: '8',
        name: 'Charts Viewed Report',
        img: '',
        title: 'See how many patient charts per day your clinic users are looking at.',
        link: '/Report/ChartsViewedReport'
    },
    {
        id: '9',
        name: 'Prescription/Certification Report',
        img: '',
        title: 'Filter your active prescriptions or certifications by when they were created or when they expire.',
        link: '/Report/PrescriptionReport'
    },
]


const AllReports = () => {
    return (
        <div>
            <Sidebar/>
            <Panel/>
            <Page title="Reports">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>

                            <Grid container spacing={2}>
                                {Data.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Link to={item.link}>
                                            <Box
                                                sx={{
                                                    '&:hover': {
                                                        transform: 'translateY(-5px)',
                                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                                    },
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                }}
                                            >
                                                <Card>
                                                    <CardContent sx={{ textAlign: 'center' }}>
                                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                            <CalendarMonthIcon sx={{ height: 80, width: 80 }} />
                                                        </Typography>
                                                        <Typography component="div" sx={{ fontSize: 17, fontWeight: 'bold' }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography color="text.secondary" sx={{ fontSize: 15, fontWeight: 300 }}>
                                                            {item.title}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                            </Box>
                                        </Link>

                                    </Grid>
                                ))}
                            </Grid>



                        </CardContent>
                    </Card>

                </div>

            </Page >
        </div >
    )
}

export default AllReports