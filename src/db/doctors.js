import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';
import doc4jpg from '@assets/avatars/doc4.jpg';
import doc4webp from '@assets/avatars/doc4.jpg?as=webp';
import doc8jpg from '@assets/avatars/doc8.jpg';
import doc8webp from '@assets/avatars/doc8.jpg?as=webp';
import doc10jpg from '@assets/avatars/doc10.jpg';
import doc10webp from '@assets/avatars/doc10.jpg?as=webp';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

export const doctors = [
    {
        id: "marvin_park",
        name: "Marvin Park",
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        speciality: "Dentist",
        rating: {
            year: 3.64,
            month: 4.5,
            week: 4.14
        },
        daily: [
            {label: '9am', value: 25},
            {label: '10am', value: 45},
            {label: '11am', value: 30},
            {label: '12pm', value: 41},
            {label: '1pm', value: 56},
            {label: '2pm', value: 20},
            {label: '3pm', value: 51},
            {label: '4pm', value: 33},
            {label: '5pm', value: 14},
        ]
    },
    {
        id: "norman_munoz",
        name: "Norman Munoz",
        avatar: {
            jpg: doc11jpg,
            webp: doc11webp
        },
        speciality: "Family practice",
        rating: {
            year: 3.8,
            month: 3.51,
            week: 4.6
        },
        online: true,
        daily: [
            {label: '9am', value: 15},
            {label: '10am', value: 35},
            {label: '11am', value: 20},
            {label: '12pm', value: 31},
            {label: '1pm', value: 46},
            {label: '2pm', value: 10},
            {label: '3pm', value: 41},
            {label: '4pm', value: 23},
            {label: '5pm', value: 58},
        ]
    },
    {
        id: "tillie_mathis",
        name: "Tillie Mathis",
        avatar: {
            jpg: doc8jpg,
            webp: doc8webp
        },
        speciality: "Surgeon",
        rating: {
            year: 4.98,
            month: 4.32,
            week: 4.8
        },
        online: true,
        daily: [
            {label: '9am', value: 45},
            {label: '10am', value: 19},
            {label: '11am', value: 36},
            {label: '12pm', value: 58},
            {label: '1pm', value: 80},
            {label: '2pm', value: 25},
            {label: '3pm', value: 14},
            {label: '4pm', value: 60},
            {label: '5pm', value: 50},
        ]
    },
    {
        id: "cornelia_phillips",
        name: "Cornelia Phillips",
        avatar: {
            jpg: doc1jpg,
            webp: doc1webp
        },
        speciality: "Surgeon",
        rating: {
            year: 3.05,
            month: 4.1,
            week: 4.7
        },
        daily: [
            {label: '9am', value: 35},
            {label: '10am', value: 29},
            {label: '11am', value: 26},
            {label: '12pm', value: 48},
            {label: '1pm', value: 70},
            {label: '2pm', value: 15},
            {label: '3pm', value: 4},
            {label: '4pm', value: 50},
            {label: '5pm', value: 25},
        ]
    },
    {
        id: "isaiah_goodman",
        name: "Isaiah Goodman",
        avatar: {
            jpg: doc4jpg,
            webp: doc4webp
        },
        speciality: "Pediatrician",
        rating: {
            year: 4.82,
            month: 5.00,
            week: 4.13
        },
        online: true,
        daily: [
            {label: '9am', value: 55},
            {label: '10am', value: 39},
            {label: '11am', value: 46},
            {label: '12pm', value: 68},
            {label: '1pm', value: 90},
            {label: '2pm', value: 35},
            {label: '3pm', value: 24},
            {label: '4pm', value: 70},
            {label: '5pm', value: 45},
        ]
    },
    {
        id: "claudia_turner",
        name: "Claudia Turner",
        avatar: {
            jpg: doc10jpg,
            webp: doc10webp
        },
        speciality: "Family practice",
        rating: {
            year: 0.95,
            month: 2.4,
            week: 3.54
        },
        daily: [
            {label: '9am', value: 20},
            {label: '10am', value: 49},
            {label: '11am', value: 35},
            {label: '12pm', value: 78},
            {label: '1pm', value: 45},
            {label: '2pm', value: 65},
            {label: '3pm', value: 20},
            {label: '4pm', value: 50},
            {label: '5pm', value: 15},
        ]
    },
    {
        id: "emily_rivera",
        name: "Emily Rivera",
        avatar: {
            jpg: doc3jpg,
            webp: doc3webp
        },
        speciality: "Dentist",
        rating: {
            year: 4.00,
            month: 4.95,
            week: 3.18
        },
        daily: [
            {label: '9am', value: 30},
            {label: '10am', value: 59},
            {label: '11am', value: 45},
            {label: '12pm', value: 88},
            {label: '1pm', value: 55},
            {label: '2pm', value: 75},
            {label: '3pm', value: 30},
            {label: '4pm', value: 60},
            {label: '5pm', value: 25},
        ]
    }
];