// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import ChartLegend from '@components/OverallAppointmentChart/ChartLegend';
import ChartBars from '@components/OverallAppointmentChart/ChartBars';

const PatientOverallAppointments = () => {
    const data = [
        {
            label: 'Jan',
            values: {
                consultation: 30, sick: 10, test: 50
            }
        },
        {
            label: 'Feb',
            values: {
                checkup: 10, sick: 30
            }
        },
        {
            label: 'Mar',
            values: {
                consultation: 20
            }
        },
        {
            label: 'Apr',
            values: {
                checkup: 10, emergency: 20
            }
        },
        {
            label: 'May',
            values: {
                emergency: 10, test: 30
            }
        },
        {
            label: 'Jun',
            values: {
                test: 10
            }
        },
        {
            label: 'Jul',
            values: {
                consultation: 30, test: 40
            }
        },
        {
            label: 'Aug',
            values: {
                checkup: 10
            }
        },
        {
            label: 'Sep',
            values: {
                consultation: 20
            }
        },
        {
            label: 'Oct',
            values: {
                test: 50, consultation: 70
            }
        },
        {
            label: 'Nov',
            values: {
                consultation: 20
            }
        },
        {
            label: 'Dec',
            values: {
                checkup: 10, emergency: 30
            }
        },
    ];

    return (
        <Widget name="PatientOverallAppointments" shadow={true}>
            <WidgetHeader title="Overall appointments" flex="column" style={{paddingBottom: 8}}>
                <ChartLegend/>
            </WidgetHeader>
            <WidgetBody style={{justifyContent: 'flex-end'}}>
                <ChartBars data={data} masked={true}/>
            </WidgetBody>
        </Widget>
    )
}

export default PatientOverallAppointments;