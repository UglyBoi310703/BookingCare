import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MDBCard, MDBCardBody, MDBCol, MDBListGroup, MDBCardGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import ServicesData from './ServicesData';
import ServicesItem from './ServicesItem/ServicesItem';
import styles from './ServicesPage.scss';

import ServicesPaginationItems from './ServicesPagination/ServicesPaginatedItems';

import Paginated, { CurrentItems } from '../Pagination/Paginated';
// function Items({ currentItems }) {
//     return (
//         <MDBRow className=" ServicesPage row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
//             {currentItems &&
//                 currentItems.map((item) => (
//                     <ServicesItem
//                         img={item.img}
//                         name={item.name}
//                         price={item.price}
//                         location={item.location}
//                         gender={item.gender}
//                         age={item.age}
//                     />
//                 ))}
//         </MDBRow>
//     );
// }

export default function ServicesPage({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const CurrentItems = ServicesData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ServicesData.length / itemsPerPage);

    const handlePageClick = (event, value) => {
        const newOffset = ((value - 1) * itemsPerPage) % ServicesData.length;
        // const newOffset = (value - 1) * itemsPerPage;
        const Check = value * itemsPerPage;
        window.scrollTo(0, 0);
        setItemOffset(newOffset);
    };
    return (
        <div className="Services">
            <div className="ServicesTitle">
                <h1>
                    Các gói khám sức khỏe tại <span>Medlatec</span>
                </h1>
            </div>
            <ServicesPaginationItems currentItems={CurrentItems} />
            <Paginated itemsPerPage={itemsPerPage} Data={ServicesData} handlePageClick={handlePageClick} />
        </div>
    );
}
