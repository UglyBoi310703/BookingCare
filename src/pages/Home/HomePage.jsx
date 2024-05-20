import React from 'react';
import Doctors from '~/components/Doctors/Doctors';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MenuMedicalSpecialties from '~/components/MedicalSpecialties/MenuMedicalSpecialties';
import FacilityHome from '~/components/Facility/FacilityHome';

function Home() {
    return (
        <>
            <HomeLayout>
                <Intro />
                <Doctors />
                <FacilityHome />
                <MenuMedicalSpecialties />
            </HomeLayout>
        </>
    );
}
export default Home;
