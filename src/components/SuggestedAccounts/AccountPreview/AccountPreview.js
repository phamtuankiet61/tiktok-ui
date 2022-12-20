import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import Button from '../../Button';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <div className={cx('header')}>
                <img  
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1671613200&x-signature=5M1I25owIx6ek3R6Km7cBgm9ths%3D"
                    alt="avatar"
                />
                <Button className={cx('following-btn')} primary>Following</Button>
            </div>
            <div className={cx('body')}>
                <h4 className={cx('nickName')}>Theanh28 Entertainment
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('name')}>theanh28entertainment</p>
                <div className={cx('followers')}>
                    <strong className={cx('user-card-followers-count')}>8.2M</strong>
                    <span className={cx('user-card-followers')}>Followers</span>
                    <strong className={cx('user-card-likes-count')}>61.8M</strong>
                    <span className={cx('user-card-likes')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;