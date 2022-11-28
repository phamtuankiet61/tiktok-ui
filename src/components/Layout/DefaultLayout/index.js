import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from "../components/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles)


function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;