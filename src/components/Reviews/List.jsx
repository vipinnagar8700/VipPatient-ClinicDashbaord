// styled components
import {SearchWrapper, NavItem} from '@components/Reviews/style';

// components
import WidgetHeader from '@components/Widget/WidgetHeader';
import ScrollContainer from '@components/ScrollContainer';
import Nav from 'react-bootstrap/Nav';
import DoctorRatingItem from '@components/DoctorRatingItem';
import NoDataPlaceholder from '@components/NoDataPlaceholder';
import Widget from '@components/Widget';

// hooks
import {useRef, useState} from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
import {doctors} from '@db/doctors';

const ReviewsRatingList = ({tab, setTab, setModal}) => {
    const [query, setQuery] = useState('');

    const headerListRef = useRef(null);
    const listRef = useRef(null);
    const listHeight = useContentHeight(headerListRef);

    const visibleDoctors = doctors.filter(doctor => {
        const nameMatch = doctor.name.toLowerCase().includes(query.toLowerCase());
        const specialtyMatch = doctor.speciality.toLowerCase().includes(query.toLowerCase());

        return nameMatch || specialtyMatch;
    });

    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const handleSelect = (key) => {
        setTab(key);
        smallScreen && setModal(true);
    }

    return (
        <Widget name="RatingList">
            <WidgetHeader title="Doctors rating" flex="column" style={{paddingBottom: 4, gap: 14}}
                          elRef={headerListRef}>
                <SearchWrapper query={query}>
                    <label htmlFor="docReviewSearch">
                        <i className="icon icon-circle-user"/>
                    </label>
                    <input type="search"
                           id="docReviewSearch"
                           placeholder="Search doctor"
                           value={query}
                           onChange={e => setQuery(e.target.value)}
                    />
                    <i className="icon icon-close" onClick={() => setQuery('')}/>
                </SearchWrapper>
            </WidgetHeader>
            <ScrollContainer height={listHeight}>
                <div className="track" ref={listRef}>
                    {
                        visibleDoctors.length !== 0 ?
                            visibleDoctors.map(doctor => {
                                return (
                                    <Nav.Link as={NavItem} key={doctor.id} eventKey={doctor.id}
                                              onClick={() => handleSelect(doctor.id)}>
                                        <DoctorRatingItem data={doctor} selected={tab === doctor.id} period="year"/>
                                    </Nav.Link>
                                )
                            })
                            :
                            <NoDataPlaceholder/>
                    }
                </div>
            </ScrollContainer>
        </Widget>
    )
}

export default ReviewsRatingList;