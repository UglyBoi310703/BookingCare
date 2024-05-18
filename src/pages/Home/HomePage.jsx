import React from 'react';
import Doctors from '~/components/Doctors/Doctors';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MenuMedicalSpecialties from '~/components/MedicalSpecialties/MenuMedicalSpecialties';

function Home() {
    return (
        <>
            <HomeLayout>
                <Intro />
                <Doctors />
                <MenuMedicalSpecialties />
            </HomeLayout>
        </>
    );
}
export default Home;
