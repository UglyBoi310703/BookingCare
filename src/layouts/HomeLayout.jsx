import PropTypes from 'prop-types';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header';
import React from 'react';
import NavbarTest from '~/components/NavBar/Navbar';
import HeaderDefault from '~/components/Header/HeaderDefault';
import { useAuth } from '~/components/NavBar/AuthContext';
import { LoginSharp } from '@mui/icons-material';


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

export default React.memo(HomeLayout);
