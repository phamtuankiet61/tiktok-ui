import classNames from "classnames/bind";
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PropperWrapper } from "../Propper";
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPriview = attrs => (
        <div tabIndex="-1" {...attrs} >
            <PropperWrapper>
                <AccountPreview />
            </PropperWrapper>
        </div>
    )

    return (
        <div>
            <Tippy
                interactive
                placement="bottom-start"
                delay={[800, 0]}
                offset={[-8, 2]}
                render={renderPriview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')} 
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1671613200&x-signature=5M1I25owIx6ek3R6Km7cBgm9ths%3D'
                        alt='tiktok'
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('nickName')}>kietparis
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                        </h4>
                        <p className={cx('name')}>Pham Tuan Kiet</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {

// }

export default AccountItem;