import React, { useEffect } from 'react';
import doctorData from '~/assets/data/DoctorData';
import Doctor from './Doctor';
import AppointmentForm from './AppointmentForm';
import './index.css';
function Doctors() {
    const doctorList = doctorData;
    return (
        <>
            <div className="filter-container">
                <div className="filter-item">
                    <label htmlFor="chon-co-so">Chọn cơ sở</label>
                    <select id="chon-co-so" name="chon-co-so">
                        <option value="">Chọn cơ sở</option>
                        <option value="co-so-1">Cơ sở 1</option>
                        <option value="co-so-2">Cơ sở 2</option>
                        <option value="co-so-3">Cơ sở 3</option>
                    </select>
                </div>
                <div className="filter-item">
                    <label htmlFor="chon-chuyen-khoa">Chọn chuyên khoa</label>
                    <select id="chon-chuyen-khoa" name="chon-chuyen-khoa">
                        <option value="">Chọn chuyên khoa</option>
                        <option value="chuyen-khoa-1">Chuyên khoa 1</option>
                        <option value="chuyen-khoa-2">Chuyên khoa 2</option>
                        <option value="chuyen-khoa-3">Chuyên khoa 3</option>
                    </select>
                </div>
                <div className="filter-item">
                    <label htmlFor="chon-hoc-ham">Chọn học hàm</label>
                    <select id="chon-hoc-ham" name="chon-hoc-ham">
                        <option value="">Chọn học hàm</option>
                        <option value="hoc-ham-1">Học hàm 1</option>
                        <option value="hoc-ham-2">Học hàm 2</option>
                        <option value="hoc-ham-3">Học hàm 3</option>
                    </select>
                </div>

                <button className="search-button">Tìm kiếm bác sĩ</button>
            </div>
            <div className="py-2 d-flex flex-column justify-content-center">
                <div className="row">
                    {doctorList?.map((doctor) => (
                        <Doctor key={doctor.id} doctor={doctor} />
                    ))}
                </div>
                )
            </div>
        </>
    );
}

export default Doctors;
