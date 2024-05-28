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
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody style={{display:'flex'}}>
            <img src='https://media.licdn.com/dms/image/D5622AQG55Z4s2dfkeg/feedshare-shrink_800/0/1697596015546?e=2147483647&v=beta&t=BHoj2PfOqmY-e8m9LqmWXygeEZpUvEtFLACVX8XTSyI' style={{height:"360px", width:"700px"}}/>
            <LoginForm handleLogin = {handleLogin} />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}