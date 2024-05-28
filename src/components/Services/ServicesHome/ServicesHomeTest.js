import React, { useRef, useState, useEffect } from 'react';
import { SmoothHorizontalScrolling } from '../../../utils';
import ServicesData from '../ServicesData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ServicesItem from '../ServicesItem/ServicesItem';
import styles from "./ServicesHomeTest.scss"
import { MDBIcon } from 'mdb-react-ui-kit';
function ServicesHomeTest() {
    const sliderRef = useRef();
    const itemWidth = 480; // Chiều rộng của mỗi phần tử
    const itemsToShow = 3;
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (sliderRef.current) {
            // Cuộn đến phần giữa của danh sách để hỗ trợ cuộn vô hạn
            sliderRef.current.scrollLeft = ServicesData.length * itemWidth;
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
            sliderRef.current.scrollLeft = ServicesData.length * itemWidth;
        } else if (sliderRef.current.scrollLeft >= (ServicesData.length * 2 - itemsToShow) * itemWidth) {
            sliderRef.current.scrollLeft = ServicesData.length * itemWidth - itemWidth * itemsToShow;
        }
    };

    const handleScrollRight = () => {
        SmoothHorizontalScrolling(
            sliderRef.current,
            250,
            itemWidth * itemsToShow,
            sliderRef.current.scrollLeft,
            () => {
                // Xử lý cuộn vô hạn sau khi cuộn
                if (sliderRef.current.scrollLeft >= (ServicesData.length * 2 - itemsToShow) * itemWidth) {
                    sliderRef.current.scrollLeft = ServicesData.length * itemWidth - itemWidth * itemsToShow;
                }
            }
        );
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
                    sliderRef.current.scrollLeft = ServicesData.length * itemWidth;
                }
            }
        );
    };

    return ServicesData.length > 0 ? (
        <div className='ServicesHomeComponent'>
         <div className="Services-title">
                <h2>
                    Các gói khám sức khỏe tại <span>MEDLATEC</span>
                </h2>
            </div>
            <div className="ServicesHome ContentsSection bg-white">
            <div className=" btnLeft" onClick={handleScrollLeft}>
                <FaChevronLeft />
            </div>
            <div
                className="ServicesSlider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                style={{ display: 'flex', overflow: 'hidden', width: `${itemWidth * itemsToShow}px`, cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {ServicesData.concat(ServicesData).map((item, index) => (
                    <div className='ServicesSlider-Item' key={index} style={{ minWidth: `${itemWidth}px` }}>
                        <ServicesItem
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            location={item.location}
                            gender={item.gender}
                            age={item.age}
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

export default ServicesHomeTest