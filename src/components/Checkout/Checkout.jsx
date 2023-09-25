import ProviderDetails from '@components/ShopOnline/ProviderDetails'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import DoctorMessenger from '@pages/DoctorMessenger';
import { SingleProductProvider } from '@components/Api/AllApi';
import { useEffect, useState } from 'react';
// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';

const Checkout = () => {



    const [singleProduct, setSingleProduct] = useState(false)

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
            name: 'Image',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Dosage',
            selector: 'genres',
            sortable: true,
            cell: d => <span>{d.genres.join(', ')}</span>,
        },
        {
            name: 'CBD Dosage',
            selector: 'year',
            sortable: true,
        },
        {
            name: 'Price',
            selector: 'year',
            sortable: true,
        },

        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <button style={{ width: '150px', backgroundColor: '#FD0C39', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }}  sx={{ fontWeight: 300 }} >
                    <Link to="#">
                        Delete
                    </Link>

                </button>
            ),
            button: true,
            minWidth: '200px',
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



    let { p_id } = useParams()
    // alert(p_id)




    useEffect(() => {
        let SingleProductofSingleProvider = SingleProductProvider(p_id)
        if (SingleProductofSingleProvider) {
            SingleProductofSingleProvider.then((data) => {
                setSingleProduct(data.results)

            })
        }
    }, [])


    console.log(singleProduct, "SSSSSSSSSSSSSSSSSSSS")
    return (
        <div>
            <Box mt={2}>
                <ProviderDetails />
            </Box>
            <Box mt={3}>
                <Card sx={{ maxWidth: 1145 }}>
                    <Card sx={{ maxWidth: 1100, maxHeight: 40, margin: 3, padding: 1 }} >
                        <div role="presentation">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" to="/doctor_reviews">
                                    Shop online
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"
                                // to={`/patients/dashboard/shop/1/products/${singleProduct.user_id}`}
                                >
                                    Demo Provider
                                </Link>
                                <Link
                                    underline="hover"
                                    color="text.primary"
                                    to="#"
                                    aria-current="page"
                                >
                                    {/* {singleProduct.product_name} */}
                                </Link>
                            </Breadcrumbs>
                        </div>
                    </Card>
                    <CardContent mb={2}>

                        <Grid container>
                            <Grid item xs={6}>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }}  gutterBottom>
                                My Shopping Cart
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{textAlign:'right'}}>
                            <button style={{ width: '150px', backgroundColor: '#FD0C39', height: '35px', borderRadius: 4, color: 'white', fontWeight: 400 }} >
                                Empty Cart
                            </button>
                            </Grid>
                        </Grid>
                        

                        <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                    0 total Product Added
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
            </Box>
        </div>
    )
}

export default Checkout