import React, { Children, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import NavbarLogin from '../NavBar/NavbarLogin/NavbarLogin';
import Search from '../Search';

import Navbar from '../NavBar/Navbar';
import NavbarInformation from '../NavBar/NavbarInformation';

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
    const [openNavLogin, setOpenNavLogin] = React.useState(false);
    const [openNav, setOpenNav] = React.useState(false);
    const link = useLocation();

    useEffect(() => {
        let index = 1;
        if (link.pathname == '/Services') {
            index = 2;
        } else if (link.pathname =='/Doctors') {
            console.log("Hi")
            index = 3;
        } else if (link.pathname =='/Facility') {
            index = 4;
        }
        const ActiveBlock = document.getElementById('BlockActive');
        ActiveBlock.classList.remove();
        ActiveBlock.classList.add(`animation${index}`);
        const LinkActiveCurrent = document.getElementById('LinkActive');
        console.log(LinkActiveCurrent);
    
        LinkActiveCurrent.removeAttribute("id") 
        const NewLinkActive = document.getElementsByClassName(`Nav-Link${index}`);
        NewLinkActive[0].setAttribute("id","LinkActive")
        
    },[openNav]);
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
                    {openNavLogin ? (
                        <Navbar/>
                    ) : (
                        <>
                            <NavbarInformation />
                            <NavbarLogin />
                        </>
                    )}
                </MDBCollapse>
                <>
                    {/* <Menu items={currentUser } onChange={handleMenuChange}>
                                {currentUser ? (
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                        alt="Nguyen Van A"
                                    />
                                ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                )}
                            </Menu> */}
                </>
            </MDBContainer>
            <Navbar />
        </MDBNavbar>
    );
}
export default React.memo(Header);
// <Navbar collapseOnSelect expand="lg" className="bbg-body-tertiary">
//     <Container>
//         <Navbar.Brand href="#home">
//             <img style={{ width: '10rem' }} src="https://medlatec.vn/media/115/content/logo-pc.png" />
//         </Navbar.Brand>
//         <Search />
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <>
//                 {currentUser ? (
//                     <NavBarTest/>
//                 ) : (
//                     <>
//                         <NavBarTest/>
//                         <SidebarLogin />
//                     </>
//                 )}
//                 {/* <Menu items={currentUser } onChange={handleMenuChange}>
//                         {currentUser ? (
//                             <Image
//                                 className={cx('user-avatar')}
//                                 src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
//                                 alt="Nguyen Van A"
//                             />
//                         ) : (
//                             <button className={cx('more-btn')}>
//                                 <FontAwesomeIcon icon={faEllipsisVertical} />
//                             </button>
//                         )}
//                     </Menu> */}
//             </>
//         </Navbar.Collapse>
//     </Container>
// </Navbar>

// <header className={cx('wrapper')}>
//     <div className={cx('inner')}>
//         <Link to={config.routes.home} className={cx('logo-link')}>
//             <img src="https://medlatec.vn/media/115/content/logo-pc.png" alt="Bệnh viện đa khoa MEDLATEC" />
//         </Link>
//         <Search />
// <div className={cx('actions')}>
//     {currentUser ? (
//         <Sidebar />
//     ) : (
//         <>
//             <Sidebar />
//             <Button text>Đăng nhập</Button>
//             <Button primary>Đăng ký</Button>
//         </>
//     )}

//     <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
//         {currentUser ? (
//             <Image
//                 className={cx('user-avatar')}
//                 src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
//                 alt="Nguyen Van A"
//             />
//         ) : (
//             <button className={cx('more-btn')}>
//                 <FontAwesomeIcon icon={faEllipsisVertical} />
//             </button>
//         )}
//     </Menu>
// </div>
//     </div>
// </header>
