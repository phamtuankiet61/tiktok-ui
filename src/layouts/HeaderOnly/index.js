import PropTypes from 'prop-types';
import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = { 
    children: PropTypes.node.isRequired
}

export default HeaderOnly;