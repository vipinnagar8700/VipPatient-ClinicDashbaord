import moment from 'moment';

export const scheduler = [
    {
        id: 'marvin_park',
        tasks: [
            {
                title: 'Vivamus in felis eu sapien',
                date: moment(),
                type: 'work'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(1, 'days'),
                type: 'other'
            },
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(2, 'days'),
                type: 'family'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(3, 'days'),
                type: 'travel'
            },
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(1, 'months'),
                type: 'other'
            }
        ]
    },
    {
        id: 'norman_munoz',
        tasks: [
            {
                title: 'Vivamus felislectus',
                date: moment(),
                type: 'travel'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(1, 'weeks'),
                type: 'family'
            }
        ]
    },
    {
        id: 'tillie_mathis',
        tasks: [
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(5, 'days'),
                type: 'other'
            }
        ]
    },
    {
        id: 'cornelia_phillips',
        tasks: [
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(1, 'days'),
                type: 'work'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(1, 'days').add(2, 'hours'),
                type: 'family'
            },
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(10, 'days').add(4, 'hours'),
                type: 'travel'
            }
        ]
    },
    {
        id: 'isaiah_goodman',
        tasks: [
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(1, 'months'),
                type: 'work'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(1, 'months').add(2, 'days'),
                type: 'family'
            }
        ]
    },
    {
        id: 'claudia_turner',
        tasks: [
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(1, 'days'),
                type: 'work'
            },
            {
                title: 'Sed vel lectus',
                date: moment().add(16, 'days').add(2, 'hours'),
                type: 'family'
            }
        ]
    },
    {
        id: 'emily_rivera',
        tasks: [
            {
                title: 'Lorem ipsum dolor',
                date: moment().add(18, 'days'),
                type: 'other'
            }
        ]
    }
];