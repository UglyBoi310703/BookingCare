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
} from 'mdb-react-ui-kit';
import OrderMedicalSpecialtiesForm from '~/components/Form/Order/OrderMedicalSpecialtiesForm';
export default function OrderMedicalSpecialtiesModal({color,medicalSpecial}) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    function offModal(){
        setBasicModal(!basicModal)
        
    }
    return (
        <>
            <MDBBtn color={color} className='' onClick={toggleOpen}>Đặt lịch khám</MDBBtn>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>ĐẶT LỊCH KHÁM CHUYÊN KHOA</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <OrderMedicalSpecialtiesForm offModal={offModal} medicalSpecial={medicalSpecial} />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={toggleOpen}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
