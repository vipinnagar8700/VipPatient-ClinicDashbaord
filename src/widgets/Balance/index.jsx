// styled components
import { Wrapper, Block, BalanceInfo } from './style';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/material';

const Balance = () => {
    return (
        <>
            <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                        Intake Form
                    </Typography>
                    <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                What is your name <Badge color="secondary">*</Badge>
                            </Typography>
                            <Typography variant="h5" component="div">
                                <TextField id="outlined-basic" variant="outlined" size="small" sx={{ minWidth: 1115, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: 'white' }} />
                            </Typography>


                            <Stack mt={3} direction='row' sx={{alignItems:'center',alignContent:'center'}}>
                                <input type="checkbox" />
                                <Typography ml={2}  color="text.secondary" sx={{fontSize:14,fontWeight:300}}>Do you want medical marijuana?</Typography>
                            </Stack>

                            {/* <FormGroup>
                                    <FormControlLabel  control={<Checkbox />} sx={{ fontSize: 16, fontWeight: 300 }} label="" />
                                </FormGroup> */}

                        </CardContent>
                        <CardActions sx={{textAlign:'right'}}>
                            <button  style={{ width: '150px',backgroundColor:'#2BAA27',height:'40px',borderRadius:4,color:'white',fontWeight:600 }}>Submit</button>
                        </CardActions>
                    </Card>
                </CardContent>

            </Card>
        </>
    )
}

export default Balance;