import React from 'react';
import Doctors from '~/components/Doctors/Doctors';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';

function Home() {
    return (
        <>
            <HomeLayout>
                <Intro />
                <Doctors />
            </HomeLayout>
        </>
    );
}
export default Home;
