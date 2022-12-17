import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "../../Button";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classNames = cx('menu-item', {
        spepare: data.spepare,
    })

    return (
        <Button className={classNames} leftIcon={data.icon} to={data.to} onClick={onClick} >{data.title}</Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;