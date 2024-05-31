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
import RegisterForm from '~/components/Form/Register/Register';
import Test from '~/components/Modal/ServicesInformation/ServicesModal';
export default function RegisterModal() {
    const [staticModal, setStaticModal] = useState(false);

    const toggleOpen = () => setStaticModal(!staticModal);

    return (
        <>
            <MDBBtn className="Btn-Register NavbarLogin-Item" color="secondary " onClick={toggleOpen}>
                ĐĂNG KÝ
            </MDBBtn>
            <MDBModal staticBackdrop tabIndex="-1" open={staticModal} onClose={() => setStaticModal(false)}>
                <MDBModalDialog size="xl">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBBtn className="btn-close" color="none" onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody style={{ display: 'flex', backgroundColor: 'floralwhite' }}>
                            <img
                                src="https://medlatec.vn/media/38331/content/_sinh-nhat-banner.png"
                                style={{ height: '400px', width: '500x' }}
                            />

                            <RegisterForm />
                        </MDBModalBody>
                        <MDBModalFooter></MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
