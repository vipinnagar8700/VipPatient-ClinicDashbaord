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

const ProviderDetails = () => {



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
        <div>
            {
                showp &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "1100px", maxWidth: "1100px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Filter Results</Box>
                            <Box onClick={handleClose} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <Grid container gap={2}>
                                    <Grid items xs={5.5}>
                                        <InputLabel htmlFor="name">Price (min)</InputLabel>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            size='small'
                                        // Add any other props you want to customize the TextField
                                        />
                                    </Grid>
                                    <Grid items xs={5.5}>
                                        <InputLabel htmlFor="name">Price (max)</InputLabel>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            size='small'
                                        // Add any other props you want to customize the TextField
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container gap={2}>
                                    <Grid items xs={3.5}>
                                        <InputLabel htmlFor="name">Select Categories</InputLabel>


                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Accessories</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Concentrates</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Edibles</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Edibles</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Edibles</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Edibles</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid items xs={3.5}>
                                        <InputLabel htmlFor="name">Method</InputLabel>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid items xs={3.5}>
                                        <InputLabel htmlFor="name">Select Species</InputLabel>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>

                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                        <Stack mt={1} direction='row' sx={{ alignItems: 'center', alignContent: 'center' }}>
                                            <input type="checkbox" />
                                            <Typography ml={2} color="text.secondary" sx={{ fontSize: 14, fontWeight: 300 }}>Vaporizers</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={3}>
                                        <Stack mt={1}>
                                            <Button variant="contained" color="success" sx={{ width: '60%' }}>Reset Filter</Button>

                                        </Stack>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Stack mt={1}>
                                            <Button variant="contained" sx={{ width: '60%', backgroundColor: 'red' }}> Filter Results</Button>

                                        </Stack>
                                    </Grid>
                                </Grid>


                                {/* Add more TextField components for other input fields */}
                            </form>
                        </Box>

                    </Box>
                </Box>
            }

            <Card sx={{ maxWidth: 1145 }}>

                <CardContent mb={2}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 16, fontWeight: 600 }} >
                                {EditProduct?.[0]?.user?.[0]?.name}
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 14, fontWeight: 600 }} >
                                Phone Number: {EditProduct?.[0]?.user?.[0]?.phone}
                                <br />
                                Address:{EditProduct?.[0]?.user?.[0]?.address}
                            </Typography>

                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ fontSize: 14 }} >
                                Questions or concerns about a product?
                            </Typography>
                            <br />
                            <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} onClick={() => { setshowpa(true) }}>
                                Send Message
                            </button>
                            {
                                showpa &&
                                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Box>Contact Provider</Box>
                                            <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
                                        </Box>

                                        <Box sx={{ mt: 2 }}>
                                            <form>
                                                <InputLabel htmlFor="name">Subject</InputLabel>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size='small'
                                                // Add any other props you want to customize the TextField
                                                />
                                                <InputLabel htmlFor="name">Message</InputLabel>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    margin="normal"
                                                    size='small'
                                                // Add any other props you want to customize the TextField
                                                />



                                                <Grid container>
                                                    <Grid item xs={12}>
                                                        <Stack mt={1}>
                                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} variant="contained" color="success" sx={{ width: '100%' }}>Send Message</button>
                                                        </Stack>
                                                    </Grid>

                                                </Grid>


                                                {/* Add more TextField components for other input fields */}
                                            </form>
                                        </Box>

                                    </Box>
                                </Box>
                            }
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>
        </div>
    )
}

export default ProviderDetails