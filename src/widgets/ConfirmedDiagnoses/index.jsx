// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import ConfirmedDiagnosesList from '@widgets/ConfirmedDiagnoses/List';
import PeriodNav from '@components/PeriodNav';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

// utils
import PropTypes from 'prop-types';

// hooks
import usePeriodNav from '@hooks/usePeriodNav';
import useArrayNav from '@hooks/useArrayNav';

// data placeholder
import { confirmed } from '@db/confirmed';
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

const ConfirmedDiagnoses = ({ nav }) => {
    const { period, periods, setPeriod } = usePeriodNav();
    const { index, navigate } = useArrayNav(periods);

    const columns = [

        {
            name: 'Date/Time',
            selector: 'director',
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Location',
            selector: 'genres',
            sortable: true,
            cell: d => <span>{d.genres.join(', ')}</span>,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Other Information',
            selector: 'year',
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
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
    ];


    const tableData = {
        columns,
        data,
    };


    return (
        <Widget name="ConfirmedDiagnosesTabs">
            {
                nav === 'tabs' ?
                    <WidgetHeader title="Upcoming Appointments" style={{ paddingBottom: 16 }} />
                    :
                    <WidgetNav title="Upcoming Appointments" handler={navigate} style={{ paddingBottom: 8 }} />
            }
            <WidgetBody style={{ paddingBottom: 26 }}>

                <Card sx={{ minWidth: 645, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                    <CardContent>

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
                <div >
                    <Typography mt={2} sx={{ fontSize: 16 }}>
                        Appointments Requests
                    </Typography>
                </div>
                <div>
                    <Typography color="red" sx={{ fontSize: 12 }}>
                        You do not have any previous appointment requests.
                    </Typography>


                </div>
            </WidgetBody>
        </Widget>
    )
}

ConfirmedDiagnoses.propTypes = {
    nav: PropTypes.oneOf(['arrows', 'tabs']).isRequired
}

export default ConfirmedDiagnoses;