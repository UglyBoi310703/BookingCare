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
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function NavBar() {
    return (
        <Nav className="me-auto">
            <Link to={'/'}>Trang chủ</Link>
            <Link to={'/Doctors'}>Đội ngũ chuyên gia</Link>
            <Link to={'/Services'}>Gói khám sức khỏe</Link>
            <Link to={'/Facilities'}>Cơ sở vật chất</Link>
        </Nav>
    );
}

export default NavBar;
