// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Badge, Collapse } from 'reactstrap';
import classNames from 'classnames';

const SidebarSubItem = ({ item, active, children, toggle, open }) => {
    const classes = classNames({
        active: active,
    });

    return (
        <li className={classes}>
            <div className="nav-item" onClick={toggle}>
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
            <Collapse isOpen={open}>
                <ul id={item.route} className="sidebar-nav sidebar-subnav">
                    { children }
                </ul>
            </Collapse>
        </li>
    );
};

export default SidebarSubItem;
