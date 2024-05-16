import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Sidebar from '~/components/NavBar';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header';
import Doctors from '~/components/Doctors/Doctors';

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            {children}
<<<<<<< HEAD
            <Doctors />
=======
            <Footer />
>>>>>>> 3905ede64c66edecf47880c51e20e4e6dda16a80
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
