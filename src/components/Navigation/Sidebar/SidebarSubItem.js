// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Badge } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SidebarSubItem = ({ item, active, children }) => {
    const classes = classNames({
        active: active,
    });

    return (
        <li className={classes}>
            <div className="nav-item">
                {item.badge && <Badge
                    tag="div"
                    className="pull-right"
                    color={item.badge.color}
                >
                    {item.badge.value}
                </Badge>}
                {item.icon && <em className={item.icon}></em>}
                <FormattedMessage id={item.label} />
            </div>
            <ul id={item.route} className="sidebar-nav sidebar-subnav">
                { children }
            </ul>
        </li>
    );
};

export default SidebarSubItem;
