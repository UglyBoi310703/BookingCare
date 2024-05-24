import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ServicesData from '../ServicesData';

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
import ServicesItem from '../ServicesItem';
// Example items, to simulate fetching from another resources.

export default function ServicesPaginationItems({ currentItems }) {
    return (
        <MDBRow className=" ServicesPage row-cols-1 row-cols-md-3 g-4">
            {currentItems &&
                currentItems.map((item) => (
                    <ServicesItem
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        location={item.location}
                        gender={item.gender}
                        age={item.age}
                    />
                ))}
        </MDBRow>
    );
}



// Add a <div id="container"> to your HTML to see the component rendered.
