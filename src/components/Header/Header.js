import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import config from '~/config';

import styles from './Header.module.scss';

import Search from '../Search';
import Sidebar from '../Sidebar';
import SidebarLogin from '../Sidebar/SiderbarLogin';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from '~/config/routes';
const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{width: "10rem"}} src="https://medlatec.vn/media/115/content/logo-pc.png" />
                </Navbar.Brand>
                <Search />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <>
                        {currentUser ? (
                            <Sidebar />
                        ) : (
                            <>
                                <Sidebar />
                                <SidebarLogin />
                            </>
                        )}
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
                </Navbar.Collapse>
            </Container>
        </Navbar>

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
    );
}

export default Header;
