import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';

import UserModal from './UserModal';
import UserNotifications from '../NavBar/NavbarUser/UserNotifications/UserNotifications';
import UserOrderListModal from './UserOrderListModal';
import UserOrderHistoryModal from './UserOrderHistoryModal';
import styles from './User.scss';
function UserName() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJAeyBzqfVWLePmpprAvbv4p1qv9WCWwfbjRqTzglqQ&s"
            />
            <div>
                <span>Đỗ Văn Vương</span>
            </div>
        </div>
    );
}

const pages = ['Products', 'Pricing', 'Blog'];
const settings = [UserName(), 'Thông tin tài khoản', 'Lịch sử đặt lịch khám', 'Đăng xuất'];

function User({ logout }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box className="UserContainer" sx={{ flexGrow: 0 }}>
            <UserNotifications />
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                        className="UserAvatarButton"
                        style={{ width: '50px', height: '40px' }}
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJAeyBzqfVWLePmpprAvbv4p1qv9WCWwfbjRqTzglqQ&s"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <div className="UserMenu">
                    <div className='UserMenu-Item' style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJAeyBzqfVWLePmpprAvbv4p1qv9WCWwfbjRqTzglqQ&s"
                        />
                        <div>
                            <span>Đỗ Văn Vương</span>
                        </div>
                    </div>

                    <UserModal className='UserMenu-Item'/>

                    <UserOrderListModal  className='UserMenu-Item'/>

                    <UserOrderHistoryModal className='UserMenu-Item' />

                    <MenuItem className='UserMenu-Item' onClick={handleCloseUserMenu}>
                        <MDBBtn
                            style={{ width: '90%' }}
                            textAlign="center"
                            onClick={logout}
                            rounded
                            className="mx-2"
                            color="danger"
                        >
                            Đăng xuất
                        </MDBBtn>
                    </MenuItem>
                </div>

                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
        </Box>
    );
}
export default User;
