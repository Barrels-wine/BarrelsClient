// @flow
import * as React from 'react';
import classNames from 'classnames';

const NavItem = ({onClick, iconClass, className}) => {
    const classes = classNames(className, {
        'nav-link': true,
    });

    return (
        <li className="nav-item">
            <a
                onClick={onClick}
                className={classes}
            >
                <em className={iconClass} />
            </a>
        </li>
    );
};

export default NavItem;
