import React, { useEffect, useState } from 'react';

import FacilitiesData from '../facilityData';
import { MDBRow } from 'mdb-react-ui-kit';
import FacilityItem from '../FacilityItem';
// Example items, to simulate fetching from another resources.

function FacilityPaginationItem({ currentItems }) {
    return (
        <MDBRow className=" FacilityPage row-cols-1 row-cols-md-3 g-4">
            {currentItems && currentItems.map((item) => <FacilityItem img={item.img} name={item.name} />)}
        </MDBRow>
    );
}
export default FacilityPaginationItem;
