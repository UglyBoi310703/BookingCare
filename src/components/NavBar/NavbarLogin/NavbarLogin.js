import React from 'react';
import styles from './NavbarLogin.scss'
import { MDBNavbarNav, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import RegisterModal from './RegiserModal';
import LoginModal from './LoginModal';
import { Login } from '@mui/icons-material';
function NavbarLogin({handleLogin}) {
    return (
          
             <div className='NavbarLogin'>
                {/* <MDBBtn className='NavbarLogin-Item' rounded  color="secondary"><span>ĐĂNG KÝ</span></MDBBtn> */}
                <RegisterModal/>
                <LoginModal handleLogin={handleLogin}/>
                {/* <MDBBtn className='NavbarLogin-Item mx-2' rounded  color="info"><span>ĐĂNG NHẬP</span></MDBBtn> */}
            </div>
           
    );
}

export default React.memo(NavbarLogin);
