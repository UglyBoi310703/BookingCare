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
import OrderDoctorForm from '../../Form/Order/OrderDoctor';
export default function OrderDoctorModal({Doctorname,Role}) {
    const [basicModal, setBasicModal] = useState(false);
    const [DoctorName,setDoctorName] = useState("")
    const [StateRole,setStateRole] = useState("")
    const toggleOpen = () =>{
        setBasicModal(!basicModal)
        setStateRole(Role)
        setDoctorName(Doctorname)
    };

    return (
        <>
            <MDBBtn className='OrderDoctor'  onClick={toggleOpen}>Đặt lịch khám</MDBBtn>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex="-1">
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>ĐẶT LỊCH KHÁM CÙNG CHUYÊN GIA</MDBModalTitle>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <OrderDoctorForm DoctorName={DoctorName} Role={StateRole}/>
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
