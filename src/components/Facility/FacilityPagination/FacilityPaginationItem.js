import React, { useEffect, useState } from 'react';

import FacilitiesData from '../facilityData';
import { MDBRow } from 'mdb-react-ui-kit';
import FacilityItem from '../FacilityItem';
// Example items, to simulate fetching from another resources.

function FacilityPaginationItem({ currentItems }) {
    return (
<<<<<<< HEAD
        <MDBRow className=" ServicesPage row-cols-1 row-cols-md-3 g-4">
            {currentItems && currentItems.map((item) => <FacilityItem img={item.img} name={item.name} />)}
=======
        <MDBRow className=" FacilityPage row-cols-1 row-cols-md-3 g-4">
            {currentItems &&
                currentItems.map((item) => (
                    <FacilityItem
                        img={item.img}
                        name={item.name}
                    />
                ))}
>>>>>>> b9d674db744928ac32f0f8b873731d5d1ebfbb05
        </MDBRow>
    );
}
export default FacilityPaginationItem;
