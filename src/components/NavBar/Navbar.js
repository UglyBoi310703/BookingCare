import React, { useState } from 'react';
import { MDBNavbarNav, MDBNavbarLink,MDBCollapse } from 'mdb-react-ui-kit';

import styles from './Navbar.scss';
import { useLocation } from 'react-router-dom';
function handleMouseOver(event) {
    const LinkActiveCurrent = document.getElementById('LinkActive');
    LinkActiveCurrent.removeAttribute('id');
    const NewLinkActive = event.target;
    NewLinkActive.setAttribute('id', 'LinkActive');
}

 function Navbar({openNav}) {
   
    const link = useLocation();
    function handleMouseOut() {
        let index = 1;
        if (link.pathname == '/Services') {
            index = 2;
        } else if (link.pathname == '/Doctors') {
            index = 3;
        } else if (link.pathname == '/Facility') {
            index = 4;
        }
        const LinkActiveCurrent = document.getElementById('LinkActive');
        LinkActiveCurrent.removeAttribute('id');
        const NewLinkActive = document.getElementsByClassName(`Nav-Link${index}`);
        console.log(NewLinkActive);
        NewLinkActive[0].setAttribute('id', 'LinkActive');
    }
    return (
        <MDBCollapse navbar open={openNav} className='NavCollapse'>
             <MDBNavbarNav onMouseLeave={handleMouseOut} fullWidth={false} className="NavBarMain col mb-2 mb-lg-0">
                <div className="NavBarMain-List">
                    <MDBNavbarLink onMouseOver={handleMouseOver} className="Nav-Link1" id="LinkActive" href="/">
                        Trang chủ
                    </MDBNavbarLink>

                    <MDBNavbarLink onMouseOver={handleMouseOver} className="Nav-Link2" href="/Services">
                        Gói khám sức khỏe
                    </MDBNavbarLink>

                    <MDBNavbarLink onMouseOver={handleMouseOver} className="Nav-Link3" href="/Doctors">
                        Đội ngũ chuyên gia
                    </MDBNavbarLink>

                    <MDBNavbarLink onMouseOver={handleMouseOver} className="Nav-Link4" href="/Facility">
                        Cơ sở vật chất
                    </MDBNavbarLink>
                    <div className="animation1 start-home" id="BlockActive"></div>
                </div>
            </MDBNavbarNav>
        </MDBCollapse>
           
    );
}
export default React.memo(Navbar)