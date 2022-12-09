import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Images'

const cx = classNames.bind(styles)

function AccountItem({ src, name, userName }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={src} alt='avatar' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {name}
                    <FontAwesomeIcon className={cx('iconCheck')} icon={faCircleCheck} />
                </h4>
                <p className={cx('userName')}>{userName}</p>
            </div>
        </div>
    )
}

export default AccountItem;