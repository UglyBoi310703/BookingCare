import React, { useEffect, useRef } from 'react';
import { SmoothHorizontalScrolling } from '../../../utils';
import doctorData from '~/assets/data/DoctorData';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import styles from "./DoctorsHome.scss"
function Doctors() {
    const sliderRef = useRef();
    const movieRef = useRef();

    const handleScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };
    const handleShowDetail = (movie) => {};

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(
                sliderRef.current,
                250,
                -movieRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft,
            );
        }
    };

    return doctorData.length > 0 ? (
        <div className="ContentsSection bg-white">
            <h1 className="heading">Đội ngũ y bác sĩ</h1>
            <div
                className="MoviesSlider"
                ref={sliderRef}
                style={{ gridTemplateColumns: `repeat(${doctorData.length}, 460px)` }}
            >
                {doctorData.map((doctor, index) => (
                    <div
                        key={index}
                        className="movieItem"
                        style={{ padding: '50px' }}
                        ref={movieRef}
                        onClick={() => handleShowDetail()}
                    >
                        <span className="circle"></span>
                        <img src={`${doctor.img}`} alt="" />
                        <p className="doctor-name">{doctor.name}</p>
                    </div>
                ))}
            </div>
            <div className="btnLeft">
                <FaChevronLeft onClick={handleScrollLeft} />
            </div>
            <div className="btnRight">
                <FaChevronRight onClick={handleScrollRight} />
            </div>
        </div>
    ) : (
        <div className="ContentsSection bg-black text-white fs-18"></div>
    );
}

export default Doctors;
