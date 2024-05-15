import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/components/Header';
import Doctors from '~/components/Doctors/Doctors';

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Doctors />
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
