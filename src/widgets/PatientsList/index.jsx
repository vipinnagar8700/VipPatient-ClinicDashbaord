// styled components
import {Header} from '@components/Widget/style';
import {LetterNav, LetterNavWrapper, LetterNavItem, NavWrapper} from './style';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import GenderNav from '@components/GenderNav';
import MonthNavigator from '@ui/Navigator/MonthNavigator';
import Group from './Group';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import {generateAlphabet} from '@utils/helpers';
import {nanoid} from 'nanoid';

// hooks
import {useState, useRef, useEffect} from 'react';
import useGenderFilter from '@hooks/useGenderFilter';

// data placeholder
import {patients} from '@db/patients';

const PatientsList = () => {
    const contentRef = useRef(null);
    // current filter by month
    const [month, setMonth] = useState({label: 'This month', number: new Date().getMonth()});
    const dateFilteredArr = patients.filter(item => item.reg.getMonth() === month.number);

    // current filter by gender
    const {gender, setGender, genderArr} = useGenderFilter(dateFilteredArr);

    // generate an array containing alphabet
    const alphabet = generateAlphabet();

    const isCharInPatients = (char, arr) => {
        let contains = false;
        for (let i = 0; i < arr.length; i++) {
            const firstLetter = arr[i].lastName.charAt(0).toLowerCase();
            if (firstLetter === char) {
                contains = true;
                break;
            }
        }
        return contains
    }

    useEffect(() => {
        contentRef.current?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [month, gender])

    return (
        <Widget name="PatientsList">
            <Header sidePadding={true}>
                <NavWrapper>
                    <GenderNav state={gender} handler={setGender}/>
                    <MonthNavigator state={month} handler={setMonth}/>
                </NavWrapper>
                <LetterNavWrapper>
                    <LetterNav>
                        {
                            alphabet.map(char => {
                                return (
                                    <li key={nanoid(3)}>
                                        <LetterNavItem
                                            className={isCharInPatients(char, gender.value === 'all' ? dateFilteredArr : genderArr(gender)) ? 'active' : ''}
                                            href={`#${char}`}
                                        >
                                            {char}
                                        </LetterNavItem>
                                    </li>
                                )
                            })
                        }
                    </LetterNav>
                </LetterNavWrapper>
            </Header>
            <WidgetBody style={{padding: 0}} elRef={contentRef}>
                {
                    dateFilteredArr.length !== 0 ?
                        <>
                            {
                                alphabet.map(char => {
                                    return <Group key={`patients-${char}`}
                                                  gender={gender.value}
                                                  char={char}
                                                  type={'patient'}
                                                  arr={gender.value === 'all' ? dateFilteredArr : genderArr(gender)}/>
                                })
                            }
                        </>
                        :
                        <NoDataPlaceholder/>
                }
            </WidgetBody>
        </Widget>
    )
}

export default PatientsList;