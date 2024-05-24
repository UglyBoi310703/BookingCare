import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import Services from './pages/Home/Services';
import Intro from './components/Intro/Intro';
import Facility from './pages/Home/Facility';
import Doctors from './pages/Home/DoctorPage';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Doctors" element={<Doctors/>} />
                <Route path="/Facility" element={<Facility/>} />
            </Routes>
        </>
    );
}

export default App;
