import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { CiHospital1 } from 'react-icons/ci';
import { MdMedicalServices } from 'react-icons/md';
function Menu() {
    return (
        <div className="">
            <h5>Menu</h5>
            <div className="d-flex flex-column">
                <NavLink to={'/Dashboard/Doctor'} className="menu d-flex align-items-center">
                    <FaUserDoctor size={20} className="me-2" /> Doctor
                </NavLink>
                <NavLink to={'/Dashboard/Facilities'} className="menu d-flex align-items-center">
                    <CiHospital1 size={20} className="me-2" /> Facility
                </NavLink>
                <NavLink to={'/Dashboard/Service'} className="menu d-flex align-items-center">
                    <MdMedicalServices size={20} className="me-2" /> Service
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;
