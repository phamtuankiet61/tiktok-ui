import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ title, onBack }) {

    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack} >
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Menu;