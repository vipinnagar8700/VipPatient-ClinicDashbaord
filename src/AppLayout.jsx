// utils
import { lazy, Suspense } from 'react';
// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import Sidebar from '@layout/Sidebar';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePageIsOverflow from '@hooks/usePageIsOverflow';
import { useRef, useEffect } from 'react';
import ShopOnline from '@components/ShopOnline';
import SingleProductpage from '@components/ShopOnline/SingleProductpage';
import Login from '@components/login';
import { useState } from 'react';
import AllPatient from 'Patient/AllPatient';
import FindPatient from 'Patient/FindPatient';
import AddPatient from 'Patient/AddPatient';
import AppointmentDataList from 'AppointmentTable/AppointmentTableList';
import BillingDataTable from 'Billings/BillingDataTable';
import CreateInvoice from 'Billings/CreateInvoice';
import DocumentBuilder from 'DocumentBuilder/DocumentBuilder';
import CreateTemplate from 'DocumentBuilder/CreateTemplate';
import EditTemplate from 'DocumentBuilder/EditTemplate';
import AllReports from 'Report/AllReports';
import ClininDailyReport from 'Report/ClinicDailyReport';
import CancelAppointmentReport from 'Report/CancelAppointmentReport';
import ClinicActivityReport from 'Report/ClinicActivityReport';
import OrderSurveyReport from 'Report/OrderSurveyReport';
import PatientStatusreport from 'Report/PatientStatusreport';
import NewPatientReport from 'Report/NewPatientReport';
import PatientEmailReport from 'Report/PatientEmailReport';
import ChartsViewedReport from 'Report/ChartsViewedReport';
import PrescriptionReport from 'Report/PrescriptionReport';
import ManageClinic from './ManageClinic';
import CreateUser from 'Billings/CreateUser';
import EditUser from 'Billings/EditUser';
import AddSecondaryLocation from 'ManageClinic/AddSecondaryLocation';
import AddSecondaryLoaction from 'ManageClinic/AddSecondaryLocation';
import EditSecondaryLoaction from 'ManageClinic/EditSecondaryLocation';
import AddAppointmentType from 'ManageClinic/AddAppointmentType';
import EditAppointmentType from 'ManageClinic/EditAppointmentType';
import PatientSinglePage from '@components/SinglePAtieentPage';
import ManageOrder from '@components/SinglePAtieentPage/EDitMAnageOrder';
import PersonalInformation from '@components/SinglePAtieentPage/PersonalInformation';
import HomePage from '@components/HomePage';
import VideoChat from '@components/Messenger/Header';
import VideoChata from '@components/Messenger/Header/VideoChat';
import ClinicProtectRoute from 'ClinicProtectRoute';
import ForgotPassworded from '@components/ForgotPassworded';
import ResetPasswordPage from '@components/ResetPassword';
// pages@components/ForgotPassworded
const DashboardA = lazy(() => import('@pages/DashboardA'));
const DashboardB = lazy(() => import('@pages/DashboardB'));
const DashboardC = lazy(() => import('@pages/DashboardC'));
const DashboardD = lazy(() => import('@pages/DashboardD'));
const DashboardE = lazy(() => import('@pages/DashboardE'));
const DashboardF = lazy(() => import('@pages/DashboardF'));
const DashboardG = lazy(() => import('@pages/DashboardG'));
const DashboardH = lazy(() => import('@pages/DashboardH'));
const DashboardI = lazy(() => import('@pages/DashboardI'));
const DashboardJ = lazy(() => import('@pages/DashboardJ'));
const DashboardK = lazy(() => import('@pages/DashboardK'));
const DoctorAppointments = lazy(() => import('@pages/DoctorAppointments'));
const PatientAppointments = lazy(() => import('@pages/PatientAppointments'));
const Patients = lazy(() => import('@pages/Patients'));
const Tests = lazy(() => import('@pages/Tests'));
const Doctors = lazy(() => import('@pages/Doctors'));
const StaffList = lazy(() => import('@pages/Staff'));
const DoctorMessenger = lazy(() => import('@pages/DoctorMessenger'));
const PatientMessenger = lazy(() => import('@pages/PatientMessenger'));
const DoctorsReviews = lazy(() => import('@pages/DoctorsReviews'));
const PatientReviews = lazy(() => import('@pages/PatientReviews'));
const Finances = lazy(() => import('@pages/Finances'));
const Settings = lazy(() => import('@pages/Settings'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const Checkout = lazy(() => import('@components/Checkout/Checkout'))
const ChangePassword = lazy(() => import('@pages/ChangePassword'))


const AppLayout = () => {
    const appRef = useRef(null);
    const isOverflow = usePageIsOverflow();
    const { width } = useWindowSize();
    const isMobile = width < 768;
    const location = useLocation();
    const validPaths = ['/', '/Login', '/forgot-password', '/reset-forgot-password/:token'];
    const className = validPaths.includes(location.pathname) ? '' : 'app';

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className={className} ref={appRef}>
            {isOverflow ? <ScrollProgress /> : null}
            {/* <Sidebar /> */}
            <div className="app_content">
                {/* <Panel /> */}
                <Suspense fallback={<WidgetsLoader />}>
                    <Routes>

                        <Route path="/" element={<Navigate to="/Login" />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassworded />} />
                        <Route path="/reset-forgot-password/:token" element={<ResetPasswordPage />} />

                        <Route path="/jhgv" element={<HomePage />} />

                        <Route path="/Clinic-Dashboardw" element={<ClinicProtectRoute><DashboardB /></ClinicProtectRoute>} />
                        <Route path="/dashboard_c" element={<ClinicProtectRoute><DashboardC /></ClinicProtectRoute>} />
                        <Route path="/Clinic-Dashboard" element={<ClinicProtectRoute><DashboardK /></ClinicProtectRoute>} />
                        <Route path="/dashboard_e" element={<ClinicProtectRoute><DashboardE /></ClinicProtectRoute>} />
                        <Route path="/dashboard_f" element={<ClinicProtectRoute><DashboardF /></ClinicProtectRoute>} />
                        <Route path="/dashboard_g" element={<ClinicProtectRoute><DashboardG /></ClinicProtectRoute>} />
                        <Route path="/dashboard_h" element={<ClinicProtectRoute><DashboardH /></ClinicProtectRoute>} />
                        <Route path="/dashboard_i" element={<ClinicProtectRoute><DashboardI /></ClinicProtectRoute>} />
                        <Route path="/dashboard_j" element={<ClinicProtectRoute><DashboardJ /></ClinicProtectRoute>} />
                        <Route path="/dashboard_k" element={<ClinicProtectRoute><DashboardK /></ClinicProtectRoute>} />
                        <Route path="/doctor_appointments" element={<ClinicProtectRoute><DoctorAppointments /></ClinicProtectRoute>} />
                        <Route path="/patient_appointments" element={<ClinicProtectRoute><PatientAppointments /></ClinicProtectRoute>} />
                        <Route path="/patients" element={<ClinicProtectRoute><Patients /></ClinicProtectRoute>} />
                        <Route path="/tests" element={<ClinicProtectRoute><Tests /></ClinicProtectRoute>} />
                        <Route path="/doctors" element={<ClinicProtectRoute><Doctors /></ClinicProtectRoute>} />
                        <Route path="/staff" element={<ClinicProtectRoute><StaffList /></ClinicProtectRoute>} />
                        <Route path="/doctor_messenger" element={<ClinicProtectRoute><DoctorMessenger /></ClinicProtectRoute>} />
                        <Route path="/patient_messenger" element={<ClinicProtectRoute><PatientMessenger /></ClinicProtectRoute>} />
                        <Route path="/document-Builder" element={<ClinicProtectRoute><DocumentBuilder /></ClinicProtectRoute>} />
                        <Route path="/Create-Template" element={<ClinicProtectRoute><CreateTemplate /></ClinicProtectRoute>} />
                        <Route path="/Edit-Template/:p_id" element={<ClinicProtectRoute><EditTemplate /></ClinicProtectRoute>} />
                        <Route path="/All-Reports" element={<ClinicProtectRoute><AllReports /></ClinicProtectRoute>} />
                        <Route path="/patient_reviews" element={<ClinicProtectRoute><PatientReviews /></ClinicProtectRoute>} />
                        <Route path="/doctor_reviews" element={<ClinicProtectRoute><DoctorsReviews /></ClinicProtectRoute>} />
                        <Route path="/Appointment-Data-List" element={<ClinicProtectRoute><AppointmentDataList /></ClinicProtectRoute>} />
                        <Route path="/Billing-Data-List" element={<ClinicProtectRoute><BillingDataTable /></ClinicProtectRoute>} />
                        <Route path="/Billing-Data-Invoice" element={<ClinicProtectRoute><CreateInvoice /></ClinicProtectRoute>} />
                        <Route path="/finances" element={<ClinicProtectRoute><Finances /></ClinicProtectRoute>} />
                        <Route path="/settings" element={<ClinicProtectRoute><Settings /></ClinicProtectRoute>} />
                        <Route path="/404" element={<ClinicProtectRoute><PageNotFound /></ClinicProtectRoute>} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                        <Route path="/ManageClinic/CreateUser" element={<ClinicProtectRoute><CreateUser /></ClinicProtectRoute>} />
                        <Route path="/ManageClinic/EditUser/:p_id" element={<ClinicProtectRoute><EditUser /></ClinicProtectRoute>} />
                        {/* Login Page Routing */}

                        {/* Shop Online Routing */}
                        <Route path="/patients/dashboard/shop/1/products/:p_id" element={<ClinicProtectRoute><ShopOnline /></ClinicProtectRoute>} />
                        <Route path="/patients/dashboard/shop/1/products/5/view/:p_id" element={<ClinicProtectRoute><SingleProductpage /></ClinicProtectRoute>} />
                        <Route path="/Checkout" element={<ClinicProtectRoute><Checkout /></ClinicProtectRoute>} />
                        <Route path="/settings/ChangePassword" element={<ClinicProtectRoute><ChangePassword /></ClinicProtectRoute>} />





                        <Route path="/Report/ClinicDailyScheduleReport" element={<ClinicProtectRoute><ClininDailyReport /></ClinicProtectRoute>} />
                        <Route path="/Report/CancelAppointmentScheduleReport" element={<ClinicProtectRoute><CancelAppointmentReport /></ClinicProtectRoute>} />
                        <Route path="/Report/ClinicActivityReport" element={<ClinicProtectRoute><ClinicActivityReport /></ClinicProtectRoute>} />
                        <Route path="/Report/OrderSurveyReport" element={<ClinicProtectRoute><OrderSurveyReport /></ClinicProtectRoute>} />
                        <Route path="/Report/PatientStatusReport" element={<ClinicProtectRoute><PatientStatusreport /></ClinicProtectRoute>} />
                        <Route path="/Report/NewPatientReport" element={<ClinicProtectRoute><NewPatientReport /></ClinicProtectRoute>} />
                        <Route path="/Report/PatientEmailReport" element={<ClinicProtectRoute><PatientEmailReport /></ClinicProtectRoute>} />
                        <Route path="/Report/ChartsViewedReport" element={<ClinicProtectRoute><ChartsViewedReport /></ClinicProtectRoute>} />
                        <Route path="/Report/PrescriptionReport" element={<ClinicProtectRoute><PrescriptionReport /></ClinicProtectRoute>} />
                        <Route path="/ManageClinic/Details" element={<ClinicProtectRoute><ManageClinic /></ClinicProtectRoute>} />
                        <Route path="/ManageClinic/Add-Secoundary-location" element={<ClinicProtectRoute><AddSecondaryLoaction /></ClinicProtectRoute>} />
                        <Route path="/ManageClinic/Edit-Secoundary-location/:p_id" element={<ClinicProtectRoute><EditSecondaryLoaction /></ClinicProtectRoute>} />

                        {/* nubcfgsgdzhjxkdx, */}
                        <Route path="/ManageClinic/Add-Appointment-type" element={<ClinicProtectRoute><AddAppointmentType /></ClinicProtectRoute>} />
                        <Route path="/ManageClinic/Edit-Appointment-type/:p_id" element={<ClinicProtectRoute><EditAppointmentType /></ClinicProtectRoute>} />
                        <Route path="/All-patient/Patient-Single-Page/:p_id" element={<ClinicProtectRoute><PatientSinglePage /></ClinicProtectRoute>} />
                        <Route path="/All-patient" element={<ClinicProtectRoute><AllPatient /></ClinicProtectRoute>} />
                        <Route path="/Find-patient" element={<ClinicProtectRoute><FindPatient /></ClinicProtectRoute>} />
                        <Route path="/Add-patient" element={<ClinicProtectRoute><AddPatient /></ClinicProtectRoute>} />
                        <Route path="/Single-Patient-Manage-order/:p_id" element={<ClinicProtectRoute><ManageOrder /></ClinicProtectRoute>} />

                        {/* lkoijuhygtfrdftgyhujikol */}
                        <Route path="/SinglePAteintPersonalDetails" element={<ClinicProtectRoute><PersonalInformation /></ClinicProtectRoute>} />
                        <Route path="/VideoCall" element={<ClinicProtectRoute><VideoChata /></ClinicProtectRoute>} />


                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    )
}

export default AppLayout;