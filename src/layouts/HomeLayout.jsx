import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './Home.module.scss';
import Footer from '~/components/Footer/Footer';

const cx = classNames.bind(styles);

function Home({ children }) {
    return (
        <>
            <Sidebar/>
            {children}
            <Footer/>
        </>
    );
}

Home.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Home;
