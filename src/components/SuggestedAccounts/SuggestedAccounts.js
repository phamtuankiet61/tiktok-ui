import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <span className={cx('more-btn')}>See all</span>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;