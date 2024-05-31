import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader,MDBIcon,MDBBadge } from 'mdb-react-ui-kit';
import styles from "./UserNotifications.scss"
export default function UserNotifications() {
  return (
    <>
      <MDBPopover  color='tertiary' rippleColor='light' btnChildren={<>
        <MDBIcon color='primary' fas icon="bell" size="2x" />
                <MDBBadge color="danger" notification pill style={{top: "-15px"}} >1</MDBBadge>
      </>} placement='bottom'>
        <MDBPopoverHeader>Thông báo</MDBPopoverHeader>
        <MDBPopoverBody><div className='MessageBox'><img className='MessageBox-Item' style={{width:"2rem"}} src='https://medlatec.vn/med/images/logo-mobile.png'/><div className='MessageBox-Item'>Medlatec chúc bạn 1 ngày tốt lành</div></div></MDBPopoverBody>
      </MDBPopover>
    </>
  );
}