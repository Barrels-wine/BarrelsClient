// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Badge } from 'reactstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item, active }) => {
    const classes = classNames({
        active: active,
    });

    return (
        <li className={classes}>
            <Link to={item.route}>
                {item.badge && <Badge
                    tag="div"
                    className="pull-right"
                    color={item.badge.color}
                >
                    {item.badge.value}
                </Badge>}
                {item.icon && <em className={item.icon}></em>}
                <FormattedMessage id={item.label} />
            </Link>
        </li>
    );
};

export default SidebarItem;
