import React from 'react';
import Doctors from '~/components/Doctors/Doctors';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MenuMedicalSpecialties from '~/components/MedicalSpecialties/MenuMedicalSpecialties';
import FacilityHome from '~/components/Facility/FacilityHome/FacilityHome';
import ServicesHome from '~/components/Services/ServicesHome/ServicesHome';
import ServicesPage from '~/components/Services/ServicesPage/ServicesPage';
import Header from '~/components/Header';
import ContactInformationList from '~/components/Header/ContactInfomation/ContactInformationList';
function Home() {
    return (
        <>
            <HomeLayout>
                <FacilityHome />
                <ServicesHome />
                <MenuMedicalSpecialties />
            </HomeLayout>
        </>
    );
}
export default Home;
