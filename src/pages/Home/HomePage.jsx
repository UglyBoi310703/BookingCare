import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MenuMedicalSpecialties from '~/components/MedicalSpecialties/MenuMedicalSpecialties';

function Home() {
    return (
        <>
            <HomeLayout>
                <Intro />
                <MenuMedicalSpecialties />
            </HomeLayout>
        </>
    );
}
export default Home;
