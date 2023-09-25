// styled components
import { Main } from './style';
import { Main as SlideContent, Footer } from '@components/AppointmentItem/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import WidgetNav from '@components/Widget/WidgetNav';
import ShapeButton from '@ui/ShapeButton';
import Truncated from '@components/Truncated';
import MenuDots from '@ui/MenuDots';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Thumbs } from 'swiper';

// utils
import { nanoid } from 'nanoid';
import moment from 'moment';
// hooks
import { useState, useEffect } from 'react';
import { useInterfaceContext } from '@contexts/interfaceContext';

// data placeholder
import { appointments } from '@db/appointments';
import { GetAllPatientData } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import { Avatar, Grid, Stack, Typography, Box, Drawer } from '@mui/material';

const NextPatient = () => {
    const [mainSwiper, setMainSwiper] = useState(null);
    const [dateSwiper, setDateSwiper] = useState(null);
    const { direction } = useInterfaceContext();

    const config = {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        modules: [EffectFade, Thumbs],
        loop: true,
        dir: direction,
        speed: 700
    }

    useEffect(() => {
        if (mainSwiper && dateSwiper) {
            mainSwiper.changeLanguageDirection(direction);
            dateSwiper.changeLanguageDirection(direction);
            mainSwiper.update();
            dateSwiper.update();
        }
    }, [direction, mainSwiper, dateSwiper]);

    const handleNavigation = e => {
        if (e.currentTarget.dataset.direction === 'next') {
            mainSwiper.slideNext();
        } else {
            mainSwiper.slidePrev();
        }
    }
    const [PatientData, setpatientData] = useState(false)

    console.log(PatientData, "ggggggggggg")

    useEffect(() => {

        let AllPAtientData = GetAllPatientData();
        console.log(AllPAtientData, "TTTTTTTTTTTTTTTTTTTTTTTT")
        if (AllPAtientData) {
            AllPAtientData.then((data) => {
                console.log(data?.result)
                setpatientData(data?.result)
            })
        }

    }, [])


    return (
        <Widget name="Total Active Patient">



            <WidgetNav title=" Total Active Patient" style={{ paddingTop: 20 }} handler={handleNavigation} />
            <SlideContent style={{ marginTop: 0, marginLeft: 50, marginBottom: 0, paddingBottom: 0 }}>
                <Avatar avatar={`https://medical.studiomyraa.com/public/uploads/images/${PatientData?.img}`} sx={{ backgroundColor: '#33C92E', height: 50, width: 50 }} />
                <div className="info">
                    <Typography sx={{ fontSize: 26, fontWeight: 900, lineHeight: 1 }}>
                        {PatientData?.length}
                    </Typography>
                    <Truncated className="name" text="Total Active Patient" />

                </div>
                


            </SlideContent>

            <WidgetBody >
                <Main>
                    <Swiper onSwiper={(swiper) => setMainSwiper(swiper)} thumbs={{ swiper: dateSwiper }} {...config}>
                        {
                            PatientData && PatientData.length > 0 && PatientData.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <SlideContent style={{ marginBottom: 0 }}>
                                            <Avatar avatar={`https://medical.studiomyraa.com/public/uploads/images/${data.img}`} alt={data.name} />
                                            <div className="info">
                                                <Truncated className="title" text={data.name} />
                                                <Truncated className="name" text={data.address} />
                                            </div>
                                            <ShapeButton shape="round" label="Call" icon="phone" ><Link to={`tel://${data.phone}`} /></ShapeButton>
                                        </SlideContent>
                                    </SwiperSlide>
                                )
                            })
                        }
                        {/* {
                         
                            appointments.map(data => {
                                const { patient, type } = data;
                                return (
                                    <SwiperSlide key={nanoid(5)}>
                                        <SlideContent style={{ marginBottom: 0 }}>
                                            <Avatar avatar={patient.avatar} alt={patient.name} />
                                            <div className="info">
                                                <Truncated className="name" text={patient.name} />
                                                <Truncated className="title" text={type} />
                                            </div>
                                        </SlideContent>
                                    </SwiperSlide>
                                )
                            }
                            )
                        } */}
                    </Swiper>
                </Main>

            </WidgetBody>
        </Widget>
    )
}

export default NextPatient;