import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import ServicesPage from '~/components/ServicesPage/ServicesPage';
import PaginatedItems from '~/components/ServicesPage/ServicesPagination/ServicesPaginatedItems';
import TestHeader from '~/components/Header/TestHeader';
import Doctors from '~/components/DoctorPage/Doctors';
function DoctorsPage() {
    return (
        <>
            <HomeLayout>
                <Doctors />
            </HomeLayout>
        </>
    );
}
export default DoctorsPage;
