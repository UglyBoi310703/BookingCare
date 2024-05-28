import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCard,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardSubTitle,
    MDBCardGroup,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import styles from './ServicesModal.scss';
export default function ServicesModal({ DescriptionTitle, Description, name, img, price, gender, age, location }) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn  className='ServicesModal' onClick={toggleOpen}>Chi Tiết</MDBBtn>
            <MDBModal staticBackdrop  className="Test" open={basicModal} onClose={() => setBasicModal(false)} >
                <MDBModalDialog size='xl'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thông tin chi tiết gói khám</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBCard className="ServicesModal-Item">
                                <MDBRipple rippleTag="div" className="">
                                    <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
                                </MDBRipple>
                                <MDBCardBody className="Services-Item-Cotent ServicesModal-Item-Cotent">
                                    <MDBBtn className="Services-Item-Cotent-price  ServicesModal-Item-Cotent-price " href="#">
                                        {price}
                                    </MDBBtn>
                                    <MDBCardTitle className="Services-Item-Cotent-Name  ServicesModal-Item-Cotent-name ">{name}</MDBCardTitle>
                                    <div className="Services-Item-Cotent-information  ServicesModal-Item-Cotent-information">
                                        <div className="Services-Gender">{gender}</div>
                                        <div className="Services-Age">{age}</div>
                                        <div className="Services-Location">{location}</div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            <div className='ServicesModal-Description'>
                                <MDBCard style={{boxShadow: "none"}}>
                                    <MDBCardBody>
                                        <MDBCardSubTitle>{DescriptionTitle}</MDBCardSubTitle>
                                        <MDBCardText>{Description}</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div class="package-details-price">
            <h2>Danh sách các xét nghiệm</h2>
            <div class="service-price-content">
                <div class="table-responsive">
                    
                        
                </div>

            </div>
        </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                        <MDBBtn >
                                Đặt lịch khám
                            </MDBBtn>
                            <MDBBtn color="info" onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                           
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
