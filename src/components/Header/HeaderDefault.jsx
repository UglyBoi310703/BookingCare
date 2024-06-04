import React, { Children, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import NavbarLogin from '../NavBar/NavbarLogin/NavbarLogin';
import Search from '../Search';

import Navbar from '../NavBar/Navbar';
import NavbarInformation from '../NavBar/NavbarInformation';

import { MDBContainer, MDBNavbarBrand, MDBCollapse,MDBNavbar } from 'mdb-react-ui-kit';

import User from '../Modal/UserComponent';

function HeaderDefault({ openNav }) {
   
  
    return (
        <MDBNavbar className="Header" expand="lg" fixed="top" sticky light bgColor="light">
        <MDBContainer fluid>
            <MDBNavbarBrand className="Logo" href="/">
                <img src="https://medlatec.vn/media/115/content/logo-pc.png" />
            </MDBNavbarBrand>
            <Search />
            <NavbarInformation />
           <a href='/'><img src='https://medlatec.vn/med/images/logo-mobile.png'/></a>
        </MDBContainer>
        </MDBNavbar>
    );
}
export default React.memo(HeaderDefault);
