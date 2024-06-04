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
import OrderServicesForm from '~/components/Form/Order/OrderServicesForm';
export default function OrderServicesModal({title,color,Name,Price}) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    function offModal(){
        setBasicModal(!basicModal)
        
    }
    return (
        <>
            <MDBBtn color={color} className='OrderDoctor' onClick={toggleOpen}>{title}</MDBBtn>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>ĐẶT LỊCH VỚI GÓI KHÁM SỨC KHỎE</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <OrderServicesForm offModal={offModal} Name={Name} Price={Price} />
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
