import {nanoid} from 'nanoid';
import moment from 'moment';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

const prevMonth = moment().month() - 1;

export const payments = [
    {
        id: nanoid(5),
        name: 'Buying shoe covers',
        type: 'expense',
        amount: 2.15,
        date: moment().set({year: 2022, month: prevMonth, date: 21, hour: 14, minute: 32, second: 0}).toDate(),
    },
    {
        id: nanoid(5),
        name: 'Cinema tickets',
        type: 'expense',
        amount: 20,
        date: moment().set({year: 2022, month: prevMonth, date: 21, hour: 18, minute: 11, second: 0}).toDate(),
    },
    {
        id: nanoid(5),
        name: 'Salary',
        type: 'income',
        amount: 3481.25,
        date: moment().set({year: 2022, month: prevMonth, date: 21, hour: 11, minute: 43, second: 0}).toDate(),
    },
    {
        id: nanoid(5),
        name: 'Collection of material for analysis',
        type: 'income',
        amount: 10.85,
        date: moment().set({year: 2022, month: prevMonth, date: 21, hour: 15, minute: 40, second: 0}).toDate(),
    },
    {
        id: nanoid(5),
        name: 'Remote consultation of a doctor',
        type: 'expense',
        amount: 12.40,
        date: moment(),
        additional: {
            doctor: 'Dr. John Doe',
            speciality: 'Dentist',
            avatar: {
                jpg: doc11jpg,
                webp: doc11webp,
            }
        }
    },
    {
        id: nanoid(5),
        name: 'Blood donation',
        type: 'income',
        amount: 25,
        date: moment().subtract(1, 'hours').subtract(25, 'minutes'),
    },
    {
        id: nanoid(5),
        name: 'Lorem ipsum dolor sit amet',
        type: 'income',
        amount: 99.15,
        date: moment().subtract(1, 'days'),
    },
    {
        id: nanoid(5),
        name: 'Morbi leo risus',
        type: 'expense',
        amount: 514.15,
        date: moment().subtract(1, 'days').subtract(2, 'hours'),
    }
]