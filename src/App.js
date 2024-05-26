import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Services from './pages/Home/Services';
import Intro from './components/Intro/Intro';
import Facility from './pages/Home/Facility';
import Doctors from './pages/Home/DoctorPage';
import TestComponent from './components/TestComponent/TestComponent';
import ScrollTest from './components/TestComponent/ModalTest';
import Test from './components/TestComponent/ServicesModal';
import ModalTest from './components/TestComponent/ModalTest';
import Register from './components/Form/Register/Register';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/Facility" element={<Facility />} />
                <Route path="/Test" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
