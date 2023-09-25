// styling
import styled from 'styled-components/macro';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import CustomSelect from '@ui/Select';
import {ResponsiveContainer, AreaChart, Area} from 'recharts';
import LabeledProgress from '@ui/LabeledProgress';

// utils
import {doctorsOptions} from '@constants/options';

// hooks
import {useState} from 'react';
import {useTheme} from 'styled-components';

// data placeholder
import {doctors} from '@db/doctors';
import {colors} from '@styles/vars';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  .chart {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -30px;
    right: -30px;
    opacity: .2;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  position: relative;
  z-index: 2;
  gap: 24px;
  overflow-x: auto;
  padding: 0 24px;
  flex-grow: 1;
`;

const DailyAppointmentsByDoc = () => {
    const {theme} = useTheme();
    const options = doctorsOptions();
    const [selectedDoctor, setSelectedDoctor] = useState(options[0]);

    return (
        <Widget name="DailyAppointmentsByDoc" shadow={true}>
            <WidgetHeader title="Daily appointments"/>
            <WidgetBody sidePadding={true}>
                <div style={{margin: '0 24px'}}>
                    <CustomSelect options={options}
                                  value={selectedDoctor}
                                  variant="user"
                                  changeHandler={e => setSelectedDoctor(e)}/>
                </div>
                <Container>
                    <div className="chart">
                        <ResponsiveContainer width="100%" height={160}>
                            <AreaChart data={doctors.find(doctor => doctor.id === selectedDoctor.value).daily}>
                                <defs>
                                    <radialGradient id="dark" cx="0" cy="0" r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(187) rotate(90) scale(188 374)">
                                        <stop stopColor="#0496FF"/>
                                        <stop offset="1" stopColor="#171819"/>
                                    </radialGradient>
                                    <radialGradient id="light" cx="0" cy="0" r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(187) rotate(90) scale(188 374)">
                                        <stop stopColor="#0496FF"/>
                                        <stop offset="1" stopColor="#0496FF" stopOpacity="0.01"/>
                                    </radialGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="none"
                                      fill={`url(#${theme === 'dark' ? 'dark' : 'light'})`}/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <List>
                        {
                            doctors.find(item => item.id === selectedDoctor.value).daily.map(item => (
                                <LabeledProgress key={item.label}
                                                 label={item.label}
                                                 value={item.value}
                                                 barHeight={208}
                                                 color={colors.azure}
                                />
                            ))
                        }
                    </List>
                </Container>
            </WidgetBody>
        </Widget>
    )
}

export default DailyAppointmentsByDoc;