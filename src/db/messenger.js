import moment from 'moment';
import audio from '@assets/audio.mp3';
import pic from '@assets/pic.jpg';

import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';
import doc4jpg from '@assets/avatars/doc4.jpg';
import doc4webp from '@assets/avatars/doc4.jpg?as=webp';
import doc5jpg from '@assets/avatars/doc5.jpg';
import doc5webp from '@assets/avatars/doc5.jpg?as=webp';
import doc6jpg from '@assets/avatars/doc6.jpg';
import doc6webp from '@assets/avatars/doc6.jpg?as=webp';
import doc7jpg from '@assets/avatars/doc7.jpg';
import doc7webp from '@assets/avatars/doc7.jpg?as=webp';
import doc10jpg from '@assets/avatars/doc10.jpg';
import doc10webp from '@assets/avatars/doc10.jpg?as=webp';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

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
import pat7jpg from '@assets/avatars/pat7.jpg';
import pat7webp from '@assets/avatars/pat7.jpg?as=webp';
import pat9jpg from '@assets/avatars/pat9.jpg';
import pat9webp from '@assets/avatars/pat9.jpg?as=webp';
import pat10jpg from '@assets/avatars/pat10.jpg';
import pat10webp from '@assets/avatars/pat10.jpg?as=webp';

export const doctor = [
    {
        firstName: 'Greg',
        lastName: 'Miller',
        id: 'gregmiller',
        role: 'patient',
        online: true,
        isTyping: true,
        avatar: {
            jpg: pat2jpg,
            webp: pat2webp,
        },
        chatHistory: [
            {
                id: 'KbRNFHXq4Cx3',
                sender: 'patient',
                message: 'Hi. I just wanted to ask: can I drive after taking these pills?',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 1,
                    'hour': 13,
                    'minute': 11,
                    'second': 0
                }).valueOf(),
                read: true,
            },
            {
                id: 'gyZxbVL',
                sender: 'current',
                message: 'Good day, Mr. Miller. I am afraid that is not recommended.',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 1,
                    'hour': 13,
                    'minute': 14,
                    'second': 0
                }).valueOf(),
                read: true,
            },
            {
                id: 'gsGS4mP3M',
                sender: 'patient',
                message: 'Good evening. When can I pick up my prescription?',
                date: moment().subtract(1, 'hour').valueOf(),
                read: false
            }
        ]
    },

];

export const patient = [
    {
        firstName: 'Ben',
        lastName: 'Henderson',
        id: 'benhenderson',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        chatHistory: [
            {
                id: 'Djd0x1IVmJ',
                sender: 'current',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'jLlQwUEBb19g',
                sender: 'current',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'G4Mzu2oF2TKd',
                sender: 'doctor',
                message: 'Consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: false
            }
        ]
    }

]