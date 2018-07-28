// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const SidebarItemHeader = ({ item }) => (
    <li className="nav-heading">
        <FormattedMessage id={item.label} />
    </li>
);

export default SidebarItemHeader;
