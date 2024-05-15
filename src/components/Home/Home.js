import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
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
