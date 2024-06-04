import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBCardFooter } from 'mdb-react-ui-kit';
import OrderMedicalSpecialtiesModal from '~/components/Modal/OrderMedicalSpecialties/OrderMedicalSpecialtiesModal';

export default function MedicalSpecialtiesItem({ srcImgMain, srcImgHover, title }) {
    return (
        <MDBCard className="">
            <MDBRipple rippleTag="div" className="bg-image">
                <MDBCardImage className="imgMain" src={srcImgMain} fluid alt="..." />
                <MDBCardImage className="imgHover" src={srcImgHover} fluid alt="..." />
                
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
            </MDBCardBody>
            <MDBCardFooter><OrderMedicalSpecialtiesModal color="secondary" medicalSpecial={title}/></MDBCardFooter>
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
