import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MedicalSpecialtiesPage from '~/components/SpecialtiesPage/MedicalSpecialtiesPage';
function MedicalSpecial() {
    return (
        <>
            <HomeLayout>
           
                <MedicalSpecialtiesPage itemsPerPage={6} />
            </HomeLayout>
        </>
    );
}
export default MedicalSpecial;
