import React from 'react';
import Intro from '~/components/Intro/Intro';
import HomeLayout from '~/layouts/HomeLayout';

function Home() {
    return (
        <>
            <HomeLayout>
                <Intro />
            </HomeLayout>
        </>
    );
}
export default Home;
