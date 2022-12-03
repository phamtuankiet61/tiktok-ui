import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, text, rounded, disable, small, large, leftIcon, rightIcon, children, onClick, ...passProps }) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps
    }

    // Remove event listener when btn is disable
    if (disable) {
        props = Object.keys(props).forEach(prop => {
            if (prop === prop.includes('on')) {
                delete props.prop;
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('btn')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;