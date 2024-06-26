import React, { useEffect, useState } from 'react';

import FacilitiesData from './FacilityData';
import FacilityPaginationItem from './FacilityPagination/FacilityPaginationItem';

import Paginated from '../Pagination/Paginated';
import styles from './FacilityPage.scss';

export default function FacilityPage({ itemsPerPage }) {
    console.log(FacilitiesData);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;

    const CurrentItems = FacilitiesData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(FacilitiesData.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event, value) => {
        // const newOffset = ((value - 1) * itemsPerPage) % ServicesData.length;
        const newOffset = (value - 1) * itemsPerPage;
        const Check = value * itemsPerPage;
        window.scrollTo(0, 0);
        setItemOffset(newOffset);
    };
    return (
        <div className="Facility">
            <div className="FacilityTitle">
                <h1>
                    Cơ sở vật chất tại <span>Medlatec</span>
                </h1>
                <div>
                    <h5>
                        Hệ thống Y tế MEDLATEC với các phòng khám luôn sẵn sàng phục vụ bệnh nhân và các bác sĩ, mỗi
                        ngày có thể đáp ứng hơn 100 lượt khám nhờ sở hữu cơ sở vật chất khang trang, trang thiết bị hiện
                        đại hàng đầu, đồng bộ hoàn toàn, đảm bảo kết quả chẩn đoán chính xác và điều trị bệnh hiệu quả.
                    </h5>
                </div>
            </div>
            <img
                style={{ height: '550px', width: '80%', marginBottom: '40px' }}
                src="https://medlatec.vn//ckfinder/userfiles/images/bn-cho-kham-trich-sai.jpg"
            />
            <div className='FacilityContent'>
                <h1>
                    Trang thiết bị hiện đại tại <span>Medlatec</span>
                </h1>
                <FacilityPaginationItem currentItems={CurrentItems} />
                <Paginated itemsPerPage={itemsPerPage} Data={FacilitiesData} handlePageClick={handlePageClick} />
            </div>
        </div>
    );
}
