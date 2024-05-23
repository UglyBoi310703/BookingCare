import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Services from './pages/Home/Services';
import Intro from './components/Intro/Intro';
import FacilityPage from './pages/Home/FacilityPage';
import DoctorsPage from './pages/Home/DoctorPage';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Doctors" element={<DoctorsPage/>} />
                <Route path="/Facility" element={<FacilityPage />} />
            </Routes>
        </>
    );
}

export default App;
