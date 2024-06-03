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
import OrderServicesModal from '~/components/Modal/OrderServices/OrderServices';
import styles from './ServicesItem.scss';

import TestComponent from '../../Modal/TestComponent';
import ServicesModal from '~/components/Modal/ServicesInformation/ServicesModal';
import Services from '~/pages/Home/Services';
export default function ServicesItem({ name, img, price, gender, age, location, Description }) {
    return (
        <MDBCard className="Services-Item">
            <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
            </MDBRipple>
            <MDBCardBody className="Services-Item-Cotent">
           <div  className="Services-Item-Cotent-price" > <OrderServicesModal color="danger" title={price}/></div>
               
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
