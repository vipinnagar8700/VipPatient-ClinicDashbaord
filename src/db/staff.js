import {nanoid} from 'nanoid';
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';
import doc4jpg from '@assets/avatars/doc4.jpg';
import doc4webp from '@assets/avatars/doc4.jpg?as=webp';
import doc7jpg from '@assets/avatars/doc7.jpg';
import doc7webp from '@assets/avatars/doc7.jpg?as=webp';
import doc10jpg from '@assets/avatars/doc10.jpg';
import doc10webp from '@assets/avatars/doc10.jpg?as=webp';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

export const staff = [
    {
        id: nanoid(7),
        firstName: 'Eva',
        lastName: 'Graves',
        gender: 'female',
        avatar: {
            jpg: doc1jpg,
            webp: doc1webp
        },
        rating: 4,
        booked: 80,
        department: [
            {
                id: 'family',
                label: 'Family practice doctor'
            }
        ],
        online: true,
    },
    {
        id: nanoid(7),
        firstName: 'Martha',
        lastName: 'Simmons',
        gender: 'female',
        avatar: {
            jpg: doc3jpg,
            webp: doc3webp
        },
        rating: 2,
        booked: 20,
        department: [
            {
                id: 'family',
                label: 'Family practice doctor'
            },
            {
                id: 'therapy',
                label: 'Therapist'
            }
        ]
    },
    {
        id: nanoid(7),
        firstName: 'Lucas',
        lastName: 'Cane',
        gender: 'male',
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        rating: 4.85,
        booked: 71,
        department: [
            {
                id: 'dent',
                label: 'Dentist'
            }
        ],
        online: true,
    },
    {
        id: nanoid(7),
        firstName: 'John',
        lastName: 'Williams',
        gender: 'male',
        avatar: {
            jpg: doc4jpg,
            webp: doc4webp
        },
        rating: 4.14,
        booked: 50,
        department: [
            {
                id: 'dent',
                label: 'Dentist'
            }
        ]
    },
    {
        id: nanoid(7),
        firstName: 'Lisa',
        lastName: 'Mabel',
        gender: 'female',
        avatar: {
            jpg: doc10jpg,
            webp: doc10webp
        },
        rating: 3.25,
        booked: 20,
        department: [
            {
                id: 'dent',
                label: 'Dentist'
            }
        ],
        online: true,
    },
    {
        id: nanoid(7),
        firstName: 'Hannah',
        lastName: 'Blue',
        gender: 'female',
        avatar: {
            jpg: doc7jpg,
            webp: doc7webp
        },
        rating: 4.11,
        booked: 38,
        department: [
            {
                id: 'dent',
                label: 'Dentist'
            }
        ]
    },
    {
        id: nanoid(7),
        firstName: 'Shaun',
        lastName: 'Simmons',
        gender: 'male',
        avatar: {
            jpg: doc11jpg,
            webp: doc11webp
        },
        rating: 5,
        booked: 55,
        department: [
            {
                id: 'cardio',
                label: 'Cardiologist'
            },
            {
                id: 'family',
                label: 'Family practice doctor'
            },
        ]
    },
];