import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from 'react';
import { SingleProvider } from '@components/Api/AllApi';
import ProviderDetails from './ProviderDetails';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import Url from 'url/Allurl';





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





const ShopOnline = () => {
    const [EditProduct, setEditProduct] = useState(false)

    const [selectedOption, setSelectedOption] = useState('');
    const [open, setOpen] = useState(false);

    const [showp, setshowp] = useState(false)
    const [showpa, setshowpa] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };

    let { p_id } = useParams()
    // alert(p_id);

    const handleClose = () => {
        setshowp(false);
    };
    const handleCloses = () => {
        setshowpa(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    useEffect(() => {
        let ProviderData = SingleProvider(p_id);
        console.log(ProviderData, "TTTTTTTTTTTTTTTTTTTTTTTTT")
        if (ProviderData) {
            ProviderData.then((data) => {
                setEditProduct(data.data)
                console.log(data, "This Is ProviderData!")

            })
        }
    }, [])


    console.log(EditProduct, "BVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV")



    const Popup_style = {
        minWidth: "500px",
        backgroundColor: "green"
    }
    return (
        <>
<Sidebar/>
<Panel/>

            <Box>

                <Box mt={1}>
                    <ProviderDetails />
                </Box>
                <Box mt={1}>
                    <Card sx={{ maxWidth: 1145 }}>

                        <CardContent mb={2}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 16, fontWeight: 600 }} >
                                        Available Products
                                    </Typography>
                                    <br />
                                    <Typography sx={{ fontSize: 14, fontWeight: 600 }} >
                                        {EditProduct?.length} total products found
                                    </Typography>
                                </Grid>
                                
                            </Grid>
                            <Grid container mt={2} >
                                {
                                    EditProduct && EditProduct.map((item, index) => {
                                        return (
                                            <Grid items xs={3} m={1}>
                                                <Card sx={{ maxWidth: 345 }} key={index}>
                                                    <div style={{ position: "relative" }}>
                                                        <CardMedia
                                                            component="img"
                                                            alt="green iguana"
                                                            height="240"
                                                            image={`${Url}/public/uploads/images/${item.img}`}
                                                        />
                                                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.4)" }}>
                                                            <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
                                                                <Box>
                                                                    <p style={{ color: 'white', fontWeight: '600', margin: 0 }}>{item.product_name}</p>
                                                                    <p style={{ color: 'white', fontWeight: '600', margin: 0 }}> $ {item.amount}</p></Box>
                                                                <Box sx={{ m: 0, color: 'white', fontWeight: '600' }}>
                                                                    <p style={{ color: "#fff", margin: 0 }}>
                                                                        {item.product_category}
                                                                    </p>
                                                                </Box>
                                                            </Box>
                                                        </div>
                                                    </div>
                                                    <CardActions>
                                                        <button style={{ width: '100px', backgroundColor: '#24D5D8', height: '29px', borderRadius: 4, color: 'white', fontWeight: 300 }}><Link to={`/patients/dashboard/shop/1/products/5/view/${EditProduct?.[0]?.id}`}>View</Link></button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                        </CardContent>

                    </Card>
                </Box>
            </Box >

        </>
    )
}

export default ShopOnline