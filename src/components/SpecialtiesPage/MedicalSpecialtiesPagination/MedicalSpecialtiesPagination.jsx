import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import MedicalSpecialtiesPageData from '../MedicalSpecialtiesPageData';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {
    MDBCard,
    MDBBtn,
    MDBRipple,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBRow,
} from 'mdb-react-ui-kit';
import MedicalSpecialtiesPageItem from '../MedicalSpecialtiesPageItem';
// Example items, to simulate fetching from another resources.

export default function MedicalSpecialtiesPagination({ currentItems }) {
    return (
        <MDBRow className=" ServicesPage row-cols-1 row-cols-md-3 g-4">
            {currentItems &&
                currentItems.map((item) => (
                    <MedicalSpecialtiesPageItem img={item.img} name={item.name} content={item.content} />
                ))}
        </MDBRow>
    );
}

// Add a <div id="container"> to your HTML to see the component rendered.
