import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./Footer.scss"

 function Footer() {
  console.log("Re-render")
    return (
      <MDBFooter  className='footer text-center text-lg-start text-muted'>
        {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span><img src="https://medlatec.vn/media/115/content/logo-pc.png"/></span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='twitter' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='google' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='instagram' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='linkedin' />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon color='secondary' fab icon='github' />
            </a>
          </div>
        </section> */}
        <section className=''>
          <MDBContainer style={{"padding-top":"1rem" }}  className='text-center text-md-start mt-5'>
            <MDBRow style = {{color: "black"}}className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            
              <img style={{width: "10rem" }} className='text-uppercase fw-bold mb-4' src="https://medlatec.vn/media/115/content/logo-pc.png"/>
                
              
                <p>
                Hệ thống Y tế MEDLATEC mang đến các công nghệ chẩn đoán hiện đại, chung tay cùng hệ thống y tế cả nước nâng cao chất lượng chăm sóc và bảo vệ sức khỏe cho mọi người.
                </p>
              </MDBCol>
  
              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-3'>
                <h6 className='text-uppercase fw-bold mb-4 mt-1'>Quy chế hoạt động</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Chính sách bảo mật 
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Điều khoản sử dụng
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Cam kết dịch vụ
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Liên hệ hợp tác
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-3'>
                <h6 className='text-uppercase fw-bold mb-4 mt-1'>Dịch vụ</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Đặt lịch khám bệnh
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Bảo hiểm y tế
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Lấy mẫu xét nghiệm tại nhà
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Các gói khám sức khỏe
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-3'>
                <h6 className='text-uppercase fw-bold mb-4 mt-1'>Liên hệ</h6>
                <p>
                  <MDBIcon color='dark' icon='home' className='me-2' />
                  Số 9, Hai Bà Trưng , Hà Nội
                </p>
                <p>
                  <MDBIcon color='dark' icon='envelope' className='me-3' />
                  Melatec@gmail.com
                </p>
                <p>
                  <MDBIcon color='dark' icon='phone' className='me-3' /> 0123456789
                </p>
                <p>
                  <MDBIcon color='dark' icon='print' className='me-3' /> 0123456789
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            Bệnh viện đa khoa MELATEC
          </a>
        </div>
      </MDBFooter>
    );
  }
  export default React.memo(Footer)