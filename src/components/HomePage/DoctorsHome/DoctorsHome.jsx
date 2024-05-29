import React, { useRef, useState, useEffect } from 'react';
import { SmoothHorizontalScrolling } from '../../../utils';
import doctorData from '~/assets/data/DoctorData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DoctorItem from '~/components/DoctorPage/DoctorItem/DoctorItem';
import { MDBIcon } from 'mdb-react-ui-kit';
import styles from "./DoctorsHome.scss"
function DoctorHome() {
    const sliderRef = useRef();
    const itemWidth = 480; // Chiều rộng của mỗi phần tử
    const itemsToShow = 3;
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            // Cuộn đến phần giữa của danh sách để hỗ trợ cuộn vô hạn
            sliderRef.current.scrollLeft = doctorData.length * itemWidth;
        }
    }, [itemWidth]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Tốc độ kéo
        sliderRef.current.scrollLeft = scrollLeft - walk;

        // Xử lý cuộn vô hạn
        if (sliderRef.current.scrollLeft <= 0) {
            sliderRef.current.scrollLeft = doctorData.length * itemWidth;
        } else if (sliderRef.current.scrollLeft >= (doctorData.length * 2 - itemsToShow) * itemWidth) {
            sliderRef.current.scrollLeft = doctorData.length * itemWidth - itemWidth * itemsToShow;
        }
    };

    const handleScrollRight = () => {
        SmoothHorizontalScrolling(sliderRef.current, 250, itemWidth * itemsToShow, sliderRef.current.scrollLeft, () => {
            // Xử lý cuộn vô hạn sau khi cuộn
            if (sliderRef.current.scrollLeft >= (doctorData.length * 2 - itemsToShow) * itemWidth) {
                sliderRef.current.scrollLeft = doctorData.length * itemWidth - itemWidth * itemsToShow;
            }
        });
    };

    const handleScrollLeft = () => {
        SmoothHorizontalScrolling(
            sliderRef.current,
            250,
            -itemWidth * itemsToShow,
            sliderRef.current.scrollLeft,
            () => {
                // Xử lý cuộn vô hạn sau khi cuộn
                if (sliderRef.current.scrollLeft <= 0) {
                    sliderRef.current.scrollLeft = doctorData.length * itemWidth;
                }
            },
        );
    };

    return doctorData.length > 0 ? (
        <div className="DoctorHomeComponent">
            <div className="Services-title">
                <h2>
                    Đội ngũ y bác sĩ <span>MEDLATEC</span>
                </h2>
            </div>
            <div className="DoctorHome ContentsSection bg-white">
                <div className=" btnLeft" onClick={handleScrollLeft}>
                    <FaChevronLeft />
                </div>
                <div
                    className="DoctorSlider"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    style={{
                        display: 'flex',
                        overflow: 'hidden',
                        width: `${itemWidth * itemsToShow}px`,
                        cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                >
                    {doctorData.concat(doctorData).map((item, index) => (
                        <div className="DoctorSlider-Item" key={index} style={{ minWidth: `${itemWidth}px` }}>
                            <DoctorItem
                                img={item.img}
                                name={item.name}
                                rate={item.rate}
                                role={item.role}
                                Description={item.Description()}
                            />
                        </div>
                    ))}
                </div>
                <div className=" btnRight" onClick={handleScrollRight}>
                    <FaChevronRight />
                </div>
            </div>
        </div>
    ) : (
        <div className="ContentsSection bg-black text-white fs-18">No data available</div>
    );
}

export default DoctorHome;
