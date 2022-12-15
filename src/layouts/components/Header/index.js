import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '../../../assets/image';
import Button from '../../../components/Button';
import Menu from '../../../components/Propper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '../../../components/Icons';
import Image from '../../../components/Images';
import Search from '../Search';
import Config from '../../../Config';

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
                },
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
            
                <Link to={Config.routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt='tiktok' />
                </Link>
                
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} placement='bottom' content='Upload video'>
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudArrowUp} /> */}
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} placement='bottom' content='message'>
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} placement='bottom' content='Mail box'>
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage} /> */}
                                    <InboxIcon />
                                    <span className={cx('number-msg')}>24</span>
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
                            <Image 
                                className={cx('user-avatar')} 
                                src='https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s176-c-k-c0x00ffffff-no-rj' 
                                alt='Nguyen Van A'
                            />
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
