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
    MDBCardFooter,
} from 'mdb-react-ui-kit';


export default function MedicalSpecialtiesPageItem({ name, img, content }) {
    return (
        <MDBCard className="MedicalSpecialtiesPageItem">
            <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
            </MDBRipple>
            <MDBCardBody className="Services-Item-Cotent">
               <h4>
                {name}
               </h4>
                <MDBCardText className="Services-Item-Cotent-Name">{content}</MDBCardText>
                
            </MDBCardBody>
            <MDBCardFooter>
                <MDBBtn>Đặt lịch khám</MDBBtn>
            </MDBCardFooter>
        </MDBCard>
    );
}
