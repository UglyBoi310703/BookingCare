import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import FacilityPage from '~/components/Facility/FacilityPage/FacilityPage';
function Facility() {
    return (
        <>
            <HomeLayout>
                <FacilityPage itemsPerPage={6} />
            </HomeLayout>
        </>
    );
}
export default Facility;
