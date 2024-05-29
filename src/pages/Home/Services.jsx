import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import ServicesPage from '~/components/ServicesPage/ServicesPage';
function Services() {
    return (
        <>
            <HomeLayout>
            <Intro url={"https://www.youtube.com/watch?v=Krqs03DVRCo"}/>
                <ServicesPage itemsPerPage={6} />
            </HomeLayout>
        </>
    );
}
export default Services;
