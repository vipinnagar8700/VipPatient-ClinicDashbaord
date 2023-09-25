// styling
import {textSizes, dark, fonts, colors, light} from '@styles/vars';

// styled components0
import {List} from './style';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import RecentQuestionsItem from './RecentQuestionsItem';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// utils
import {nanoid} from 'nanoid';
import moment from 'moment';

// hooks
import {useState, useEffect} from 'react';
import {useTheme} from '@mui/material/styles';
import {useTheme as getStyledTheme} from 'styled-components';

const RecentQuestions = () => {
    const {theme} = getStyledTheme();
    const options = ['all', 'unread', 'new'];
    const [value, setValue] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const dir = useTheme().direction;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    useEffect(() => {
        setValue(1);
        setTimeout(() => {
            setTransitionEnabled(true);
        }, 1000);
    }, []);

    const data = [
        {
            id: 'abc123',
            label: 'unread',
            date: moment(),
            text: 'Addiction blood bank bone marrow contagious?'
        },
        {
            id: 'abc124',
            label: 'new',
            date: moment().subtract(1, 'days').subtract(1, 'hours').toDate(),
            text: 'Triggered asthma anesthesia bone marrow?'
        },
        {
            id: 'abc125',
            label: 'unread',
            date: moment().subtract(5, 'days').subtract(2, 'hours').subtract(30, 'minutes').toDate(),
            text: 'Lorem ipsum dolor sit amet, consectetur?'
        },
        {
            id: 'abc126',
            label: 'new',
            date: moment().subtract(10, 'days').subtract(5, 'hours').subtract(10, 'minutes').toDate(),
            text: 'Sed do eiusmod tempor incididunt ut labore et?'
        }
    ]

    return (
        <Widget name="RecentQuestions" mobile={388}>
            <WidgetHeader title="Recent Questions" flex="column">
                <Tabs value={value}
                      onChange={handleChange}
                      style={{margin: '0 -22px'}}
                      sx={{
                          padding: '0 22px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          '& .MuiTabs-indicator': {
                              display: 'none'
                          },
                          '& .MuiTabs-flexContainer': {
                              gap: '8px',
                              alignItems: 'center'
                          },
                          '& .MuiTab-root': {
                              padding: '4px 8px',
                              borderRadius: '8px',
                              fontSize: textSizes['12'],
                              minHeight: '20px',
                              minWidth: 'auto',
                              lineHeight: '1',
                              textTransform: 'capitalize',
                              fontFamily: fonts.accent,
                              color: colors.blue,
                              fontWeight: 400,
                              transition: 'background-color var(--transition), color var(--transition)',
                          },
                          '& .MuiTab-root:hover, & .Mui-selected': {
                                backgroundColor: theme === 'dark' ? light.text : light.widgetBg,
                                color: theme === 'dark' && '#fff !important'
                          },
                          minHeight: '40px',
                          backgroundColor: theme === 'dark' && dark.highlight
                      }}
                >
                    {
                        options.map((option) => (
                            <Tab key={nanoid()} label={option}/>
                        ))
                    }
                </Tabs>
            </WidgetHeader>
            <WidgetBody style={{padding: 0}}>
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex} animateTransitions={transitionEnabled}>
                    {
                        options.map((option, index) => (
                            <List key={option}>
                                {
                                    value === 0 ?
                                        data.map(item => <RecentQuestionsItem key={item.id} dir={dir} date={item.date} text={item.text}/>)
                                        :
                                        data.filter(item => item.label === option).map(item => <RecentQuestionsItem
                                            key={item.id} dir={dir} date={item.date} text={item.text}/>)
                                }
                            </List>
                        ))
                    }
                </SwipeableViews>
            </WidgetBody>
        </Widget>
    )
}

export default RecentQuestions;