import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function FacilityItem({ imgSrc, name }) {
    return (
        <MDBCard alignment="center">
            <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-zoom hover-overlay">
                <MDBCardImage className="img-thumbnail img-fluid" src={imgSrc} position="top" alt="..." />
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{name}</MDBCardTitle>
                <MDBBtn href="#">Đặt lịch khám</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}
