import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import styles from "./FacilityItem.scss"
import OrderDoctorModal from '~/components/Modal/OrderDoctor/OrderDoctorModal';
export default function FacilityItem({ img, name }) {
    return (
        <MDBCard className='Facilities-Item' alignment="center">
            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-zoom hover-overlay">
                <MDBCardImage className="" src={img} position="top" alt="..." />
            </MDBRipple>
            <MDBCardBody className='Facilities-Item-Body'>
                <MDBCardTitle>{name}</MDBCardTitle>
              
            </MDBCardBody>
        </MDBCard>
    );
}
