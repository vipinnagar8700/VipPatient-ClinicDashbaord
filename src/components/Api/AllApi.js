import Cookies from "js-cookie";
import Url from "../../url/Allurl";
// console.log(Url)

// Retrieve the data from LocalStorage
const dataFromLocalStorage = localStorage.getItem("clinic");

// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);
// Rest of your code
// let DataUrl = Url();
// console.log(DataUrl, "WEBSITE URL")
// const parsedData = {
//     "id": 703,
//     "prefix": null,
//     "name": "Mr,1",
//     "lname": "Nagar",
//     "mname": null,
//     "role": "clinic",
//     "username": null,
//     "email": "clinic@gmail.com",
//     "company_id": null,
//     "clinic_id": 1,
//     "doctor_id": null,
//     "img": "1691563651.jpg",
//     "address": "Jhatta Noida",
//     "address2": "dehli",
//     "email_verified_at": null,
//     "phone": 9686862809,
//     "gender": "Female",
//     "dob": "2023-08-17",
//     "about": "I am a Patient",
//     "signature": "1691563676.jpg",
//     "city": "delhi",
//     "state": "CA",
//     "pincode": "201034",
//     "emergency": "",
//     "referring_doc": "",
//     "doc_license": "123456789",
//     "doctor_state": "",
//     "doctor_phone": "",
//     "social_security": "",
//     "registry_id": "",
//     "prefername": "",
//     "rating": null,
//     "status": "deactive",
//     "security_group": null,
//     "appointment_color": null,
//     "account_enabled": null,
//     "accepts_ppointments": null,
//     "document_signatory": null,
//     "created_at": "2023-07-17T07:12:49.000000Z",
//     "updated_at": "2023-08-09T06:57:57.000000Z",
//     "last_login": null,
//     "clinic": [
//         {
//             "id": 1,
//             "clinic_name": "demo clinic11",
//             "img": "1691564341.jpg",
//             "email": "clinic@gmail.com",
//             "phone": 9865695689,
//             "timezone": "12",
//             "prevent_double_booking": "yes",
//             "prevent_appt_cancellations": "no",
//             "is_short_exams": "no",
//             "created_at": "2023-08-02T04:03:18.000000Z",
//             "updated_at": "2023-08-09T07:22:03.000000Z"
//         }
//     ]
// }

// const parsedData = [{
//     id:1
// }]
// Now, "parsedData" will contain the full object with all the properties that were originally present in the `data` object

export const LoginApi = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var formdata = new FormData();
    formdata.append("email_phone", email);
    formdata.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch(`${Url}/api/login_action`, requestOptions)
        .then(response => response.text())
        .then(result => {
            // Assuming the API response includes information about successful login
            return result; // Return the API response to the caller
        })
        .catch(error => {
            throw error; // Rethrow the error to be handled by the caller
        });
}


export const ProfileApi = () => {

    let token = Cookies.get("clinic")
    //    // console.log(token, "This Is token for all Api's")

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/clinic_profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



// console.log(parsedData, "AL Data AAAAAAAAAAAAAAAAAAAAA");

const ValueID = parsedData?.id;
const ClinicID = parsedData?.clinic_id;
console.log(ValueID, "This IS Clinic Single ID")
console.log(ClinicID, "This IS Clinic  ID")


export const UpdateProfileData = (name, mname, lname, email, address, address2, city, dob, phone, pincode, state, doc_license, SignatureDataToUpdate, imageDataToUpdate, gender, about) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("mname", mname);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("pincode", pincode);
    formdata.append("dob", dob);
    formdata.append("state", state);
    formdata.append("img", imageDataToUpdate);
    formdata.append("gender", gender);
    formdata.append("doc_license", doc_license);
    formdata.append("about", about);
    formdata.append("signature", SignatureDataToUpdate);
    formdata.append("id", ValueID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_myaccount`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const LogoutProfile = () => {
    let token = Cookies.get("clinic")
    //    // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/logout`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const ViewProduct = () => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${Url}/api/view_product`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}




export const SingleProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/providerwise_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const SingleProductProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const AddPatientapi = (values) => {
    const { FirstName, Email, Phone, password, MiddleName, LastName, PreferName, BirthDate, Gender, Address, Address2, City, State, Pincode, Emergency, Referring_Doctor, Doctor_license, Doctor_State, Doctor_phone, SocialSecurity, Registry_id } = values;
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    FirstName && formdata.append("name", FirstName);
    Email && formdata.append("email", Email);
    Phone && formdata.append("phone", Phone);
    password && formdata.append("password", password);
    MiddleName && formdata.append("mname", MiddleName);
    LastName && formdata.append("lname", LastName);
    PreferName && formdata.append("prefername", PreferName);
    BirthDate && formdata.append("dob", BirthDate);

    formdata.append("gender", Gender);
    formdata.append("address", Address);
    formdata.append("address2", Address2);
    formdata.append("city", City);
    formdata.append("state", State);
    formdata.append("pincode", Pincode);
    formdata.append("emergency", Emergency);
    formdata.append("referring_doc", Referring_Doctor);
    formdata.append("doc_license", Doctor_license);
    formdata.append("doctor_state", Doctor_State);
    formdata.append("doctor_phone", Doctor_phone);
    formdata.append("social_security", SocialSecurity);
    formdata.append("registry_id", Registry_id);
    formdata.append("clinic_id", ClinicID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const GetAllPatientData = () => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const ChangePasswordPatient = (values) => {
    let { current_password, password, password_confirmation } = values;
    let token = Cookies.get("clinic")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("current_password", current_password);
    formdata.append("password", password);
    formdata.append("password_confirmation", password_confirmation);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/changePassword`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}
export const AddTemplate = (values) => {
    const { TemplateName, Template } = values;
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("template_name", TemplateName);
    formdata.append("template", Template);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_template`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const EditTemplateer = (p_id) => {
    console.log(p_id, "A")
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_template/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const UpdateTemplate = (p_id, template_name, template) => {
    console.log(p_id, "TTTTTTTTTTTTTTTTTTTtt")
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("id", p_id);
    formdata.append("template_name", template_name);
    formdata.append("template", template);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_template`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const DeleteTemplate = (id) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${Url}/api/delete_template/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}



export const GetAllTemplate = () => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_template/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const FindPatientdataer = (formdata) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/find_patient`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const BookAppointment = (formData) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData, // Fix the variable name here
        redirect: 'follow'
    };

    return fetch(`${Url}/api/clinic_appointment`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
};



export const GetTypeAppointment = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_type_inclinic/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetPatientAppointment = (patientName) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/search_patient_inclinic?name=${patientName}&clinic_id=${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetLocation = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_location/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetEmployess = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_employee_inclinic/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetBilling = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/billing_invoice/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));


}

export const GetBillingInvoice = (invoiceTitle, invoiceDate, selectedPatientId, description, amount) => {
    let token = Cookies.get("clinic"); // Assuming you have the Cookies library available
       // console.log(token, "This Is token for all Api's");
    const randomInvoiceNumber = Math.floor(Math.random() * 1000) + 1;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", selectedPatientId);
    formdata.append("clinic_id", ClinicID);
    formdata.append("title", invoiceTitle);
    formdata.append("invoice_date", invoiceDate);
    formdata.append("invoice_number", randomInvoiceNumber);

    // Assuming 'description' and 'amount' are arrays
    description.forEach((desc, index) => {
        formdata.append(`description[${index}]`, desc);
    });

    amount.forEach((amt, index) => {
        formdata.append(`amount[${index}]`, amt);
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    // Replace the API endpoint URL with your actual endpoint
    return fetch(`${Url}/api/generate_new_invoice`, requestOptions)
        .then((result) => {
            if (!result.ok) {
                throw new Error("Network response was not ok");
            }
            return result.json();
        })
        .catch((error) => {
            console.error('Error:', error);
            throw error;
        });
};


export const GetBillingCancel = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("is_deleted", "1");
    formdata.append("id", id);
    // alert(id)
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/cancel_invoice`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));

}


export const UpdateManageClinicProfile = (clinic_name, img, email, phone, timezone) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_name", clinic_name);
    formdata.append("img", img);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("timezone", timezone);
    formdata.append("prevent_double_booking", "yes");
    formdata.append("prevent_appt_cancellations", "no");
    formdata.append("is_short_exams", "no");
    formdata.append("id", ClinicID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const CreateNewUser = (values) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append('role', values.SecurityRole);
    formdata.append('clinic_id', ClinicID); // You may need to define ClinicID somewhere.
    formdata.append('username', values.Username);
    formdata.append('prefix', values.Prefix);
    formdata.append('name', values.Name);
    formdata.append('lname', values.LastName);
    formdata.append('email', values.Email);
    formdata.append('phone', values.Phone);
    formdata.append('password', values.Password);
    formdata.append('security_group', values.SecurityGroup);
    formdata.append('doc_license', values.DoctorLicense);
    formdata.append('signature', values.Signature);
    formdata.append('state', values.State);
    formdata.append('appointment_color', values.AppointmentColor);
    formdata.append('accepts_appointments', 'yes');
    formdata.append('account_enabled', 'yes');
    formdata.append('document_signatory', 'yes');

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinic_users`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetAllUSers = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_users/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const AddSecurityGroup = (subject) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("name", subject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinics_security_groups`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GettSecurityData = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinics_security_groups/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GettPatientHistoryData = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/patient_history_in_clinic/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const editSecurityData = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_clinics_security_groups/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const UpdateSecurity = (id, name) => {
    console.log(id, "wwwwwwwwwwwwwwwwwwwwwww")
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinics_security_groups`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const deleteSecurity = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_single_clinics_security_groups/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleClinicUser = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_clinic_users/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const updateUserData = (p_id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state) => {
    console.log("Thcgvsbndsxzfhdgxcgfwdhjz", p_id, role, username, prefix, name, lname, email, phone, password, security_group, doc_license, signature, state)
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var formdata = new FormData();
    formdata.append("role", role);
    formdata.append("clinic_id", ClinicID);
    formdata.append("username", username);
    formdata.append("prefix", prefix);
    formdata.append("name", name);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("password", password);
    formdata.append("security_group", security_group);
    formdata.append("doc_license", doc_license);
    formdata.append("signature", signature);
    formdata.append("state", state);
    formdata.append("accepts_ppointments", "yes");
    formdata.append("account_enabled", "yes");
    formdata.append("document_signatory", "yes");
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_users`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetAllSecurityLocation = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_location/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const AddSecurityLocation = (values) => {
    const { LocationName, LocationPhoneNumber, AddressLine, AddressLine1, City, PostalCode, AdditionalInstructions, State } = values;
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", LocationName);
    formdata.append("phone", LocationPhoneNumber);
    formdata.append("address1", AddressLine);
    formdata.append("address2", AddressLine1);
    formdata.append("city", City);
    formdata.append("postalCode", PostalCode);
    formdata.append("instruction", AdditionalInstructions);
    formdata.append("state", State);
    formdata.append("clinic_id", ClinicID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinic_locations`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleSecondaryLocation = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_clinic_location/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateSecondaryLocation = (p_id, name, phone, address1, address2, state, city, postalCode, instruction) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("phone", phone);
    formdata.append("address1", address1);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("postalCode", postalCode);
    formdata.append("instruction", instruction);
    formdata.append("state", state);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_locations`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteSecondaryLoaction = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_clinic_location/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// Appointment Type

export const AddAppointmentTypedes = (values) => {
    const { Name, Length } = values;
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("name", Name);
    formdata.append("length", Length);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/clinic_appointment_type`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetSingleAppointmentType = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_appointment_type_inclinic/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateAppointmentType = (p_id, name, length) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("length", length);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_appointment_type`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteAppointmentType = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_appointment_type_inclinic/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSinglePAtient = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_patient/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const getNotesData = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_notes/${ClinicID}/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDNotes = (subject, p_id) => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("clinic_id", ClinicID);
    formdata.append("doctor_id", ValueID);
    formdata.append("note", subject);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_notes`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteNotes = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_notes/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSingleNotes = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_notes/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateNotes = (p_id, note) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("note", note);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_notes`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// DDLC

export const getDOContactList = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_DNC/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDDOContactList = (p_id, FirstName, LastName, Relationship) => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("clinic_id", ClinicID);
    formdata.append("fname", FirstName);
    formdata.append("lname", LastName);
    formdata.append("relationship", Relationship);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_DNC`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteDOContactList = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_DNC/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetSingleDOContactList = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_DNC/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UpdateDOContactList = (p_id, fname, lname, relationship) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("fname", fname);
    formdata.append("lname", lname);
    formdata.append("relationship", relationship);
    formdata.append("id", p_id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_DNC`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetClinicShedule = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_schedule/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const ADDClinicShedule = (DoctorID, Day, Start, Stop) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("doctor_id", DoctorID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("dotw", Day);
    formdata.append("start", Start);
    formdata.append("stop", Stop);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_clinic_schedule`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCLinicShedule = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_clinic_schedule/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GEtSingleCliniocShedule = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_clinic_schedule/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const UPdateCLincicShedule = (id, dotw, doctor_id, start, stop) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("doctor_id", doctor_id);
    formdata.append("dotw", dotw);
    formdata.append("start", start);
    formdata.append("stop", stop);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_clinic_schedule`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetAppointmtentREwie = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_request/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// 12-08-2023
export const GetAllPatientFiles = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_files/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDPatientFiles = (p_id, names, fileI, isVisibleToPatient) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("doctor_id", "703");
    formdata.append("clinic_id", ClinicID);
    formdata.append("name", names);
    formdata.append("file", fileI);
    formdata.append(
        "is_patient_visible",
        isVisibleToPatient !== false ? isVisibleToPatient : 0
    ); // Set to 0 if isVisibleToPatient is not provided


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const DEeletPatientFiles = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const EDITPatientFiles = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}
export const UpdatePatientFiles = (name, img, id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", "bobby");
    formdata.append("is_patient_visible", "1");
    formdata.append("file", img);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const getCertificate = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_certificates_in_patient/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const AddCertificate = (p_id, CertificateDate, CertificateExpiry, Diagnoses, Notes, InternalNotes, selectedDoctorId) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("doctor_id", "703");
    formdata.append("clinic_id", ClinicID);
    formdata.append("certificate_date", CertificateDate);
    formdata.append("diagnoses", Diagnoses);
    formdata.append("certificate_expiry", CertificateExpiry);
    formdata.append("notes", Notes);
    formdata.append("internal_notes", InternalNotes);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_certificate_details`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCertificate = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_certificates_in_patient/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const GetCertficateOrder = () => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_certificate_order/2`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const ADDCERTIFICATEORDER = (StartDate, EXPIRE) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("certificate_id", 2);
    formdata.append("start_date", StartDate);
    formdata.append("expiration", EXPIRE);
    formdata.append("is_delivery_device", "0");
    formdata.append("dosage[0]", "1");
    formdata.append("dosesPerDay[0]", "1");
    formdata.append("consumptionMethod[0]", "oral");
    formdata.append("dosage[1]", "1");
    formdata.append("dosesPerDay[1]", "0");
    formdata.append("consumptionMethod[1]", "oral");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_certificate_order`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const DeleteCertificateOrder = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_certificate_order/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GEtReportClinicSheduleToday = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/today_clinic_appointment/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetTodayClinicSheduleFilter = (Date, TodayDoctorID) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("date", Date);
    formdata.append("doctor_id", TodayDoctorID);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/Clinic_Daily_Schedule_Report_Filter`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

// 21-08-2023

export const AddExamination = (p_id, StartDate, TYpe, DiscussedAlternatives, EvaluationCriteria, ORT, DSD, PAINSCALE, AdverseEvents, Absolute, Relative, ReviewMedi, ReviewAlergy, ReviewPmh, HPI, Height, HeightUnit, Weight, WeightUnit, Pulse, Temperature, TemperatureUnit, BloodPreasure, RespiratoryRate, BMI, Waist, WaistUnit, MotorTone, Reflexes, PhyGeneral, PhyCardio, PhyGastro, PhyGenit, PhyHeent, PhyIntegumentary, PhyMusculoskeletal, PhyNeuro, PhySpecific) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("doctor_id", ValueID);
    formdata.append("clinic_id", ClinicID);
    StartDate && formdata.append("start", StartDate);
    TYpe && formdata.append("type", TYpe || '');
    DiscussedAlternatives && formdata.append("discussed_alternatives", DiscussedAlternatives);
    EvaluationCriteria && formdata.append("evaluation_criteria", EvaluationCriteria);
    ORT && formdata.append("ort", ORT);
    DSD && formdata.append("sds", DSD);
    PAINSCALE && formdata.append("pain_scale", PAINSCALE);
    AdverseEvents && formdata.append("adverse_events", AdverseEvents);
    formdata.append("urine_screen[benzo]", "1");
    Absolute && formdata.append("absolute_contraindications", Absolute);
    Relative && formdata.append("relative_contraindications", Relative);
    ReviewMedi && formdata.append("review_medication", ReviewMedi);
    ReviewAlergy && formdata.append("review_allergies", ReviewAlergy);
    ReviewPmh && formdata.append("review_pmh", ReviewPmh);
    HPI && formdata.append("hpi", HPI);
    Height && formdata.append("height", Height);
    HeightUnit && formdata.append("height_unit", HeightUnit);
    Weight && formdata.append("weight", Weight);
    WeightUnit && formdata.append("weight_unit", WeightUnit);
    Pulse && formdata.append("pulse", Pulse);
    Temperature && formdata.append("temperature", Temperature);
    TemperatureUnit && formdata.append("temperature_unit", TemperatureUnit);
    BloodPreasure && formdata.append("blood_pressure", BloodPreasure);
    RespiratoryRate && formdata.append("respiratory_rate", RespiratoryRate);
    BMI && formdata.append("bmi", BMI);
    Waist && formdata.append("waist", Waist);
    WaistUnit && formdata.append("waist_unit", WaistUnit);
    MotorTone && formdata.append("motor_tone", MotorTone);
    Reflexes && formdata.append("reflexes", Reflexes);
    PhyGeneral && formdata.append("physical_general", PhyGeneral);
    PhySpecific && formdata.append("physical_specific", PhySpecific);
    PhyHeent && formdata.append("physical_heent", PhyHeent);
    PhyCardio && formdata.append("physical_cardio", PhyCardio);
    PhyNeuro && formdata.append("physical_neuro", PhyNeuro);
    PhyGastro && formdata.append("physical_gastro", PhyGastro);
    PhyGenit && formdata.append("physical_genit", PhyGenit);
    PhyMusculoskeletal && formdata.append("physical_musculoskeletal", PhyMusculoskeletal);
    PhyIntegumentary && formdata.append("physical_integumentary", PhyIntegumentary);
    formdata.append("is_candidate", "1");
    formdata.append("candidate_explanation", "d");
    formdata.append("counseling_risk_factors", "wqd");
    formdata.append("overall_impression", "sdds");
    formdata.append("is_signed_agreement", "1");
    formdata.append("goals", "dewedd");
    formdata.append("schedule_plan", "");
    formdata.append("dx_codes", "22");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_exam`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetExaminationData = (p_id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_exam/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}




export const UpdatePatientData = (id, name, mname, lname, prefername, dob, phone, state, address, address2, pincode, city, email, registry_id, social_security, img, gender, emergency, referring_doc, doctor_state, doctor_phone, doc_license) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("mname", mname);
    formdata.append("lname", lname);
    formdata.append("prefername", prefername);
    formdata.append("dob", dob);
    formdata.append("gender", gender);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("pincode", pincode);
    formdata.append("emergency", emergency);
    formdata.append("referring_doc", referring_doc);
    formdata.append("doc_license", doc_license);
    formdata.append("doctor_state", doctor_state);
    formdata.append("doctor_phone", doctor_phone);
    formdata.append("social_security", social_security);
    formdata.append("registry_id", registry_id);
    formdata.append("img", img);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_in_clinic`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const AddInformedData = (id, DoctorID, WithNessID, WithNessName, WithNessPatient, WithNessSign, PatientName) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    formdata.append("patient_id", id);
    formdata.append("doctor_id", DoctorID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("witness_id", WithNessID);
    formdata.append("initials[xyz]", "1");
    formdata.append("patient_name", PatientName);
    formdata.append("witness_name", WithNessName);
    formdata.append("witness_signature", WithNessSign);
    formdata.append("patient_signature", WithNessPatient);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/informed_consent_documents`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));

}



export const GetInformentDocumnt = (p_id) => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_informed_consent_documents/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const GetMedicalNecessity = (p_id) => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/Medical_Necessity_Letter/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const certificates_report_filter = async (ExpStartDate, ExpEndDate, StartDate, EndDate) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("clinic_id", ClinicID);
    formdata.append("exp_startDate", ExpStartDate);
    formdata.append("exp_endDate", ExpEndDate);
    formdata.append("startDate", StartDate);
    formdata.append("endDate", EndDate);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/certificates_report_filter`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}


export const AddICDCode = (p_id, Code) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", p_id);
    formdata.append("doctor_id", ValueID);
    formdata.append("clinic_id", ClinicID);
    formdata.append("icd_code", Code);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/icd_coupon`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}




export const GetICDCODE = (p_id) => {

    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/icd_code_search/${p_id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}




export const DeleteICDCode = (id) => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_icd_coupon/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}
export const AllAppointmentDetails = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_inclinic/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetUpcommingAppointment = () => {
    let token = Cookies.get("clinic");
       // console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/upcomingAppointments_inclinic/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const GetSingleAppp = (eventId) => {
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_appointment_inclinic/${eventId}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const inpatient = (p_id) => {
    console.log(p_id, "get_clinic_appointment_inpatient")
    let token = Cookies.get("clinic")
       // console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);



    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_appointment_inpatient/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}