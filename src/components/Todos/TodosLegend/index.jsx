import {tasksColors} from '@constants/colors';
import LegendItem from '@ui/Legend/LegendItem';
import Legend from '@ui/Legend';

export default function TodosLegend() {
    return (
        <Legend>
            {tasksColors.map(({color, cat}) => <LegendItem key={cat} color={color} legend={cat} />)}
        </Legend>
    )
}