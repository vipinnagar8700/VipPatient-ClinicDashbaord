const dayBefore = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const twoDaysBefore = new Date(new Date().getTime() - 2 * 24 * 60 * 60 * 1000);

export const paymentsHistory = [
    {
        doctor: 'John Doe',
        title: 'USG + Consultation',
        payment: 40.15,
        date: new Date()
    },
    {
        doctor: 'Caren Smith',
        title: 'Blood Test',
        payment: 12.70,
        date: new Date()
    },
    {
        doctor: 'Caren Smith',
        title: 'MRI',
        payment: 99.30,
        date: new Date()
    },
    {
        doctor: 'Elizabeth Jones',
        title: 'USG + Consultation',
        payment: 35,
        date: new Date()
    },
    {
        doctor: 'Caren Smith',
        title: 'Blood Test',
        payment: 12.70,
        date: new Date()
    },
    {
        doctor: 'Caren Smith',
        title: 'Keeney Test',
        payment: 150.95,
        date: new Date()
    },
    {
        doctor: 'Robert Miller',
        title: 'Family Planning',
        payment: 540,
        date: dayBefore
    },
    {
        doctor: 'Elizabeth Jones',
        title: 'USG + Consultation',
        payment: 40.15,
        date: dayBefore
    },
    {
        doctor: 'Elizabeth Jones',
        title: 'X-Ray',
        payment: 70,
        date: dayBefore
    },
    {
        doctor: 'Samantha Berry',
        title: 'Psychotherapy',
        payment: 200,
        date: dayBefore
    },
    {
        doctor: 'Samantha Berry',
        title: 'Art therapy session',
        payment: 80.50,
        date: dayBefore
    },
    {
        doctor: 'Lucas Bell',
        title: 'Gastroscopy',
        payment: 50.90,
        date: dayBefore
    },
    {
        doctor: 'Elizabeth Jones',
        title: 'Consultation',
        payment: 15,
        date: twoDaysBefore
    },
    {
        doctor: 'Kimbra Lee',
        title: 'Vision Test',
        payment: 20.90,
        date: twoDaysBefore
    },
    {
        doctor: 'Kimbra Lee',
        title: 'Glaucoma Test',
        payment: 90.95,
        date: twoDaysBefore
    },
    {
        doctor: 'Robert Miller',
        title: 'Family Planning',
        payment: 450.87,
        date: twoDaysBefore
    },
    {
        doctor: 'John Doe',
        title: 'USG + Consultation',
        payment: 40.15,
        date: twoDaysBefore
    },
    {
        doctor: 'Caren Smith',
        title: 'Blood Test',
        payment: 12.70,
        date: twoDaysBefore
    },
]