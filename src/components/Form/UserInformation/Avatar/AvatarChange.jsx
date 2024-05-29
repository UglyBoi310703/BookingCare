import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import styles from "./AvatarChange.scss"

const AvatarChanger = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState('https://medlatec.vn/med/images/logo-mobile.png');
  const [newAvatar, setNewAvatar] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleSave = () => {
    if (newAvatar) {
      setCurrentAvatar(newAvatar);
      setNewAvatar(null);
      toggleModal();
    }
  };

  return (
    <MDBContainer className='AvatarChange'>
      <MDBRow>
        <MDBCol className="d-flex flex-column align-items-center">
          <img src={currentAvatar} alt="Current Avatar" className="img-thumbnail mb-3" style={{ width: '150px', height: '150px' }} />
          <MDBBtn onClick={toggleModal}>Đổi ảnh đại diện</MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBModal open={modalOpen} setopen={setModalOpen} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Thay đổi ảnh đại diện</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-center">
             <div className='AvatarGroup'>
            <div className='CurrentAvatar'>
            <h5>Avatar hiện tại</h5>
              <img src={currentAvatar} alt="Current Avatar" className="img-thumbnail mb-3" style={{ width: '150px', height: '150px' }} />
            </div>
              {newAvatar && (
                <div className='NewAvatar'>
                  <h5 className="">Avatar mới</h5>
                  <img src={newAvatar} alt="New Avatar" className="img-thumbnail mb-3" style={{ width: '150px', height: '150px' }} />
                </div>
              )}
             </div>
            <div>
            <input type="file"  accept="image/*" onChange={handleFileChange} />
             
            </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>Đóng</MDBBtn>
              <MDBBtn color="primary" onClick={handleSave}>Lưu</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
};

export default AvatarChanger;