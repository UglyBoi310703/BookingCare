import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,MDBCheckbox
} from 'mdb-react-ui-kit';
import styles from "./LoginForm.scss"

function LoginForm() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập tại đây
    console.log('Email/Số điện thoại:', emailOrPhone);
    console.log('Mật khẩu:', password);
    console.log('Lưu thông tin:', saveInfo);
  };

  const handleForgotPassword = () => {
    // Xử lý logic quên mật khẩu tại đây
    console.log('Quên mật khẩu');
  };

  return (
    <MDBContainer className=" LoginForm d-flex justify-content-center align-items-center" >
      <MDBCard style={{ width: '400px',boxShadow:"none" }}>
        <MDBCardBody>
          <form onSubmit={handleLogin}>
            <p className="h4 text-center py-4">Đăng nhập</p>
            <div className="grey-text">
             <div className='LoginFormInputItem'>
             <MDBInput
                label="Email hoặc Số điện thoại"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
             </div>
             <div className='LoginFormInputItem'>
             <MDBInput
                label="Mật khẩu"
                icon="lock"
                group
                type="password"
                validate
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
             </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div className="form-check">
           
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="saveInfo"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="saveInfo">Lưu thông tin</label>
              </div>
              <a href="#" onClick={handleForgotPassword}>Quên mật khẩu?</a>
            </div>
            <div className="text-center py-4 mt-3">
              <MDBBtn color="primary" type="submit">
                Đăng nhập
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default LoginForm;