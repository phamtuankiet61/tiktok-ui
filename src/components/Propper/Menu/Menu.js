import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import PropTypes from 'prop-types';

import { Wrapper as PropperWrapper } from '../index'
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ items, children, hideOnClick = false, onChange = defaultFn }) {
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

    const renderResult = attrs => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs} >
            <PropperWrapper>
                {history.length > 1 && <Header title={current.title} onBack={() => {
                    setHistory(prev => prev.slice(0, prev.length - 1))
                }}/>}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PropperWrapper>
        </div>
    )

    // Reset to first page
    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    };

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    children: PropTypes.node.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;