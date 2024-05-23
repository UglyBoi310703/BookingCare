import React from 'react';
import { MDBBtn,MDBBadge, MDBListGroup, MDBListGroupItem, MDBIcon }
 from 'mdb-react-ui-kit';

function ContactInformationItem({title,icon,describe}) {
  return (
    <a href='/Services'>
          <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
    <div className='d-flex align-items-center'>
    <MDBBtn size='sm' rounded color='link'>
    <MDBIcon  size='2x' fas icon = {icon} />
    </MDBBtn>
      <div className='ms-3'>
        <p className='fw-bold mb-1'>{title}</p>
        <p className='text-muted mb-0'>{describe}</p>
      </div>
    </div>
  </MDBListGroupItem>
    </a>
  );
}
export default ContactInformationItem