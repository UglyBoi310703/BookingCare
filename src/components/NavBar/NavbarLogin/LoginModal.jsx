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
import LoginForm from '~/components/Form/Login/LoginForm';

export default function LoginModal( {handleLogin}) {
  const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);

  return (
    <>
      <MDBBtn className='Btn-Login NavbarLogin-Item mx-2'  color='info' onClick={toggleOpen}>ĐĂNG NHẬP</MDBBtn>
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody style={{display:'flex'}}>
            <img src='https://medlatec.vn/media/30132/catalog/435x292.png?size=2048' style={{height:"400px", width:"700px"}}/>
            <LoginForm handleLogin = {handleLogin} />
            </MDBModalBody>
            <MDBModalFooter></MDBModalFooter>
          </MDBModalContent>
          
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}