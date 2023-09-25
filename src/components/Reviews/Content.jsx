// styled components
import {ReviewsContent, ReviewsHeader, HeaderWrapper, Wrapper} from '@components/Reviews/style';

// components
import Tab from 'react-bootstrap/Tab';
import Widget from '@components/Widget';
import Navigator from '@ui/Navigator';
import ScrollContainer from '@components/ScrollContainer';
import Review from '@components/Reviews/Review';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import SelectPlaceholder from '@ui/SelectPlaceholder';
import Avatar from '@ui/Avatar';
import CustomRating from '@ui/CustomRating';

// data placeholder
import {doctors} from '@db/doctors';
import {doctors_reviews} from '@db/doctors_reviews';

// hooks
import {useEffect, useMemo, useRef, useState} from 'react';
import useContentHeight from '@hooks/useContentHeight';
import useArrayNav from '@hooks/useArrayNav';

// utils
import {getMonthArray, getYearDaysArray} from '@utils/dates';
import moment from 'moment';
import PropTypes from 'prop-types';

const Content = ({selectedTab, variant}) => {
    const [headerHeight, setHeaderHeight] = useState(null);
    const headerReviewsRef = useRef(null);
    const reviewsHeight = useContentHeight(headerHeight);

    const currentMonth = moment().month();
    const months = useMemo(() => getMonthArray(), []);
    const {index: monthIndex, setIndex: setMonthIndex, navigate: navigateMonth} = useArrayNav(months);
    const navMonthLabel = () => {
        if (monthIndex === currentMonth) {
            return 'This month';
        } else if (monthIndex === currentMonth - 1) {
            return 'Previous month';
        } else if (monthIndex === currentMonth + 1) {
            return 'Next month';
        } else {
            return months[monthIndex].formatted
        }
    }

    const days = getYearDaysArray();
    const todayIndex = moment().diff(moment().startOf('year'), 'days');
    const {index: dayIndex, setIndex: setDayIndex, navigate: navigateDay} = useArrayNav(days);
    const navDayLabel = () => {
        if (dayIndex === todayIndex) {
            return 'Today';
        } else if (dayIndex === todayIndex - 1) {
            return 'Yesterday';
        } else {
            return moment(days[dayIndex].date).format('MMMM DD');
        }
    }

    const scrollToTop = () => {
        const currentTrack = document.getElementById(`${selectedTab}-track`);
        if (currentTrack) {
            currentTrack.scrollTo(0, 0);
        }
    }

    useEffect(() => {
        scrollToTop();
        setMonthIndex(currentMonth);
        setDayIndex(todayIndex);
        setHeaderHeight(headerReviewsRef.current && headerReviewsRef);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab])

    useEffect(() => {
        scrollToTop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dayIndex, monthIndex])

    let currentDoctor;
    if (variant === 'doctor') {
        currentDoctor = doctors.find(doctor => doctor.id === selectedTab);
    }

    return (
        <Tab.Content as={Widget} name="PatientReviews" mobile={600}>
            {
                selectedTab === '' ?
                    <SelectPlaceholder text="Select a doctor to see reviews"/>
                    :
                    <>
                        <ReviewsHeader ref={headerReviewsRef} className={variant}>
                            {
                                variant === 'doctor' ?
                                    <HeaderWrapper className="main">
                                        <Wrapper>
                                            <Avatar avatar={currentDoctor.avatar} alt={currentDoctor.name} online={currentDoctor.online}/>
                                            <div className="info">
                                                <span className="info_subtitle">Overall rating</span>
                                                <span
                                                    className="info_rating h2">{currentDoctor.rating['year'].toFixed(2)}</span>
                                                <CustomRating value={currentDoctor.rating['year']}/>
                                            </div>
                                        </Wrapper>
                                        <Navigator text={navDayLabel()}
                                                   handler={navigateDay}
                                                   nextDisabled={dayIndex === todayIndex}
                                                   prevDisabled={dayIndex === 0}/>
                                    </HeaderWrapper>
                                    :
                                    <>
                                        <h2>My appointment reviews</h2>
                                        <Navigator text={navMonthLabel()}
                                                   handler={navigateMonth}
                                                   nextDisabled={monthIndex === currentMonth}
                                                   prevDisabled={monthIndex === 0}/>
                                    </>
                            }
                        </ReviewsHeader>
                        {
                            doctors.map(doctor => {
                                const doctorReviews = doctors_reviews.filter(review => review.id === doctor.id)[0].reviews;

                                const reviewsByMonth = doctorReviews.filter(review => {
                                    return review.date.format('MMMM, YYYY') === months[monthIndex].formatted;
                                });

                                const reviewsByDay = doctorReviews.filter(review => {
                                    return review.date.format('DD/MM/YYYY') === days[dayIndex].short;
                                });

                                const reviews = variant === 'doctor' ? reviewsByDay : reviewsByMonth;


                                return (
                                    <Tab.Pane key={`${doctor.id}-pane`} eventKey={doctor.id}>
                                        <ScrollContainer height={reviewsHeight}>
                                            <ReviewsContent className="track" id={`${doctor.id}-track`}>
                                                {
                                                    reviews.length !== 0 ?
                                                        reviews.map(review => {
                                                            return (
                                                                <Review key={review.id} data={review}
                                                                        variant={variant}/>
                                                            )
                                                        }) : <NoDataPlaceholder/>
                                                }
                                            </ReviewsContent>
                                        </ScrollContainer>
                                    </Tab.Pane>
                                )
                            })
                        }
                    </>
            }
        </Tab.Content>
    )
}

Content.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired
}

export default Content;