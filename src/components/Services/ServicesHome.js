import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ServicesHome.scss';
import ServicesData from './ServicesData';
import ServicesItem from './ServicesItem';

export default function ServicesHome() {
    const settings = {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="ServicesHome">
            <div className="Services-title">
                <h2>
                    Các gói khám sức khỏe tại <span>MEDLATEC</span>
                </h2>
            </div>
            <section className="ServicesContent">
                <Slider {...settings}>
                    {ServicesData.map((item) => (
                        <ServicesItem
                            {...settings}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            location={item.location}
                            gender={item.gender}
                            age={item.age}
                        />
                    ))}
                </Slider>
            </section>
        </div>
    );
}
