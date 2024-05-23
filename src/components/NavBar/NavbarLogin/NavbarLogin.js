import React from 'react';
import styles from './NavbarLogin.scss'
import { MDBNavbarNav, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

function NavbarLogin() {
    return (
          
             <MDBBtnGroup className='NavbarLogin' right fullWidth={false}  >
                <MDBBtn className='NavbarLogin-Item' rounded  color="secondary"><span>ĐĂNG KÝ</span></MDBBtn>
                <MDBBtn className='NavbarLogin-Item mx-2' rounded  color="info"><span>ĐĂNG NHẬP</span></MDBBtn>
            </MDBBtnGroup>
           
    );
}

export default NavbarLogin;
