import React, { useState,useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
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
import OrderList from './OrderList/OrderList';
export default function UserOrderListModal() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);


  return (
    <>
      <a onClick={toggleOpen}>Danh sách lịch khám </a>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Danh sách lịch khám</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody> 
            <OrderList/>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Đóng
              </MDBBtn>
             
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}