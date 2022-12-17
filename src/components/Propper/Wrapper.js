import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Propper.module.scss';

const cx = classNames.bind(styles)

function Wrapper({ children }) {
    return <div className={cx('wrapper')}>
        {children}
    </div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper;