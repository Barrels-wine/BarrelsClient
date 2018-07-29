// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import SidebarBadge from './SidebarBadge';

const SidebarItem = ({ item, active }) => {
    const classes = classNames({
        active: active,
    });

    return (
        <li className={classes}>
            <Link to={item.route}>
                {item.badge && <SidebarBadge
                    {...item.badge}
                />}
                {item.icon && <em className={item.icon}></em>}
                <FormattedMessage id={item.label} />
            </Link>
        </li>
    );
};

export default SidebarItem;
