// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import ChartLegend from '@components/OverallAppointmentChart/ChartLegend';
import ChartBars from '@components/OverallAppointmentChart/ChartBars';
import ScrollContainer from 'react-indiana-drag-scroll';

const DailyAppointmentChart = () => {
    const data = [
        {
            label: '9am',
            values: {
                consultation: 10,
                test: 25,
                checkup: 10,
                sick: 20
            }
        },
        {
            label: '10am',
            values: {
                consultation: 5,
                test: 41,
                sick: 12
            }
        },
        {
            label: '11am',
            values: {
                consultation: 45,
                test: 18,
            }
        },
        {
            label: '12am',
            values: {
                consultation: 22,
                checkup: 42,
            }
        },
        {
            label: '1pm',
            values: {
                consultation: 5,
                checkup: 35,
            }
        },
        {
            label: '2pm',
            values: {
                consultation: 10,
                test: 20,
                checkup: 25,
            }
        },
        {
            label: '3pm',
            values: {
                consultation: 25,
                sick: 40,
            }
        },
        {
            label: '4pm',
            values: {
                consultation: 20,
                test: 30,
                sick: 5,
            }
        },
        {
            label: '5pm',
            values: {
                consultation: 15,
                checkup: 50,
                sick: 10,
            }
        }
    ]

    return (
        <Widget name="DailyAppointmentChart" shadow={true}>
            <WidgetHeader title="Daily appointments"/>
            <WidgetBody style={{justifyContent: 'space-between'}}>
                <ChartLegend />
                <ChartBars data={data} as={ScrollContainer} />
            </WidgetBody>
        </Widget>
    )
}

export default DailyAppointmentChart;