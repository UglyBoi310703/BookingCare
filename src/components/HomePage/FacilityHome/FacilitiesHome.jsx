import React, { useRef, useState, useEffect } from 'react';
import { SmoothHorizontalScrolling } from '../../../utils';
import FacilitiesData from '~/components/FacilityPage/FacilityData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FacilityItem from '~/components/FacilityPage/FacilityItem/FacilityItem';
import { MDBIcon } from 'mdb-react-ui-kit';
import styles from "./FacilityHome.scss";
function FacilitiesHome() {
    const sliderRef = useRef();
    const itemWidth = 475; // Chiều rộng của mỗi phần tử
    const itemsToShow = 3;
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            // Cuộn đến phần giữa của danh sách để hỗ trợ cuộn vô hạn
            sliderRef.current.scrollLeft = FacilitiesData.length * itemWidth;
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
            sliderRef.current.scrollLeft = FacilitiesData.length * itemWidth;
        } else if (sliderRef.current.scrollLeft >= (FacilitiesData.length * 2 - itemsToShow) * itemWidth) {
            sliderRef.current.scrollLeft = FacilitiesData.length * itemWidth - itemWidth * itemsToShow;
        }
    };

    const handleScrollRight = () => {
        SmoothHorizontalScrolling(sliderRef.current, 250, itemWidth * itemsToShow, sliderRef.current.scrollLeft, () => {
            // Xử lý cuộn vô hạn sau khi cuộn
            if (sliderRef.current.scrollLeft >= (FacilitiesData.length * 2 - itemsToShow) * itemWidth) {
                sliderRef.current.scrollLeft = FacilitiesData.length * itemWidth - itemWidth * itemsToShow;
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
                    sliderRef.current.scrollLeft = FacilitiesData.length * itemWidth;
                }
            },
        );
    };

    return FacilitiesData.length > 0 ? (
        <div className="Facilities">
            <div className="Facilities-title">
                <h2>
                    Cơ sở vật chất tại <span>MEDLATEC</span>
                </h2>
            </div>
            <div className="FacilityHome ContentsSection bg-white">
                <div className=" btnLeft" onClick={handleScrollLeft}>
                    <FaChevronLeft />
                </div>
                <div
                    className="FacilitySlider"
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
                    {FacilitiesData.concat(FacilitiesData).map((item, index) => (
                        <div className="DoctorSlider-Item" key={index} style={{ minWidth: `${itemWidth}px` }}>
                            <FacilityItem
                                img={item.img}
                                name={item.name}
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

export default FacilitiesHome;
