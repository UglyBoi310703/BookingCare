import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export default function MedicalSpecialtiesItem({ srcImgMain, srcImgHover, title }) {
    return (
        <MDBCard className="col-5">
            <MDBRipple rippleTag="div" className="bg-image">
                <MDBCardImage className="imgMain" src={srcImgMain} fluid alt="..." />
                <MDBCardImage className="imgHover" src={srcImgHover} fluid alt="..." />
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCardBody>
        </MDBCard>

        // <MDBCard className="col-5">
        //     <MDBCardImage className="imgMain" src={srcImgMain} fluid alt="..." />
        //     <MDBCardImage className="imgHover" src={srcImgHover} fluid alt="..." />
        //     <MDBCardBody>
        //         <MDBCardTitle>{title}</MDBCardTitle>
        //     </MDBCardBody>
        // </MDBCard>
    );
}
