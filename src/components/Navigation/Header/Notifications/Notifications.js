// @flow
import * as React from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ListGroup,
    Badge,
} from 'reactstrap';

import Item from './Item';
import More from './More';

const Notifications  = () => (
    <UncontrolledDropdown
        nav
        inNavbar
        className="dropdown-list"
    >
        <DropdownToggle nav className="dropdown-toggle-nocaret">
            <em className="icon-bell"></em>
            <Badge color="info">11</Badge>
        </DropdownToggle>

        <DropdownMenu right className="dropdown-menu-right animated flipInX">
            <DropdownItem>
                <ListGroup>
                    <Item
                        icon="envelope"
                        color="info"
                        title="notifications.tasting.title"
                        subtitle="notifications.tasting.subtitle"
                    />
                    <More />
                </ListGroup>
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default Notifications;
