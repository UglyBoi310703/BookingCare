import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
// import Menu, { MenuItem } from './Menu';

import config from '~/config';
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

function SidebarLogin() {
    return (
        <Nav className="navbar-nav">
            <Nav.Link href="#deets">Đăng ký</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Đăng nhập
            </Nav.Link>
        </Nav>
    );
}

export default SidebarLogin;
