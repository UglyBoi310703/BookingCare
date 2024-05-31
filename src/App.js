import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Services from './pages/Home/Services';
import Intro from './components/Intro/Intro';
import Facility from './pages/Home/Facility';
import Doctors from './pages/Home/DoctorPage';
import TestComponent from './components/TestComponent/TestComponent';
import ScrollTest from './components/TestComponent/UserComponent';
import Test from './components/TestComponent/ServicesModal';
import ModalTest from './components/TestComponent/UserComponent';
import Register from './components/Form/Register/Register';
import UserModal from './components/TestComponent/UserModal';
import DoctorManagementPage from './pages/Dashboard/DoctorManagement';
import ServiceManagementPage from './pages/Dashboard/ServiceManagementPage';
import FacilitiesManagementPage from './pages/Dashboard/FacilityManagement';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/Facility" element={<Facility />} />
                <Route path="/Test" element={<UserModal />} />
                <Route path="/Dashboard" element={<DoctorManagementPage />} />
                <Route path="/Dashboard/Doctor" element={<DoctorManagementPage />} />
                <Route path="/Dashboard/Facilities" element={<FacilitiesManagementPage />} />
                <Route path="/Dashboard/Service" element={<ServiceManagementPage />} />
            </Routes>
        </>
    );
}

export default App;
