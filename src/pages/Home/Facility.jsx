import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import FacilityPage from '~/components/FacilityPage/FacilityPage';
function Facility() {
    return (
        <>
            <HomeLayout>
            <Intro url={"https://www.youtube.com/watch?v=D0wcBgoDgq0"}/>
                <FacilityPage itemsPerPage={6} />
            </HomeLayout>
        </>
    );
}
export default Facility;
