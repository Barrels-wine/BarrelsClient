// @flow
import * as React from 'react';
import { NavDropdown } from 'reactstrap';

import Title from './Title';
import Item from './Item';
import More from './More';

const Notifications  = () => (
    <NavDropdown
        noCaret
        eventKey={3}
        title={<Title/>}
        className="dropdown-list"
        id="basic-nav-dropdown"
    >
        <ul className="list-group">
            <Item
                icon="wine-glass"
                color="danger"
                title="notifications.tasting.title"
                subtitle="notifications.tasting.subtitle"
            />
            <More />
        </ul>
    </NavDropdown>
);

export default Notifications;
