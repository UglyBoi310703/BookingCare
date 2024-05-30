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
import styles from "./DoctorInformationModal.scss"

export default function DoctorInformationModal({ Description, name, img, role }) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    return (
        <>
            <MDBBtn color='info' className="DoctorInfomationModal" onClick={toggleOpen}>
                Thông tin
            </MDBBtn>
            <MDBModal staticBackdrop className="Test" open={basicModal} onClose={() => setBasicModal(false)}>
                <MDBModalDialog size="xl">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Thông tin bác sĩ</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody className='DoctorInformationModal-Body'>
                            <MDBCard className="DoctorItem">
                                <div className="DoctorImg">
                                    <MDBCardImage src={img} position="top" alt="..." />
                                </div>
                                <MDBCardBody className="Doctor-Item-Cotent">
                                    <MDBCardTitle className="Doctor-Item-Cotent-Name">{name}</MDBCardTitle>
                                    <div className="Doctor-Item-Cotent-information">
                                        <MDBCardText>{role}</MDBCardText>
                                    </div>
                                    <MDBBtn href="#">Đặt lịch khám</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                            <div>{Description}</div>
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn>Đặt lịch khám</MDBBtn>
                            <MDBBtn color="info" onClick={toggleOpen}>
                                Đóng
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
