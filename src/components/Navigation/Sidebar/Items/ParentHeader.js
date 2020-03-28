// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const ParentHeader = ({ item }) => (
    <li className="sidebar-subnav-header">
        <FormattedMessage id={item.label} />
    </li>
);

export default ParentHeader;
