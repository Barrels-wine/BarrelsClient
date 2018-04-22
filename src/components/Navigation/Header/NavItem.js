// @flow
import * as React from 'react';

const NavItem = ({onClick, iconClass, className}) => (
    <li className="navbar-text">
        <button
            onClick={onClick}
            className={`btn-link ${className || ''}`}
        >
            <i className={iconClass} />
        </button>
    </li>
);

export default NavItem;
