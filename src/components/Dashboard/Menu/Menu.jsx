import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserDoctor } from 'react-icons/fa6';
import { CiHospital1 } from 'react-icons/ci';
import { MdMedicalServices } from 'react-icons/md';
import { GiHospitalCross } from 'react-icons/gi';
function Menu() {
    return (
        <div className="">
            <h5>Menu</h5>
            <div className="d-flex flex-column">
                <NavLink
                    to={'/Dashboard/Doctor'}
                    className={({ isActive }) => `menu d-flex align-items-center ${isActive ? 'active' : ''}`}
                >
                    <FaUserDoctor size={20} className="me-2" /> Doctor
                </NavLink>
                <NavLink
                    to={'/Dashboard/Facilities'}
                    className={({ isActive }) => `menu d-flex align-items-center ${isActive ? 'active' : ''}`}
                >
                    <CiHospital1 size={20} className="me-2" /> Facility
                </NavLink>
                <NavLink
                    to={'/Dashboard/Service'}
                    className={({ isActive }) => `menu d-flex align-items-center ${isActive ? 'active' : ''}`}
                >
                    <MdMedicalServices size={20} className="me-2" /> Service
                </NavLink>
                <NavLink
                    to={'/Dashboard/specialist'}
                    className={({ isActive }) => `menu d-flex align-items-center ${isActive ? 'active' : ''}`}
                >
                    <GiHospitalCross size={20} className="me-2" /> Specialist
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
