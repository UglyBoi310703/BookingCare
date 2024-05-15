import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Intro from '~/components/Intro/Intro';
import Doctors from '~/pages/Doctors';

const cx = classNames.bind(styles);

function Home({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Intro />
            
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

Home.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Home;
