import React from 'react';
import { MDBContainer, MDBNavbar, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import styles from './Search.scss';

export default function Search() {
    return (
        <MDBNavbar className="Search">
            <MDBContainer fluid>
                <MDBInputGroup tag="form" className="d-flex w-auto">
                    <input
                        className="form-control nav_search"
                        placeholder="Tìm kiếm"
                        aria-label="Search"
                        type="Search"
                    />
                    <MDBBtn outline>Tìm kiếm</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
}
