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

import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';

export const appointments = [
    {
        id: 'smdIdn',
        patient: {
            name: 'Corey Aguilar',
            avatar: {
                jpg: pat1jpg,
                webp: pat1webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Kidney function test',
        payment: 24.5,
        date: new Date(2022, 0, 1, 9, 0),
        phone: '12456789',
    },
    {
        id: 'sdPkoef34',
        patient: {
            name: 'Max Morales',
            avatar: {
                jpg: pat2jpg,
                webp: pat2webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Emergency appointment',
        payment: 99.95,
        date: new Date(2022, 0, 1, 9, 30),
        phone: '12456789',
    },
    {
        id: 'sdplc5ER',
        patient: {
            name: 'Linda Adams',
            avatar: {
                jpg: pat4jpg,
                webp: pat4webp
            }
        },
        doctor: {
            name: 'Jessie Paul',
            avatar: {
                jpg: doc1jpg,
                webp: doc1webp
            }
        },
        type: 'Complementation test',
        payment: 40.45,
        date: new Date(2022, 0, 1, 10, 30),
        phone: '12456789',
    },
    {
        id: 'ssamcwBER',
        patient: {
            name: 'Clyde Morales',
            avatar: {
                jpg: pat3jpg,
                webp: pat3webp
            }
        },
        doctor: {
            name: 'Mabel Perkins',
            avatar: {
                jpg: doc3jpg,
                webp: doc3webp
            }
        },
        type: 'USG + Consultation',
        payment: 29.9,
        date: new Date(2022, 0, 1, 11, 30),
        phone: '12456789',
    },
    {
        id: 'pnvb6Rtv',
        patient: {
            name: 'Linda Smith',
            avatar: {
                jpg: pat6jpg,
                webp: pat6webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Emergency appointment',
        date: new Date(2022, 0, 1, 12, 30),
        phone: '12456789',
    },
    {
        id: 'sdsdtu9',
        patient: {
            name: 'Steeve Madden',
            avatar: {
                jpg: pat5jpg,
                webp: pat5webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'USG',
        payment: 19.15,
        date: new Date(2022, 0, 1, 14, 30),
        phone: '12456789',
    },
    {
        id: 'cd7xbwsvGFs',
        patient: {
            name: 'Corey Aguilar',
            avatar: {
                jpg: pat1jpg,
                webp: pat1webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Kidney function test',
        payment: 24.5,
        date: new Date(2022, 6, 12, 9, 0),
        phone: '12456789',
    },
    {
        id: 'defbts78a',
        patient: {
            name: 'Max Morales',
            avatar: {
                jpg: pat2jpg,
                webp: pat2webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Blood test',
        payment: 99.95,
        date: new Date(2022, 8, 5, 10, 30),
        phone: '12456789',
    },
    {
        id: 'smduBshba678',
        patient: {
            name: 'Marta Bloom',
            avatar: {
                jpg: pat9jpg,
                webp: pat9webp
            }
        },
        doctor: {
            name: 'Jessie Paul',
            avatar: {
                jpg: doc1jpg,
                webp: doc1webp
            }
        },
        type: 'ECG',
        date: new Date(2022, 1, 12, 11, 30),
        phone: '12456789',
    },
]