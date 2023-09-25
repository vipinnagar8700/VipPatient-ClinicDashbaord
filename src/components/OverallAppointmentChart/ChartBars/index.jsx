// styled components
import {Bar, Container} from './style';

// styling
import {colors} from '@styles/vars';

// components
import {motion} from 'framer-motion';

// utils
import {colorTypes} from '@constants/colors';

const ChartBars = ({data, masked = false, ...props}) => {
    return (
        <Container {...props}>
            {
                data.map(item => {
                    return (
                        <Bar key={item.label} masked={masked}>
                            <div className="track">
                                {
                                    Object.keys(item.values).map((key, i) => {
                                        const value = item.values[key];
                                        const color = colorTypes.find(type => type.cat === key).color;

                                        return (
                                            <motion.span style={{
                                                             backgroundColor: colors[color],
                                                             width: '100%',
                                                             borderRadius: !masked && 4,
                                                             opacity: 0
                                                         }}
                                                         animate={{
                                                             height: `${value}%`,
                                                             opacity: 1
                                                         }}
                                                         transition={{
                                                             duration: 1,
                                                             delay: .5,
                                                             type: 'tween',
                                                             ease: 'easeInOut'
                                                         }}
                                                         key={`${item.label}-${key}-${i}-${value}`} />
                                        )
                                    })
                                }
                            </div>
                            <span>{item.label}</span>
                        </Bar>
                    )
                })
            }
        </Container>
    )
}

export default ChartBars;