import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Services from './pages/Home/Services';
import Intro from './components/Intro/Intro';
import Facility from './pages/Home/Facility';
import Doctors from './pages/Home/DoctorPage';

import ScrollTest from './components/Modal/UserComponent';
import Test from './components/Modal/ServicesInformation/ServicesModal';
import ModalTest from './components/Modal/UserComponent';
import Register from './components/Form/Register/Register';
import UserModal from './components/Modal/UserModal';
import DoctorItem from './components/DoctorPage/DoctorItem/DoctorItem';
import MainApp from './components/ServicesPage/TestFilter';
import DoctorList from './components/Dashboard/DoctorManagement/DoctorList';
import Menu from './components/Dashboard/Menu/Menu';
import MedicalSpecialtiesPage from './components/SpecialtiesPage/MedicalSpecialtiesPage';
import DoctorManagementPage from './pages/Dashboard/DoctorManagement';
import ServiceManagementPage from './pages/Dashboard/ServiceManagementPage';
import FacilitiesManagementPage from './pages/Dashboard/FacilityManagement';
import HeaderDefault from './components/Header/HeaderDefault';
import SpecialistManagement from './pages/Dashboard/SpecialistManagement';
import MedicalSpecial from './pages/Home/MedicalSpecialties';
import TestComponent from './components/Modal/TestComponent';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/Facility" element={<Facility />} />
                <Route path="/Dashboard" element={<DoctorManagementPage />} />
                <Route path="/Dashboard/Doctor" element={<DoctorManagementPage />} />
                <Route path="/Dashboard/Facilities" element={<FacilitiesManagementPage />} />
                <Route path="/Dashboard/Service" element={<ServiceManagementPage />} />
                <Route path="/Dashboard/Specialist" element={<SpecialistManagement />} />
                <Route path="/Test" element={<TestComponent/>} />
                <Route path="/MedicalSpecialties" element={<MedicalSpecial />} />
            </Routes>
        </>
    );
}

export default App;
