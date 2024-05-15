import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/components/Header';

function HomeLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HomeLayout;
