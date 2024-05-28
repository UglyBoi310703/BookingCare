import React, { Children, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ServicesData from '../Services/ServicesData';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// Example items, to simulate fetching from another resources.
let CurrentItems = [];

 function Paginated({ itemsPerPage,Data, handlePageClick }) {
  
    return (
           
            <Stack className='Pagination' spacing={2}>
                <Pagination
                    count={Data.length / itemsPerPage}
                    color="primary"
                    breakLabel="..."
                    onChange={handlePageClick}
                />
            </Stack>
       
    );
}
export default Paginated
