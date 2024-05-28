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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleModal = () => setModalOpen(!modalOpen);

  const renderForm = () => (
    <form>
      <div className="mb-3">
        <label>Ảnh đại diện:</label>
        <MDBInput
          type="file"
          name="avatar"
          disabled={editableField !== 'avatar'}
          onChange={handleInputChange}
        />
        <MDBBtn onClick={() => setEditableField('avatar')}>Sửa</MDBBtn>
      </div>
      <div className="mb-3">
        <label>Họ và tên:</label>
        <MDBInput
          type="text"
          name="fullName"
          value={formData.fullName}
          disabled={editableField !== 'fullName'}
          onChange={handleInputChange}
        />
        <MDBBtn onClick={() => setEditableField('fullName')}>Sửa</MDBBtn>
      </div>
      <div className="mb-3">
        <label>Ngày sinh:</label>
        <MDBInput
          type="date"
          name="dob"
          value={formData.dob}
          disabled={editableField !== 'dob'}
          onChange={handleInputChange}
        />
        <MDBBtn onClick={() => setEditableField('dob')}>Sửa</MDBBtn>
      </div>
      <div className="mb-3">
        <label>Tỉnh thành:</label>
        <select
          name="province"
          value={formData.province}
          disabled={editableField !== 'province'}
          onChange={handleInputChange}
          className="form-control"
        >
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
        <MDBBtn onClick={() => setEditableField('province')}>Sửa</MDBBtn>
      </div>
      <div className="mb-3">
        <label>Quận huyện:</label>
        <MDBInput
          type="text"
          name="district"
          value={formData.district}
          disabled={editableField !== 'district'}
          onChange={handleInputChange}
        />
        <MDBBtn onClick={() => setEditableField('district')}>Sửa</MDBBtn>
      </div>
      <div className="mb-3">
        <label>Số điện thoại:</label>
        <MDBInput
          type="text"
          name="phone"
          value={formData.phone}
          disabled={editableField !== 'phone'}
          onChange={handleInputChange}
        />
        <MDBBtn onClick={() => setEditableField('phone')}>Sửa</MDBBtn>
        </div>
      <div className="mb-3">
        <label>Email:</label>
        <MDBInput
          type="email"
          name="email"
          value={formData.email}
        
          onChange={handleInputChange}
        />
        
      </div>
      <div className="text-end">
        <MDBBtn onClick={() => setEditableField(null)}>Lưu thông tin</MDBBtn>
      </div>
    </form>
  );

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
                {activeTab === 'personalInfo' && renderForm()}
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