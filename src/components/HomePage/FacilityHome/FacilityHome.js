import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import FacilitiesData from '../../FacilityPage/FacilityData';
import FacilityItem from '../../FacilityPage/FacilityItem/FacilityItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './FacilityHome.scss';

export default function FacilityHome() {
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
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="Facilities">
            <div className="Facilities-title">
                <h2>
                    Cơ sở vật chất tại <span>MEDLATEC</span>
                </h2>
            </div>
            <section className="FacilitiesContent">
                <Slider {...settings}>
                    {FacilitiesData.map((item) => (
                        <FacilityItem {...settings} img={item.img} name={item.name} />
                    ))}
                </Slider>
            </section>
        </div>
    );
}
