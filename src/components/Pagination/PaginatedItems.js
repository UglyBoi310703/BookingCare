import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ServicesData from '../Services/ServicesData';

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
import ServicesItem from '../Services/ServicesItem';
// Example items, to simulate fetching from another resources.


function Items({ currentItems }) {
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

export default function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = ServicesData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ServicesData.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event, value) => {
        console.log(itemOffset);

        // const newOffset = ((value - 1) * itemsPerPage) % ServicesData.length;
        const newOffset = (value - 1) * itemsPerPage;
        const Check = value * itemsPerPage;
        console.log(`User requested page number ${value - 1}, which is offset ${newOffset}`);

        if (Check <= ServicesData.length) {
            console.log(Check);
            setItemOffset(newOffset);
        } else {
        }
    };

    return (
        <>
            <Items currentItems={currentItems} />
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            /> */}
            <Stack spacing={2}>
                <Pagination
                    count={ServicesData.length / itemsPerPage}
                    color="primary"
                    breakLabel="..."
                    onChange={handlePageClick}
                />
            </Stack>
        </>
    );
}

// Add a <div id="container"> to your HTML to see the component rendered.
