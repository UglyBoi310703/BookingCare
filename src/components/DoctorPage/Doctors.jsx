import React, { useState } from 'react';
import doctorData from '~/assets/data/DoctorData';
import Doctor from './Doctor';
import './index.css';

function Doctors() {
    const doctorList = doctorData;
    const [academicRank, setAcademicRank] = useState('');
    const [degree, setDegree] = useState('');
    const [role, setRole] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctorList);

    function handleSearchDoctor() {
        let remainDoctor = [...doctorList];
        console.log(academicRank, degree, role);
        if (role) {
            remainDoctor = remainDoctor.filter((p) => p.role.toLowerCase() === role.toLowerCase());
        }
        console.log(remainDoctor);
        if (degree) {
            remainDoctor = remainDoctor.filter((p) => p.degree.toLowerCase() === degree.toLowerCase());
        }
        console.log(remainDoctor);
        if (academicRank) {
            remainDoctor = remainDoctor.filter((p) => p.academic_rank.toLowerCase() === academicRank.toLowerCase());
        }

        setFilteredDoctors(remainDoctor);
    }

    return (
        <>
            <div className="filter-container">
                <div className="filter-item">
                    <label htmlFor="chon-hoc-ham">Chọn học hàm</label>
                    <select id="chon-hoc-ham" name="chon-hoc-ham" onChange={(e) => setDegree(e.target.value)}>
                        <option value="">Chọn học hàm</option>
                        <option value="Tiến sĩ">Tiến sĩ</option>
                        <option value="Thạc sĩ">Thạc sĩ</option>
                        <option value="Bác sĩ nội trú">Bác sĩ nội trú</option>
                    </select>
                </div>
                <div className="filter-item">
                    <label htmlFor="chon-chuyen-khoa">Chọn chuyên khoa</label>
                    <select id="chon-chuyen-khoa" name="chon-chuyen-khoa" onChange={(e) => setRole(e.target.value)}>
                        <option value="">Chọn chuyên khoa</option>
                        <option value="Chuyên khoa - Huyết học">Huyết học</option>
                        <option value="Chuyên khoa - Răng hàm mặt">Răng hàm mặt</option>
                        <option value="Chuyên khoa - Ung bướu">Ung bướu</option>
                        <option value="Chuyên khoa - Xét nghiệm">Xét nghiệm</option>
                    </select>
                </div>
                <div className="filter-item">
                    <label htmlFor="chon-role">Chọn vai trò</label>
                    <select id="chon-role" name="chon-role" onChange={(e) => setAcademicRank(e.target.value)}>
                        <option value="">Chọn vai trò</option>
                        <option value="Giáo sư">Giáo sư</option>
                        <option value="Phó giáo sư">Phó giáo sư</option>
                    </select>
                </div>
                <button className="search-button" onClick={handleSearchDoctor}>
                    Tìm kiếm bác sĩ
                </button>
            </div>
            <div className="py-2 d-flex flex-column justify-content-center">
                <div className="row">
                    {filteredDoctors.map((doctor) => (
                        <Doctor key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Doctors;
