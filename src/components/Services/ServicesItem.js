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


export default function ServicesItem({ name, img, price, gender, age, location }) {
    return (
            <MDBCard className="Services-Item">
                <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                    <MDBCardImage className='img-fluid' src={img} position="top" alt="..." />
                    <div className="mask" style={{ backgroundColor: 'rgba(28, 138, 214, 0.7)' }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <a className="text-white mb-0">Xem chi tiết</a>
                        </div>
                    </div>
                </MDBRipple>
                <MDBCardBody className="Services-Item-Cotent">
                    <MDBBtn className="Services-Item-Cotent-price" href="#">
                        {price}
                    </MDBBtn>
                    <MDBCardTitle  className="Services-Item-Cotent-Name">{name}</MDBCardTitle>
                    <div className="Services-Item-Cotent-information">
                        <div className="Services-Gender">{gender}</div>
                        <div className="Services-Age">{age}</div>
                        <div className="Services-Location">{location}</div>
                       
                    </div>
                </MDBCardBody>
            </MDBCard>
    );
}
