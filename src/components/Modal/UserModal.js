import React, { useState } from 'react';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
  MDBCol,MDBIcon
} from 'mdb-react-ui-kit';
import UserInformationForm from '../Form/UserInformation/UserInformationForm';
import ChangePasswordForm from '../Form/ChangePassWord/ChangePassWord';
function UserModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('personalInfo');
  const [editableField, setEditableField] = useState(null);
  const [formData, setFormData] = useState({
    avatar: '',
    fullName: '',
    dob: '',
    province: '',
    district: '',
    phone: '',
    email: '',
  });

  const provinces = [
    'Hà Nội',
    'Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    // Add more provinces as needed
  ];



  const toggleModal = () => setModalOpen(!modalOpen);


  return (
    <>
      <a  onClick={toggleModal}>Thông tin tài khoản</a>
      <MDBModal  open={modalOpen} onClose={setModalOpen} tabIndex="-1" >
        <MDBModalDialog size='xl'>
          <MDBModalContent>
            <MDBModalHeader>
              <h4 className="modal-title">Thông tin tài khoản</h4>
              <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="d-flex row">
              <MDBCol className="col-3">
                <MDBBtn  size='lg'
                  className={`w-100 mb-2 ${activeTab === 'personalInfo' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTab('personalInfo')}
                >
                  <MDBIcon fas icon="user" /><span>Thông tin cá nhân</span>
                </MDBBtn>
                <MDBBtn  size='lg'
                  className={`w-100 ${activeTab === 'securitySettings' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTab('securitySettings')}
                >
                  <MDBIcon fas icon="lock" /> <span>Mật khẩu và bảo mật</span>
                </MDBBtn>
              </MDBCol>
              <MDBCol className="col-8">
                {activeTab === 'personalInfo' && <UserInformationForm/>}
                {activeTab === 'securitySettings' && (
                 <ChangePasswordForm/>
                )}
              </MDBCol>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Đóng
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default UserModal;