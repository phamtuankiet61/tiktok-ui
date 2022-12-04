import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PropperWrapper } from '../index'
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ items, children }) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item}></MenuItem>
        ))
    }

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PropperWrapper>
                        {renderItems()}
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;