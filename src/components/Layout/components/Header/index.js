import { useEffect, useState } from 'react';
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss'
import images from '../../../../assets/image';
import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem'

const cx = classNames.bind(styles)

function Header() {
    const [accounts, setAccounts] = useState([]);
    const [valueInput, setValueInput] = useState('');

    // useEffect(() => {
    //     setTimeout(() => {
    //         setAccounts([1, 2])
    //     }, 0)
    // }, [])

    const handleOninput = (value) => {
        setAccounts([1, 2])
        setValueInput(value)
    }
    const handleBlur = () => {
        setAccounts([])
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <Tippy
                    interactive
                    visible={accounts.length > 0}
                    render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                                <PropperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem
                                        name="phantuankiet.vn"
                                        userName="Phạm Tuấn Kiệt"  
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1670140800&x-signature=yT6ytu7d6batpmdR4hn%2BRwtczOk%3D"
                                    />
                                    <AccountItem
                                        name="funfact.66"
                                        userName="Fun fact 66"  
                                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b32c566cb8a23dd44c1572248a108bc7.jpeg?x-expires=1670140800&x-signature=Ff2gpHhG3COeq2q4ko2svbIK6%2BM%3D"
                                    />
                                    <AccountItem
                                        name="vienvibi_899"
                                        userName="Viên Vibi"  
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e6fbccfe920afeb2bdfabdfb472dda06~c5_100x100.jpeg?x-expires=1670140800&x-signature=5oZO55LBqt1M8fBG40Axb8pzu%2FY%3D"
                                    />
                                    <AccountItem
                                        name="theanh28entertainment"
                                        userName="Theanh28 Entertainment"  
                                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1670144400&x-signature=Dc4a5Qbn9eyxDOIuJVFUlfB9m6E%3D"
                                    />
                                </PropperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')} >
                        <input 
                            placeholder='Search accounts and videos'
                            spellCheck={false}
                            value={valueInput}
                            onInput={e => {
                                handleOninput(e.target.value)
                            }}
                            onBlur={handleBlur}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
