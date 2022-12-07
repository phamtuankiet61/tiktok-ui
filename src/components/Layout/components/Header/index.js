import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudArrowUp, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faPaperPlane, faRightFromBracket, faSpinner, faUser } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '../../../../assets/image';
import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Propper/Menu';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]

function Header() {
    const [accounts, setAccounts] = useState([]);

    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feedback'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/feedback',
            spepare: true
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setAccounts([])
        }, 0)
    }, [])

    // Handle logic
    const handleMenuChnage = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </div>
                <HeadlessTippy
                    interactive
                    visible={accounts.length > 0}
                    render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                                <PropperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem
                                        name="phantuankiet.vn"
                                        userName="Phạm Tuấn Kiệt"  
                                        // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fb0c68381e0d6024d85bc51b3ad56fb9~c5_100x100.jpeg?x-expires=1670310000&x-signature=IuJxXKkAFtHFraSffY66O4CMkaI%3D"
                                    />
                                    <AccountItem
                                        name="funfact.66"
                                        userName="Fun fact 66"  
                                        // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1670310000&x-signature=W9InTIpH5hz6o9Fau1d%2FCWZ2D9U%3D"
                                    />
                                    <AccountItem
                                        name="vienvibi_899"
                                        userName="Viên Vibi"  
                                        // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1670310000&x-signature=1PklSSECmVvQw0nHOsvhy9N5P3I%3D"
                                    />
                                    <AccountItem
                                        name="theanh28entertainment"
                                        userName="Theanh28 Entertainment"  
                                        // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1670310000&x-signature=un7seszFCObg9BRweCpBgVeO2UU%3D"
                                    />
                                </PropperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')} >
                        <input 
                            placeholder='Search accounts and videos'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} placement='bottom' content='Upload video'>
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} placement='bottom' content='message'>
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} placement='bottom' content='Mail box'>
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text >Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChnage}>
                        {currentUser ? (
                            <img className={cx('user-avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7174315148310478854~c5_720x720.jpeg?x-expires=1670572800&x-signature=Z4QDUuahaskPcLFORztqKXEGJoY%3D' alt='Nguyen Van A' />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;
