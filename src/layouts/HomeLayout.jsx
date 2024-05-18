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
            <Footer />
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
