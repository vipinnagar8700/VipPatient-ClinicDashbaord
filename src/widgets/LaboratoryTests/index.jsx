// styled components
import {Wrapper, Main, Test, Footer} from './style';

// components
import Widget from '@components/Widget';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import IconLink from '@ui/IconLink';
import Pill from '@ui/Pill';
import MenuDots from '@ui/MenuDots';
import Truncated from '@components/Truncated';
import {SwiperSlide, Swiper} from 'swiper/react';
import {EffectFade} from 'swiper';

// utils
import {nanoid} from 'nanoid';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import {useState, useEffect} from 'react';
import {useInterfaceContext} from '@contexts/interfaceContext';

const LaboratoryTests = () => {
    const window = useWindowSize();
    const {direction} = useInterfaceContext();
    const [swiper, setSwiper] = useState(null);

    const handleNav = e => {
        const direction = e.currentTarget.dataset.direction;
        if (direction === 'prev') {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    }

    useEffect(() => {
        if (swiper) {
            swiper.changeLanguageDirection(direction);
            swiper.update();
        }
    }, [direction, swiper]);

    const data = [
        {
            name: 'Nelle Pearson',
            test: 'Beta 2 Micro-globulin (B2M) Tumor Marker Test',
        },
        {
            name: 'Kate Smith',
            test: 'Natriuretic Peptide Tests (BNP, NT-proBNP)',
        },
        {
            name: 'James Campbell',
            test: 'Fetal Alcohol Spectrum Disorders (FASD) Screening',
        },
        {
            name: 'Max Lewis',
            test: 'Total Protein and Albumin/Globulin (A/G)',
        },
        {
            name: 'Jessica Marble',
            test: 'Antineutrophil Cytoplasmic Antibodies (ANCA) Test',
        },
        {
            name: 'Kevin Doe',
            test: 'Luteinizing Hormone (LH) Levels Blood Test',
        }
    ];

    return (
        <Widget name="LaboratoryTests">
            <WidgetNav title="Laboratory Tests" handler={handleNav} style={{paddingBottom: 16}} />
            <WidgetBody style={{paddingBottom: 18}}>
                <Wrapper>
                    <Swiper onSwiper={(swiper) => setSwiper(swiper)}
                            modules={[EffectFade]}
                            effect="fade"
                            fadeEffect={{crossFade: true}}
                            dir={direction}
                            loop>
                        {
                            data.map(item => {
                                return (
                                    <SwiperSlide key={nanoid(5)}>
                                        <Test>
                                            <IconLink title={item.name} />
                                            <Main>
                                                <Truncated className="h3" text={item.test} lines={2} />
                                            </Main>
                                        </Test>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <MenuDots />
                </Wrapper>
                <Footer>
                    <div className="wrapper">
                        <Pill text="Details" />
                        <Pill text={window.width < 413.98 ? "Contacts" : "Contact patient"} />
                    </div>
                    <Pill text="Archive" icon="check" />
                </Footer>
            </WidgetBody>
        </Widget>
    )
}

export default LaboratoryTests;