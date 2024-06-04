import React, { Children, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import NavbarLogin from '../NavBar/NavbarLogin/NavbarLogin';
import Search from '../Search';

import Navbar from '../NavBar/Navbar';
import NavbarInformation from '../NavBar/NavbarInformation';
import User from '../Modal/UserComponent';
import { useAuth } from '../NavBar/AuthContext';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

function Header() {
    const { isLoggedIn, login, logout } = useAuth();
    const [openNav, setOpenNav] = React.useState(false);
    const link = useLocation();
    useEffect(() => {
        let index = 1;
        if (link.pathname == '/Services') {
            index = 2;
        } else if (link.pathname == '/Doctors') {
            console.log('Hi');
            index = 3;
        } else if (link.pathname == '/Facility') {
            index = 4;
        }else if (link.pathname == '/MedicalSpecialties') {
            index = 5;
        }
        const ActiveBlock = document.getElementById('BlockActive');
        ActiveBlock.classList.remove();
        ActiveBlock.classList.add(`animation${index}`);
        const LinkActiveCurrent = document.getElementById('LinkActive');
        console.log(LinkActiveCurrent);

        LinkActiveCurrent.removeAttribute('id');
        const NewLinkActive = document.getElementsByClassName(`Nav-Link${index}`);
        NewLinkActive[0].setAttribute('id', 'LinkActive');
    }, [openNav]);
    return (
        <MDBNavbar className="Header" expand="lg" fixed="top" sticky light bgColor="light">
            <MDBContainer fluid>
                <MDBNavbarBrand className="Logo" href="/">
                    <img src="https://medlatec.vn/media/115/content/logo-pc.png" />
                </MDBNavbarBrand>
                <Search />
                <MDBNavbarToggler
                    type="button"
                    data-target="#navbarCenteredExample"
                    aria-controls="navbarCenteredExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav} id="navbarExample">
                    {!isLoggedIn ? (
                        <>
                            <NavbarInformation />
                            <NavbarLogin handleLogin={login} />
                        </>
                    ) : (
                        <>
                            <NavbarInformation />
                            <User logout={logout} />
                        </>
                    )}
                </MDBCollapse>
            </MDBContainer>
            <Navbar openNav={openNav} />
        </MDBNavbar>
    );
}
export default React.memo(Header);
