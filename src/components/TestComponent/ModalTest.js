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


export default function ModalTest({ DescriptionTitle, Description, name, img, price, gender, age, location }) {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleOpen}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><MDBModalBody>
                            <MDBCard className="Services-Item">
                                <MDBRipple rippleTag="div" className="hover-zoom hover-overlay">
                                    <MDBCardImage className="img-fluid" src={img} position="top" alt="..." />
                                </MDBRipple>
                                <MDBCardBody className="Services-Item-Cotent">
                                    <MDBBtn className="Services-Item-Cotent-price" href="#">
                                        {price}
                                    </MDBBtn>
                                    <MDBCardTitle className="Services-Item-Cotent-Name">{name}</MDBCardTitle>
                                    <div className="Services-Item-Cotent-information">
                                        <div className="Services-Gender">{gender}</div>
                                        <div className="Services-Age">{age}</div>
                                        <div className="Services-Location">{location}</div>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                            <div>
                                <MDBTable bordered borderColor="primary">
                                    <MDBTableBody>
                                        <tr>
                                            <th scope="row">Hình thức</th>
                                            <td>Tại Medlatec</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">GIới tính</th>
                                            <td>{gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Độ tuổi</th>
                                            <td>{age}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Cơ sở</th>
                                            <td>Hà Nội</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardSubTitle>{DescriptionTitle}</MDBCardSubTitle>
                                        <MDBCardText>{Description}</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </MDBModalBody></MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}