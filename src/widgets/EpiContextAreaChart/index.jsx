// styling
import {colors} from '@styles/vars';

// styled components
import Labels from '@components/Chart/Labels';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Legend from '@ui/Legend';
import LegendItem from '@ui/Legend/LegendItem';
import CartesianChart from '@components/CartesianChart';

// data placeholder
import {week} from '@db/epi_period';

const EpiContextAreaChart = () => {
    const common = {
        type: 'monotone',
        strokeWidth: 3,
        fillOpacity: .8
    }
    const chartElems = [
        {
            ...common,
            dataKey: 'cured',
            stroke: colors.peach,
            fill: colors.peach,
            activeDot: {r: 5, fill: colors.peach, strokeWidth: 0}
        },
        {
            ...common,
            dataKey: 'sick',
            stroke: colors.purple,
            fill:  colors.purple,
            activeDot: {r: 5, fill: colors.purple, strokeWidth: 0}
        }
    ]
    return (
        <Widget name="EpiContextAreaChart">
            <WidgetHeader title="Epidemiological context">
                <Legend>
                    <LegendItem legend="sick" color="purple"/>
                    <LegendItem legend="cured" color="peach"/>
                </Legend>
            </WidgetHeader>
            <WidgetBody style={{padding: 0, overflow: 'hidden', justifyContent: 'space-between'}}>
                <Labels>
                    {
                        week.map(item => {
                            return (
                                <span key={item.name}>{item.name}</span>
                            )
                        })
                    }
                </Labels>
                <CartesianChart id="EpiContextAreaChart" data={week} elems={chartElems} variant="area" height={300} />
            </WidgetBody>
        </Widget>
    );
}

export default EpiContextAreaChart;