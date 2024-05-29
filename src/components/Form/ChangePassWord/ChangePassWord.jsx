import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBTypography,
  
} from 'mdb-react-ui-kit';

const ChangePasswordForm = () => {
  const [showResetForm, setShowResetForm] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowResetForm(true);
  };

  const handleBackToChangePassword = () => {
    setShowResetForm(false);
  };

  return (
    <MDBContainer className="">
      {!showResetForm ? (
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <MDBTypography tag="h2" className="text-center">Đổi mật khẩu</MDBTypography>
            <p className="text-center">Mật khẩu yêu cầu từ 6 - 20 ký tự</p>
            <form>
              <MDBInput
                label="Nhập mật khẩu cũ"
                type="password"
                className="mb-4"
                required
              />
              <MDBInput
                label="Nhập mật khẩu mới"
                type="password"
                className="mb-4"
                required
              />
              <MDBInput
                label="Nhập lại mật khẩu mới"
                type="password"
                className="mb-4"
                required
              />
              <a href="#" onClick={handleForgotPasswordClick}>
                Bạn quên mật khẩu phải không?
              </a>
              <MDBBtn type="submit" className="mt-3" color="primary" block>
                Đổi mật khẩu
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      ) : (
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <MDBTypography tag="h2" className="text-center">Lấy lại mật khẩu</MDBTypography>
            <p className="text-center">Nhập địa chỉ email hoặc số điện thoại để lấy lại mật khẩu</p>
            <form>
              <MDBInput
                label="Email hoặc Số điện thoại"
                type="email"
                className=""
                required
              />
              <MDBBtn type="submit" className="mt-3  mb-2" color="primary" block>
                Nhận mã OTP
              </MDBBtn>
              <a href="#" onClick={handleBackToChangePassword}>
                Quay lại đổi mật khẩu
              </a>
            </form>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
};

export default ChangePasswordForm;