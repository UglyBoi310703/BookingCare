import React, { Children, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import NavbarLogin from '../NavBar/NavbarLogin/NavbarLogin';
import Search from '../Search';

import Navbar from '../NavBar/Navbar';
import NavbarInformation from '../NavBar/NavbarInformation';

import { MDBContainer, MDBNavbarBrand, MDBCollapse } from 'mdb-react-ui-kit';

import User from '../Modal/UserComponent';

function HeaderDefault({ openNav }) {
    const [openNavLogin, setOpenNavLogin] = React.useState(true);
    console.log(openNavLogin);
    const handleLogin = useCallback(() => {
        setOpenNavLogin(!openNavLogin);
    }, []);
    return (
        <MDBContainer fluid>
            <MDBNavbarBrand className="Logo" href="/">
                <img src="https://medlatec.vn/media/115/content/logo-pc.png" />
            </MDBNavbarBrand>
            <Search />
            <MDBCollapse navbar open={openNav} id="navbarExample">
                {openNavLogin ? (
                    <>
                        <NavbarInformation />
                        <NavbarLogin handleLogin={handleLogin} />
                    </>
                ) : (
                    <>
                        <NavbarInformation />
                        <User />
                    </>
                )}
            </MDBCollapse>
        </MDBContainer>
    );
}
export default React.memo(HeaderDefault);
