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

// pages
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
    const className = location.pathname === '/' || location.pathname === '/Login' ? '' : 'app';

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

                        <Route path="/jhgv" element={<HomePage />} />

                        <Route path="/Clinic-Dashboardw" element={<DashboardB />} />
                        <Route path="/dashboard_c" element={<DashboardC />} />
                        <Route path="/Clinic-Dashboard" element={<DashboardK />} />
                        <Route path="/dashboard_e" element={<DashboardE />} />
                        <Route path="/dashboard_f" element={<DashboardF />} />
                        <Route path="/dashboard_g" element={<DashboardG />} />
                        <Route path="/dashboard_h" element={<DashboardH />} />
                        <Route path="/dashboard_i" element={<DashboardI />} />
                        <Route path="/dashboard_j" element={<DashboardJ />} />
                        <Route path="/dashboard_k" element={<DashboardK />} />
                        <Route path="/doctor_appointments" element={<DoctorAppointments />} />
                        <Route path="/patient_appointments" element={<PatientAppointments />} />
                        <Route path="/patients" element={<Patients />} />
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/doctors" element={<Doctors />} />
                        <Route path="/staff" element={<StaffList />} />
                        <Route path="/doctor_messenger" element={<DoctorMessenger />} />
                        <Route path="/patient_messenger" element={<PatientMessenger />} />
                        <Route path="/document-Builder" element={<DocumentBuilder />} />
                        <Route path="/Create-Template" element={<CreateTemplate />} />
                        <Route path="/Edit-Template/:p_id" element={<EditTemplate />} />
                        <Route path="/All-Reports" element={<AllReports />} />
                        <Route path="/patient_reviews" element={<PatientReviews />} />
                        <Route path="/doctor_reviews" element={<DoctorsReviews />} />
                        <Route path="/Appointment-Data-List" element={<AppointmentDataList />} />
                        <Route path="/Billing-Data-List" element={<BillingDataTable />} />
                        <Route path="/Billing-Data-Invoice" element={<CreateInvoice />} />
                        <Route path="/finances" element={<Finances />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/404" element={<PageNotFound />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                        <Route path="/ManageClinic/CreateUser" element={<CreateUser />} />
                        <Route path="/ManageClinic/EditUser/:p_id" element={<EditUser />} />
                        {/* Login Page Routing */}

                        {/* Shop Online Routing */}
                        <Route path="/patients/dashboard/shop/1/products/:p_id" element={<ShopOnline />} />
                        <Route path="/patients/dashboard/shop/1/products/5/view/:p_id" element={<SingleProductpage />} />
                        <Route path="/Checkout" element={<Checkout />} />
                        <Route path="/settings/ChangePassword" element={<ChangePassword />} />





                        <Route path="/Report/ClinicDailyScheduleReport" element={<ClininDailyReport />} />
                        <Route path="/Report/CancelAppointmentScheduleReport" element={<CancelAppointmentReport />} />
                        <Route path="/Report/ClinicActivityReport" element={<ClinicActivityReport />} />
                        <Route path="/Report/OrderSurveyReport" element={<OrderSurveyReport />} />
                        <Route path="/Report/PatientStatusReport" element={<PatientStatusreport />} />
                        <Route path="/Report/NewPatientReport" element={<NewPatientReport />} />
                        <Route path="/Report/PatientEmailReport" element={<PatientEmailReport />} />
                        <Route path="/Report/ChartsViewedReport" element={<ChartsViewedReport />} />
                        <Route path="/Report/PrescriptionReport" element={<PrescriptionReport />} />
                        <Route path="/ManageClinic/Details" element={<ManageClinic />} />
                        <Route path="/ManageClinic/Add-Secoundary-location" element={<AddSecondaryLoaction />} />
                        <Route path="/ManageClinic/Edit-Secoundary-location/:p_id" element={<EditSecondaryLoaction />} />

                        {/* nubcfgsgdzhjxkdx, */}
                        <Route path="/ManageClinic/Add-Appointment-type" element={<AddAppointmentType />} />
                        <Route path="/ManageClinic/Edit-Appointment-type/:p_id" element={<EditAppointmentType />} />
                        <Route path="/All-patient/Patient-Single-Page/:p_id" element={<PatientSinglePage />} />
                        <Route path="/All-patient" element={<AllPatient />} />
                        <Route path="/Find-patient" element={<FindPatient />} />
                        <Route path="/Add-patient" element={<AddPatient />} />
                        <Route path="/Single-Patient-Manage-order/:p_id" element={<ManageOrder />} />

                        {/* lkoijuhygtfrdftgyhujikol */}
                        <Route path="/SinglePAteintPersonalDetails" element={<PersonalInformation />} />
                        <Route path="/VideoCall" element={<VideoChata />} />


                    </Routes>
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    )
}

export default AppLayout;