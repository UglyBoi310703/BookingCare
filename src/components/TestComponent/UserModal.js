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
  MDBCol,
} from 'mdb-react-ui-kit';
import UserInformationForm from '../Form/UserInformation/UserInformationForm';
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
      <MDBBtn onClick={toggleModal}>Mở Modal</MDBBtn>
      <MDBModal  open={modalOpen} onClose={setModalOpen} tabIndex="-1" >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <h5 className="modal-title">Thông tin cá nhân</h5>
              <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="d-flex">
              <MDBCol className="col-3">
                <MDBBtn
                  className={`w-100 mb-2 ${activeTab === 'personalInfo' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTab('personalInfo')}
                >
                  Thông tin cá nhân
                </MDBBtn>
                <MDBBtn
                  className={`w-100 ${activeTab === 'securitySettings' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setActiveTab('securitySettings')}
                >
                  Mật khẩu và bảo mật
                </MDBBtn>
              </MDBCol>
              <MDBCol className="col-9">
                {activeTab === 'personalInfo' && <UserInformationForm/>}
                {activeTab === 'securitySettings' && (
                  <div>
                    <h5>Cài đặt mật khẩu và bảo mật</h5>
                    <p>Các tùy chọn bảo mật sẽ được hiển thị ở đây.</p>
                  </div>
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