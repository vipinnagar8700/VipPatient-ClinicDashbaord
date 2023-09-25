import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid } from '@mui/material';
import PatientImage from '@assets/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital.jpg'
import DoctorImage from '@assets/young-handsome-physician-medical-robe-with-stethoscope.jpg'
import DispensariesImage from '@assets/shelves-with-medicines-pharmacy.jpg'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HomePage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box mt={30}>
        <Grid container>
          <Grid items xs={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                height="194"
                image={PatientImage}
                alt="Paella dish"
              />
              <CardContent sx={{ justifyContent: 'center', textAlign: "center" }}>
                <Typography m={1} sx={{ justifyContent: 'center', textAlign: "center", fontSize: 22, fontWeight: 900 }}>
                  Clinic Portal
                </Typography>
                <Typography variant="body" color="text.secondary">
                  for Doctors and staffs
                </Typography>
              </CardContent>

            </Card>
          </Grid>
          <Grid items xs={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                height="194"
                image={DoctorImage}
                alt="Paella dish"
              />
              <CardContent sx={{ justifyContent: 'center', textAlign: "center" }}>
                <Typography m={1} sx={{ justifyContent: 'center', textAlign: "center", fontSize: 22, fontWeight: 900 }}>
                  Patient Portal
                </Typography>
                <Typography variant="body" color="text.secondary">
                  for patients
                </Typography>
              </CardContent>

            </Card>
          </Grid>
          <Grid items xs={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                height="194"
                image={DispensariesImage}
                alt="Paella dish"
              />
              <CardContent sx={{ justifyContent: 'center', textAlign: "center" }}>
                <Typography m={1} sx={{ justifyContent: 'center', textAlign: "center", fontSize: 22, fontWeight: 900 }}>
                  Provider Portal
                </Typography>
                <Typography variant="body" color="text.secondary">
                  for Dispensaries
                </Typography>
              </CardContent>

            </Card>
          </Grid>
        </Grid>

      </Box>
    </>

  );
}