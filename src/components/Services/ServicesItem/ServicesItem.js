import * as React from 'react';

import {
    MDBCard,
    MDBBtn,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
} from 'mdb-react-ui-kit';
import styles from './ServicesItem.scss';

import TestComponent from '../../TestComponent/TestComponent';
import ServicesModal from '~/components/TestComponent/ServicesModal';
import Services from '~/pages/Home/Services';
export default function ServicesItem({ name, img, price, gender, age, location, Description }) {
    return (
        <MDBCard className="Services-Item">
            <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
            </MDBRipple>
            <MDBCardBody className="Services-Item-Cotent">
                <MDBBtn color="danger" className="Services-Item-Cotent-price" href="#">
                    {price}
                </MDBBtn>
                <ServicesModal
                    img={img}
                    price={price}
                    name={name}
                    age={age}
                    gender={gender}
                    location={location}
                    Description={Description}
                />
                <MDBCardTitle className="Services-Item-Cotent-Name">{name}</MDBCardTitle>
                <div className="Services-Item-Cotent-information">
                    <div className="Services-Gender">{gender}</div>
                    <div className="Services-Age">Độ tuổi: {age}</div>
                    <div className="Services-Location">{location}</div>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}
