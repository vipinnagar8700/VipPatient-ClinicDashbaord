import {doctors} from '@db/doctors';
import Avatar from '@ui/Avatar';

export const tasksOptions = [
    {value: 'work', label: 'Work'},
    {value: 'travel', label: 'Travel'},
    {value: 'family', label: 'Family'},
    {value: 'other', label: 'Other'}
]

export const depsOptions = [
    {value: 'all', label: 'All Departments'},
    {value: 'family', label: 'Family Doctors'},
    {value: 'therapy', label: 'Therapists'},
    {value: 'dent', label: 'Dentists'},
    {value: 'cardio', label: 'Cardiologists'},
]

export const testsOptions = [
    {value: 'all', label: 'All My Tests'},
    {value: 'blood', label: 'Blood Count'},
    {value: 'xray', label: 'X-Ray'},
    {value: 'ecg', label: 'ECG'},
    {value: 'ct', label: 'CT Scan'},
    {value: 'mri', label: 'MRI'},
    {value: 'ultrasound', label: 'Ultrasound'},
    {value: 'prenatal', label: 'Prenatal Testing'},
]

export const doctorsOptions = () => {
    let options = [];
    doctors.forEach(doctor => {
        options.push({
            value: doctor.id,
            label: <div className="user-option">
                <Avatar avatar={doctor.avatar} alt={doctor.name} size={40} />
                <span>{doctor.name}</span>
            </div>
        });
    });
    return options;
}