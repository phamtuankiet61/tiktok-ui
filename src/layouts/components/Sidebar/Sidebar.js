import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import Menu, { MenuItem } from './Menu';
import Config from '../../../Config';
import SuggestedAccounts from '../../../components/SuggestedAccounts';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '../../../components/Icons';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'For you'} to={Config.routesConfig.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title={'Following'} to={Config.routesConfig.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title={'LIVE'} to={Config.routesConfig.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label='Suggested Accounts' />
            <SuggestedAccounts label='Following Accounts' />

        </aside>
    );
}

export default Sidebar;