import React from 'react';
import Doctors from '~/components/HomePage/DoctorsHome/DoctorsHome';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';
import MenuMedicalSpecialties from '~/components/HomePage/MedicalSpecialties/MenuMedicalSpecialties';
import FacilityHome from '~/components/HomePage/FacilityHome/FacilityHome';
import ServicesHome from '~/components/HomePage/ServicesHome/ServicesHome';
import ServicesPage from '~/components/ServicesPage/ServicesPage';
import Header from '~/components/Header';
import ContactInformationList from '~/components/Header/ContactInfomation/ContactInformationList';
import ServicesHomeTest from '~/components/HomePage/ServicesHome/ServicesHomeTest';
import DoctorHome from '~/components/HomePage/DoctorsHome/DoctorsHome';
import FacilitiesHome from '~/components/HomePage/FacilityHome/FacilitiesHome';
function Home() {
    return (
        <>
            <HomeLayout>
                <Intro url={'https://www.youtube.com/watch?v=RmZPRz6iC6E'} />
                <DoctorHome />
                <ServicesHomeTest />
                <MenuMedicalSpecialties />
                <FacilitiesHome />
            </HomeLayout>
        </>
    );
}
export default Home;
