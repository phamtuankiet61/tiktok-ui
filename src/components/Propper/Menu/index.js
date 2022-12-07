import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import { Wrapper as PropperWrapper } from '../index'
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ items, children, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const parent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (parent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }

            }}></MenuItem>
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            offset={[12, 8]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
                    <PropperWrapper>
                        {history.length > 1 && <Header title="Languages" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}/>}
                        {renderItems()}
                    </PropperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory(prev => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;