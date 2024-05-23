import PropTypes from 'prop-types';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header';
import React from 'react';

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
