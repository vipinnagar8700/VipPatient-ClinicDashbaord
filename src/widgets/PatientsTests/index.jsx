// styled components
import {List, Header} from '@widgets/PatientsTests/style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import CustomSelect from '@ui/Select';
import MonthNavigator from '@ui/Navigator/MonthNavigator';
import SearchBar from '@ui/SearchBar';
import TestItem from '@components/TestItem';
import GroupSeparator from '@ui/GroupSeparator';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import {testsOptions} from '@constants/options';
import moment from 'moment';

// hooks
import {useEffect, useRef, useState} from 'react';

// data placeholder
import {patient_tests} from '@db/patient_tests';

const PatientsTests = () => {
    const contentRef = useRef(null);
    const currentMonth = new Date().getMonth();
    const [category, setCategory] = useState(testsOptions[0]);
    const [month, setMonth] = useState({label: 'This month', number: currentMonth});
    const [search, setSearch] = useState('');
    const uniqueDates = [...new Set(patient_tests.map(item => moment(item.date).format('DD MMM YYYY')))];

    const filteredTests = patient_tests.filter(test => {
        const testDate = new Date(test.date);
        const testMonth = testDate.getMonth();
        const testName = test.title.toLowerCase();
        const testCategory = test.type.toLowerCase();
        const doctorName = test.doctor.toLowerCase();
        const queryMatch = testName.includes(search.toLowerCase()) || doctorName.includes(search.toLowerCase());
        const categoryMatch = category.value === 'all' || testCategory === category.value;

        return (
            testMonth === month.number
            && queryMatch
            && categoryMatch
        );
    })

    const drawTests = () => {
        return uniqueDates.map(date => {
            const tests = filteredTests.filter(test => moment(test.date).format('DD MMM YYYY') === date);
            const isToday = moment(date).isSame(new Date(), 'day');

            return (
                tests.length !== 0 && new Date(date).getMonth() === month.number && (
                    <div key={date}>
                        <GroupSeparator text={isToday ? 'Today\'s visit' : date}/>
                        <List>
                            {tests.map(test => <TestItem key={`${test.id}-${search}-${category.value}`} data={test}/>)}
                        </List>
                    </div>
                )
            )
        })
    }

    useEffect(() => {
        contentRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [month, search])

    return (
        <Widget name="PatientsTests">
            <Header>
                <div className="wrapper">
                    <CustomSelect options={testsOptions}
                                  variant="minimal"
                                  value={category}
                                  changeHandler={e => setCategory(e)}
                    />
                    <MonthNavigator state={month} handler={setMonth} loop={false}/>
                </div>
                <SearchBar placeholder="Search a doctor or medical test" handler={setSearch} value={search}/>
            </Header>
            <WidgetBody style={{padding: 0}} elRef={contentRef}>
                {filteredTests.length !== 0 ? drawTests() : <NoDataPlaceholder/>}
            </WidgetBody>
        </Widget>
    )
}

export default PatientsTests;