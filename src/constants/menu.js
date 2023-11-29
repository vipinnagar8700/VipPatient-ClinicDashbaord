import { LogoutProfile } from "@components/Api/AllApi";


export const menu = [
    {
        icon: 'blocks',
        name: 'Dashboard',
        link: '/Clinic-Dashboard'
    },
    {
        cat: 'patients',
        icon: 'users',
        links: [
            { name: "Add Patients", link: '/Add-patient' },
            { name: "Find Patients", link: '/Find-patient' },
            { name: "Views Patients", link: '/All-patient' },
            { name: "Views Shared Patients " }
        ]
    },
    {
        icon: 'calendar',
        name: 'Appointments',
        link: '/dashboard_c'
    },
    {
        icon: 'users',
        name: 'Appointment Request',
        link: '/Appointment-Data-List'
    },
    {
        icon: 'comment',
        name: 'Messages',
        link: '/doctor_messenger'
    },
    {
        icon: 'users',
        name: 'Billing',
        link: '/Billing-Data-List'
    },
    {
        icon: 'comment',
        name: 'MMTCs',
        link: '/doctor_reviews'
    },
    {
        icon: 'wallet',
        name: 'Document Builder',
        link: '/document-Builder'
    },
    {
        icon: 'wallet',
        name: 'Intake Form Builder',
        link: '/finances'
    },
    {
        icon: 'comment',
        name: 'Reports',
        link: '/All-Reports'
    },
    {
        icon: 'users',
        name: 'My Account',
        link: '/settings'
    },
    {
        icon: 'wallet',
        name: 'OMMU Registry',
        link: 'https://mmuregistry.flhealth.gov/'
    },
    {
        icon: 'wallet',
        name: 'E-FORCSE',
        link: 'https://florida.pmpaware.net/login'
    },
    {
        icon: 'calendar',
        name: 'Manage Clinic',
        link: '/ManageClinic/Details'
    },
    {
        icon: 'wallet',
        name: 'Documentation',
        link: 'https://help.statepass.com/'
    },

   
    {
        icon: 'wallet',
        name: 'Logout',
        onClick: () => Logout(),
    },

]

const Logout = async () => {


    const response = await LogoutProfile();
    console.log(response);

    if (response && response.message === "Successfully logged out") {
        alert("Successfully Logout!");

        // Clear local storage
        localStorage.removeItem("clinic");

        // Clear cookies
        document.cookie.split(';').forEach(function (cookie) {
            var name = cookie.split('=')[0].trim();
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        });

        // Navigate to the desired location
        window.location.href = '/Login';
    } else {
        alert("Logout failed. Please try again.");
    }

};