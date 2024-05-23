import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MDBCard, MDBCardBody, MDBCol, MDBListGroup, MDBCardGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import ServicesData from './ServicesData';
import ServicesItem from './ServicesItem';
import styles from './ServicesPage.scss';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Items({ currentItems }) {
    return (
        <MDBRow className=" ServicesPage row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
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

export default function ServicesPage({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = ServicesData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ServicesData.length / itemsPerPage);

    const handlePageClick = (event, value) => {
        console.log(itemOffset);

        // const newOffset = ((value - 1) * itemsPerPage) % ServicesData.length;
        const newOffset = (value - 1) * itemsPerPage;
        const Check = value * itemsPerPage;
        console.log(`User requested page number ${value - 1}, which is offset ${newOffset}`);

        if (Check <= ServicesData.length) {
            console.log(Check);
            setItemOffset(newOffset);
        } 
    };
    
    return (
        <div className='Services'>
            <Items currentItems={currentItems} />
            <Stack className='Services-Pagination' spacing={2}>
                <Pagination
                    count={ServicesData.length / itemsPerPage}
                    color="primary"
                    breakLabel="..."
                    onChange={handlePageClick}
                />
            </Stack>
        </div>
    );
}
