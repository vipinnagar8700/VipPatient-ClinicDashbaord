import moment from 'moment';

import pat1jpg from '@assets/avatars/pat1.jpg';
import pat1webp from '@assets/avatars/pat1.jpg?as=webp';
import pat2jpg from '@assets/avatars/pat2.jpg';
import pat2webp from '@assets/avatars/pat2.jpg?as=webp';
import pat3jpg from '@assets/avatars/pat3.jpg';
import pat3webp from '@assets/avatars/pat3.jpg?as=webp';
import pat4jpg from '@assets/avatars/pat4.jpg';
import pat4webp from '@assets/avatars/pat4.jpg?as=webp';
import pat5jpg from '@assets/avatars/pat5.jpg';
import pat5webp from '@assets/avatars/pat5.jpg?as=webp';
import pat6jpg from '@assets/avatars/pat6.jpg';
import pat6webp from '@assets/avatars/pat6.jpg?as=webp';
import pat9jpg from '@assets/avatars/pat9.jpg';
import pat9webp from '@assets/avatars/pat9.jpg?as=webp';
import pat10jpg from '@assets/avatars/pat10.jpg';
import pat10webp from '@assets/avatars/pat10.jpg?as=webp';

export const upcoming = [
    {
        id: 'qT0nHYC',
        patient: {
            name: 'Max Morales',
            avatar: {
                jpg: pat2jpg,
                webp: pat2webp
            }
        },
        type: 'USG + Consultation',
        payment: 99.95,
        date: moment().add(2, 'hours').add(30, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'Gldh1cZfcduM',
        patient: {
            name: 'Bertie Maxwell',
            avatar: {
                jpg: pat4jpg,
                webp: pat4webp
            }
        },
        type: 'Complementation test',
        payment: 40.45,
        date: moment().add(3, 'hours').add(15, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'F0q6BW9MPz',
        patient: {
            name: 'Clyde Morales',
            avatar: {
                jpg: pat3jpg,
                webp: pat3webp
            }
        },
        type: 'USG + Consultation',
        payment: 29.9,
        date: moment().add(2, 'hours').add(15, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'Oacx30fQL',
        patient: {
            name: 'Linda Smith',
            avatar: {
                jpg: pat9jpg,
                webp: pat9webp
            }
        },
        type: 'Emergency appointment',
        date: moment().add(5, 'hours').toDate(),
        phone: '12456789',
    },
    {
        id: 'FgzlrSx',
        patient: {
            name: 'Karolina Doe',
            avatar: {
                jpg: pat6jpg,
                webp: pat6webp
            }
        },
        type: 'USG',
        payment: 19.15,
        date: moment().add(1, 'hours').add(17, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'yl53HDa8v9yE',
        patient: {
            name: 'Corey Aguilar',
            avatar: {
                jpg: pat1jpg,
                webp: pat1webp
            }
        },
        type: 'Kidney function test',
        payment: 24.5,
        date: moment().add(4, 'hours').add(11, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'mdfbc2DJ',
        patient: {
            name: 'Max Morales',
            avatar: {
                jpg: pat2jpg,
                webp: pat2webp
            }
        },
        type: 'Blood test',
        payment: 99.95,
        date: moment().add(1, 'days').add(30, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'jTvHHD08',
        patient: {
            name: 'Marta Bloom',
            avatar: {
                jpg: pat1jpg,
                webp: pat1webp
            }
        },
        type: 'ECG',
        date: moment().add(1, 'days').toDate(),
        phone: '12456789',
    },
    {
        id: 'X8pXJg',
        patient: {
            name: 'Vincent Porter',
            avatar: {
                jpg: pat5jpg,
                webp: pat5webp
            }
        },
        type: 'Lactose intolerance test',
        date: moment().add(1, 'days').add(2, 'hours').toDate(),
        phone: '12456789',
    },
    {
        id: 'fIRF8kkDYwz',
        patient: {
            name: 'Julia Peters',
            avatar: {
                jpg: pat10jpg,
                webp: pat10webp
            }
        },
        type: 'Magnesium test',
        date: moment().add(1, 'days').add(2, 'hours').add(30, 'minutes').toDate(),
        phone: '12456789',
        payment: 19.15,
    },
    {
        id: 'krr28Myt6dX',
        patient: {
            name: 'Samantha Wilson',
            avatar: {
                jpg: pat4jpg,
                webp: pat4webp
            }
        },
        type: 'Family planning',
        date: moment().add(1, 'days').add(3, 'hours').add(18, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'BSpQyZ',
        patient: {
            name: 'Robert Fox',
            avatar: {
                jpg: pat3jpg,
                webp: pat3webp
            }
        },
        type: 'Cardiovascular test',
        date: moment().add(1, 'days').add(4, 'hours').add(23, 'minutes').toDate(),
        phone: '12456789',
    },
    {
        id: 'cPr0TSE',
        patient: 'Milagros Maxwell',
        type: 'Glucose test',
        date: moment().subtract(1, 'days').toDate(),
        phone: '12456789',
        payment: 19.15,
    },
    {
        id: '64iwM7',
        patient: 'Joel Aguilar',
        type: 'Flu',
        date: moment().subtract(1, 'days').add(30, 'minutes').toDate(),
        phone: '12456789',
        payment: 29.44
    },
    {
        id: 'kH4sUhXCUtt',
        patient: 'Vivianna Peters',
        type: 'Glaucoma',
        date: moment().subtract(1, 'days').add(45, 'minutes').toDate(),
        phone: '12456789',
        payment: 198.90
    },
    {
        id: 'FYytOgsLbom',
        patient: 'Mike Wilson',
        type: 'Allergy',
        date: moment().subtract(1, 'days').add(1, 'hours').toDate(),
        phone: '12456789',
        avatar: {
            jpg: pat2jpg,
            webp: pat2webp
        }
    },
    {
        id: 'vgdnlrrM1x47',
        patient: {
            name: 'Robert Fox',
            avatar: {
                jpg: pat3jpg,
                webp: pat3webp
            }
        },
        type: 'Gluten intolerance test',
        date: moment().subtract(1, 'days').add(3, 'hours').toDate(),
        phone: '12456789',
    },
];